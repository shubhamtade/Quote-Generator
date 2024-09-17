const quoteUrl = "https://api.quotable.io/random";
const newBtn = document.querySelector(".new");
const newQuote = document.querySelector("#quote");

async function quoteData() {
  try {
    const response = await fetch(quoteUrl);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

    newQuote.innerHTML = `"${json.content}"
          <span class="author">- ${json.author}</span>`;
  } catch (e) {
    console.log(e.message);
  }
}

newBtn.addEventListener("click", quoteData);
