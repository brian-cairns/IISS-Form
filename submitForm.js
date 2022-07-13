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

let serviceLocation = document.querySelector('input#serviceLocation')
serviceLocation.addEventListener('change', (e) => {
	newForm.serviceLocation = e.target.value;
  console.log(newForm.serviceLocation);
})

let selfInjury1 = document.getElementById('selfInjury1')
selfInjury1.addEventListener('click', (e) => {
    newForm.selfInjury = document.getElementById('selfInjuryText1').innerText
    document.getElementById('selfInjury1').style.backgroudColor = "#000000"
    console.log(newForm.selfInjury)
})

let selfInjury2 = document.getElementById('selfInjury2')
selfInjury2.addEventListener('click', (e) => {
    newForm.selfInjury = document.getElementById('selfInjuryText2').innerText
    document.getElementById('selfInjury2').style.backgroudColor = "#000000"
    console.log(newForm.selfInjury)
})

let selfInjury3 = document.getElementById('selfInjury3')
selfInjury3.addEventListener('click', (e) => {
    newForm.selfInjury = document.getElementById('selfInjuryText3').innerText
    document.getElementById('selfInjury3').style.backgroudColor = "#000000"
    console.log(newForm.selfInjury)
})

let selfInjury4 = document.getElementById('selfInjury4')
selfInjury4.addEventListener('click', (e) => {
    newForm.selfInjury = document.getElementById('selfInjuryText4').innerText
    document.getElementById('selfInjury4').style.backgroudColor = "#000000"
    console.log(newForm.selfInjury)
})

let selfInjury5 = document.getElementById('selfInjury5')
selfInjury5.addEventListener('click', (e) => {
    newForm.selfInjury = document.getElementById('selfInjuryText5').innerText
    document.getElementById('selfInjury5').style.backgroudColor = "#000000"
    console.log(newForm.selfInjury)
})

let reportable1 = document.getElementById('reportable1')
reportable1.addEventListener('click', (e) => {
    newForm.reportable = document.getElementById('reportableText1').innerText
    document.getElementById('reportable1').style.backgroudColor = "#000000"
    console.log(newForm.reportable)
})

let reportable2 = document.getElementById('reportable2')
reportable2.addEventListener('click', (e) => {
    newForm.reportable = document.getElementById('reportableText2').innerText
    document.getElementById('reportable2').style.backgroudColor = "#000000"
    console.log(newForm.reportable)
})

let reportable3 = document.getElementById('reportable3')
reportable3.addEventListener('click', (e) => {
    newForm.reportable = document.getElementById('reportableText3').innerText
    document.getElementById('reportable3').style.backgroudColor = "#000000"
    console.log(newForm.reportable)
})

let reportable4 = document.getElementById('reportable4')
reportable4.addEventListener('click', (e) => {
    newForm.reportable = document.getElementById('reportableText4').innerText
    document.getElementById('reportable4').style.backgroudColor = "#000000"
    console.log(newForm.reportable)
})

let reportable5 = document.getElementById('reportable5')
reportable5.addEventListener('click', (e) => {
    newForm.reportable = document.getElementById('reportableText5').innerText
    document.getElementById('reportable5').style.backgroudColor = "#000000"
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
    document.getElementById('aggressive1').style.backgroudColor = "#000000"
    console.log(newForm.aggressive)
})

let aggressive2 = document.getElementById('aggressive2')
aggressive2.addEventListener('click', (e) => {
    newForm.aggressive = document.getElementById('aggressiveText2').innerText
    document.getElementById('aggressive2').style.backgroudColor = "#000000"
    console.log(newForm.aggressive)
})

let aggressive3 = document.getElementById('aggressive3')
aggressive3.addEventListener('click', (e) => {
    newForm.aggressive = document.getElementById('aggressiveText3').innerText
    document.getElementById('aggressive3').style.backgroudColor = "#000000"
    console.log(newForm.aggressive)
})

let aggressive4 = document.getElementById('aggressive4')
aggressive4.addEventListener('click', (e) => {
    newForm.aggressive = document.getElementById('aggressiveText4').innerText
    document.getElementById('aggressive4').style.backgroudColor = "#000000"
    console.log(newForm.aggressive)
})

let aggressive5 = document.getElementById('aggressive5')
aggressive5.addEventListener('click', (e) => {
    newForm.aggressive = document.getElementById('aggressiveText5').innerText
    document.getElementById('aggressive5').style.backgroudColor = "#000000"
    console.log(newForm.aggressive)
})

let compliance1 = document.getElementById('compliance1')
compliance1.addEventListener('click', (e) => {
    newForm.compliance = document.getElementById('complianceText1').innerText
    document.getElementById('compliance1').style.backgroudColor = "#000000"
    console.log(newForm.compliance)
})

let compliance2 = document.getElementById('compliance2')
compliance2.addEventListener('click', (e) => {
    newForm.compliance = document.getElementById('complianceText2').innerText
    document.getElementById('compliance2').style.backgroudColor = "#000000"
    console.log(newForm.compliance)
})

let compliance3 = document.getElementById('compliance3')
compliance3.addEventListener('click', (e) => {
    newForm.compliance = document.getElementById('complianceText3')
    document.getElementById('compliance3').style.backgroudColor = "#000000"
    console.log(newForm.compliance)
})

let compliance4 = document.getElementById('compliance4')
compliance4.addEventListener('click', (e) => {
    newForm.compliance = document.getElementById('complianceText4').innerText
    document.getElementById('compliance4').style.backgroudColor = "#000000"
    console.log(newForm.compliance)
})

let compliance5 = document.getElementById('compliance5')
compliance5.addEventListener('click', (e) => {
    newForm.compliance = document.getElementById('complianceText5').innerText
    document.gtiElementById('compliance5').style.backgroudColor = "#000000"
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
    document.getElementById('goal1-1').style.backgroudColor = "#000000"
    newForm.goal1 = document.getElementById('goal1-Text1').innerText
}))

let goal1_2 = document.getElementById('goal1-2')
goal1_2.addEventListener('click', ((e) => {
    document.getElementById('goal1-2').style.backgroudColor = "#000000"
    newForm.goal1 = document.getElementById('goal1-Text2').innerText
}))

let goal1_3 = document.getElementById('goal1-3')
goal1_3.addEventListener('click', ((e) => {
    document.getElementById('goal1-3').style.backgroudColor = "#000000"
    newForm.goal1 = document.getElementById('goal1-Text3').innerText
}))

let goal1_4 = document.getElementById('goal1-4')
goal1_4.addEventListener('click', ((e) => {
    document.getElementById('goal1-4').style.backgroudColor = "#000000"
    newForm.goal1 = document.getElementById('goal1-Text4').innerText
}))

let goal1_5 = document.getElementById('goal1-5')
goal1_5.addEventListener('click', ((e) => {
    document.getElementById('goal1-5').style.backgroudColor = "#000000"
    newForm.goal1 = document.getElementById('goal1-Text5').innerText
}))

let goal1_6 = document.getElementById('goal1-6')
goal1_6.addEventListener('click', ((e) => {
    document.getElementById('goal1-6').style.backgroudColor = "#000000"
    newForm.goal1 = document.getElementById('goal1-Text6').innerText
}))

let goal1_7 = document.getElementById('goal1-7')
goal1_7.addEventListener('click', ((e) => {
    document.getElementById('goal1-7').style.backgroudColor = "#000000"
    newForm.goal1 = document.getElementById('goal1-Text7').innerText
}))

let goal1_8 = document.getElementById('goal1-8')
goal1_8.addEventListener('click', ((e) => {
    document.getElementById('goal1-8').style.backgroudColor = "#000000"
    newForm.goal1 = document.getElementById('goal1-Text8').innerText
}))

let goal2_1 = document.getElementById('goal2-1')
goal2_1.addEventListener('click', ((e) => {
    document.getElementById('goal2-1').style.backgroudColor = "#000000"
    newForm.goal2 = document.getElementById('goal2-Text1').innerText
}))

let goal2_2 = document.getElementById('goal2-2')
goal2_2.addEventListener('click', ((e) => {
    document.getElementById('goal2-2').style.backgroudColor = "#000000"
    newForm.goal2 = document.getElementById('goal2-Text2').innerText
}))

let goal2_3 = document.getElementById('goal2-3')
goal2_3.addEventListener('click', ((e) => {
    document.getElementById('goal2-3').style.backgroudColor = "#000000"
    newForm.goal2 = document.getElementById('goal2-Text3').innerText
}))

let goal2_4 = document.getElementById('goal2-4')
goal2_4.addEventListener('click', ((e) => {
    document.getElementById('goal2-4').style.backgroudColor = "#000000"
    newForm.goal2 = document.getElementById('goal2-Text4').innerText
}))

let goal2_5 = document.getElementById('goal2-5')
goal2_5.addEventListener('click', ((e) => {
    document.getElementById('goal2-5').style.backgroudColor = "#000000"
    newForm.goal2 = document.getElementById('goal2-Text5').innerText
}))

let goal2_6 = document.getElementById('goal2-6')
goal2_6.addEventListener('click', ((e) => {
    document.getElementById('goal2-6').style.backgroudColor = "#000000"
    newForm.goal2 = document.getElementById('goal2-Text6').innerText
}))

let goal2_7 = document.getElementById('goal2-7')
goal2_7.addEventListener('click', ((e) => {
    document.getElementById('goal2-7').style.backgroudColor = "#000000"
    newForm.goal2 = document.getElementById('goal2-Text7').innerText
}))

let goal2_8 = document.getElementById('goal2-8')
goal2_8.addEventListener('click', ((e) => {
    document.getElementById('goal2-8').style.backgroudColor = "#000000"
    newForm.goal2 = document.getElementById('goal2-Text8').innerText
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
    document.getElementById('trials1-1').style.backgroudColor = "#000000"
    newForm.trials1 = document.getElementById('trials1-Text1').innerText
})

let trials1_2 = document.getElementById('trials1-2')
trials1_2.addEventListener('click', (e) => {
    document.getElementById('trials1-2').style.backgroudColor = "#000000"
    newForm.trials1 = document.getElementById('trials1-Text2').innerText
})

let trials1_3 = document.getElementById('trials1-3')
trials1_3.addEventListener('click', (e) => {
    document.getElementById('trials1-3').style.backgroudColor = "#000000"
    newForm.trials1 = document.getElementById('trials1-Text3').innerText
})

let prompting1 = document.getElementById('prompting1')
prompting1.addEventListener('click', (e) => {
    document.getElementById('prompting1').style.backgroudColor = "#000000"
    newForm.prompting = document.getElementById('promptingText1').innerText
})

let prompting2 = document.getElementById('prompting2')
prompting2.addEventListener('click', (e) => {
    document.getElementById('prompting2').style.backgroudColor = "#000000"
    newForm.prompting = document.getElementById('promptingText2').innerText
})

let prompting3 = document.getElementById('prompting3')
prompting3.addEventListener('click', (e) => {
    document.getElementById('prompting3').style.backgroudColor = "#000000"
    newForm.prompting = document.getElementById('promptingText3').innerText
})

let prompting4 = document.getElementById('prompting4')
prompting4.addEventListener('click', (e) => {
    document.getElementById('prompting4').style.backgroudColor = "#000000"
    newForm.prompting = document.getElementById('promptingText4').innerText
})

let prompting5 = document.getElementById('prompting5')
prompting5.addEventListener('click', (e) => {
    document.getElementById('prompting5').style.backgroudColor = "#000000"
    newForm.prompting = document.getElementById('promptingText5').innerText
})

let prompting2_1 = document.getElementById('prompting2-1')
prompting2_1.addEventListener('click', (e) => {
    document.getElementById('prompting2-1').style.backgroudColor = "#000000"
    newForm.prompting2 = document.getElementById('prompting2-Text1').innerText
})

let prompting2_2 = document.getElementById('prompting2-2')
prompting2_2.addEventListener('click', (e) => {
    document.getElementById('prompting2-2').style.backgroudColor = "#000000"
    newForm.prompting2 = document.getElementById('prompting2-Text2').innerText
})

let prompting2_3 = document.getElementById('prompting2-3')
prompting2_3.addEventListener('click', (e) => {
    document.getElementById('prompting2-3').style.backgroudColor = "#000000"
    newForm.prompting2 = document.getElementById('prompting2-Text3').innerText
})

let prompting2_4 = document.getElementById('prompting2-4')
prompting2_4.addEventListener('click', (e) => {
    document.getElementById('prompting2-4').style.backgroudColor = "#000000"
    newForm.prompting2 = document.getElementById('prompting2-Text4').innerText
})

let prompting2_5 = document.getElementById('prompting2-5')
prompting2_5.addEventListener('click', (e) => {
    document.getElementById('prompting2-5').style.backgroudColor = "#000000"
    newForm.prompting2 = document.getElementById('prompting2-Text5').innerText
})

let trials2_1 = document.getElementById('trials2-1')
trials2_1.addEventListener('click', (e) => {
    document.getElementById('trials2-1').style.backgroudColor = "#000000"
    newForm.trials2 = document.getElementById('trials2-Text1').innerText
})

let trials2_2 = document.getElementById('trials2-2')
trials2_2.addEventListener('click', (e) => {
    document.getElementById('trials2-2').style.backgroudColor = "#000000"
    newForm.trials2 = document.getElementById('trials2-Text2').innerText
})

let trials2_3 = document.getElementById('trials2-3')
trials2_3.addEventListener('click', (e) => {
    document.getElementById('trials2-3').style.backgroudColor = "#000000"
    newForm.trials2 = document.getElementById('trials2-Text3').innerText
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
