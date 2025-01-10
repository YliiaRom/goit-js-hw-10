// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const inputDelay = document.querySelector('.input-delay');
const btnSubmit = document.querySelector('.btn-form');
const radioBtnFul = document.querySelector('[value=fulfilled]');
const radioBtnRej = document.querySelector('[value=rejected]');
const radioButtons = document.querySelectorAll('input[name="state"]');

setTimeout(() => {
  iziToast.info({
    title: 'Hello',
    message: 'Welcome!',
});
}, 1000);

form.addEventListener('submit', (event) => {
event.preventDefault();

//доступ к значению в форме- число delay
const ms = Number(form.elements.delay.value);

//значение радио кнопки- value
const radioBtnVal = form.elements.state.value;

if (radioBtnVal === '') {
  iziToast.warning({
    title: 'Caution',
    message: 'You forgot important data',
});
}


const promise = ms => {
  return new Promise((resolve, reject) => {
  
    if (radioBtnVal === 'fulfilled') {
      setTimeout(() => {return resolve(
        iziToast.success({
          
          message: `Fulfilled promise in ${ms}ms`,
      })
        //--resolv
      )}, ms);
    }
    if(radioBtnVal === 'rejected') {
      setTimeout(() => {return reject(
  )}, ms)
    }
  });

}
  promise(ms)
  .then((value) => value)
  .catch((err) => iziToast.error({
    
    message: `Rejected promise in ${ms}ms`,
}));

//-/submit
});