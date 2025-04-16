document.addEventListener("mousemove", function (e) {
    let body = document.querySelector("body");
    
    let flower = document.createElement("div");
    flower.classList.add("flower");

    let x = e.pageX;
    let y = e.pageY;
    
    flower.style.left = `${x - 30}px`; 
    flower.style.top = `${y - 30}px`;
    
    
    let size = Math.random() * 100; 
    flower.style.width = `${50 + size}px`; 
    flower.style.height = `${50 + size}px`; 
    
    
    let rotation = Math.random() * 360;
    flower.style.transform = `rotate(${rotation}deg)`;


    body.appendChild(flower);


    setTimeout(function () {
        flower.remove();
    }, 1500); 
});
