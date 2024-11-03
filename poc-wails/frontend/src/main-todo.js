import './style.css';
import './app.css';
import {Add, GetOne, GetData, Update} from '../wailsjs/go/main/Todo';

document.querySelector('#todo').innerHTML = `
    <div class="response">Actividad</div>
    <div class="input-box" id="input">
        <input class="input" id="activity" type="text" />
        <button class="btn" onclick="add()">Add</button>
    </div>
    <div class="response" id="response"></div>

    <br>
    <div class="response">Busqueda por Id</div>
    <div class="input-box" id="input">
        <input class="input" id="idElm" type="text" />
        <button class="btn" onclick="search()">Search</button>
    </div>
    <div class="response" id="elementName"></div>

    <br>
    <div class="response">Actualizar actividad</div>
    <div class="input-box" id="input">
        <input class="input" id="update-activity" type="text" placeholder="Actividad"/>
        <input class="input" id="update-id" type="text" placeholder="Id"/>
        <button class="btn" onclick="update()">Update</button>
    </div>
    <div class="response" id="element-updated"></div>

    <br>
    <div class="input-box" id="input">
        <button class="btn" onclick="getAll()">Get all elements</button>
    </div>
    <ul class="response-list" id="todo-list"></ul>
`;

let activityElement = document.getElementById("activity");
let responseElement = document.getElementById("response")

let idElement = document.getElementById("idElm");
let elementName = document.getElementById("elementName");

let todoList = document.getElementById("todo-list");
let activityUpdate = document.getElementById("update-activity")
let idUpdate = document.getElementById("update-id")
let activityUpdated = document.getElementById("element-updated")


// Setup the greet function
window.add = function () {
    console.log("EXECUTE")

    let activity = activityElement.value
    if (activity == "") {
        console.log("BLANK")
        return;
    }
    
    try {
        Add(activity)
        .then((result) => {
            console.log(result)
            if (result) {
                responseElement.innerText = "Nueva actividad"
                console.log("LISTO")
            } else {
                responseElement.innerText = "Error al guardar"
            }
        })
    } catch(err) {
        console.error("ERROR", err)
    }
};

window.search = function () {
    console.log("Execute")
    console.log("idElement", idElement.value)
    let element = parseInt(idElement.value, 10);

    GetOne(element)
    .then((result) => {
        console.log("result", result)
        if (result) {
            elementName.innerText = result
            console.log("LISTO")
        } else {
            elementName.innerText = "Sin resultado"
        }
    })
};

window.getAll = function () {
    console.log("GETALL")
    GetData()
    .then((result) => {
        todoList.innerHTML = "";
        // console.log("result", result)
        result.forEach(r => {
            const listItem = document.createElement("li");
            listItem.textContent = `Id: ${r.Id} Name: ${r.Name}`
            // console.log("id", r.Id)
            // console.log("name", r.Name)
            todoList.appendChild(listItem)
        })
    })
    .catch(() => {
        console.log("ERROR")
    })
};

window.update = function() {
    let activity = activityUpdate.value;
    let id = parseInt(idUpdate.value, 10);

    Update(id, activity)
    .then((result) => {
        console.log("RESULT:", result)
        
        if (result) {
            activityUpdated.innerText = `Actividad ${id} fue actualizado`
        } else {
            activityUpdated.innerText = `Codigo ${id} no fue encontrado`
        }
    })
    .catch(() => {
        console.log("ERROR")
    })
}