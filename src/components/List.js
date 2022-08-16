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
        <button onClick={edit}>Edit</button>
        {!toggle&&<><textarea value={item} onChange={(e)=>{setItem(e.target.value)}}></textarea><button onClick={save}>save</button></>}
    </div>
   
  )
}
