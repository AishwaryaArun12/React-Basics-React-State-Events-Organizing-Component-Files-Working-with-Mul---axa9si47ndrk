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
    
    
  return (
    <div>
        <li className='list'>{item}</li>
        <button className='edit' onClick={edit}>Edit</button>
        {!toggle&&<><textarea className='edittask' value={item} onChange={(e)=>{if(
          e.target.value!==''){
          setItem(e.target.value)}}}></textarea>
          <button className='saveTask' onClick={save}>save</button></>}
    </div>
   
  )
}
