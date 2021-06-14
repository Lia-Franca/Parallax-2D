  let bg = document.getElementById('bg')
    let moon = document.getElementById("moon")
    let cloud = document.getElementById("cloud")
    let mountain = document.getElementById("mountain")


    window.addEventListener('scroll', function(){
        var value = window.scrollY;

        bg.style.top = value * 0.5 + "px";
        moon.style.left = value * 1 + "px";
        cloud.style.left = value * 1 + "px";
        mountain.style.top = value * 1 + "px";
    })
