
//TODO: The dayjs time needs to be formatted
setInterval(function () 
  {
    const time = dayjs();
    document.getElementById("timeEl").innerHTML = time;

}, 1000);

