"use server";

import axios from "axios";

export const createTask = async (taskData: {
  title: string;
  color: string;
}) => {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/tasks`,
      taskData
    );

    if (!response.data) {
      throw new Error("Failed to create task");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/tasks`);

    if (!response.data) {
      throw new Error("Failed to fetch tasks");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
