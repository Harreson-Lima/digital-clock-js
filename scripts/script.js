document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        let Time = new Date();

        days(Time.getDay());

        document.getElementById("hours").innerHTML =
            (Time.getHours() < 10 ? "0" : "") + Time.getHours();
        document.getElementById("minutes").innerHTML =
            (Time.getMinutes() < 10 ? "0" : "") + Time.getMinutes();
        document.getElementById("seconds").innerHTML =
            (Time.getSeconds() < 10 ? "0" : "") + Time.getSeconds();
    }, 1);
});

function days(date) {
    let span = document.getElementById(`day-${date}`);
    span.classList.add("contrast");
}
