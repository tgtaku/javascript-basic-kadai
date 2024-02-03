// 祝日の定義
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// for
console.log('forを使用した出力開始');
for(let i = 0; i < holidays.length; i++){
    console.log(holidays[i]);
}
console.log('forを使用した出力終了');


// while
console.log('whileを使用した出力開始');
let cnt = 0
while(cnt < holidays.length){
    console.log(holidays[cnt]);
    cnt++;
}
console.log('whileを使用した出力終了');
