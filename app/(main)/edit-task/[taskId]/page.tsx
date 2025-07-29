import TaskForm from "@/components/TaskForm";
import React from "react";

const EditTask = () => {
  return (
    <TaskForm
      type="edit"
      initialData={{ title: "Sample Task", color: "blue" }}
    />
  );
};

export default EditTask;
