const words = [
    ['官话', 941],
    ['español', 486],
    ['English', 380],
    ['हिन्दी', 345],
    ['বাংলা', 237],
    ['Português', 236],
    ['Русский язык', 148],
    ['日本語', 123],
    ['粵語', 86],
    ['Tiếng Việt', 85],
    ['Türkçe', 84],
    ['吳語', 83],
    ['मराठी', 83],
    ['తెలుగు', 83],
    ['ਪੰਜਾਬੀ', 82],
    ['پنجابی', 82],
    ['한국어', 81],
    ['조선말', 81],
    ['தமிழ்', 79],
    ['عربى', 78],
    ['Deutsch', 76],
    ['français', 74],
    ['اُردُو', 70],
    ['ꦧꦱꦗꦮ', 68],
    ['italiano', 64],
    ['فارسی', 62],
    ['ગુજરાતી', 58],
    ['هَرْشَن هَوْسَ', 54],
    ['भोजपुरी', 53],
    ['ns', 51],
    ['閩南語', 51]
];

function createWordCloud(words) {
    const cloudContainer = document.getElementById('word-cloud');
    cloudContainer.innerHTML = '';  // 清空之前的内容

    words.forEach(([word, weight], index) => {
        const wordElement = document.createElement('div');
        wordElement.classList.add('word');
        wordElement.style.fontSize = `${weight / 10}px`;  // 根据词频调整字体大小
        wordElement.style.top = `${Math.random() * 80}%`;  // 随机设置垂直位置
        wordElement.style.left = `-100%`;  // 初始位置在左侧之外
        wordElement.textContent = word;

        // 设置动画持续时间和延迟以创建动态效果
        wordElement.style.animationDuration = `${Math.random() * 5 + 5}s`;  // 5 到 10 秒之间
        wordElement.style.animationDelay = `${Math.random() * 3}s`;  // 随机延迟

        cloudContainer.appendChild(wordElement);
    });
}

// 生成词云
createWordCloud(words);