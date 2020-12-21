const restOfDeys = document.querySelector('[data-value="days"]')
const restOfHours=document.querySelector('[data-value="hours"]')
const restOfMins=document.querySelector('[data-value="mins"]')
const restOfSecs=document.querySelector('[data-value="secs"]')

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector=selector;
    this.targetDate = targetDate;
    setInterval(() => {
      let dateNow = new Date().getTime();
      let targetDateg = new Date(this.targetDate).getTime();
      let time = targetDateg - dateNow;
      let secs = Math.floor((time % (1000 * 60)) / 1000);
      let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let days = Math.floor(time / (1000 * 60 * 60 * 24));
        
      restOfSecs.innerHTML = String(secs).padStart(2, '0');
      restOfMins.innerHTML = String(mins).padStart(2, '0');
      restOfHours.innerHTML = String(hours).padStart(2, '0');
      restOfDeys.innerHTML = String(days).padStart(2, '0');
     
    }, 1000);
  
  }
}
const timer = new CountdownTimer('#timer-1','Dec 31, 2020');



/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)

const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 
const secs = Math.floor((time % (1000 * 60)) / 1000);
*/

//---------ФУНКЦИЯ---------//
/*const startCountTime = () => {
    setInterval(() => {
    let dateNow = new Date().getTime();
    let targetDate = new Date('Dec 31, 2020').getTime()
    let time = targetDate - dateNow
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
           
    restOfSecs.innerHTML = String(secs).padStart(2, '0')
    restOfMins.innerHTML = String(mins).padStart(2, '0')
    restOfHours.innerHTML=String(hours).padStart(2, '0')
    restOfDeys.innerHTML=String(days).padStart(2, '0') 
  
   
  }, 1000)
}
*/
//startCountTime()