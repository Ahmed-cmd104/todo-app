var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function showInput() {
    document.getElementById("t").innerHTML = "<input type=text name=task id=task><br><button onclick=saveTask()>KAYDET</button>"
}
function saveTask() {
    var task = document.getElementById("task").value;
    if (task.trim() === "") {
        alert("Lütfen bir görev girin!");
        return;
    }
    tasks.push({ text: task, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("t").innerHTML = "";
    render();
}

function clearAll() {
    if (tasks.length != 0)
        if (confirm("Tüm görevleri silmek istediğinizden emin misiniz?")) {
            localStorage.removeItem("tasks");
            tasks = [];
            render();
        }

}
function render() {
    document.getElementById("liste").innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].done) {
            document.getElementById("liste").innerHTML += "<li onclick=toggleDone(" + i + ") class=ndone>" + tasks[i].text + "</li>"
        } else {
            document.getElementById("liste").innerHTML += "<li class=done onclick=toggleDone(" + i + ")>" + tasks[i].text + "</li>"
        }
    }
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done
    localStorage.setItem("tasks", JSON.stringify(tasks));
    render();
}

render();