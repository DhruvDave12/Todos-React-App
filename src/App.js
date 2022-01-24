import './App.css';
import Header from "./MyComponents/Header.js"
import Todos from "./MyComponents/Todos.js"
import Footer from "./MyComponents/Footer.js"
import React, { useState, useEffect } from 'react';
// For arrow components we import like below
import { AddTodo } from './MyComponents/AddTodo';
import {About} from './MyComponents/About';

// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  // Deleting normally using splice in react doesnt work we have to use the use-state-hook. 
  const onDelete = (todo) => {
    // setTodos is a function user defines that works on everything in the useState
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);

  }

  // Below line means that as my todos change run this line
  // Declare a new state variable, which we'll call "count"
  // setTodos is a function which updates
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Todo List" about="Dhruv" searchBar={false} />

        <Switch>
          <Route exact path="/" render={() => {
            return(
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
