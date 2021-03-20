import React from "react";
import ViewTaskList from './ViewTaskList';
import {Link} from 'react-router-dom';

function IncompletedTasks({tasks}) {
  const renderedTasks = tasks.map((task)=>{
    if(!task.completed){
      return (
        <ViewTaskList key={task.id} task={task} btn="Completed"/>
      );
    }
  });
  return (
    <div style={{paddingTop:"10px"}}>
      <h1 className="header" style={{textAlign:"center",textDecoration:"underline"}}>Incompleted Tasks</h1>
      <div className="ui celled list">
      {renderedTasks}
      </div>
      <Link to="/new-task" className="ui right floated button blue">Add New Task</Link>
    </div>
  );
}

export default IncompletedTasks;
