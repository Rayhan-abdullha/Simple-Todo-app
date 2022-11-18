import React from "react";
import { useState } from "react";
import CreateTodo from "../components/CreateTodo";
import Item from "../components/Item";
import shortid from "shortid";

export default function Task() {
  const [taskData, setTaskData] = useState([]);
  const [visiblity, setVisiblity] = useState("all");

  const getTask = (task) => {
    const taksObj = {
      id: shortid.generate(),
      text: task,
      createAt: new Date(),
      visible: false,
    };
    setTaskData([taksObj, ...taskData]);
  };

  const handleDelete = (id) => {
    const filter = taskData.filter((task) => task.id !== id);
    setTaskData(filter);
  };
  const handleEdit = (id) => {
    const edit = taskData.find((item) => item.id === id);
    let data = prompt("Upade Task!!")
    if (data){
      edit.text = data
      setTaskData([edit]);
    } else {
      setTaskData(taskData)
    }
  };

  const displayVisible = (text) => {
    setVisiblity(text)
  };

  const completeTask = (id) => {
    const filter = taskData.map(item => {
      if (item.id === id){
        item.visible = !item.visible
      }
      return item
    })
    setTaskData(filter)
  }

  const filterTask = () => {
    if (visiblity === 'complete'){
      return taskData.filter(item => item.visible)
    }else if (visiblity === 'incomplete'){
      return taskData.filter(item => !item.visible)
    } else {
      return taskData
    }
    
  }
  return (
    <div className="container task">
      <h1 className="logo text-light">TO DO</h1>
      <CreateTodo getTask={getTask} />
      <Item
        items={filterTask()}
        editItem={handleEdit}
        deleteItem={handleDelete}
        displayVisible={displayVisible}
        handleComplete={completeTask}
      />
    </div>
  );
}
