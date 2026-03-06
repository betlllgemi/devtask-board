function TaskCard({ task, deleteTask, changeStatus, editTask }) {
  const getNextStatus = () => {
    if (task.status === "TODO") return "IN PROGRESS";
    if (task.status === "IN PROGRESS") return "DONE";
    return "TODO";
  };

  const getButtonText = () => {
    if (task.status === "TODO") return "İlerlemeye Al";
    if (task.status === "IN PROGRESS") return "Tamamlandı";
    return "Başa Al";
  };

  const getStatusBadge = () => {
    if (task.status === "TODO") {
      return "bg-slate-200 text-slate-700";
    }
    if (task.status === "IN PROGRESS") {
      return "bg-amber-100 text-amber-700";
    }
    return "bg-emerald-100 text-emerald-700";
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-gray-900">{task.title}</h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadge()}`}
        >
          {task.status}
        </span>
      </div>

      <p className="mt-1 text-sm leading-6 text-gray-600">{task.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => editTask(task.id)}
          className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition hover:opacity-90"
        >
          Düzenle
        </button>

        <button
          onClick={() => changeStatus(task.id, getNextStatus())}
          className="rounded-lg bg-green-600 px-3 py-2 text-sm text-white transition hover:opacity-90"
        >
          {getButtonText()}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white transition hover:opacity-90"
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default TaskCard;