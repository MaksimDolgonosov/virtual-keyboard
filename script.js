window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const keyboardWrpapper = document.createElement('div');
  keyboardWrpapper.classList.add('keyboard-wrpapper');
  const h1 = document.createElement('h1');
  h1.textContent = 'RSS Virtual Keyboard';
  body.append(h1);
  body.append(keyboardWrpapper);
  const textarea = document.createElement('textarea');
  textarea.setAttribute('rows', '5');
  textarea.setAttribute('cols', '50');
  textarea.classList.add('keyboard-wrpapper__textarea');
  keyboardWrpapper.append(textarea);
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  keyboardWrpapper.append(keyboard);

  const enKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

  // document.onkeydown = function codesOfBtns(event) {
  //   event.preventDefault();

  //   console.log(event.key);
  //   // textarea.value += event.key;
  // }
  enKeyboard.forEach((btn) => {
    const button = document.createElement('div');
    button.classList.add('btn');
    if (btn === 'Delete') {
      button.textContent = 'Del';
      button.classList.add('del');
    } else {
      button.textContent = `${btn}`;
    }
    if (btn === 'Backspace' || btn === 'Shift' || btn === 'Shift') {
      button.classList.add('longBtn');
    }
    if (btn === 'Tab') {
      button.classList.add('tab');
    }
    keyboard.append(button);
  });
});
