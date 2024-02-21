"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    console.log(data);
    console.log(data);
    console.log(data);
    console.log(data);
});
