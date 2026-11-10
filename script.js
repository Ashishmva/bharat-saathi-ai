let lang = 'hi';

function setLang(l) {
  lang = l;
  const title = document.getElementById('chatTitle');
  if (l === 'hi') {
    title.innerText = "Bharat Saathi AI se Puchiye";
    addMsg("Hindi select ho gayi. Ab Hindi me puchiye!", 'ai');
  } else {
    title.innerText = "Ask Bharat Saathi AI";
    addMsg("English selected. Now ask in English!", 'ai');
  }
}

function openModule(type) {
  if (type === 'kisan') {
    quickAsk('Mandi price and mausam for farming?');
  } else if (type === 'student') {
    quickAsk('Explain photosynthesis in simple Hindi');
  } else {
    quickAsk('Fever ke liye kya kare?');
  }
  document.querySelector('.chat-box').scrollIntoView({ behavior: 'smooth' });
}

function addMsg(text, who) {
  const box = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg ' + who;
  div.innerText = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function quickAsk(q) {
  document.getElementById('userInput').value = q;
  sendMsg();
}

function sendMsg() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (!text) return;
  addMsg(text, 'user');
  input.value = '';

  setTimeout(() => {
    addMsg(getAnswer(text.toLowerCase()), 'ai');
  }, 600);
}

function getAnswer(q) {
  if (q.includes('mandi') || q.includes('wheat') || q.includes('gehu') || q.includes('price')) {
    return "🌾 Kisan Saathi: Aaj Gehun Mandi Price (approx) - Patna: Rs 2,425/quintal, Delhi: Rs 2,475/quintal. MSP 2026: Rs 2,425. Tip: Mandi jaane se pehle eNAM app pe price check karein.";
  }
  if (q.includes('mausam') || q.includes('weather') || q.includes('baarish') || q.includes('rain')) {
    return "🌦️ Mausam Saathi: Aaj Patna me mausam saaf hai, Temp 28°C. Kal halki baarish ke chance hai. Fasal me paani aaj hi de dein.";
  }
  if (q.includes('photosynthesis') || q.includes('prakash')) {
    return "📚 Student Saathi: Photosynthesis = Paudhe suraj ki roshni se khana banate hai. Formula: CO2 + Paani + Sunlight = Glucose + Oxygen. Ye Class 10 Science ka sabse important topic hai.";
  }
  if (q.includes('fever') || q.includes('bukhar') || q.includes('bukh')) {
    return "❤️ Health Saathi: Bukhar me paani zyada piyein, aaram karein. Paracetamol doctor ki salah se lein. Agar bukhar 3 din se zyada hai ya 102°F se upar hai, to turant doctor ke paas jayein. Ye sirf jaankari hai, doctor ki salah nahi.";
  }
  if (q.includes('namaste') || q.includes('hello') || q.includes('hi')) {
    return "Namaste! 🙏 Main Bharat Saathi hoon. Aap Kisan, Student ya Health ke baare me kuch bhi puch sakte ho.";
  }
  if (q.includes('kisan') || q.includes('fasal') || q.includes('kheti')) {
    return "🌾 Kisan Saathi: Aapki fasal ke liye tip - Mitti ki jaanch har 6 mahine me karayein, Drip irrigation se 40% paani bachta hai, PM-Kisan Yojana me Rs 6000/year milta hai.";
  }
  if (q.includes('exam') || q.includes('padhai') || q.includes('study')) {
    return "📚 Student Saathi: Exam Tip - 25 min padhai + 5 min break (Pomodoro). NCERT ko 3 baar revise karo. Raat me 7 ghante neend zaroori hai.";
  }
  if (q.includes('yoga') || q.includes('diet') || q.includes('khana')) {
    return "❤️ Health Saathi: Roz 30 min walk + 10 min Yoga karein. Subah gunguna paani + nimbu. Junk food kam, daal-sabzi zyada.";
  }
  return "Bharat Saathi: Aapka sawaal mil gaya! Main Kisan (Mandi/Mausam), Student (NCERT/Exam) aur Health (Fever/Diet) me madad karta hoon. Ek baar phir se puchiye - jaise 'Mandi price?' ya 'Fever ke liye kya kare?'";
}
