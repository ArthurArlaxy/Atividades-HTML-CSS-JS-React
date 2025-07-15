const path = require("node:path");
const fs = require("node:fs");

const listModel = {
  getAllLists() {
    const lists = fs.readdirSync(path.join(__dirname, "..", "db"));
    return lists;
  },
  getListById(listName) {
    const pendingPath = path.join(__dirname, "..", "db", listName);
    const donePath = path.join(__dirname, "..", "db", `${listName}-concluído`);

    const tasks = [];

    const pendingTasks = fs.readdirSync(pendingPath);

    pendingTasks.forEach((pendingTask) => {
      tasks.push({ name: pendingTask, isDone: false });
    });

    if (fs.existsSync(donePath)) {
      const doneTasks = fs.readdirSync(donePath);
      doneTasks.forEach((doneTask) => {
        tasks.push({ name: doneTask, isDone: true });
      });
    }

    return tasks;
  },
  createList(listName) {
    const dirPath = path.join(__dirname, "..", "db", listName);

    if (fs.existsSync(dirPath)) {
      console.log("Lista com esse nome já existe!");
    }

    fs.mkdirSync(dirPath, { recursive: true });
    console.log("Lista criada com sucesso!");
  },
  createTask(listName, taskName) {
    const dirPath = path.join(__dirname, "..", "db", listName);
    const filePath = path.join(dirPath, taskName);
    fs.writeFileSync(filePath, "");
  },
  concludeTask(listName, taskName) {
    const fromPath = path.join(__dirname, "..", listName, taskName);
    const toFolder = path.join(__dirname, "..", `${listName}-concluído`);
    const newPath = path.join(toFolder, taskName);

    if (!fs.existsSync(toFolder)) {
      fs.mkdirSync(toFolder, { recursive: true });
    }

    fs.renameSync(fromPath, newPath);
  },
};

module.exports = listModel;
