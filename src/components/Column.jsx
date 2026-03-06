import TaskCard from "./TaskCard";

function Column({ title, tasks, deleteTask, changeStatus, editTask }) {
  return (
    <div className="rounded-2xl bg-gray-100 p-4 min-h-[300px]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold text-gray-800">{title}</h2>
        <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
          {tasks.length}
        </span>
      </div>

      <div className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              changeStatus={changeStatus}
              editTask={editTask}
            />
          ))
        ) : (
          <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white/60 p-6 text-center text-sm text-gray-500">
            Bu sütunda henüz görev yok.
          </div>
        )}
      </div>
    </div>
  );
}

export default Column;