const questions = [
    {
        question: "1.Какой праздник казахстанцы отмечают 1 января?",
        answers: [
            { text: "A) День Конституции", correct: false },
            { text: "B) День столицы", correct: false },
            { text: "C) Новый год", correct: true },
            { text: "D) Наурыз мейрамы", correct: false }
        ]
    },
    {
        question: "2.Как называется праздник, отмечаемый 8 марта?",
        answers: [
            { text: "A) День независимости", correct: false },
            { text: "B) День единства", correct: false },
            { text: "C) Международный женский день", correct: true },
            { text: "D) День защитника Отечества", correct: false }
        ]
    },
    {
        question: "3.Какой из праздников Казахстана длится три дня?",
        answers: [
            { text: "A) Наурыз мейрамы", correct: true },
            { text: "B) День столицы", correct: false },
            { text: "C) День Конституции", correct: false },
            { text: "D) День независимости", correct: false }
        ]
    },
    {
        question: "4.Какой праздник отмечается 1 мая в Казахстане?",
        answers: [
            { text: "A) День трудящихся", correct: false },
            { text: "B) День единства народа Казахстана", correct: true },
            { text: "C) День защиты Отечества", correct: false },
            { text: "D) День Конституции", correct: false }
        ]
    },
    {
        question: "5.Какой праздник отмечается 7 мая?",
        answers: [
            { text: "A) День независимости", correct: false },
            { text: "B) День победы", correct: false },
            { text: "C) День защитника Отечества", correct: true },
            { text: "D) День Конституции", correct: false }
        ]
    },
    {
        question: "6.Какой день в Казахстане отмечается 9 мая?",
        answers: [
            { text: "A) День независимости", correct: false },
            { text: "B) День победы", correct: true },
            { text: "C) День Конституции", correct: false },
            { text: "D) День защитника Отечества", correct: false }
        ]
    },
    {
        question: "7.Какой праздник отмечается 6 июля в Казахстане?",
        answers: [
            { text: "A) День столицы", correct: true },
            { text: "B) День единства народа", correct: false },
            { text: "C) День независимости", correct: false },
            { text: "D) День республики", correct: false }
        ]
    },
    {
        question: "8.Когда в Казахстане отмечается День Конституции?",
        answers: [
            { text: "A) 30 августа", correct: true },
            { text: "B) 1 мая", correct: false },
            { text: "C) 6 июля", correct: false },
            { text: "D) 9 мая", correct: false }
        ]
    },
    {
        question: "9.Когда в Казахстане отмечается День Республики?",
        answers: [
            { text: "A) 25 октября", correct: true },
            { text: "B) 1 мая", correct: false },
            { text: "C) 9 мая", correct: false },
            { text: "D) 7 мая", correct: false }
        ]
    },
    {
        question: "10.Какой день Казахстана является национальным праздником независимости?",
        answers: [
            { text: "A) 16-17 декабря", correct: false },
            { text: "B) 25 октября", correct: false },
            { text: "C) 16-17 декабря", correct: true },
            { text: "D) 6 июля", correct: false }
        ]
    },
    {
        question: "11.Когда Казахстан отмечает День Защитника Отечества?",
        answers: [
            { text: "A) 7 мая", correct: true },
            { text: "B) 9 мая", correct: false },
            { text: "C) 1 мая", correct: false },
            { text: "D) 25 октября", correct: false }
        ]
    },
    {
        question: "12.Как называется праздник, который отмечают казахи 22 марта?",
        answers: [
            { text: "A) Наурыз мейрамы", correct: true },
            { text: "B) День Победы", correct: false },
            { text: "C) День Конституции", correct: false },
            { text: "D) День столицы", correct: false }
        ]
    },
    {
        question: "13.Какой день в Казахстане является официальным праздником в честь победы в Великой Отечественной войне?",
        answers: [
            { text: "A) 7 мая", correct: false },
            { text: "B) 9 мая", correct: true },
            { text: "C) 6 июля", correct: false },
            { text: "D) 25 октября", correct: false }
        ]
    },
    {
        question: "14.Какой праздник отмечается 1 июня?",
        answers: [
            { text: "A) День защитника Отечества", correct: false },
            { text: "B) День детей", correct: true },
            { text: "C) День независимости", correct: false },
            { text: "D) Наурыз мейрамы", correct: false }
        ]
    },
    {
        question: "15.Какой праздник отмечают казахстанцы в октябре?",
        answers: [
            { text: "A) День победы", correct: false },
            { text: "B) День Республики", correct: true },
            { text: "C) День единства народа", correct: false },
            { text: "D) День Конституции", correct: false }
        ]
    },
    {
        question: "16.Как называется праздник, который казахи отмечают в марте?",
        answers: [
            { text: "A) Наурыз мейрамы", correct: true },
            { text: "B) День единства", correct: false },
            { text: "C) День Конституции", correct: false },
            { text: "D) День столицы", correct: false }
        ]
    },
    {
        question: "17.Когда в Казахстане отмечают День защиты детей?",
        answers: [
            { text: "A) 1 июня", correct: true },
            { text: "B) 8 марта", correct: false },
            { text: "C) 25 октября", correct: false },
            { text: "D) 16-17 декабря", correct: false }
        ]
    },
    {
        question: "18.Какой день является официальным праздником накануне Наурыз мейрамы?",
        answers: [
            { text: "A) 21 марта", correct: true },
            { text: "B) 25 октября", correct: false },
            { text: "C) 1 января", correct: false },
            { text: "D) 6 июля", correct: false }
        ]
    },
    {
        question: "19.Какой день является важным для казахстанцев, поскольку это день основания города Алматы?",
        answers: [
            { text: "A) 1 января", correct: false },
            { text: "B) 7 мая", correct: false },
            { text: "C) 28 декабря", correct: false },
            { text: "D) 31 августа", correct: false }
        ]
    },
    {
        question: "20.Как называется традиция празднования весны у казахов?",
        answers: [
            { text: "A) Сабантуй", correct: false },
            { text: "B) Наурыз мейрамы", correct: true },
            { text: "C) Курбан Айт", correct: false },
            { text: "D) Троица", correct: false }
        ]
    },
    {
        question: "21.Какой праздник отмечается в день окончания школьных экзаменов?",
        answers: [
            { text: "A) День знаний", correct: false },
            { text: "B) День учителя", correct: false },
            { text: "C) День выпускника", correct: true },
            { text: "D) День защиты детей", correct: false }
        ]
    },
    {
        question: "22.Какой праздник отмечается 31 декабря в Казахстане?",
        answers: [
            { text: "A) Новый год", correct: true },
            { text: "B) День победы", correct: false },
            { text: "C) День независимости", correct: false },
            { text: "D) Наурыз мейрамы", correct: false }
        ]
    },
    {
        question: "23.Какой праздник отмечается 17 декабря в Казахстане?",
        answers: [
            { text: "A) День независимости", correct: false },
            { text: "B) День защитника Отечества", correct: false },
            { text: "C) День Республики", correct: false },
            { text: "D) День независимости Казахстана", correct: true }
        ]
    },
    {
        question: "24.Когда в Казахстане отмечают День матери?",
        answers: [
            { text: "A) 8 марта", correct: false },
            { text: "B) В первую воскресенье мая", correct: true },
            { text: "C) 1 мая", correct: false },
            { text: "D) 6 июля", correct: false }
        ]
    },
    {
        question: "25.Какой день является официальным выходным в честь Наурыза?",
        answers: [
            { text: "A) 21 марта", correct: true },
            { text: "B) 1 мая", correct: false },
            { text: "C) 6 июля", correct: false },
            { text: "D) 9 мая", correct: false }
        ]
    },
    {
        question: "26.Когда в Казахстане отмечают День Казахского языка?",
        answers: [
            { text: "A) 6 июля", correct: false },
            { text: "B) 1 декабря", correct: false },
            { text: "C) 22 марта", correct: false },
            { text: "D) 5 октября", correct: true }
        ]
    },
    {
        question: "27.Какой из следующих праздников связан с принятием первой Конституции Казахстана?",
        answers: [
            { text: "A) День Конституции", correct: true },
            { text: "B) День независимости", correct: false },
            { text: "C) День победы", correct: false },
            { text: "D) Наурыз мейрамы", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const answers = document.getElementById('answers');
    answers.innerHTML = ''; 

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = `${answer.text}`;
        button.classList.add('answer');
        button.setAttribute('data-correct', answer.correct);
        button.onclick = () => checkAnswer(button);
        answers.appendChild(button);
    });

    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('next-btn').disabled = true;
    document.getElementById('result').textContent = '';
}

function checkAnswer(button) {
    const isCorrect = button.getAttribute('data-correct') === 'true';
    const result = document.getElementById('result');
    if (isCorrect) {
        result.textContent = 'Правильный ответ!';
        score++;
    } else {
        result.textContent = 'Неправильный ответ!';
    }
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('result').textContent = `Игра завершена! Ваш результат: ${score} из ${questions.length}`;
        document.getElementById('next-btn').style.display = 'none';
    }
}

loadQuestion();