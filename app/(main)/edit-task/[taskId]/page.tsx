"use client";

import Loader from "@/components/Loader/Loader";
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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const fetchTask = async () => {
      try {
        const response = await getTaskById(taskId as string);
        setTask(response);
      } catch (error) {
        showErrorMessage(error as Error);
      } finally {
        timeout = setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchTask();
  }, [taskId]);

  if (loading) {
    return <Loader />;
  }

  return <TaskForm type="edit" initialData={task} />;
};

export default EditTask;
