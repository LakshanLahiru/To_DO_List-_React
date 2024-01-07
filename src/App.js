import logo from './logo.svg';
import { RiDeleteBin6Line } from "react-icons/ri";
import './App.css';
import Button from 'react-bootstrap/Button';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
import { FaEdit } from "react-icons/fa";
import React, {useState, useEffect} from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Form from 'react-bootstrap/Form';

function App() {
  const [allTodos, setAllTodos] = useState ([]);
  const [newTodoTitle, setNewTodoTitle] = useState ('');
  const [newDescription, setNewDescription] = useState ('');
  const [show,setShow] =useState(false);
  const [editIndex,setEditIndex] = useState();

  const handleAddNewToDo = () => {
    let newToDoObj = {
      title: newTodoTitle,
      description: newDescription,
    };
    
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push (newToDoObj);
    
    setAllTodos (updatedTodoArr);
    setNewTodoTitle('');
    setNewDescription('');
    setEditIndex(null);
  };
  const handlComplete = (id) => {
    let updatedTodos = allTodos.map(todo => {
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
        }
        console.log(todo)
        return todo;
    });

    setAllTodos(updatedTodos);
};

  
  const handleDelete=(index)=>{
    console.log(allTodos[index].title);
    
    allTodos.splice(index,1);
    setAllTodos([...allTodos]);

    setNewTodoTitle('');
    setNewDescription('');
    setEditIndex(null); 
    setShow(false); 
    
  }

  const handlEdit = (index) => {
    const todoToUpdate = allTodos[index];
    setNewTodoTitle(todoToUpdate.title);
    setNewDescription(todoToUpdate.description);
    setShow(true);
    setEditIndex(index);
   
    
  };

  const handleUpdate = () => {
    
    console.log('editIndex:', editIndex);
    console.log('newTodoTitle:', newTodoTitle);
    console.log('newDescription:', newDescription);

    
    const updatedTodos = [...allTodos];

    
    updatedTodos[editIndex] = {
        title: newTodoTitle,
        description: newDescription,
    };

    
    console.log('updatedTodos:', updatedTodos);

    
    setAllTodos(updatedTodos);
    setShow(false);

    
    setNewTodoTitle('');
    setNewDescription('');
    setEditIndex(null); 
};


  return (
    <div >
      <div className="Title">
      <h1 > To Do List</h1>
      </div>
      
      <div className="container1">
        <div className="input">
        <div className="Input1">
        <lable>
          Title 
        </lable>
        
        
        <input type="text"  value={newTodoTitle}
              onChange={e => setNewTodoTitle (e.target.value)}placeholder=" What is the title" />
        </div>
        <div className="Input2" >
        <lable>
          Description  
        </lable>
        <input type="text" value={newDescription}
              onChange={e => setNewDescription (e.target.value)} placeholder=" What is the Description" />
        </div>
        <div className="todo_item">
        {!show ? (
    <button type="Button" onClick={handleAddNewToDo} className="primary">
        Add
    </button>
) : (
    <button type="Button" onClick={handleUpdate} className="primary">
        Update
    </button>
)}
</div>

        </div>
        
       
        
        
      
        
        <div className='Todolist'>
          {allTodos.map((item,index)=>{return( 
            <div className="TodoListItem" key={index}>
            <div>
            <h2> {item.title}</h2>
            
            <h3> {item.description}</h3>
            </div>
            
            <div >
          <RiDeleteBin6Line   title="Delete?"   className="icon" onClick={()=>handleDelete(index)} />
          <FaCheckCircle   title="Completed?"   className=" check-icon" onClick={()=>handlComplete(index)} />
          <FaEdit title="Edit?"   className=" edit" onClick={()=>handlEdit(index)} />
        
       
        
  
          </div>
  
          </div>

          )})};
            
          
      
        
       

        </div>
        

      </div>
    </div>
  );
}

export default App;
