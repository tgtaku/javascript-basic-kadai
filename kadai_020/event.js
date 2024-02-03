// h2要素の取得
const text = document.getElementById('text');

// ボタン要素の取得
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});
