import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import db from "./firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
function Todo(props)
{
  return (
    <List className="deco">
      <ListItem className="todo_list">
        <ListItemText primary={props.todo.todo} secondary="Deadline" />
      </ListItem>
      <DeleteForeverIcon  onClick={event=>db.collection('todos').doc(props.todo.id).delete()}/>
    </List>
    
  );
}

export default Todo;
