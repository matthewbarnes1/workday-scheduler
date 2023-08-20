//TODO: The dayjs time needs to be formatted
// import dayjs from 'dayjs';

setInterval(function () 
  {
    const time = dayjs().format('MMMM D, YYYY');
    document.getElementById("timeEl").innerHTML = "Todays Date: " + time;

}, 1000);

function toggleSchedule(hourId) {
  var scheduleInput = document.getElementById(hourId).querySelector('.scheduleInput');
  var schedule = scheduleInput.value;

  if (schedule) {
      localStorage.setItem(hourId, schedule);
  } else {
      localStorage.removeItem(hourId);
  }
  loadSchedules();
}

function updateColors() {
  var currentHour = new Date().getHours();

  for (var i = 9; i <= 17; i++) {
      var hourId = 'hour-' + i;
      var timeSlotDiv = document.getElementById(hourId);

      if (i < currentHour) {
          timeSlotDiv.style.backgroundColor = 'grey'; // Past
      } else if (i === currentHour) {
          timeSlotDiv.style.backgroundColor = 'red'; // Current
      } else {
          timeSlotDiv.style.backgroundColor = 'green'; // Future
      }
  }
}

function loadSchedules() {
  for (var i = 9; i <= 17; i++) {
      var hourId = 'hour-' + i;
      var schedule = localStorage.getItem(hourId);
      if (schedule) {
          document.getElementById(hourId).querySelector('.scheduleInput').value = schedule;
      }
  }

  updateColors();
}

loadSchedules();