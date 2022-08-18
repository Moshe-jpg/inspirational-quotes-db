//const newQuoteForm = document.querySelector(".new-quote-form");

async function newFormHandler(event) {
  event.preventDefault();

  const quote = document.querySelector('input[name="quote"]').value;
  const quoter = document.querySelector('input[name="quoter"]').value;


  const response = await fetch(`/api/quotes`, {
    method: "POST",
    body: JSON.stringify({
      quote,
      quoter
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-quote-form').addEventListener("submit", newFormHandler);
