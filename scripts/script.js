
setInterval(()=>{
    let Time = new Date();

    document.getElementById("hours").innerHTML = Time.getHours();
    document.getElementById("minutes").innerHTML = Time.getMinutes();
    document.getElementById("seconds").innerHTML = Time.getSeconds();
    document.getElementById("miliSeconds").innerHTML = Time.getMilliseconds();
}, 1);
