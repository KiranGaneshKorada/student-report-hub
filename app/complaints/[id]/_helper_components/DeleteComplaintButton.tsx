"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

interface DeleteComplaintButtonProps {
  id: string;
}

const DeleteComplaintButton = ({ id }: DeleteComplaintButtonProps) => {
  const router = useRouter();
  return (
    <button
      className="m-3 p-3 bg-blue-500 text-white"
      onClick={async () => {
        try {
            await axios.delete("/api/complaints/" + id);
            router.push("/complaints");
            router.refresh()
        } catch (error) {
            // tofo: catch error and show an alert thing
            console.log(error);
        }
      }}
    >
      Delete
    </button>
  );
};

export default DeleteComplaintButton;
