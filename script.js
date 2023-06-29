const start_btn = document.querySelectorAll(".start_btn button");
const timer = document.querySelectorAll(".timer");
const time_left_txt = document.querySelectorAll(timer.section);
var timerEl = document.getElementById('time-left');
var mainEl = document.getElementById('aside');

function timeLeft () {
  var timeLeft = 10;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
let questions = [
  {
    numb:1,
    question: "What team mascot is bird name Swoop?",
    
    answer: Philadelphia 'Eagles',
    options: [
      "Philadelphia 'Eagles'",
      "Baltimore 'Ravens'",
      "Seattle 'Seahawks'",
      "Arizona 'Cardinals'",

    ]

  }
 {
  numb:2,
    question: "What team mascot is bird name Swoop?",
    answer: Philadelphia 'Eagles',
    options: [
      "Philadelphia 'Eagles'",
      "Baltimore 'Ravens'",
      "Seattle 'Seahawks'",
      "Arizona 'Cardinals'",
    ]
 },
    {
    numb: 3,
    question: "What team mascot is bird name Swoop?",
    answer: Philadelphia 'Eagles',
    options: [
      "Philadelphia 'Eagles'",
      "Baltimore 'Ravens'",
      "Seattle 'Seahawks'",
      "Arizona 'Cardinals'"
    ]
  },
  {

      numb:4,
      question: "What team mascot is bird name Swoop?",
      answer: Philadelphia 'Eagles',
      options: [
        "Philadelphia 'Eagles'",
        "Baltimore 'Ravens'",
        "Seattle 'Seahawks'",
        "Arizona 'Cardinals'"
      ]
    },
    {
        numb:5,
        question: "What team mascot is bird name Swoop?",
        answer: Philadelphia 'Eagles',
        options: [
          "Philadelphia 'Eagles'",
          "Baltimore 'Ravens'",
          "Seattle 'Seahawks'",
          "Arizona 'Cardinals'"
        ]
      },
      {
          numb:6,
          question: "What team mascot is bird name Swoop?",
          answer: Philadelphia 'Eagles',
          options: [
            "Philadelphia 'Eagles'",
            "Baltimore 'Ravens'",
            "Seattle 'Seahawks'",
            "Arizona 'Cardinals'"
          ]
        }
      ]
      