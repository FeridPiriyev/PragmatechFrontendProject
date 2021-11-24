suallar = [{
    sual: '2+2=?',
    cavablar: [3, 4, 34, 5],
    cavab: 'B'
},
{
    sual: '4+2=?',
    cavablar: [6, 7, 2, 15],
    cavab: 'A'
},
{
    sual: '7+2=?',
    cavablar: [16, 6, 9, 15],
    cavab: "C"
},
]

answers = ['A', 'A', 'D']
// 1-ci sualin yoxlanisi
let result = document.querySelector('.result')

for (let i = 0; i < suallar.length; i++) {
result.innerHTML += messageByIndex(i)
}

function messageByIndex(index) {
return generateTemplate(showMessage(checkAnswer(answers[index], suallar[index].cavab)))
}

function checkAnswer(userAnswer, correctAnswer) {
if (userAnswer == correctAnswer) {
    return true
} else {
    return false
}
}

function showMessage(status) {
if (status) {
    return 'Success'
} else {
    return 'Fail'
}
}

function generateTemplate(message) {
return `<p>${message}</p>`


}