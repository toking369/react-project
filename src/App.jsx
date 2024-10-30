import { useState } from "react";
import "./App.css";

function App() {
  // 使用useState钩子创建一个状态变量taskList，用于存储任务列表
  const [taskList, setTaskList] = useState([]);
  // 使用useState钩子创建一个状态变量taskName，用于存储任务名称
  const [taskName, setTaskName] = useState("");

  // 添加任务列表的方法
  const addTaskList = () => {
    // 如果任务名称不为空
    if (taskName) {
      // 将任务名称添加到任务列表中
      setTaskList([...taskList, { id: Date.now(), name: taskName }]);
      // 清空任务名称
      setTaskName("");
    } else {
      // 如果任务名称为空，弹出提示框
      alert("请输入任务名称");
    }
  };
  // 删除任务的方法
  const deleteTask = (item) => {
    // 过滤掉要删除的任务
    let list = taskList.filter((i) => i.id !== item.id);
    // 更新任务列表
    setTaskList([...list]);
  };
  return (
    <>
      {/* 输入任务名称的输入框 */}
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      {/* 添加任务的按钮 */}
      <input type="button" value="添加任务" onClick={() => addTaskList()} />
      {/* 任务列表 */}
      <ul>
        {taskList.map((i) => {
          return (
            <li key={i.id}>
              {i.name}
              {/* 删除任务的按钮 */}
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
