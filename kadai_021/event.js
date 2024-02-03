// h2要素の取得
const text = document.getElementById('text');

// ボタン要素の取得
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    // 2秒後にテキストの書き換え
    setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
    }, 2000);
});


