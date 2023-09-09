# Project on Asynch JS

## Project Link
[Click here](https://stackblitz.com/edit/dom-playground?file=5-unlimitedColors%2Fcode.js,5-unlimitedColors%2Findex.html)

# Solution Code

## Project 1 - Unlimited Color

```javascript
// generate random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// start & stop button reference

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
  // we are doing this so that we don't keep overwriting the same intervalId, i.e once we stop the values are reset to null -> These are just good coding practices
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```