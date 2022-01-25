import axios from "axios";
import { useEffect, useState } from "react";
import CustomizedTable from "./Table";

const TableTask = () => {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);
  useEffect(() => {
    axios.get("http://localhost:3333/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <>

      <div>
        <CustomizedTable data = {tasks}/>
      </div>
    </>
  );
};

export default TableTask;
