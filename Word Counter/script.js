let inputText = document.querySelector(".input-text");
let wordCount = document.querySelector(".word-count");
let characterCount = document.querySelector(".character-count");
let sentenceCount = document.querySelector(".sentence-count");
let paragraphCount = document.querySelector(".paragraph-count");

inputText.addEventListener("input", () => {
  let textTrim = inputText.value.trim();

  // Character count (including spaces)
  characterCount.textContent = inputText.value.length;

  // Word count
  wordCount.textContent = textTrim.split(/\s+/).filter((item) => item).length;

  // Sentence count
  sentenceCount.textContent = textTrim
    .split(/[.!?]+[\s\n]+/)
    .filter((item) => item.trim()).length;

  // Paragraph count
  paragraphCount.textContent = textTrim
    .split(/\n+/)
    .filter((item) => item.trim()).length;
});
