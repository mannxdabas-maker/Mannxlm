const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// 👉 CUSTOMIZE THESE MESSAGES
const noMessages = [
  "Are you sure? 😢",
  "Ek baar or soch lo? 🥺",
  "Pls don't say no💔",
  "Plssssssssssss 😭",
  "5 ruppee wala kurkura bhi khilaunga 😩",
  "Gussa bhi nhi dilaunga",
  "Tang bhi nhi karunga",
  "Gift bhi dunga",
  "Plsss na betu 🥺",
  "Mujh jaisa nhi milega",
  "Nhi maangogi?",
  "I am going to die 🤝",
  "Maarna chahti ho?",
  "Tushar se chalri h?",
  "Plsss na yrr?",
  "Shayari try Krli jaaye?",
  "Kaash tu chaand or m sitaara hota, aasman me aashiyana hamara hota,... kog dekhte tujhe dur se, pass se dekhna ka hak sirf hamara hota...",
  "Ek or ho jaaye?",
  "Tum jitna to koi mujhe khaas nhi, fir bhi q tunhe vishwas nhi,... mujhse behtar ladka to mil jayega, lekin meri maa se behtar koi saas nhi...",
  "Ab maan bhi jao?",
  "Ab to maanna hi padega...",
];

let clickCount = 0;

yesBtn.addEventListener("click", () => {
  question.innerText = "Mummy bahu mil gyi 🥺😭🥹";
});

noBtn.addEventListener("click", () => {
  if (clickCount < noMessages.length) {
    question.innerText = noMessages[clickCount];
    clickCount++;
  } else {
    moveNoButton();
  }
});

function moveNoButton() {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Available area inside container
  const maxX = containerRect.width - btnWidth;
  const maxY = containerRect.height - btnHeight;

  // Random x/y positions within container
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
