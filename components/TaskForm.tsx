"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import InputField from "./InputField";
import ColorSection from "./ColorSection";
import CustomButton from "./CustomButton";
import { IoAddCircleOutline } from "react-icons/io5";
import { TaskProps } from "@/lib/constants";
import { createTask } from "@/services/taskServices";
import { showErrorMessage } from "@/lib/utils";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const TaskForm = ({
  type,
  initialData,
}: {
  type: "create" | "edit";
  initialData?: TaskProps;
}) => {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title || "");
  const [selectedColor, setSelectedColor] = useState(initialData?.color || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      toast.error("Title is required");
      return;
    }

    if (type === "create") {
      try {
        const newTask = await createTask({ title, color: selectedColor });

        if (newTask) {
          toast.success("Task created successfully!");
          router.replace("/");
          setTitle("");
          setSelectedColor("");
        }
      } catch (error) {
        showErrorMessage(error as Error);
      }
    } else if (type === "edit" && initialData) {
      try {
        console.log("Task Updated:", { title, color: selectedColor });
        toast.success("Task updated successfully!");
      } catch (error) {
        showErrorMessage(error as Error);
      }
    }
  };

  return (
    <div className="w-[min(90%,736px)] mx-auto flex flex-col gap-5 -mt-7 md:mt-0">
      <Link href={"/"} className="w-fit cursor-pointer group mb-7">
        <RiArrowLeftLine className="text-2xl group-hover:text-secondary transition-colors duration-200" />
      </Link>
      <div>
        <form onSubmit={handleSubmit}>
          <InputField
            title="Title"
            placeholder="Ex. Brush your teeth"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ColorSection
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />

          <div className="mt-7">
            <CustomButton
              label="Add Task"
              Icon={IoAddCircleOutline}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
