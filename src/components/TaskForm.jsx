import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("TODO");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title, description, status);

    setTitle("");
    setDescription("");
    setStatus("TODO");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Yeni Görev Ekle
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Görev başlığı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black"
        />

        <input
          type="text"
          placeholder="Açıklama"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-xl border border-gray-300 p-3 outline-none transition focus:border-black"
        >
          <option value="TODO">TODO</option>
          <option value="IN PROGRESS">IN PROGRESS</option>
          <option value="DONE">DONE</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 rounded-xl bg-black px-4 py-2 text-white transition hover:opacity-90"
      >
        Görev Ekle
      </button>
    </form>
  );
}

export default TaskForm;