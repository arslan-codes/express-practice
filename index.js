const exppress = require("express");
const fs = require("fs");

const app = exppress();

const dataFile = "todo.json";
// const readData = () => {
//   const data = fs.readFileSync(dataFile);
//   return JSON.parse(data);
// };

// const writeData = (data) => {
//   fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
// };

app.post("/", function (req, res) {
  const userId = parseInt(req.params.id);
  const { id, title } = req.body;
  const data = readData;
  const user = data.user.find((u) => u.id === userId);
  if (user) {
    const newTodo = { id, title };
    user.todos.push(newTodo);
    writeData(data);
    res.status(201).json({
      message: "todo added",
    });
  } else {
    res.status(404).json({
      message: "user not found",
    });
  }
});

app.listen(3000);
