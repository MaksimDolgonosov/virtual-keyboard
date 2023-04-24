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
  let detectedOS;
  if (navigator.userAgent.indexOf('Win') !== -1) {
    detectedOS = 'Windows';
  } else {
    detectedOS = 'MacOS';
  }
  const os = document.createElement('div');
  os.classList.add('os');
  os.textContent = `Клавиатура создана для операционной системы ${detectedOS}`;
  keyboardWrpapper.append(os);

  const language = document.createElement('div');
  language.classList.add('language');
  language.textContent = 'Для переключения языка нажмите левые Ctrl + Alt';
  keyboardWrpapper.append(language);
  let capsLock = false;
  const enKeyboardLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
  const enKeyboardUpper = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

  for (let i = 0; i < enKeyboardLower.length; i += 1) {
    const button = document.createElement('button');
    button.classList.add('btn');
    if (enKeyboardLower[i] === 'Delete') {
      button.textContent = 'Del';
    } else if (enKeyboardLower[i] === 'Control') {
      button.textContent = 'Ctrl';
    } else if (enKeyboardLower[i] === 'Meta') {
      button.textContent = 'Win';
    } else if (enKeyboardLower[i] === 'ArrowLeft') {
      button.textContent = '◄';
    } else if (enKeyboardLower[i] === 'ArrowRight') {
      button.textContent = '►';
    } else if (enKeyboardLower[i] === 'ArrowDown') {
      button.textContent = '▼';
    } else if (enKeyboardLower[i] === 'ArrowUp') {
      button.textContent = '▲';
    } else if (enKeyboardLower[i] === 'CapsLock') {
      button.classList.add('caps');
      button.textContent = `${enKeyboardLower[i]}`;
    } else {
      for (let k = 0; k < 4; k += 1) {
        const span = document.createElement('span');
        span.textContent = `${enKeyboardLower[i]}`;
        button.append(span);
      }

     // button.textContent = `${enKeyboardLower[i]}`;
    }
    keyboard.append(button);
  }

  // function initKeyBoard() {
  //   enKeyboardLower.forEach((btn) => {
  //     const button = document.createElement('button');
  //     button.classList.add('btn');
  //     if (btn === 'Delete') {
  //       button.textContent = 'Del';
  //     } else if (btn === 'Control') {
  //       button.textContent = 'Ctrl';
  //     } else if (btn === 'Meta') {
  //       button.textContent = 'Win';
  //     } else if (btn === 'ArrowLeft') {
  //       button.textContent = '◄';
  //     } else if (btn === 'ArrowRight') {
  //       button.textContent = '►';
  //     } else if (btn === 'ArrowDown') {
  //       button.textContent = '▼';
  //     } else if (btn === 'ArrowUp') {
  //       button.textContent = '▲';
  //     } else if (btn === 'CapsLock') {
  //       button.classList.add('caps');
  //       button.textContent = `${btn}`;
  //     } else {
  //       button.textContent = `${btn}`;
  //     }
  //     keyboard.append(button);
  //   });
  // }
  // initKeyBoard(capsLock);

  // document.onkeydown = function codesOfBtns(event) {
  //   event.preventDefault();

  //   console.log(event.key);
  //   // textarea.value += event.key;
  // };
  keyboard.addEventListener('click', (e) => {
    if (e.target.textContent === 'CapsLock' && e.target.classList.contains('caps_active')) {
      e.target.classList.remove('caps_active');
      capsLock = false;
      initKeyBoard(capsLock);
    } else if (e.target.textContent === 'CapsLock' && !e.target.classList.contains('caps_active')) {
      e.target.classList.add('caps_active');
      capsLock = true;
      initKeyBoard(capsLock);
    }
  });
});
