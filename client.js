var socket = io('http://localhost:3000');
const log = console.log;

const getEl = id => document.getElementById(id);

const editor = getEl("editor");

editor.addEventListener("keyup", evt => {
    const text = editor.value;
    socket.send(text);
});

socket.on('message', data => {
    editor.value = data;
});