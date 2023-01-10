import React,{useState} from "react";
import "./../styles/App.css";
import { List } from "./List";

function App() 
{
	const [task,setTask]=useState([]);
	const [list,setLIst]=useState('');
	const [toggle,setToggle]=useState(false);
	
	function handleClick(){
		if(list!=""){
		setTask([...task, list])
		}
		setLIst('');
	}
	
	
	return (
	<div id="main">
	<textarea id="task" onChange={e=>{if(e.target.value!==''){
		setLIst(e.target.value)}}} value={list}/>
	<button id="btn" onClick={handleClick}>Add</button>
	<div>
		{task.map((item,i)=>{return (<>
		<List key={i}  id={i} item={item} classname="list"/>
		
		</>)
		})}

	</div>
	</div>
	);
}


export default App;
