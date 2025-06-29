import Link from "next/link";
import { IoTrashOutline, IoPencil } from "react-icons/io5";

import { DeleteRoom } from "@/lib/actions";

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/admin/room/edit/${id}`}
      className="rounded-sm p-1 hover:bg-gray-200"
    >
      <IoPencil className="size-5" />
    </Link>
  );
};

export const DeleteButton = ({ id, image }: { id: string; image: string }) => {
  const DeleteRoomWithId = DeleteRoom.bind(null, id, image);

  return (
    <form action={DeleteRoomWithId}>
      <button type="submit" className="rounded-sm p-1 hover:bg-gray-200">
        <IoTrashOutline className="size-5" />
      </button>
    </form>
  );
};
