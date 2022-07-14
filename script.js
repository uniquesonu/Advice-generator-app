const submitBtn = document.querySelector('button');
const advice = document.querySelector('span');
const quotes = document.querySelector('q');

const fetchQuotes = async () => {
    let fetchedQuotes = await fetch("https://api.adviceslip.com/advice");
    let data = await fetchedQuotes.json();
    // console.log(fetchedQuotes);
    advice.innerHTML = data.slip.id;
    quotes.innerHTML = data.slip.advice;
}
fetchQuotes();
submitBtn.addEventListener('click',fetchQuotes);
