const inputs = document.querySelectorAll('input');
const info = document.querySelectorAll('.info');
const result = document.getElementsByClassName('result')[0];
const btn = document.getElementsByClassName('submit-btn')[0];
btn.addEventListener('click', (e) => {
  e.preventDefault();
  let count = 0;
  const checkFirst = checkInput(inputs[0], checkName);
  if (checkFirst) {
    count += 1;
    info[0].textContent = inputs[0].value;
  }
  const checkSecond = checkInput(inputs[1], checkVariant);
  if (checkSecond) {
    count += 1;
    info[1].textContent = inputs[1].value;
  }
  const checkThird = checkInput(inputs[2], checkGroup);
  if (checkThird) {
    count += 1;
    info[2].textContent = inputs[2].value;
  }
  const checkFourth = checkInput(inputs[3], checkTel);
  if (checkFourth) {
    count += 1;
    info[3].textContent = inputs[3].value;
  }
  const checkFifth = checkInput(inputs[4], checkId);
  if (checkFifth) {
    count += 1;
    info[4].textContent = inputs[4].value;
  }
  if (count === 5) {
    result.style.display = 'flex';
  }
});

function checkName(name) {
  return /\b[A-Z][a-z]+ \b[A-Z].[A-Z]./gi.test(name);
}

function checkVariant(name) {
  return /[0-9]{2}/gi.test(name);
}

function checkGroup(name) {
  return /[A-Z]{2}-[0-9]{2}/gi.test(name);
}

function checkTel(name) {
  return /\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(name);
}

function checkId(name) {
  return /[A-Z]{2} [#№][0-9]{6}/.test(name);
}

function checkInput(input, callback) {
  if (callback(input.value)) {
    input.style.borderColor = 'green';
    input.style.color = 'green';
    return true;
  } else {
    input.style.borderColor = 'red';
    input.style.color = 'red';
    return false;
  }
}

document.querySelectorAll('td')[0].addEventListener('mouseover', () => {
  const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  document.querySelectorAll('td')[0].style.backgroundColor = randomColor;
});
document.querySelectorAll('td')[0].addEventListener('mouseout', () => {
  for (let index = 0; index < 6; index++) {
    document.querySelectorAll('td')[index].style.backgroundColor = 'transparent';
  }
});
document.querySelectorAll('td')[0].addEventListener('click', () => {
  document.querySelectorAll('td')[0].style.backgroundColor =
    document.getElementById('check-color').value;
});
document.querySelectorAll('td')[0].addEventListener('dblclick', () => {
  for (let index = 0; index < 6; index++) {
    document.querySelectorAll('td')[index].style.backgroundColor =
      document.getElementById('check-color').value;
  }
});
