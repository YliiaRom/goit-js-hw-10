//с документации https://flatpickr.js.org/getting-started/
import flatpickr from "flatpickr";
//есть в node_modules-подкл стили
import "flatpickr/dist/flatpickr.min.css";

flatpickr("#datetime-picker", {
  //вкл выбор времени
  enableTime: true,

  //При включении отображает выбор времени в 24-часовом режиме без выбора AM/PM.
  time_24hr: true,

  //Устанавливает начальную выбранную дату(ы).
  //предоставить один объект Date или строку даты.
  defaultDate: new Date(),

  //Регулирует шаг ввода минут (включая прокрутку)
  minuteIncrement: 1,

  //Функция(и) для срабатывания каждый раз при закрытии календаря.
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  }
});

const timerInput = document.querySelector('#datetime-picker');
const btnTimerInput = document.querySelector('[data-start]');

const fieldDays = document.querySelector('[data-days]');
const fieldHours = document.querySelector('[data-hours]');
const fieldMinutes = document.querySelector('[data-minutes]');
const fieldSecond = document.querySelector('[data-seconds]');




