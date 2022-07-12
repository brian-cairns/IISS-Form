let submit = document.getElementById('submit')
console.log(submit)
const formName = 'IISSSession'
console.log('form: ' + formName)
let newForm = {}

let employeeEmail = document.querySelector('input#employeeEmail')
employeeEmail.addEventListener('change', (e) => {
	console.log('changed')
	newForm.employeeEmail = e.target.value;
  console.log(newForm.employeeEmail);
})

let clientName = document.querySelector('input#clientName')
clientName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.clientName = e.target.value;
  console.log(newForm.clientName);
})

let date = document.querySelector('input#date')
date.addEventListener('change', (e) => {
	newForm.date = e.target.value;
  console.log(newForm.date);
})

let start = document.querySelector('input#start')
start.addEventListener('change', (e) => {
	newForm.start = e.target.value;
  console.log(newForm.start);
})

let end = document.querySelector('input#end')
end.addEventListener('change', (e) => {
	newForm.end = e.target.value;
  console.log(newForm.end);
})

let technicianName = document.querySelector('input#technicianName')
technicianName.addEventListener('change', (e) => {
	newForm.technicianName = e.target.value;
  console.log(newForm.technicianName);
})

let location = document.querySelector('input#location')
location.addEventListener('change', (e) => {
	newForm.location = e.target.value;
  console.log(newForm.location);
})

let dangerous = document.querySelector('dangerous')
dangerous.addEventListener('change', (e) => {
    newForm.dangerous = e.target.value;
    console.log(newForm.dangerous)
})

let eat = document.querySelector('eat')
eat.addEventListener('change', (e) => {
    newForm.eat = e.target.value;
    console.log(newForm.eat)
})

let hospitalized = document.querySelector('hospitalized')
hospitalized.addEventListener('change', (e) => {
    newForm.hospitalized = e.target.value;
    console.log(newForm.hospitalized)
})

let sessionSummaryGoal = document.querySelector('sessionSummaryGoal')
sessionSummaryGoal.addEventListener('change', (e) => {
    newForm.sessionSummaryGoal = e.target.value;
    console.log(newForm.sessionSummaryGoal)
})

let sessionSummaryDetails = document.querySelector('sessionSummaryDetails')
sessionSummaryDetails.addEventListener('change', (e) => {
    newForm.sessionSummaryDetails = e.target.value;
    console.log(newForm.sessionSummaryDetails)
})

let sessionSummaryWrapUp = document.querySelector('sessionSummaryWrapUp')
sessionSummaryWrapUp.addEventListener('change', (e) => {
    newForm.sessionSummaryWrapUp = e.target.value;
    console.log(newForm.sessionSummaryWrapUp)
})
let goal1NextSteps = document.querySelector('Goal1NextSteps')
goal1NextSteps.addEventListener('change', (e) => {
    newForm.goal1NextSteps = e.target.value;
    console.log(newForm.goal1NextSteps)
})

let sessionSummaryGoal2 = document.querySelector('sessionSummaryGoal2')
sessionSummaryGoal2.addEventListener('change', (e) => {
    newForm.sessionSummaryGoal2 = e.target.value;
    console.log(newForm.sessionSummaryGoal2)
})

let sessionSummaryDetails2 = document.querySelector('sessionSummaryDetails2')
sessionSummaryDetails2.addEventListener('change', (e) => {
    newForm.sessionSummaryDetails2 = e.target.value;
    console.log(newForm.sessionSummaryDetails2)
})

let sessionSummaryWrapUp2 = document.querySelector('sessionSummaryWrapUp2')
sessionSummaryWrapUp2.addEventListener('change', (e) => {
    newForm.sessionSummaryWrapUp2 = e.target.value;
    console.log(newForm.sessionSummaryWrapUp2)
})

let goal2NextSteps = document.querySelector('goal2NextSteps')
goal2NextSteps.addEventListener('change', (e) => {
    newForm.goal2NextSteps = e.target.value;
    console.log(newForm.goal2NextSteps)
})

let staffName = document.querySelector('staffName')
staffName.addEventListener('change', (e) => {
    newForm.staffName = e.target.value;
    console.log(newForm.staffName)
})

let todaysDate = document.querySelector('todaysDate')
todaysDate.addEventListener('change', (e) => {
    newForm.todaysDate = e.target.value;
    console.log(newForm.todaysDate)
})

document.getElementById('submit').addEventListener("click", async (event) => {
  submitForm(newForm, formName)
})

async function submitForm(data, form) {
  const document = {
    'form': form,
    'data': data
  }
  console.log(document)
  fetch('https://pffm.azurewebsites.net/form', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(document)
  })
    .then((response) => {
      if (response.status == 200) {
      showSuccess()
      } else {
        showError(response.body)
      }
    })
    .catch((err) => showError(err))
}


function showSuccess() {
    document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}