var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://hpb.health.gov.lk/api/get-current-statistical', true)

request.onload = function () {
  // Begin accessing JSON data here
  var info = JSON.parse(this.response)
  console.log(info)
  global_deaths=info.data.global_deaths;
  global_recovered=info.data.global_recovered;
  global_total_cases=info.data.global_total_cases;
  
  
  local_active_cases = info.data.local_active_cases;
  local_deaths = info.data.local_deaths;
  local_new_cases = info.data.local_new_cases;
  local_new_deaths = info.data.local_new_deaths;
  local_recovered = info.data.local_recovered;
  local_total_cases = info.data.local_total_cases;
  local_total_number_of_individuals_in_hospitals = info.data.local_total_number_of_individuals_in_hospitals;
  total_pcr_testing_count = info.data.total_pcr_testing_count;
  console.log(local_active_cases)
  console.log(local_recovered)
  console.log(local_total_cases)
  var newDate = new Date();

  new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["local_deaths", "local_recovered", "local_active_cases"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [local_deaths,local_recovered,local_active_cases]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'current Corona Patient count as per '+ newDate
      }
    }
});

//world corona cases

  new Chart(document.getElementById("doughnut-chart1"), {
    type: 'doughnut',
    data: {
      labels: ["local_deaths", "local_recovered", "local_active_cases"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [global_deaths,global_recovered,global_total_cases-global_recovered-global_deaths]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'current Corona Patient count as per '+ newDate
      }
    }
});

//comparision world and sri lanka
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["global_deaths", "global_recovered", "Current "],
      datasets: [
        {
          label: "World",
          backgroundColor: "#3e95cd",
          data: [global_deaths,global_recovered,global_total_cases-global_recovered-global_deaths]
        }, {
          label: "Sri lanka",
          backgroundColor: "#8e5ea2",
		  data: [local_deaths,local_recovered,local_active_cases]
          
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    }
});
}

// Send request
request.send()

