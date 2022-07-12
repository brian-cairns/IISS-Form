let submit = document.getElementById('submit')
console.log(submit)
const formName = 'IISSSession'
console.log('form: ' + formName)
let newForm = {}
let questionType = ['reportable', 'selfInjury', 'aggressive', 'compliance', 'goal1-', 'goal2-', 'trials1-', 'trial2-', 'prompting', 'prompting2-']


function initializeOnClicks(questionType) {
    questionType.forEach((type) => {
        var n
        if (type == 'goal1-' || type == 'goal2-') { n = 8 } else {
            if (type == 'trials1-' || type == 'trials2-') { n = 3 }
            else {n=5}
        }
        for (let i = 1; i < n + 1; i++) {
            document.getElementById(`type${i}`).addEventListener('click', (e) => {
                document.getElementById(`type${i}`).style.color = 'black'
                sessionStorage(`type${i}`, `type${i}Text${i}`)
            })
        }
    })
} 


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

let serviceLocation = document.querySelector('input#serviceLocation')
serviceLocation.addEventListener('change', (e) => {
	newForm.serviceLocation = e.target.value;
  console.log(newForm.serviceLocation);
})

let dangerous = document.querySelector('input#dangerous')
dangerous.addEventListener('change', (e) => {
	newForm.dangerous = e.target.value;
  console.log(newForm.dangerous);
})

let hospitalized = document.querySelector('input#hospitalized')
hospitalized.addEventListener('change', (e) => {
	newForm.hospitalized = e.target.value;
  console.log(newForm.hospitalized);
})

let eat = document.querySelector('input#eat')
eat.addEventListener('change', (e) => {
	newForm.eat = e.target.value;
  console.log(newForm.eat);
})

let goalComments1 = document.getElementById('goalComments1')
goalComments1.addEventListener('change', (e) => {
	newForm.goalComments1 = e.target.value;
  console.log(newForm.goalComments1);
})

let goalComments2 = document.getElementById('goalComments2')
goalComments2.addEventListener('change', (e) => {
	newForm.goalComments2 = e.target.value;
  console.log(newForm.goalComments2);
})

let goalSummary1 = document.querySelector('input#goalSummary1')
goalSummary1.addEventListener('change', (e) => {
	newForm.goalSummary1 = e.target.value;
  console.log(newForm.goalSummary1);
})

let goalDetails1 = document.getElementById('goalDetails1')
goalDetails1.addEventListener('change', (e) => {
	newForm.goalDetails1 = e.target.value;
  console.log(newForm.goalDetails1);
})

let goalSummaryFollowUp1 = document.getElementById('goalSummaryFollowUp1')
goalSummaryFollowUp1.addEventListener('change', (e) => {
	newForm.goalSummaryFollowUp1 = e.target.value;
  console.log(newForm.goalSummaryFollowUp1);
})

let goalSummary2 = document.querySelector('input#goalSummary2')
goalSummary2.addEventListener('change', (e) => {
	newForm.goalSummary2 = e.target.value;
  console.log(newForm.goalSummary2);
})

let goalDetails2 = document.getElementById('goalDetails2')
goalDetails2.addEventListener('change', (e) => {
	newForm.goalDetails2 = e.target.value;
  console.log(newForm.goalDetails2);
})

let goalSummaryFollowUp2 = document.getElementById('goalSummaryFollowUp2')
goalSummaryFollowUp2.addEventListener('change', (e) => {
	newForm.goalSummaryFollowUp2 = e.target.value;
  console.log(newForm.goalSummaryFollowUp2);
})

let staffName = document.querySelector('input#staffName')
staffName.addEventListener('change', (e) => {
    newForm.staffName = e.target.value;
    console.log(newForm.staffName)
})

let todaysDate = document.querySelector('input#todaysDate')
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