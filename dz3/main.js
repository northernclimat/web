document.addEventListener("DOMContentLoaded", function greetings() {
    var name = prompt("Введите ваше имя:");
    if (name) {
        console.log("Привет, " + name + "!");
    } else {
        console.log("Пожалуйста, введите ваше имя.");
    }
});
