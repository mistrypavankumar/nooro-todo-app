"use server";

import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createTask = async (taskData: {
  title: string;
  color: string;
}) => {
  try {
    const response = await axios.post(`${BASE_URL}/tasks`, taskData);

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
    const response = await axios.get(`${BASE_URL}/tasks`);

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
    const response = await axios.get(`${BASE_URL}/tasks/${taskId}`);

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
    const response = await axios.put(`${BASE_URL}/tasks/${taskId}`, taskData);

    if (!response.data) {
      throw new Error("Failed to update task");
    }

    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/tasks/${taskId}`);

    if (response.status !== 204) {
      throw new Error("Failed to delete task");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
