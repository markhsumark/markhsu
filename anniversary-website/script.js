const correctWords = [
    'love1', // 替换为正确的文字
    'love2',
    'love3'
];

let currentIndex = 0;

function checkInput() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    if (userInput === correctWords[currentIndex]) {
        alert('输入正确！');
        currentIndex = (currentIndex + 1) % correctWords.length;
        document.getElementById('userInput').value = ''; // 清空输入框
    } else {
        alert('输入错误，请再试一次！');
    }
}
