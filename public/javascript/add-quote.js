const newQuoteForm = document.querySelector(".new-post-form");

async function newFormHandler(event) {
  event.preventDefault();

  const quote = document.querySelector('input[name="quote"]').value;

  const response = await fetch(`/api/quotes`, {
    method: "POST",
    body: JSON.stringify({
      quote
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

newQuoteForm.addEventListener("submit", newFormHandler);
