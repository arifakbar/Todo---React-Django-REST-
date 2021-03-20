import React from "react";
import ViewTaskList from './ViewTaskList';

function CompletedTasks({tasks}) {
  const renderedTasks = tasks.map((task)=>{
    if(task.completed){
      return (
        <ViewTaskList key={task.id} task={task} btn="Incomplete"/>
      );
    }
  });
  return (
    <div style={{paddingTop:"10px"}}>
      <h1 className="header" style={{textAlign:"center",textDecoration:"underline"}}>Completed Tasks</h1>
      <div className="ui celled list">
      {renderedTasks}
      </div>
    </div>
  );
}

export default CompletedTasks;
