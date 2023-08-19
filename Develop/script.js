
//TODO: The dayjs time needs to be formatted
setInterval(function () 
  {
    const time = dayjs().format('DD/MM/YYYY');
    document.getElementById("timeEl").innerHTML = "Current time: " + time;

}, 1000);

var input = document.getElementsByClassName("textfield");
