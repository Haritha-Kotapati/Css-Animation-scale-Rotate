const btn = document.getElementsByClassName('btn')[0]; // add [0] to select the first element in the collection
const shape = document.getElementsByClassName('shape')[0]; // change "shape" to "triangle"

console.log("Connected");

btn.addEventListener('click', function change(){
    // alert('you clicked!');
    shape.classList.add("spin");
});


