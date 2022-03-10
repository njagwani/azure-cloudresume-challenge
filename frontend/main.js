window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://getresumecounternitin.azurewebsites.net/api/GetResumeCounterNitin?code=hBQJ1SlZqc1N3N7vF4EKQFKKSMBLJdTBMGye7jDaVVXy6DDxirNS5Q=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounterNitin';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}