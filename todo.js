const express = require("express");
const app = express();
app.use(express.json());

const todos = [];
/*

add toodos with title, id, task
delete todos based on ids 
search todos based on titles 
update todos based on ids
*/

app.post("/add", (req, res) => {
  const { id, title } = req.body;
  const check = todos.findIndex((todo) => todo.id === id);
  if (id !== -1) {
    res.send("todo exists already");
    return "todo exists already";
  } else {
    const newtodo = { id, title };
    todos.push(newtodo);
    res.send("todos have been pushed");
  }
});
app.post("/update", (req, res) => {
  const { id, title } = req.body;
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    res.send("todo does not exist");
  } else {
    todos[index].title = title;
    res.send("todos updated");
  }
});

app.get("/todos", (req, res) => {
  res.send(todos);
});
app.delete("/del", (req, res) => {
  const { id } = req.body; // Extract the id from the request body

  // Find the todo based on the id
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1); // Remove the todo from the array
    res.send("Todo has been deleted!");
  } else {
    res.status(404).send("Todo not found!");
  }
});

app.listen(3000);
