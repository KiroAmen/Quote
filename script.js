var quotes = [
  // Quote 1
  `<h2 font-size: 40px;">“Be yourself; everyone else is already taken.”<br><br>― Oscar Wilde</h2>`,
  // Quote 2
  `<h2 font-size: 40px;">“So many books, so little time.”<br><br>― Frank Zappa</h2>`,
  // Quote 3
  `<h2 font-size: 40px;">“A room without books is like a body without a soul.”<br><br>― Marcus Tullius Cicero</h2>`,
  // Quote 4
  `<h2 font-size: 40px;">“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<br><br>― Albert Einstein</h2>`,
  // Quote 5
  `<h2 font-size: 40px;">“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”<br><br>― Dr. Seuss</h2>`,
  // Quote 6
  `<h2 font-size: 40px;">“You only live once, but if you do it right, once is enough.”<br><br>― Mae West</h2>`,
  // Quote 7
  `<h2 font-size: 40px;">“Be the change that you wish to see in the world.”<br><br>― Mahatma Gandhi</h2>`,
  // Quote 8
  `<h2 font-size: 40px;">“In three words I can sum up everything I've learned about life: it goes on.”<br><br>― Robert Frost</h2>`,
  // Quote 9
  `<h2 font-size: 40px;">“If you tell the truth, you don't have to remember anything.”<br><br>― Mark Twain</h2>`,
  // Quote 10
  `<h2 font-size: 40px;">“A friend is someone who knows all about you and still loves you.”<br><br>― Elbert Hubbard</h2>`,
];

function getRndInteger() {
  var x = Math.floor(Math.random() * (quotes.length - 0));
  document.getElementById("myData").innerHTML = quotes[x];
}
