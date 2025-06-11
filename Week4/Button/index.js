const add = document.getElementById("add");
const reset = document.getElementById("reset");
const take = document.getElementById("take");
const label = document.getElementById("count");
let count = 0;  

add.onclick = () => {
    count++;
    label.textContent = count;
}

reset.onclick = () => {
    count = 0;
    label.textContent = count;
}

take.onclick = () => {
    count--;
    label.textContent = count;
}