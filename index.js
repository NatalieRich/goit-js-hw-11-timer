
const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds :document.querySelector('[data-value="secs"]')
};

class CountdownTimer {

    constructor({ targetDate }){
    
    this.targetDate = targetDate;
        this.start()
    }
    
start()
{
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate -currentTime;
            const time = this.getTimeComponents(deltaTime);

            this.updateClockface(time);
        }, 1000);
}
    
    getTimeComponents(time) {

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
  
        return { days, hours, mins, secs };
        
    }

     pad(value) {
    return String(value).padStart(2, '0');
    }
    
    updateClockface({ days, hours, mins, secs }) {
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.minutes.textContent = `${mins}`;
        refs.seconds.textContent = `${secs}`;
        
    }
}
    
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 19, 2020'),
});



