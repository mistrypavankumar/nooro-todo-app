"use client";

import TaskForm from "@/components/TaskForm";
import { TaskProps } from "@/lib/constants";
import { showErrorMessage } from "@/lib/utils";
import { getTaskById } from "@/services/taskServices";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditTask = () => {
  const params = useParams();
  const taskId = params.taskId;

  const [task, setTask] = useState<TaskProps>();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await getTaskById(taskId as string);
        setTask(response);
      } catch (error) {
        showErrorMessage(error as Error);
      }
    };

    fetchTask();
  }, [taskId]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return <TaskForm type="edit" initialData={task} />;
};

export default EditTask;
