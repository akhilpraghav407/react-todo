import React, { Component } from 'react';
import './TodoApp.css';

export default class TodoApp extends Component {
  state ={
      input : "",
      items : []
    }

    editItem = (key)=>{
     const allItems = this.state.items;
     allItems[key]=  prompt("Change your item name");
    this.setState({})
      

    }

    deleteItem = (key)=>{
      // console.log(index)
      // const allItems = this.state.items;
      // allItems.splice(index,1);

      this.setState({
        items: this.state.items.filter((item,index)=> index !== key)

      })
     

    }
    
    storeItems =(event)=>{
      event.preventDefault()
      const {input,items} = this.state;
     
      this.setState ({
        items : [...items,input],
        input : ""
      })
      console.log(this.state.items)
    }
  handleChange=(event)=>{
    this.setState({
      input : event.target.value
    })

    console.log(this.state.items)
  
    
    

  }
  render() {
    const {input,items} = this.state;
    return (
      <div className='todo-container'>
        
            <form className='input-section' onSubmit={this.storeItems}>
                <h1>Todo App</h1>
                <input type="text" value={input} onChange={this.handleChange} placeholder='Enter Items.....'/>
            </form>
            <ul>
                {items.map((item,index)=>(
                  <li key={index}>{item}<i className="fa-regular fa-pen-to-square" onClick={()=>{this.editItem(index)}}></i><i className="fa-solid fa-trash" onClick={()=>this.deleteItem(index)}></i></li>
                ))}
               
            </ul>
      </div>
    )
  }
}
