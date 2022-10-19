const nodemailer = require("nodemailer")

let submit = document.getElementById('submit')
console.log(submit)
const formName = 'IISSSession'
console.log('form: ' + formName)
let newForm = {}
newForm.goals = []
newForm.trials = []
newForm.prompting = []

let printForm = document.getElementById('printToPDF')
printForm.style.display = 'none'

let employeeEmail = document.querySelector('input#staffEmail')
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

let end = document.querySelector('input#stop')
end.addEventListener('change', (e) => {
	newForm.end = e.target.value;
  console.log(newForm.end);
})

let technicianName = document.querySelector('input#technicianName')
technicianName.addEventListener('change', (e) => {
	newForm.technicianName = e.target.value;
  console.log(newForm.technicianName);
})

let serviceLocation = document.querySelector('input#location')
serviceLocation.addEventListener('change', (e) => {
	newForm.serviceLocation = e.target.value;
  console.log(newForm.serviceLocation);
})

let reportable = document.getElementById('reportable')
let notReportable = document.getElementById('notReportable')
let reportableMsg = document.getElementById('reportableText')

reportable.addEventListener('change', () => {
  if (reportable.checked) {
    !notReportable.checked;
    newForm.reportable = true
    //reportableMsg.addEventListener('change', (e) => {sendEmail() set up with nodemailer at the end})
    
  } else {
    !reportable.checked;
    notReportable.checked;
    newForm.reportable = false
  }
})

let selfInjury = []

for (let i = 1; i < 6; i++) {
  selfInjury[i] = document.getElementById(`selfInjury${i}`)
  selfInjury[i].addEventListener('change', () => {
    let selfInjury = document.getElementById(`selfInjuryText${i}`).innerHTML
    if (selfInjury[i].checked) {
      newForm.selfInjury = selfInjury
      blockOptions(i, selfInjury)
    } else {
      newForm.selfInjury = ''
    }
  })
}

let aggressive = []
let compliance = []

for (let i = 1; i < 6; i++) {
  aggressive[i] = document.getElementById(`aggressive${i}`)
  aggressive[i].addEventListener('change', () => {
    let aggressive = document.getElementById(`aggressiveText${i}`).innerHTML
    if (aggressive[i].checked) {
      newForm.aggressive = aggressive
      blockOptions(i, aggressive)
    } else {
      newForm.aggressive = ''
    }
  })
}

for (let i = 1; i < 6; i++) {
  compliance[i] = document.getElementById(`compliance${i}`)
  compliance[i].addEventListener('change', () => {
    let compliance = document.getElementById(`complianceText${i}`).innerHTML
    if (compliance[i].checked) {
      newForm.compliance = compliance
      blockOptions(i, compliance)
    } else {
      newForm.compliance = ''
    }
  })
}

function blockOptions(i, name) {
  for (let j = 1; j < 6; j++) {
    if (j != i) {
      !`${name}[${j}]`.checked
    }
  }
}

let dangerous = document.getElementById('dangerous')
dangerous.addEventListener('change', (e) => {
  newForm.dangerous = e.target.value
  console.log(newForm.dangerous)
})

let hospitalized = document.getElementById('hospitalized')
hospitalized.addEventListener('change', (e) => {
	newForm.hospitalized = e.target.value;
  console.log(newForm.hospitalized);
})

let eat = document.getElementById('eat')
eat.addEventListener('change', (e) => {
	newForm.eat = e.target.value;
  console.log(newForm.eat);
})

let goals = []

for (let i = 1; i < 3; i++) {
	goals[i] = []
  for (let j = 1; j < 9; j++) {
    goals[i][j] = document.getElementById(`goal${i}-${j}`)
    goals[i][j].addEventListener('change', () => {
      let goal =  document.getElementById(`goal${i}-Text${j}`).innerHTML
      goals[i][j].checked ? newForm.goals[i] = goal : newForm.goals[i] = ''
      console.log(goal, newForm.goals[i])
    })
  }
}

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

let trials = []
let prompting = []

for (let i = 1; i < 3; i++) {
	trials[i]= []
  for (let j = 1; j < 4; j++) {
  	console.log(i, j, trials[i], newForm.trials[i])
    trials[i][j] =document.getElementById(`trials${i}-${j}`)
    console.log(trials[i][j])
    trials[i][j].addEventListener('change', () => {
      let trial = document.getElementById(`trials${i}-Text${j}`).innerHTML
      trials[i][j].checked ? newForm.trials[i] = trial : newForm.trials[i] = ''
      console.log(trial, newForm.trials[i])
    })
  }
}

for (let i = 1; i < 3; i++) {
	prompting[i] = []
  for (let j = 1; j < 6; j++) {
    console.log(i, j, prompting[i], newForm.prompting[i])
    prompting[i][j] =document.getElementById(`prompting${i}-${j}`)
    console.log(prompting[i][j])
    prompting[i][j].addEventListener('change', () => {
      let prompt = document.getElementById(`prompting${i}-Text${j}`).innerHTML
      prompting[i][j].checked ? newForm.prompting[i] = prompt : newForm.prompting[i] = ''
      console.log(prompt, newForm.prompting[i])
    })
  }
}

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

submit.addEventListener("click", async (event) => {
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
    .then(response => response.json())
    .then(data => respond(data)) 
    .catch((err) => showError(err))
}

function respond(data) {
  let id = data.key
  if (id) {
    showSuccess(id)
    let name = newForm.clientName
    let staff = newForm.staffName;
    sendNotification(id, name, 'individual', 'not urgent')
    sendNotification(id, staff, 'individual', 'not urgent')
    sendNotification(id, 'admin', 'individual', 'not urgent')

    if (newForm.hospitalized != 'no' || newForm.dangerous != 'no' || !reportable.includes('No reportable events')) { sendNotification(id, 'admin', 'individual', 'urgent') }

  } else {

    showError(data.error)
  }
}

function showSuccess(id) {
  document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
  printForm.style.display = 'inline';
  printForm.addEventListener('click', (e) => {
    location.href = `phoenix-freedom-foundation-backend.webflow.io/completed-forms/iiss-session-note?id=${id}`
  })
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}

async function sendNotification(id, recipient, type, priority) {
  let message = `You have a new <br/><a href=phoenix-freedom-foundation-backend.webflow.io/completed-forms/iiss-session-note?id=${id}>IISS Session Note</a>`
  if(priority == 'urgent') {message = `You have an urgent case to review <br/><a href=phoenix-freedom-foundation-backend.webflow.io/completed-forms/iiss-session-note?id=${id}>IISS Session Note</a>`}
  console.log(message)
  const url = 'https://pffm.azurewebsites.net/notices'
  let notification = {
    'name': recipient,
    'notice': message,
    'type': type,
    'priority': priority
  }
  const header = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
  }
  
  fetch(url, {
    method: "POST",
    headers: header,
    body: JSON.stringify(notification)
  })
    .then(() => console.log('notice sent'))
    .catch(console.error)
}
