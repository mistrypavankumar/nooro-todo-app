"use client";

import TaskCard from "@/components/TaskCard";
import { TaskProps } from "@/lib/constants";
import { showErrorMessage } from "@/lib/utils";
import { getAllTasks } from "@/services/taskServices";
import { useEffect, useState } from "react";
import { LuNotepadText } from "react-icons/lu";

export default function Home() {
  const [allTasks, setAllTasks] = useState<TaskProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshTasks, setRefreshTasks] = useState<number>(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getAllTasks();
        setAllTasks(tasks);
      } catch (err) {
        showErrorMessage(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [loading || refreshTasks]);

  return (
    <>
      <div className="w-[min(90%,736px)] mx-auto mt-4 flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-light-gray pb-6">
          <TaskStatus title="Tasks" count={allTasks.length} />
          <TaskStatus
            title="Completed"
            count={allTasks.filter((task) => task.completed).length}
          />
        </div>
        {allTasks.length > 0 ? (
          <>
            {allTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                setRefreshTasks={setRefreshTasks}
              />
            ))}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 h-[300px]">
            <LuNotepadText className="text-6xl text-light-gray" />
            <div></div>
            <p className="text-foreground/50 text-center font-semibold">
              You don't have any tasks registered yet.
            </p>
            <p className="text-foreground/50 text-center mt-2">
              Create tasks and organize your to-do items.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

const TaskStatus = ({ title, count }: { title: string; count: number }) => {
  const titleColor = title === "Tasks" ? "text-secondary" : "text-purple";

  return (
    <div className="flex items-center gap-3">
      <h2 className={titleColor}>{title}</h2>
      <p className="w-7 h-5 bg-light-gray flex items-center justify-center rounded-full">
        {count}
      </p>
    </div>
  );
};
