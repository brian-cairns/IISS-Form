let submit = document.getElementById('submit')
console.log(submit)
const formName = 'IISSSession'
console.log('form: ' + formName)
let newForm = {}

let printForm = document.getElementById('printToPDF')
printForm.style.display = 'none'

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

let selfInjury1 = document.getElementById('selfInjury1')
selfInjury1.addEventListener('click', (e) => {
    newForm.selfInjury = document.getElementById('selfInjuryText1').innerText
    selfInjury1.style.backgroundColor ="red" ? selfInjury1.style.backgroundColor ="none" : selfInjury1.style.backgroundColor ="red"
    console.log(newForm.selfInjury)
})

let selfInjury2 = document.getElementById('selfInjury2')
    selfInjury2.addEventListener('click', (e) => {
    newForm.selfInjury = document.getElementById('selfInjuryText2').innerText
    selfInjury2.style.backgroundColor ="red" ? selfInjury2.style.backgroundColor ="none" : selfInjury2.style.backgroundColor ="red"
    console.log(newForm.selfInjury)
})

let selfInjury3 = document.getElementById('selfInjury3')
selfInjury3.addEventListener('click', (e) => {
    newForm.selfInjury = document.getElementById('selfInjuryText3').innerText
    selfInjury3.style.backgroundColor ="red" ? selfInjury3.style.backgroundColor ="none" : selfInjury3.style.backgroundColor ="red"
    console.log(newForm.selfInjury)
})

let selfInjury4 = document.getElementById('selfInjury4')
selfInjury4.addEventListener('click', (e) => {
    newForm.selfInjury = document.getElementById('selfInjuryText4').innerText
    selfInjury4.style.backgroundColor ="red" ? selfInjury4.style.backgroundColor ="none" : selfInjury4.style.backgroundColor ="red"
    console.log(newForm.selfInjury)
})

let selfInjury5 = document.getElementById('selfInjury5')
selfInjury5.addEventListener('click', (e) => {
    newForm.selfInjury = document.getElementById('selfInjuryText5').innerText
    selfInjury4.style.backgroundColor ="red" ? selfInjury4.style.backgroundColor ="none" : selfInjury4.style.backgroundColor ="red"
    console.log(newForm.selfInjury)
})

let reportable1 = document.getElementById('reportable1')
reportable1.addEventListener('click', (e) => {
    newForm.reportable = document.getElementById('reportableText1').innerText
    reportable1.style.backgroundColor ="red" ? reportable1.style.backgroundColor ="none" : reportable1.style.backgroundColor ="red"
    console.log(newForm.reportable)
})

let reportable2 = document.getElementById('reportable2')
reportable2.addEventListener('click', (e) => {
    newForm.reportable = document.getElementById('reportableText2').innerText
    reportable2.style.backgroundColor ="red" ? reportable2.style.backgroundColor ="none" : reportable2.style.backgroundColor ="red"
    console.log(newForm.reportable)
})

let reportable3 = document.getElementById('reportable3')
reportable3.addEventListener('click', (e) => {
    newForm.reportable = document.getElementById('reportableText3').innerText
    reportable3.style.backgroundColor ="red" ? reportable3.style.backgroundColor ="none" : reportable3.style.backgroundColor ="red"
    console.log(newForm.reportable)
})

let reportable4 = document.getElementById('reportable4')
reportable4.addEventListener('click', (e) => {
    newForm.reportable = document.getElementById('reportableText4').innerText
    reportable4.style.backgroundColor ="red" ? reportable4.style.backgroundColor ="none" : reportable4.style.backgroundColor ="red"
    console.log(newForm.reportable)
})

let reportable5 = document.getElementById('reportable5')
reportable5.addEventListener('click', (e) => {
    newForm.reportable = document.getElementById('reportableText5').innerText
    reportable5.style.backgroundColor ="red" ? reportable5.style.backgroundColor ="none" : reportable5.style.backgroundColor ="red"
    console.log(newForm.reportable)
})

let dangerous = document.querySelector('input#dangerous')
dangerous.addEventListener('change', (e) => {
	newForm.dangerous = e.target.value;
  console.log(newForm.dangerous);
})

let aggressive1 = document.getElementById('aggressive1')
aggressive1.addEventListener('click', (e) => {
    newForm.aggressive = document.getElementById('aggressiveText1').innerText
    aggressive1.style.backgroundColor ="red" ? aggressive1.style.backgroundColor ="none" : aggressive1.style.backgroundColor ="red"
    console.log(newForm.aggressive)
})

let aggressive2 = document.getElementById('aggressive2')
aggressive2.addEventListener('click', (e) => {
    newForm.aggressive = document.getElementById('aggressiveText2').innerText
    aggressive2.style.backgroundColor ="red" ? aggressive2.style.backgroundColor ="none" : aggressive2.style.backgroundColor ="red"
    console.log(newForm.aggressive)
})

let aggressive3 = document.getElementById('aggressive3')
aggressive3.addEventListener('click', (e) => {
    newForm.aggressive = document.getElementById('aggressiveText3').innerText
    aggressive3.style.backgroundColor ="red" ? aggressive3.style.backgroundColor ="none" : aggressive3.style.backgroundColor ="red"
    console.log(newForm.aggressive)
})

let aggressive4 = document.getElementById('aggressive4')
aggressive4.addEventListener('click', (e) => {
    newForm.aggressive = document.getElementById('aggressiveText4').innerText
    aggressive4.style.backgroundColor ="red" ? aggressive4.style.backgroundColor ="none" : aggressive4.style.backgroundColor ="red"
    console.log(newForm.aggressive)
})

let aggressive5 = document.getElementById('aggressive5')
aggressive5.addEventListener('click', (e) => {
    newForm.aggressive = document.getElementById('aggressiveText5').innerText
    document.getElementById('aggressive5').style.backgroundColor ="red"

    console.log(newForm.aggressive)
})

let compliance1 = document.getElementById('compliance1')
compliance1.addEventListener('click', (e) => {
    newForm.compliance = document.getElementById('complianceText1').innerText
    compliance1.style.backgroundColor ="red" ? compliance1.style.backgroundColor ="none" : compliance1.style.backgroundColor ="red"
    console.log(newForm.compliance)
})

let compliance2 = document.getElementById('compliance2')
compliance2.addEventListener('click', (e) => {
    newForm.compliance = document.getElementById('complianceText2').innerText
    compliance2.style.backgroundColor ="red" ? compliance2.style.backgroundColor ="none" : compliance2.style.backgroundColor ="red"
    console.log(newForm.compliance)
})

let compliance3 = document.getElementById('compliance3')
compliance3.addEventListener('click', (e) => {
    newForm.compliance = document.getElementById('complianceText3')
    compliance3.style.backgroundColor ="red" ? compliance3.style.backgroundColor ="none" : compliance3.style.backgroundColor ="red"
    console.log(newForm.compliance)
})

let compliance4 = document.getElementById('compliance4')
compliance4.addEventListener('click', (e) => {
    newForm.compliance = document.getElementById('complianceText4').innerText
    compliance4.style.backgroundColor ="red" ? compliance4.style.backgroundColor ="none" : compliance4.style.backgroundColor ="red"
    console.log(newForm.compliance)
})

let compliance5 = document.getElementById('compliance5')
compliance5.addEventListener('click', (e) => {
    newForm.compliance = document.getElementById('complianceText5').innerText
    compliance5.style.backgroundColor ="red" ? compliance5.style.backgroundColor ="none" : compliance5.style.backgroundColor ="red"
    console.log(newForm.compliance)
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

let goal1_1 = document.getElementById('goal1-1')
goal1_1.addEventListener('click', ((e) => {
    goal1_1.style.backgroundColor ="red" ? goal1_1.style.backgroundColor ="none" : goal1_1.style.backgroundColor ="red"
  newForm.goal1 = document.getElementById('goal1-Text1').innerText
  console.log(newForm.goal1)
}))

let goal1_2 = document.getElementById('goal1-2')
goal1_2.addEventListener('click', ((e) => {
    goal1_2.style.backgroundColor ="red" ? goal1_2.style.backgroundColor ="none" : goal1_2.style.backgroundColor ="red"
  newForm.goal1 = document.getElementById('goal1-Text2').innerText
  console.log(newForm.goal1)
}))

let goal1_3 = document.getElementById('goal1-3')
goal1_3.addEventListener('click', ((e) => {
  goal1_3.style.backgroundColor ="red" ? goal1_3.style.backgroundColor ="none" : goal1_3.style.backgroundColor ="red"
  newForm.goal1 = document.getElementById('goal1-Text3').innerText
  console.log(newForm.goal1)
}))

let goal1_4 = document.getElementById('goal1-4')
goal1_4.addEventListener('click', ((e) => {
     goal1_4.style.backgroundColor ="red" ? goal1_4.style.backgroundColor ="none" : goal1_4.style.backgroundColor ="red"
  newForm.goal1 = document.getElementById('goal1-Text4').innerText
  console.log(newForm.goal1)
}))

let goal1_5 = document.getElementById('goal1-5')
goal1_5.addEventListener('click', ((e) => {
  goal1_5.style.backgroundColor ="red" ? goal1_5.style.backgroundColor ="none" : goal1_5.style.backgroundColor ="red"
  newForm.goal1 = document.getElementById('goal1-Text5').innerText
  console.log(newForm.goal1)
}))

let goal1_6 = document.getElementById('goal1-6')
goal1_6.addEventListener('click', ((e) => {
  goal1_6.style.backgroundColor ="red" ? goal1_6.style.backgroundColor ="none" : goal1_6.style.backgroundColor ="red"
  newForm.goal1 = document.getElementById('goal1-Text6').innerText
  console.log(newForm.goal1)
}))

let goal1_7 = document.getElementById('goal1-7')
goal1_7.addEventListener('click', ((e) => {
  goal1_7.style.backgroundColor ="red" ? goal1_7.style.backgroundColor ="none" : goal1_7.style.backgroundColor ="red"
  newForm.goal1 = document.getElementById('goal1-Text7').innerText
  console.log(newForm.goal1)
}))

let goal1_8 = document.getElementById('goal1-8')
goal1_8.addEventListener('click', ((e) => {
  goal1_8.style.backgroundColor ="red" ? goal1_8.style.backgroundColor ="none" : goal1_8.style.backgroundColor ="red"
  newForm.goal1 = document.getElementById('goal1-Text8').innerText
  console.log(newForm.goal1)
}))

let goal2_1 = document.getElementById('goal2-1')
goal2_1.addEventListener('click', ((e) => {
  goal2_1.style.backgroundColor = "red" ? goal2_1.style.backgroundColor = "none" : goal2_1.style.backgroundColor = "red"
  newForm.goal2 = document.getElementById('goal2-Text1').innerText
  console.log(newForm.goal2)
}))

let goal2_2 = document.getElementById('goal2-2')
goal2_2.addEventListener('click', ((e) => {
  goal2_2.style.backgroundColor ="red" ? goal2_2.style.backgroundColor ="none" : goal2_2.style.backgroundColor ="red"
  newForm.goal2 = document.getElementById('goal2-Text2').innerText
  console.log(newForm.goal2)
}))

let goal2_3 = document.getElementById('goal2-3')
goal2_3.addEventListener('click', ((e) => {
  goals2_3.style.backgroundColor ="red" ? goals2_3.style.backgroundColor ="none" : goals2_3.style.backgroundColor ="red"
  newForm.goal2 = document.getElementById('goal2-Text3').innerText
  console.log(newForm.goal2)
}))

let goal2_4 = document.getElementById('goal2-4')
goal2_4.addEventListener('click', ((e) => {
  goals2_4.style.backgroundColor ="red" ? goals2_4.style.backgroundColor ="none" : goals2_4.style.backgroundColor ="red"
  newForm.goal2 = document.getElementById('goal2-Text4').innerText
  console.log(newForm.goal2)
}))

let goal2_5 = document.getElementById('goal2-5')
goal2_5.addEventListener('click', ((e) => {
  goal2_5.style.backgroundColor ="red" ? goal2_5.style.backgroundColor ="none" : goal2_5.style.backgroundColor ="red"
  newForm.goal2 = document.getElementById('goal2-Text5').innerText
  console.log(newForm.goal2)
}))

let goal2_6 = document.getElementById('goal2-6')
goal2_6.addEventListener('click', ((e) => {
  goal2_6.style.backgroundColor ="red" ? goal2_6.style.backgroundColor ="none" : goal2_6.style.backgroundColor ="red"
  newForm.goal2 = document.getElementById('goal2-Text6').innerText
  console.log(newForm.goal2)
}))

let goal2_7 = document.getElementById('goal2-7')
goal2_7.addEventListener('click', ((e) => {
  goal2_7.style.backgroundColor ="red" ? goal2_7.style.backgroundColor ="none" : goal2_7.style.backgroundColor ="red"
  newForm.goal2 = document.getElementById('goal2-Text7').innerText
  console.log(newForm.goal2)
}))

let goal2_8 = document.getElementById('goal2-8')
goal2_8.addEventListener('click', ((e) => {
  goal2_8.style.backgroundColor ="red" ? goal2_8.style.backgroundColor ="none" : goal2_8.style.backgroundColor ="red"
  newForm.goal2 = document.getElementById('goal2-Text8').innerText
  console.log(newForm.goal2)
}))

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

let trials1_1 = document.getElementById('trials1-1')
trials1_1.addEventListener('click', (e) => {
  trials1_1.style.backgroundColor ="red" ? trials1_1.style.backgroundColor ="none" : trials1_1.style.backgroundColor ="red"
  newForm.trials1 = document.getElementById('trials1-Text1').innerText
  console.log(newForm.trials1)
})

let trials1_2 = document.getElementById('trials1-2')
trials1_2.addEventListener('click', (e) => {
  trials1_2.style.backgroundColor ="red" ? trials1_2.style.backgroundColor ="none" : trials1_2.style.backgroundColor ="red"
  newForm.trials1 = document.getElementById('trials1-Text2').innerText
  console.log(newForm.trials1)
})

let trials1_3 = document.getElementById('trials1-3')
trials1_3.addEventListener('click', (e) => {
  trials1_3.style.backgroundColor ="red" ? trials1_3.style.backgroundColor ="none" : trials1_3.style.backgroundColor ="red"
  newForm.trials1 = document.getElementById('trials1-Text3').innerText
  console.log(newForm.trials1)
})

let prompting1 = document.getElementById('prompting1')
prompting1.addEventListener('click', (e) => {
  prompting1.style.backgroundColor ="red" ? prompting1.style.backgroundColor ="none" : prompting1.style.backgroundColor ="red"
  newForm.prompting = document.getElementById('promptingText1').innerText
  console.log(newForm.prompting)
})

let prompting2 = document.getElementById('prompting2')
prompting2.addEventListener('click', (e) => {
  prompting2.style.backgroundColor ="red" ? prompting2.style.backgroundColor ="none" : prompting2.style.backgroundColor ="red"
  newForm.prompting = document.getElementById('promptingText2').innerText
  console.log(newForm.prompting)
})

let prompting3 = document.getElementById('prompting3')
prompting3.addEventListener('click', (e) => {
  prompting3.style.backgroundColor ="red" ? prompting3.style.backgroundColor ="none" : prompting3.style.backgroundColor ="red"
  newForm.prompting = document.getElementById('promptingText3').innerText
  console.log(newForm.prompting)
})

let prompting4 = document.getElementById('prompting4')
prompting4.addEventListener('click', (e) => {
  prompting4.style.backgroundColor ="red" ? prompting4.style.backgroundColor ="none" : prompting4.style.backgroundColor ="red"
  newForm.prompting = document.getElementById('promptingText4').innerText
  console.log(newForm.prompting)
})

let prompting5 = document.getElementById('prompting5')
prompting5.addEventListener('click', (e) => {
  prompting5.style.backgroundColor ="red" ? prompting5.style.backgroundColor ="none" : prompting5.style.backgroundColor ="red"
  newForm.prompting = document.getElementById('promptingText5').innerText
  console.log(newForm.prompting)
})

let prompting2_1 = document.getElementById('prompting2-1')
prompting2_1.addEventListener('click', (e) => {
  prompting2_1.style.backgroundColor ="red" ? prompting2_1.style.backgroundColor ="none" : prompting2_1.style.backgroundColor ="red"
  newForm.prompting2 = document.getElementById('prompting2-Text1').innerText
  console.log(newForm.prompting2)
})

let prompting2_2 = document.getElementById('prompting2-2')
prompting2_2.addEventListener('click', (e) => {
  prompting2_2.style.backgroundColor ="red" ? prompting2_2.style.backgroundColor ="none" : prompting2_2.style.backgroundColor ="red"
  newForm.prompting2 = document.getElementById('prompting2-Text2').innerText
  console.log(newForm.prompting2)
})

let prompting2_3 = document.getElementById('prompting2-3')
prompting2_3.addEventListener('click', (e) => {
  prompting2_3.style.backgroundColor ="red" ? prompting2_3.style.backgroundColor ="none" : prompting2_3.style.backgroundColor ="red"
  newForm.prompting2 = document.getElementById('prompting2-Text3').innerText
  console.log(newForm.prompting2)
})

let prompting2_4 = document.getElementById('prompting2-4')
prompting2_4.addEventListener('click', (e) => {
  prompting2_4.style.backgroundColor ="red" ? prompting2_4.style.backgroundColor ="none" : prompting2_4.style.backgroundColor ="red"
  newForm.prompting2 = document.getElementById('prompting2-Text4').innerText
  console.log(newForm.prompting2)
})

let prompting2_5 = document.getElementById('prompting2-5')
prompting2_5.addEventListener('click', (e) => {
  prompting2_5.style.backgroundColor ="red" ? prompting2_5.style.backgroundColor ="none" : prompting2_5.style.backgroundColor ="red"
  newForm.prompting2 = document.getElementById('prompting2-Text5').innerText
  console.log(newForm.prompting2)
})

let trials2_1 = document.getElementById('trials2-1')
trials2_1.addEventListener('click', (e) => {
  trials2_1.style.backgroundColor ="red" ? trials2_1.style.backgroundColor ="none" : trials2_1.style.backgroundColor ="red"
  newForm.trials2 = document.getElementById('trials2-Text1').innerText
  console.log(newForm.prompting2)
})

let trials2_2 = document.getElementById('trials2-2')
trials2_2.addEventListener('click', (e) => {
  trials2_2.style.backgroundColor ="red" ? trials2_2.style.backgroundColor ="none" : trials2_2.style.backgroundColor ="red"
  newForm.trials2 = document.getElementById('trials2-Text2').innerText
  console.log(newForm.trials2)
})

let trials2_3 = document.getElementById('trials2-3')
trials2_3.addEventListener('click', (e) => {
  trials2_3.style.backgroundColor ="red" ? trials2_3.style.backgroundColor ="none" : trials2_3.style.backgroundColor ="red"
  newForm.trials2 = document.getElementById('trials2-Text3').innerText
  console.log(newForm.trials2)
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

let dangerousNo = document.getElementById('dangerousNo')
dangerousNo.addEventListener('click', (e) => {
  dangerousNo.style.backgroundColor ="red" ? dangerousNo.style.backgroundColor ="none" : dangerousNo.style.backgroundColor ="red"
  newForm.dangerous = 'no'
  console.log(newForm.dangerous)
})

let dangerousYes = document.getElementById(dangerousYes)
dangerousYes.addEventListener('click', (e) => {
  dangerousYes.style.backgroundColor ="red" ? dangerousYes.style.backgroundColor ="none" : dangerousYes.style.backgroundColor ="red"
})

let hospitalizedNo = document.getElementById('hospitalizedNo')
hospitalizedNo.addEventListener('click', (e) => {
  hospitalizedNo.style.backgroundColor ="red" ? hospitalizedNo.style.backgroundColor ="none" : hospitalizedNo.style.backgroundColor ="red"
  newForm.hospitalized = 'no'
  console.log(newForm.hospitalize)
})

let hospitalizedYes = document.getElementById('hospitalizedYes')
hospitalizedYes.addEventListener('click', (e) => {
  hospitalizedYes.style.backgroundColor ="red" ? hospitalizedYes.style.backgroundColor ="none" : hospitalizedYesstyle.backgroundColor ="red"
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
    'name': client,
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
