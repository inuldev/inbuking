"use server";

import { del } from "@vercel/blob";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { prisma } from "./prisma";
import { ContactSchema, RoomSchema } from "./zod";

export const SaveRoom = async (
  image: string,
  _prevState: unknown,
  formData: FormData
) => {
  if (!image) return { message: "Image is required" };

  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const validatedFields = RoomSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, description, price, capacity, amenities } =
    validatedFields.data;

  try {
    await prisma.room.create({
      data: {
        name,
        description,
        price,
        capacity,
        image,
        roomAmenities: {
          createMany: {
            data: amenities.map((item) => ({
              amenitiesId: item,
            })),
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/admin/room");
};

export const ContactMessage = async (
  _prevState: unknown,
  formData: FormData
) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return { message: "Thanks for contact us." };
  } catch (error) {
    console.log(error);
  }
};

// Delete Room
export const DeleteRoom = async (id: string, image: string) => {
  try {
    await del(image);
    await prisma.room.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/admin/room");
};

// Update Room
export const UpdateRoom = async (
  image: string,
  roomId: string,
  _prevState: unknown,
  formData: FormData
) => {
  if (!image) return { message: "Image is required" };

  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const validatedFields = RoomSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, description, price, capacity, amenities } =
    validatedFields.data;

  try {
    await prisma.$transaction([
      prisma.room.update({
        where: { id: roomId },
        data: {
          name,
          description,
          image,
          price,
          capacity,
          roomAmenities: {
            deleteMany: {},
          },
        },
      }),
      prisma.roomAmenities.createMany({
        data: amenities.map((item) => ({
          roomId,
          amenitiesId: item,
        })),
      }),
    ]);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/admin/room");
  redirect("/admin/room");
};
