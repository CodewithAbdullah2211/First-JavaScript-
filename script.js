const _name = document.getElementById("name");
const _age = document.getElementById("age");
const _loc = document.getElementById("loc");


let name1, ag1, loca;

function take() {
    name1 = prompt("Write Your name: ").toUpperCase();
    ag1 = prompt("Write Your age: ");
    loca = prompt("write Your Country Name: ").toUpperCase();

}

function get() {
    _name.textContent = name1;
    _age.textContent = ag1;
    _loc.textContent = loca;
}