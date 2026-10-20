const questions = [
  {
    prompt: "วันหยุดในฝันของคุณคือแบบไหน?",
    answers: [
      { text: "ไปเที่ยวสถานที่ใหม่ไม่เคยไป", soda: "blue" },
      { text: "ไปเที่ยวกับเพื่อนๆ ทำกิจกรรมสนุกๆ", soda: "strawberry" },
      { text: "พักผ่อนในที่สงบ ที่ตัวเองชอบ", soda: "apple" },
    ],
  },
  {
    prompt: "ถ้าเพื่อนกำลังเศร้า คุณจะทำอย่างไร?",
    answers: [
      { text: "ชวนออกไปทำอะไรใหม่ๆ เพื่อเปลี่ยนบรรยากาศ", soda: "blue" },
      { text: "ชวนคุย เล่นมุก ทำให้เพื่อนยิ้ม", soda: "strawberry" },
      { text: "รับฟังอยู่ข้างๆ จนกว่าเพื่อนจะสบายใจ", soda: "apple" },
    ],
  },
  {
    prompt: "ถ้าต้องเลือกพลังวิเศษหนึ่งอย่าง",
    answers: [
      { text: "วาร์ปไปที่ไหนก็ได้ในโลก", soda: "blue" },
      { text: "ทำให้ทุกคนมีความสุข", soda: "strawberry" },
      { text: "รับรู้ความรู้สึกคนรอบข้าง", soda: "apple" },
    ],
  },
  {
    prompt: "เพื่อนมักมองคุณเป็นแบบไหน?",
    answers: [
      { text: "เป็นตัวของตัวเอง ชอบทำอะไรไม่เหมือนใคร", soda: "blue" },
      { text: "ร่าเริง สร้างเสียงหัวเราะให้คนอื่น", soda: "strawberry" },
      { text: "ใจดี อบอุ่น และไว้ใจได้", soda: "apple" },
    ],
  },
  {
    prompt: "ถ้าชีวิตของคุณเป็นรสชาติเครื่องดื่ม คุณอยากเป็นแบบไหน?",
    answers: [
      { text: "สดชื่น แปลกใหม่ และเต็มไปด้วยความตื่นเต้น", soda: "blue" },
      { text: "หวานซ่า สดใส มีชีวิตชีวา", soda: "strawberry" },
      { text: "สดชื่นละมุน ให้ความรู้สึกสบายใจ", soda: "apple" },
    ],
  },
];

const sodas = {
  blue: {
    name: "บลูฮาวาย",
    englishName: "BLUE HAWAII",
    character: "assets/blue-hawaii.png",
    characterAlt: "ตัวละครบลูฮาวาย",
    color: "#2876a8",
    description:
      "คุณเป็นนักรักอิสระ กล้าคิดกล้าทำ และชอบลองสิ่งใหม่ๆ ไม่ชอบให้ใครมากำหนดเส้นทางชีวิต ภายนอกอาจดูมั่นใจและเข้าถึงยากนิดหน่อย แต่จริงๆ เป็นคนมีน้ำใจและพร้อมช่วยเหลือคนสำคัญเสมอ",
    highlight: "มีความคิดเป็นของตัวเอง กล้าตัดสินใจ และปรับตัวเก่ง",
    watchout: "เบื่อง่าย ไม่ชอบอยู่ในกรอบ และบางครั้งอาจตัดสินใจเร็วเกินไป",
  },
  strawberry: {
    name: "สตรอว์เบอร์รีโซดา",
    englishName: "STRAWBERRY SODA",
    character: "assets/strawberry-soda.png",
    characterAlt: "ตัวละครสตรอว์เบอร์รีโซดา",
    color: "#df6678",
    description:
      "คุณเป็นคนสดใส พลังงานเต็มเปี่ยม และชอบทำให้คนรอบตัวมีความสุข เสียงหัวเราะของคุณทำให้บรรยากาศอบอุ่นขึ้นเสมอ แถมยังเป็นเพื่อนที่ใครๆ ก็อยากอยู่ใกล้",
    highlight: "ร่าเริง เข้ากับคนง่าย และเติมพลังบวกให้คนรอบข้าง",
    watchout: "อย่าลืมหันกลับมาดูแลความรู้สึกและเวลาพักของตัวเองด้วยนะ",
  },
  apple: {
    name: "แอปเปิ้ลโซดา",
    englishName: "APPLE SODA",
    character: "assets/apple-soda.png",
    characterAlt: "ตัวละครแอปเปิ้ลโซดา",
    color: "#319764",
    description:
      "คุณเป็นคนใจเย็น ช่างสังเกต และใส่ใจรายละเอียดเล็กๆ น้อยๆ มักเป็นผู้ฟังที่ดีและสัมผัสได้ถึงความรู้สึกของคนอื่น แม้จะไม่ชอบเรียกร้องความสนใจ แต่ก็รู้ว่าตัวเองต้องการอะไร",
    highlight: "มีเหตุผล รอบคอบ อบอุ่น และเป็นที่พึ่งให้คนรอบข้างได้",
    watchout: "อย่าคิดมากจนลืมพูดความรู้สึกของตัวเอง และอย่ายอมคนอื่นมากเกินไป",
  },
};

const game = document.querySelector("#game");
let currentQuestion = 0;
let answers = Array(questions.length).fill(null);

function renderIntro() {
  game.innerHTML = `
    <p class="eyebrow">— HELLO SUMMER —</p>
    <h1 class="script-title">What's your soda?</h1>
    <p class="thai-title">คุณคือโซดาแก้วไหน</p>
    <div class="intro-art character-lineup" aria-label="ตัวละครโซดาทั้งสามรสชาติ">
      <span class="art-star art-star-left">✦</span>
      <img class="lineup-character lineup-blue" src="assets/blue-hawaii.png" alt="" />
      <img class="lineup-character lineup-strawberry" src="assets/strawberry-soda.png" alt="" />
      <img class="lineup-character lineup-apple" src="assets/apple-soda.png" alt="" />
      <span class="art-star art-star-right">✧</span>
    </div>
    <p class="intro-copy">
      <strong>Every sip tells a story</strong><br />
      ค้นพบตัวคุณผ่านรสชาติเครื่องดื่ม
    </p>
    <button class="primary-button" type="button" data-action="start">Discover Your Soda</button>
  `;
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  game.innerHTML = `
    <div class="question-view">
      <div class="quiz-topline">
        <span>YOUR SODA STORY</span>
        <span>คำถาม ${currentQuestion + 1} / ${questions.length}</span>
      </div>
      <div class="progress-track" role="progressbar" aria-label="ความคืบหน้า" aria-valuemin="1" aria-valuemax="${questions.length}" aria-valuenow="${currentQuestion + 1}">
        <div class="progress-fill" style="--progress:${progress}%"></div>
      </div>
      <h1 class="question-title">${question.prompt}</h1>
      <p class="question-hint">เลือกคำตอบที่เป็นตัวคุณที่สุด</p>
      <div class="answer-list">
        ${question.answers
          .map(
            (answer, index) => `
              <button class="answer-button" type="button" data-action="answer" data-answer="${index}" data-letter="${String.fromCharCode(65 + index)}">
                ${answer.text}
              </button>
            `,
          )
          .join("")}
      </div>
      <nav class="quiz-controls" aria-label="ตัวเลือกแบบทดสอบ">
        <button class="text-button" type="button" data-action="back" ${currentQuestion === 0 ? "disabled" : ""}>← ย้อนกลับ</button>
        <button class="text-button" type="button" data-action="home">ออกจากแบบทดสอบ</button>
      </nav>
    </div>
  `;
}

function renderResult() {
  const scores = { blue: 0, strawberry: 0, apple: 0 };
  answers.forEach((soda) => {
    scores[soda] += 1;
  });

  const highestScore = Math.max(...Object.values(scores));
  const winners = Object.keys(scores).filter((soda) => scores[soda] === highestScore);
  const result = sodas[winners[0]];
  const tieMarkup =
    winners.length > 1
      ? `
        <p class="tie-label">เสน่ห์ของคุณมีหลายรสชาติ!</p>
        <div class="tie-list">${winners
          .map((soda) => `<span class="tie-chip">${sodas[soda].name}</span>`)
          .join("")}</div>
      `
      : "";

  game.innerHTML = `
    <div class="result-view" style="--result-color:${result.color}">
      <p class="eyebrow">YOUR SODA IS</p>
      <div class="intro-art result-character-stage">
        <span class="art-star art-star-left">✦</span>
        <img class="result-character" src="${result.character}" alt="${result.characterAlt}" />
        <span class="art-star art-star-right">✧</span>
      </div>
      <h1 class="result-name">${result.name}</h1>
      <p class="result-subtitle">${result.englishName}</p>
      ${tieMarkup}
      <p class="result-description">${result.description}</p>
      <div class="trait-box">
        <p><strong>จุดเด่น:</strong> ${result.highlight}</p>
        <p><strong>จุดที่ต้องระวัง:</strong> ${result.watchout}</p>
      </div>
      <button class="primary-button" type="button" data-action="restart">ลองเล่นอีกครั้ง</button>
    </div>
  `;
}

game.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  switch (button.dataset.action) {
    case "start":
      currentQuestion = 0;
      answers = Array(questions.length).fill(null);
      renderQuestion();
      break;
    case "answer": {
      const answerIndex = Number(button.dataset.answer);
      const answer = questions[currentQuestion].answers[answerIndex];
      if (!answer) return;
      answers[currentQuestion] = answer.soda;
      if (currentQuestion === questions.length - 1) {
        renderResult();
      } else {
        currentQuestion += 1;
        renderQuestion();
      }
      break;
    }
    case "back":
      if (currentQuestion > 0) {
        currentQuestion -= 1;
        renderQuestion();
      }
      break;
    case "home":
      renderIntro();
      break;
    case "restart":
      currentQuestion = 0;
      answers = Array(questions.length).fill(null);
      renderIntro();
      break;
    default:
      break;
  }
});

renderIntro();
