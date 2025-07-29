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
            <div className="bg-primary p-4 rounded-md w-[min(90%,500px)] border border-light-gray/70">
              <h2 className="text-xl font-semibold text-white/70">
                Delete Task
              </h2>
              <p className="text-white/50 mt-5">
                This task will be permanently deleted and cannot be recovered.
                Please confirm to proceed.
              </p>
              <p className="text-red-400 bg-red-900/50 p-2 rounded-md mt-7">
                Warning: This action is not reversible. Please be certain.
              </p>
              <div className="flex flex-col justify-end mt-6">
                <label htmlFor="delete-confirmation" className="text-white/70">
                  To verify, type '<span className="font-semibold">DELETE</span>
                  ' below:
                </label>
                <input
                  type="text"
                  value={deleteConfirmation}
                  onChange={(e) => setDeleteConfirmation(e.target.value)}
                  className="border border-light-gray/30 bg-light-gray/20 p-2 mt-3 rounded-md text-white/50 outline-none focus:border-light-gray"
                />
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-light-gray/20 border border-light-gray/30 hover:bg-light-gray/50 transition-colors duration-300 text-white/50 px-4 py-2 rounded-md ml-2 cursor-pointer"
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
