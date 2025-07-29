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

export const getTaskById = async (taskId: string) => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/tasks/${taskId}`);

    if (!response.data) {
      throw new Error("Failed to fetch task");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (
  taskId: string,
  taskData: {
    title?: string;
    color?: string;
    completed?: boolean;
  }
) => {
  try {
    const response = await axios.put(
      `${process.env.BASE_URL}/tasks/${taskId}`,
      taskData
    );

    if (!response.data) {
      throw new Error("Failed to update task");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    const response = await axios.delete(
      `${process.env.BASE_URL}/tasks/${taskId}`
    );

    if (response.status !== 204) {
      throw new Error("Failed to delete task");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
