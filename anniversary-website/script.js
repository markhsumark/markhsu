const questions = [
    {
        question: "這是第一題的問題",
        answer: "",
        backgroundImage: "url('./photo/IMG_6579.JPG')"
    },
    {
        question: "這是第二題的問題",
        answer: "",
        backgroundImage: "url('./photo/IMG_6579.JPG')"
    },
    {
        question: "這是第三題的問題",
        answer: "",
        backgroundImage: "url('./photo/IMG_5696.JPG')"
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
            document.getElementById('question').innerText = questions[currentQuestionIndex].question;
            videoBackground.style.backgroundImage = questions[currentQuestionIndex].backgroundImage;
            text.innerText = "回答正確！請回答下一題。";
        } else {
            text.innerText = "恭喜你，已經完成所有問題！";
            content.style.backgroundColor = 'rgba(0, 128, 0, 0.5)'; // 更改背景顏色
            content.style.color = 'yellow'; // 更改文字顏色
        }
    } else {
        text.innerText = "輸入不正確，請再試一次";
        content.style.backgroundColor = 'rgba(128, 0, 0, 0.5)'; // 更改背景顏色
        content.style.color = 'red'; // 更改文字顏色
    }
}
