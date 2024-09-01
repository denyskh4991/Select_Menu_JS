let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
    }
}