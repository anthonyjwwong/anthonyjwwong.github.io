const button = document.querySelector('button');
const span = document.querySelector('span');
let count=0;


button.addEventListener('click', function() {

    count++;
    span.innerHTML = count;
})