var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://hpb.health.gov.lk/api/get-current-statistical', true)

request.onload = function () {
  // Begin accessing JSON data here
  var info = JSON.parse(this.response)
  console.log(info)
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
      labels: ["local_active_cases", "local_recovered", "local_total_cases"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [local_active_cases,local_recovered,local_total_cases]
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
}

// Send request
request.send()

