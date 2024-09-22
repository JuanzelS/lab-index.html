import data from './data.js';

console.log(data.title);
console.log(data.description);
console.log(data.questions);

const titleH1 = document.querySelector('#title');
titleH1.innerHTML = data.title;

const descriptionP = document.querySelector('#description');
descriptionP.innerHTML = data.description;

const scoreP = document.querySelector('#score');
let questionIndex = -1;

const showNextQuestion = () => {
    questionIndex += 1;
    questionIndex = questionIndex % data.questions.length;

    const qCardP = document.querySelector('#q-card p');
    const aCardP = document.querySelector('#a-card p');

    qCardP.innerHTML = data.questions[questionIndex].q;
    aCardP.innerHTML = data.questions[questionIndex].a;

    scoreP.innerHTML = `Question ${questionIndex + 1}/${data.questions.length}`;
};

showNextQuestion();

document.body.addEventListener('click', e => {
    const questionContainer = document.querySelector('#flip-card');
    if (e.target.matches('#answer-button')) {
        questionContainer.classList.add('flip');
    } else if (e.target.matches('#question-button')) {
        questionContainer.classList.remove('flip');
    } else if (e.target.matches('#next-button')) {
        questionContainer.classList.remove('flip');
        showNextQuestion();
    }
});
