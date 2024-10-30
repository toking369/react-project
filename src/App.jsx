import { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addTaskList = () => {
    if (taskName) {
      setTaskList([...taskList, { id: Date.now(), name: taskName }]);
      setTaskName("");
    } else {
      alert("请输入任务名称");
    }
  };
  const deleteTask = (item) => {
    let list = taskList.filter((i) => i.id !== item.id);
    setTaskList([...list]);
  };
  return (
    <>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input type="button" value="添加任务" onClick={() => addTaskList()} />
      <ul>
        {taskList.map((i) => {
          return (
            <li key={i.id}>
              {i.name}
              <input
                type="button"
                value="删除任务"
                onClick={() => deleteTask(i)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
