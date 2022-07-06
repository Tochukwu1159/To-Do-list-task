window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  //Time setting

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let month = today.toLocaleDateString("default", { month: "long" });
    let year = today.getFullYear();
    let min = today.getUTCMinutes();
    let day = today.toLocaleDateString("en-us", { weekday: "long" });
    let hour = today.getHours();
    today =
      day + "," + " " + dd + " " + month + " " + year + "," + hour + ":" + min;

    const task = input.value;

    const task_el = document.createElement("div");
    task_el.setAttribute("class", "task");

    const task_content_el = document.createElement("div");
    task_content_el.setAttribute("class", "content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.setAttribute("class", "actions");

    const currentTime = document.createElement("div");
    currentTime.setAttribute("class", "time");
    const current_time = document.createElement("h4");
    current_time.innerHTML = today;

    currentTime.appendChild(current_time);
    task_content_el.appendChild(current_time);

    const task_edit_el = document.createElement("button");
    task_edit_el.setAttribute("class", "edit");
    task_edit_el.innerText = "Edit";

    const search_actions_el = document.createElement("div");
    search_actions_el.setAttribute("class", "card_action");
    const hTag = document.createElement("h4");
    hTag.setAttribute("class", "search_button");
    task_content_el.appendChild(hTag);
    pTag = document.createElement("p");
    pTag.setAttribute("class", "collection");
    task_content_el.appendChild(pTag);

    const task_delete_el = document.createElement("button");
    task_delete_el.setAttribute("class", "delete");
    task_delete_el.innerText = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", (e) => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    task_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(task_el);
    });

    search_button.addEventListener("keyUp", (e) => {
      task_content_el.forEach(function (item, index) {
        if (task_content_el.textContent === item) {
          task_content_el.splice(index, 1);
        }
      });
    });
  });
});

// 	const search_button = document.createElement("div");
//   search_button.setAttribute("class", "search_buttn");
//   search_button.innerText = filter;
//   search_button.type = "text";
//   search_button.value = search;
//   search_button.name = "filter";
//   main.appendChild(search_button);
