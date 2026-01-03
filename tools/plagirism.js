document.getElementById("checkBtn").addEventListener("click", () => {
  const text = document.getElementById("userText").value.trim();
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");

  if (text.split(" ").length < 30) {
    alert("Please enter at least 30 words.");
    return;
  }

  // Temporary fake result (will be replaced by backend)
  const fakePercent = Math.floor(Math.random() * 40) + 10;

  resultText.innerText = `${fakePercent}% Plagiarized`;
  resultBox.classList.remove("hidden");
});
