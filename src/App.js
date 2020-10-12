import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase";
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");
  const addTodo = (event) => {
    event.preventDefault();
    //setTodos([...todos, input]);
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  };

  useEffect(() => {
   db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
     setTodos(snapshot.docs.map(doc=> ({id: doc.id, todo:doc.data().todo})))
   })
  }, []);

  return (
    <div className="App">
      <h1> To Do App</h1>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        
      </FormControl>
      <Button
        disabled={!input}
        type="submit"
        variant="contained"
        color="primary"
        onClick={addTodo}
      >
        {" "}
        ADD TODO
      </Button>

      <ul className="deco">
        {" "}
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
