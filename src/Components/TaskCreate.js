import React from "react";
import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // butona tıkladığında sayfayı yenilemesini önler.
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="w-80 h-auto bg-red-500 p-8 rounded-lg">
          <h3 className="font-bold text-black">Lütfen Task Düzenleyiniz!</h3>
          <form className="flex flex-col">
            <label className="my-3">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="border border-black p-2 rounded-md"
            />
            <label className="my-3">Taskı Düzenleyiniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="border border-black p-2 rounded-md"
              rows={5}
            />
            <button
              className="border mt-2 p-2 bg-indigo-700 text-white rounded-lg font-medium"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="w-96 bg-yellow-300 p-5 rounded-lg">
          <h3 className="font-bold text-black">Lütfen Task Ekleyiniz!</h3>
          <form className="flex flex-col">
            <label className="my-3">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="border border-black p-2 rounded-md"
            />
            <label className="my-3">Task Giriniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="border border-black p-2 rounded-md"
              rows={5}
            />
            <button
              className="border mt-2 p-2 bg-blue-500 text-white rounded-lg font-medium"
              onClick={handleSubmit}
            >
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
