let number;

number = Number(document.getElementById("counter").textContent);

/* increase */
document.getElementById("increasebtn").onclick = function() {
    number += 1;
    document.getElementById("counter").textContent = `${number}`;
}

/* reset */
document.getElementById("resetbtn").onclick = function() {
    number = 0;
    document.getElementById("counter").textContent = number;
}

/* decrease */
document.getElementById("decreasebtn").onclick = function() {
    number -= 1;
    document.getElementById("counter").textContent = `${number}`;
}