const handleClick = () =>{
    for (button of document.querySelectorAll(".button")) {
        button.addEventListener('click', event => console.log(event.target.textContent));
    }
}
