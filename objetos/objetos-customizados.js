function Task(name) {
  let _name = name;
  this.createdAt = new Date();
  this.updatedAt = null;
  this.createName = function (name) {
    _name = name;
    this.updatedAt = new Date();
  };
  this.getName = function () {
    return _name;
  };
}

const task1 = new Task("Tarefa 1");

console.log(task1.getName());
task1.createName("Tarefa atualizada");
console.log(task1.getName());

const task2 = new Task("Tarefa 2");

console.log(task2.getName());
task2.createName("Tarefa 2 atualizada");
console.log(task2.getName());

console.log(task1);
console.log(task2);
