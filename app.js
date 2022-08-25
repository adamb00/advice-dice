const adviceText = document.querySelector('.adviceText');
const adviceID = document.querySelector('.adviceID');
const btnDice = document.querySelector('.btnDice');

btnDice.addEventListener('click', async () => {
  try {
    await fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => {
        adviceID.innerHTML = `advice #${data.slip.id}`;
        adviceText.innerHTML = `"${data.slip.advice}"`;

        console.log(data);
      });
  } catch (err) {
    console.error(err);
  }
});
