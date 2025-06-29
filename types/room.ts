import { Prisma } from "@/app/generated/prisma";

export type RoomProps = Prisma.RoomGetPayload<{
  include: { roomAmenities: { select: { amenitiesId: true } } };
}>;
