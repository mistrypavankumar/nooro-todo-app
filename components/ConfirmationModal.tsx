"use client";

import { showErrorMessage } from "@/lib/utils";
import { deleteTask } from "@/services/taskServices";
import React from "react";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";

const ConfirmationModal = ({
  taskId,
  setRefreshTasks,
}: {
  taskId: string;
  setRefreshTasks: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = React.useState("");

  const handleDelete = async () => {
    if (deleteConfirmation !== "DELETE") {
      toast.error("Please type 'DELETE' to confirm");
      return;
    }

    try {
      await deleteTask(taskId);
      toast.success(`Task deleted successfully`);
      setRefreshTasks((prev) => prev + 1);
      setIsOpen(false);
    } catch (error) {
      showErrorMessage(error as Error);
    }
  };

  return (
    <div>
      <RiDeleteBin6Line
        onClick={() => setIsOpen(true)}
        className="text-xl cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300"
      />

      {isOpen && (
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] z-50">
          <div className="flex items-center justify-center h-full">
            <div className="bg-white p-4 rounded-md w-[min(90%,500px)]">
              <h2 className="text-xl font-semibold text-primary">
                Delete Task
              </h2>
              <p className="text-primary/70">
                Are you sure you want to delete this task?
              </p>
              <div className="flex flex-col justify-end mt-4">
                <input
                  type="text"
                  placeholder="Type 'DELETE' to confirm"
                  value={deleteConfirmation}
                  onChange={(e) => setDeleteConfirmation(e.target.value)}
                  className="border-2 border-gray-300 p-2 rounded-md text-black outline-none focus:border-red-500"
                />
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-300 text-black px-4 py-2 rounded-md ml-2 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded-md ml-2 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationModal;
