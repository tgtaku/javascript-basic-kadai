// 現在日時の取得
const now = new Date();

// 年月日を格納
const year = now.getFullYear();
// 月は0始まりのため、+1
const month = now.getMonth() + 1;
const date = now.getDate();

// ログ出力 例：2023年8月22日
console.log(year + '年'+ month + '月' + date + '日');