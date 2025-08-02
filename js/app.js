function calcAge() {
    let userDate = document.getElementById("userDate").value;
    let userTime = document.getElementById("usertime").value;
    let years = document.getElementById("years");
    let months = document.getElementById("months");
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let mins = document.getElementById("mins");
    let secs = document.getElementById("secs");

    let currentTime = new Date();
    let userTimeZone = new Date(userDate + " " + userTime);

    let timeDiff = currentTime - userTimeZone;

    let year = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    let remainingAfterYears = timeDiff % (1000 * 60 * 60 * 24 * 365.25);

    let month = Math.floor(remainingAfterYears / (1000 * 60 * 60 * 24 * 30.44)); 

    let remainingAfterMonths = remainingAfterYears % (1000 * 60 * 60 * 24 * 30.44);

    let day = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24));
    let remainingAfterDays = remainingAfterMonths % (1000 * 60 * 60 * 24);

    let hour = Math.floor(remainingAfterDays / (1000 * 60 * 60));
    let remainingAfterHours = remainingAfterDays % (1000 * 60 * 60);

    let min = Math.floor(remainingAfterHours / (1000 * 60));
    let remainingAfterMins = Math.floor(remainingAfterHours % (1000 * 60));

    let sec = Math.floor(remainingAfterMins / 1000);

    years.value = year;
    months.value = month;
    days.value = day;
    hours.value = hour;
    mins.value = min;
    secs.value = sec;

    console.log(year);
}
