document.addEventListener('DOMContentLoaded', () => {
  // Loop through different greetings.
  const greetingElement = document.getElementById('greeting');
  const greetings = [
    'Hi, I’m Shunyao.',
    '你好， 我係舜尧。',
    'こんにちは、シュンヤオです。',
    'coi . mi’e la cuniao ku'
  ];
  let i = 1;
  setInterval(() => {
    greetingElement.textContent = greetings[i];
    i = (i + 1) % greetings.length;
  }, 3000);
});
