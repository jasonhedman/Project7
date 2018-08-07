//Charts
var canvas = document.querySelector('canvas');
fitToContainer(canvas);

function fitToContainer(canvas){
  canvas.style.width ='100%';
  canvas.style.height='100%';
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

Chart.defaults.global.defaultFontColor = '#9d9d9d';
Chart.defaults.global.defaultFontFamily = "'Lato', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.scale.gridLines.tickMarkLength = 8;
Chart.defaults.scale.gridLines.drawTicks = true;
Chart.defaults.scale.gridLines.offsetGridLines = true;
Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.scale.ticks.autoSkip = false;
Chart.defaults.global.defaultFontSize = 10;

var navContainer = document.getElementById("nav");
var buttons = navContainer.getElementsByTagName("li");

var hourlyButton = document.getElementById('hourly-button');
var dailyButton = document.getElementById('daily-button');
var weeklyButton = document.getElementById('weekly-button');
var monthlyButton = document.getElementById('monthly-button');
var current = document.getElementsByClassName('active');


var hourlyMeta = [
  { label: '7:00', value: 10},
  { label: '8:00', value: 50},
  { label: '9:00', value: 70},
  { label: '10:00', value: 30},
  { label: '11:00', value: 75},
  { label: '12:00', value: 100},
  { label: '', value: 60}
];

var dailyMeta = [
  { label: 'Sunday', value: 200},
  { label: 'Monday', value: 150},
  { label: 'Tuesday', value: 175},
  { label: 'Wednesday', value: 210},
  { label: 'Thursday', value: 255},
  { label: 'Friday', value: 300},
  { label: '', value: 275}
];

var weeklyMeta = [
  { label: '7:00', value: 500},
  { label: '8:00', value: 750},
  { label: '9:00', value: 960},
  { label: '10:00', value: 770},
  { label: '11:00', value: 1200},
  { label: '12:00', value: 950},
  { label: '', value: 850}
];

var monthlyMeta = [
  { label: '22-28', value: 4000},
  { label: '29-5', value: 4265},
  { label: '6-12', value: 4580},
  { label: '13-19', value: 4378},
  { label: '20-26', value: 4098},
  { label: '27-2', value: 4865},
  { label: '', value: 5098}
];

function getMyData(table) {
  var dataArray = new Array();
  for(let i = 0; i < table.length; i++ ) {
    dataArray[i] = table[i].value;
  }
  return dataArray;
};

function getMyLabels(table) {
  var dataArray = new Array();
  for(let i = 0; i < table.length - 1; i++ ) {
    dataArray[i] = table[i].label;
  }
  return dataArray;
};

function returnData() {
  if(current[0] == hourlyButton) {
    return getMyData(hourlyMeta)
  }
  else if(current[0] == dailyButton) {
    return getMyData(dailyMeta)
  }
  else if(current[0] == weeklyButton) {
    return getMyData(weeklyMeta)
  }
  else if(current[0] == monthlyButton) {
    return getMyData(monthlyMeta)
  }
}

function returnLabels() {
  if(current[0] == hourlyButton) {
    return getMyLabels(hourlyMeta)
  }
  else if(current[0] == dailyButton) {
    return getMyLabels(dailyMeta)
  }
  else if(current[0] == weeklyButton) {
    return getMyLabels(weeklyMeta)
  }
  else if(current[0] == monthlyButton) {
    return getMyLabels(monthlyMeta)
  }
}

var traffic = document.getElementById('traffic')
var trafficData = {
  labels: returnLabels(),
  datasets: [{
    data: returnData(),
    lineTension: 0,
    fill: true,
    borderColor: '#c1c3ec',
    backgroundColor: 'rgba(183, 185, 233, .3)',
    pointBorderColor: '#c1c3ec',
    pointBackgroundColor: 'transparent',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
  }]
};
var trafficOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        color:'rgba(0, 0, 0, 0.05)'
      }
    }],
    yAxes: [{
      gridLines: {
        color:'rgba(0, 0, 0, 0.05)'
      }
    }],
  }
}

var trafficChart = new Chart(traffic, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});


var daily = document.getElementById('daily')
var dailyData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [{
    data: [50, 75, 150, 100, 200, 175, 75],
    backgroundColor: '#7377bf',
  }]
};
var dailyOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        color:'rgba(0, 0, 0, 0.05)'
      },
      barPercentage: 1,
      categoryPercentage: 0.3,
    }],
    yAxes: [{
      gridLines: {
        color:'rgba(0, 0, 0, 0.05)'
      },
      ticks: {
        beginAtZero: true
      }
    }]
  }
}


var dailyChart = new Chart(daily, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

var mobile = document.getElementById('mobile')
var mobileData = {
  labels: ['Phones', 'Tablets', 'Desktop'],
  datasets: [{
    data: [15, 15, 70],
    backgroundColor: ['#74b1bf', '#81c98f', '#7377bf']
  }]
};
var mobileOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    }
  },
}
var mobileChart = new Chart(mobile, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});



//Local Storage
var alert = document.getElementById('alert');
var alertDelete = document.getElementById('delete')

alertDelete.addEventListener("click", function(){
  alert.style.display = "none"
});

var email = document.getElementById('email-notifications');
var publicProfile = document.getElementById('public-profile');

email.checked = (localStorage.getItem('isEmailChecked') == "true");
publicProfile.checked = (localStorage.getItem('isProfileChecked') == 'true');

email.onchange = function(){
  localStorage.setItem('isEmailChecked', email.checked);
};

publicProfile.onchange = function(){
  localStorage.setItem('isProfileChecked', publicProfile.checked);
};

var timezone = document.getElementById('timezone-offset');
timezone.value = localStorage.getItem('timezone')
timezone.onchange = function(){
  localStorage.setItem('timezone', timezone.value);
}



//Autocomplete
var users = ['Aaron','Brandon','Chris','David','Ellen','Fanny','Gary','Harry','Ivan','Jason','Karen','Larry','Monika','Nancy','Olivia','Perry','Qui','Randy','Sarah','Tony','Vince','Will']
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("message-user"), users);
//TrafficCharts




for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(){
    var active = document.getElementsByClassName('active');
    active[0].className = '';
    this.className += " active";
    for(var i = 0; i < trafficChart.data.datasets[0].data.length; i++) {
      trafficChart.data.datasets[0].data[i] = returnData()[i];
    }
    for(var i = 0; i < trafficChart.data.labels.length; i++) {
      trafficChart.data.labels[i] = returnLabels()[i];
    }
    trafficChart.update();
  });
};

//Dropdown Alerts

$(document).ready(function(){
  $('.bell').on('click' , function(){
    $('.popup-content').fadeIn();
  });
  OnwindowClick('.popup-content , .bell', function(){
    $('.popup-content').fadeOut();
  });
});


// window click function
function OnwindowClick(elem , action){
    $(document).on('click',function(e){
        if (!$(elem).is(e.target) // if the target of the click isn't the container...
            && $(elem).has(e.target).length === 0) // ... nor a descendant of the container
        {
            action();
        }
    });
}
