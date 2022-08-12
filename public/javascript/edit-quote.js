const editQuoteBtn = document.querySelector(".edit-quote-form");

async function editFormHandler(event) {
  event.preventDefault();

  const quote = document.querySelector('input[name="quote"]').value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/quotes/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      quote,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

editQuoteBtn.addEventListener("submit", editFormHandler);