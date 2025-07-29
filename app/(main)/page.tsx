import { LuNotepadText } from "react-icons/lu";

export default function Home() {
  return (
    <div className="w-[min(90%,736px)] mx-auto mt-4 flex flex-col gap-5">
      <div className="flex items-center justify-between border-b border-light-gray pb-6">
        <TaskStatus title="Tasks" count={0} />
        <TaskStatus title="Completed" count={0} />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 h-[300px]">
        <LuNotepadText className="text-6xl text-light-gray" />
        <div>
          <p className="text-foreground/50 text-center font-semibold">
            You don't have any tasks registered yet.
          </p>
          <p className="text-foreground/50 text-center mt-2">
            Create tasks and organize your to-do items.
          </p>
        </div>
      </div>
    </div>
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
