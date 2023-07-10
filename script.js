const buttons = document.querySelectorAll(".ripple");

buttons.forEach((element) => {
  element.addEventListener("click", function(e){
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');

    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px'; 
    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 1000); // Remove the circle after 1000 milliseconds (1 second)
  });
});
