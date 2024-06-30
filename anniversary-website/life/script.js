const questions = [
    {
        answer: "08/04",
        backgroundImage: "url('./photo/IMG_5696.JPG')"
    },
    {
        question: "你男朋友最愛的人是誰？",
        placeholder: "江欣儒寶貝",
        answer: "江欣儒寶貝",
        backgroundImage: "url('./photo/IMG_6579.JPG')"
    },
    {
        question: "背景這張圖的拍攝日期是？",
        placeholder: "yyyy/MM/dd",
        answer: "2023/09/03",
        backgroundImage: "url('./photo/IMG_8966.JPG')"
    }
    // 可以繼續添加更多問題
];

let currentQuestionIndex = 0;

function checkAnswer() {
    const userInput = document.getElementById('userInput').value;
    const content = document.querySelector('.content');
    const text = document.getElementById('text');
    const videoBackground = document.querySelector('.video-background');

    if (userInput === questions[currentQuestionIndex].answer) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            document.getElementById('userInput').placeholder = questions[currentQuestionIndex].placeholder;
            document.getElementById('question').innerText = questions[currentQuestionIndex].question;
            videoBackground.style.backgroundImage = questions[currentQuestionIndex].backgroundImage;
            text.innerText = "回答正確！請回答下一題。";
        } else {
            window.location.href = './Congratulations.html';
        }
    } else {
        text.innerText = "輸入不正確，請再試一次";
        text.style.color = 'red'; // 更改文字顏色
    }
    document.getElementById('userInput').value = ''
}
