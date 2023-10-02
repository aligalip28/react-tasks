import React from "react";
import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showedit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showedit);
  };
  const handleSubmit = (id, updatedTitle, updatedtaskDesc) => {
    onUpdate(id, updatedTitle, updatedtaskDesc);
    setShowEdit(false);
  };

  console.log(task);
  return (
    <div className="shadow-lg rounded-lg mx-8 p-4">
      {showedit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div className="px-24">
          <div className="text-center">
            <h3 className="font-bold mb-3">Göreviniz</h3>
            <p>{task.title}</p>
            <h3 className="font-bold my-2">Yapılacaklar</h3>
            <p>{task.taskDesc}</p>
          </div>
          <div className="my-2">
            <button
              className="border rounded-2xl p-2 mx-1 bg-red-500 text-white w-16"
              onClick={handleDeleteClick}
            >
              Sil
            </button>
            <button
              className="border rounded-2xl p-2 bg-blue-500 text-white"
              onClick={handleEditClick}
            >
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
