import React, { useState } from 'react'
import "./../styles/App.css";

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
    <>
    <div className='div'>
    {toggle && <><li key={props.id} className='list'>{item}</li>
    <div><button className='edit' onClick={edit}>Edit</button></div></>}
       </div>
       <div>
        {!toggle&&<><textarea className='edittask' value={item} onChange={(e)=>{
          setItem(e.target.value)}}/><br/>
        <button className='saveTask' disabled={item==''} onClick={save}>save</button></>}
        </div>
    </>
  )
}
