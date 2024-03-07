console.log('bobbyhadz.com');

const select = document.getElementById('language-select');

const button = document.getElementById('btn');

button.addEventListener('click', () => {
  const selectedOptions = [];

  for (const option of select.options) {
    if (option.selected) {
      selectedOptions.push(option.value);
    }
  }

  console.log(selectedOptions);
});
