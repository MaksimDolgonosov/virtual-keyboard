window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const keyboardWrpapper = document.createElement('div');
  keyboardWrpapper.classList.add('keyboard-wrpapper');
  const h1 = document.createElement('h1');
  h1.textContent = 'RSS Virtual Keyboard';
  body.append(h1);
  body.append(keyboardWrpapper);
  let textarea = document.createElement('textarea');
  textarea.setAttribute('rows', '5');
  textarea.setAttribute('cols', '50');
  textarea.classList.add('keyboard-wrpapper__textarea');
  keyboardWrpapper.append(textarea);
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  keyboardWrpapper.append(keyboard);

  const os = document.createElement('div');
  os.classList.add('os');
  os.textContent = 'Клавиатура создана в операционной системе Windows';
  keyboardWrpapper.append(os);

  const language = document.createElement('div');
  language.classList.add('language');
  language.textContent = 'Для переключения языка нажмите левые Ctrl + Alt';
  keyboardWrpapper.append(language);

  let currentLang = localStorage.getItem('language') || 'en';

  let capsLock = false;
  const btnCode = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17];
  const btnLoc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 0, 2, 0, 0, 0, 2];

  const enKeyboardLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
  const enKeyboardUpper = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

  const ruKeyboardLower = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
  const ruKeyboardUpper = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

  for (let i = 0; i < enKeyboardLower.length; i += 1) {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.setAttribute('data-key', btnCode[i]);
    button.setAttribute('data-loc', btnLoc[i]);
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
      if (currentLang === 'en') {
        const spanEnLower = document.createElement('div');
        spanEnLower.textContent = `${enKeyboardLower[i]}`;
        spanEnLower.classList.add('spanEnLower', 'en');
        button.append(spanEnLower);
        const spanEnUpper = document.createElement('div');
        spanEnUpper.textContent = `${enKeyboardUpper[i]}`;
        spanEnUpper.classList.add('spanEnUpper', 'en', 'hidden');
        button.append(spanEnUpper);
        const spanRuLower = document.createElement('div');
        spanRuLower.textContent = `${ruKeyboardLower[i]}`;
        spanRuLower.classList.add('spanRuLower', 'ru', 'hidden');
        button.append(spanRuLower);
        const spanRuUpper = document.createElement('div');
        spanRuUpper.textContent = `${ruKeyboardUpper[i]}`;
        spanRuUpper.classList.add('spanRuUpper', 'ru', 'hidden');
        button.append(spanRuUpper);
      } else {
        const spanEnLower = document.createElement('div');
        spanEnLower.textContent = `${enKeyboardLower[i]}`;
        spanEnLower.classList.add('spanEnLower', 'en', 'hidden');
        button.append(spanEnLower);
        const spanEnUpper = document.createElement('div');
        spanEnUpper.textContent = `${enKeyboardUpper[i]}`;
        spanEnUpper.classList.add('spanEnUpper', 'en', 'hidden');
        button.append(spanEnUpper);
        const spanRuLower = document.createElement('div');
        spanRuLower.textContent = `${ruKeyboardLower[i]}`;
        spanRuLower.classList.add('spanRuLower', 'ru');
        button.append(spanRuLower);
        const spanRuUpper = document.createElement('div');
        spanRuUpper.textContent = `${ruKeyboardUpper[i]}`;
        spanRuUpper.classList.add('spanRuUpper', 'ru', 'hidden');
        button.append(spanRuUpper);
      }
      // button.textContent = `${enKeyboardLower[i]}`;
    }
    keyboard.append(button);
  }


  document.onkeydown = function (event) {
    event.preventDefault();
    if (event.code === 'ControlLeft') {
      document.onkeyup = function (e) {
        if (e.code === 'AltLeft') {
          changeLanguage();
        }
      }
    }
    if (event.code === 'ShiftLeft') {
      if (capsLock = true) {
        capsLower();
      } else {
        capsUpper();
      }
      document.onkeyup = function (e) {
        if (e.code === 'ShiftLeft') {
          if (capsLock = true) {
            capsUpper();
          } else {
            capsLower();
          }
        }
      }
    }
    // btnLoc.push(event.location)
    // console.log(btnLoc);
    document.querySelectorAll('.btn').forEach(btn => {
      if (event.keyCode === +btn.getAttribute('data-key') && event.location === +btn.getAttribute('data-loc')) {
        btn.classList.add('active_btn');
        // console.log(btn.children.length>0);
        if (btn.children.length > 0) {
          btn.querySelectorAll('div').forEach(div => {
            if (!div.classList.contains('hidden')) {
              div.click();
            }
          })
        } else {
          btn.click();
        }

      }

    })


    document.addEventListener('keyup', () => {
      document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('active_btn');
      })
    })
    //console.log(event);

    // console.log(event.code.replace('Key', '').toLowerCase());
    // console.log(capsLock);
    //textarea.value += event.key;
  };


  function changeLanguage() {
    if (currentLang == 'en') {
      currentLang = 'ru';
      localStorage.setItem('language', 'ru');
      document.querySelectorAll('.en').forEach(item => {
        item.classList.add("hidden");
      })
      if (capsLock) {
        document.querySelectorAll('.spanRuUpper').forEach(item => {
          item.classList.remove("hidden");
        })
      } else {
        document.querySelectorAll('.spanRuLower').forEach(item => {
          item.classList.remove("hidden");
        })
      }
    } else {
      currentLang = 'en';
      localStorage.setItem('language', 'en');
      document.querySelectorAll('.ru').forEach(item => {
        item.classList.add("hidden");
      })
      if (capsLock) {
        document.querySelectorAll('.spanEnUpper').forEach(item => {
          item.classList.remove("hidden");
        })
      } else {
        document.querySelectorAll('.spanEnLower').forEach(item => {
          item.classList.remove("hidden");
        })
      }
    }
  }

  function capsUpper() {
    if (currentLang == 'en') {
      document.querySelectorAll('.spanEnLower').forEach((item) => {
        item.classList.add('hidden');
      });
      document.querySelectorAll('.spanEnUpper').forEach((item) => {
        item.classList.remove('hidden');
      });
    } else {
      document.querySelectorAll('.spanRuLower').forEach((item) => {
        item.classList.add('hidden');
      });
      document.querySelectorAll('.spanRuUpper').forEach((item) => {
        item.classList.remove('hidden');
      });
    }
    capsLock = true;
  }


  function capsLower() {
    if (currentLang == 'en') {
      document.querySelectorAll('.spanEnUpper').forEach((item) => {
        item.classList.add('hidden');
      });
      document.querySelectorAll('.spanEnLower').forEach((item) => {
        item.classList.remove('hidden');
      });
    } else {
      document.querySelectorAll('.spanRuUpper').forEach((item) => {
        item.classList.add('hidden');
      });
      document.querySelectorAll('.spanRuLower').forEach((item) => {
        item.classList.remove('hidden');
      });
    }
    capsLock = false;
  }
  function getPositionText(area) {
    if (area.selectionStart) {
      return area.selectionStart;
    }
  }
  function setCursor() {
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length + 1, textarea.value.length + 1);
  }

  keyboard.addEventListener('click', (e) => {
    if (e.target.textContent === 'CapsLock' && e.target.classList.contains('caps_active')) {
      e.target.classList.remove('caps_active');
      capsLock = false;
      capsLower();
    } else if (e.target.textContent === 'CapsLock' && !e.target.classList.contains('caps_active')) {
      e.target.classList.add('caps_active');
      capsLock = true;
      capsUpper();
    } else {
      if (e.target.closest('.btn')) {
        if (e.target.textContent === 'Tab') {
          textarea.textContent += '    ';
          setCursor();
        } else if (e.target.textContent === 'Ctrl' || e.target.textContent === 'Alt' || e.target.textContent === 'Win' || e.target.textContent === 'Shift') {
          textarea.textContent += '';
        } else if (e.target.textContent === 'Enter') {
          textarea.textContent += '\n';
          setCursor();
        } else if (e.target.textContent === 'Backspace') {
          let position = getPositionText(textarea);
          if (!position) {
            textarea.textContent = textarea.textContent.slice(0, -1);
          } else {
            textarea.textContent = textarea.textContent.slice(0, position - 1) + textarea.textContent.slice(position);
            textarea.focus();
            textarea.setSelectionRange(position - 1, position - 1);
          }
        } else if (e.target.textContent === 'Del') {
          let position = getPositionText(textarea);
          if (position) textarea.textContent = textarea.textContent.slice(0, position) + textarea.textContent.slice(position + 1);
          textarea.focus();
          textarea.setSelectionRange(position, position);

        } else if (e.target.textContent === '    ') {
          textarea.textContent += ' ';
          setCursor();
        } else {
          textarea.textContent += e.target.textContent;
          setCursor();
        }
      }
    }
  });
});
