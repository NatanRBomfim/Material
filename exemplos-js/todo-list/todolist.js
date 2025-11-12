(function () {
  "use strict";

  const submitForm = document.getElementById("todo-add");
  const itemInput = document.getElementById("item-input");
  const ul = document.getElementById("todo-list");
  const lis = ul.getElementsByTagName("li");

  let arrTasks = getSavedData();
  console.log(arrTasks);

  function getSavedData() {
    let arrData = localStorage.getItem("tasks");
    arrData = JSON.parse(arrData);

    return arrData && arrData.length
      ? arrData
      : [{ name: "tarefa 1", createAt: Date.now(), completed: false }];
  }

  function setLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }

  setLocalStorage();

  //function addEventLi(li) {
  //li.addEventListener("click", function () {});
  //}

  function generateLi(obj) {
    let li = document.createElement("li");
    let p = document.createElement("p");
    const checkButton = document.createElement("button");
    const editButton = document.createElement("i");
    const removeButton = document.createElement("i");

    const container = document.createElement("div");
    container.className = "editContainer";
    const containerInput = document.createElement("input");
    containerInput.className = "editInput";
    containerInput.setAttribute("type", "text");

    container.appendChild(containerInput);
    const containerEditButton = document.createElement("button");
    containerEditButton.className = "editButton";
    containerEditButton.textContent = "Editar";
    containerEditButton.setAttribute("data-action", "containerEditButton");
    container.appendChild(containerEditButton);
    const containerCancelButton = document.createElement("button");
    containerCancelButton.className = "cancelButton";
    containerCancelButton.textContent = "Cancelar";
    containerCancelButton.setAttribute("data-action", "containerCancelButton");
    container.appendChild(containerCancelButton);

    li.appendChild(container);

    checkButton.className = "button-check";
    checkButton.innerHTML = `<i class="fas fa-check ${
      obj.completed ? "" : "displayNone"
    }" data-action="checkButton"></i>`;
    checkButton.setAttribute("data-action", "checkButton");

    editButton.className = "fas fa-edit";
    editButton.setAttribute("data-action", "buttonEdit");

    removeButton.className = "fas fa-trash-alt";
    removeButton.setAttribute("data-action", "removeButton");

    li.className = "todo-item";
    p.className = "task-name";
    p.textContent = obj.name;

    li.appendChild(checkButton);
    li.appendChild(p);
    li.appendChild(editButton);
    li.appendChild(removeButton);

    //addEventLi(li);

    return li;
  }

  function render() {
    ul.innerHTML = "";
    arrTasks.forEach((taskObj) => {
      ul.appendChild(generateLi(taskObj));
    });
    setLocalStorage();
  }

  function addTask(task) {
    arrTasks.push({
      name: task,
      createAt: Date.now(),
      completed: false,
    });
  }

  function clickedUl(e) {
    const dataActions = e.target.getAttribute("data-action");
    console.log(e.target);

    if (!dataActions) return;

    let currentLi = e.target;

    while (currentLi.nodeName !== "LI") {
      currentLi = currentLi.parentElement;
    }

    const currentLiIndex = Array.prototype.indexOf.call(lis, currentLi);
    console.log(currentLiIndex);

    const actions = {
      checkButton: function () {
        arrTasks[currentLiIndex].completed =
          !arrTasks[currentLiIndex].completed;
        render();
      },
      buttonEdit: function () {
        console.log();
        const divShow = currentLi.querySelector(".editContainer");

        [...ul.querySelectorAll(".editContainer")].forEach((container) => {
          container.removeAttribute("style");
        });

        divShow.style.display = "flex";

        currentLi.querySelector(".editInput").value =
          arrTasks[currentLiIndex].name;
      },
      removeButton: function () {
        arrTasks.splice(currentLiIndex, 1);
        render();
      },
      containerCancelButton: function () {
        currentLi.querySelector(".editContainer").removeAttribute("style");
      },
      containerEditButton: function () {
        const input = currentLi.querySelector(".editInput").value;
        arrTasks[currentLiIndex].name = input;
        render();
      },
    };

    if (actions[dataActions]) {
      actions[dataActions]();
    }
  }

  submitForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (itemInput.value) {
      addTask(itemInput.value);
    }
    render();
    itemInput.value = "";
    itemInput.focus();
  });
  ul.addEventListener("click", clickedUl);
  render();
})();
