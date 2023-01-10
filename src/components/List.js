import React, { useState } from 'react'

export const List = (props) => {
    const [toggle,setToggle]=useState(true);
    const [item,setItem]=useState(props.item)
    function edit(){
        setToggle(false);
    }
    function save(){
        setToggle(true);
    }
    let i;
	function deletelist(i){
		i=i;
		setTask(task.filter((item)=>{return item!==task[i]}));
	}
    
  return (
    <div>
        <li className='list'>{item}</li>
       {toggle &&<><button className='edit' onClick={edit}>Edit</button>
       <button className="delete" onClick={(item,i)=>{
        setTask(task.filter((item,i)=>{return task[i]!==item}))}}>Delete</button></>}
        {!toggle&&<><textarea className='edittask' value={item} onChange={(e)=>{if(
          e.target.value!==''){
          setItem(e.target.value)}}}></textarea>
          <button className='saveTask' onClick={save}>save</button></>}
    </div>
   
  )
}
