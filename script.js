let btn = document.getElementById('btn');
btn.addEventListener('click', popup);
function popup() {
    alert("Looks like something went wrong! Please try again")
}

let link = document.getElementsByTagName('a');
let inputs = document.querySelectorAll('input');

function resetInput() {
    inputs.textContent ="";
}
link.addEventListener('click' ,resetInput)
