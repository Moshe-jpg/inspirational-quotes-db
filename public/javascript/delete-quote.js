const deleteQuoteBtn = document.querySelector(".delete-quote-btn");

async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/quotes/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

deleteQuoteBtn.addEventListener("click", deleteFormHandler);
