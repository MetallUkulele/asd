class AlarmClock { //создаем класс будильника
  constructor () {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) { //добавление звонка
    if (id === undefined) { //ошибка, если id не найден
      throw new Error('error text');
    }

    if (this.alarmCollection.some(clock => clock.id === id)) { //ошибка, если такой id уже существует
      return console.error('error Id');
    }
    
    return this.alarmCollection.push({id, time, callback}); //добавление звонка в будильник    
  }

  removeClock(id) { //удаление звонка
    let idIndex = this.alarmCollection.findIndex(clock => clock.id === id);

    if (idIndex === -1) {
    return false
    }
    
    this.alarmCollection.splice(idIndex, 1)
    return true;  
  }

  getCurrentFormattedTime = () => { //возвращает текущее время в строковом режиме
    let currentDate = new Date(),
      currentHours = (currentDate.getHours() < 10) ? '0' + currentDate.getHours() : currentDate.getHours(),
      currentMinutes = (currentDate.getMinutes() < 10) ? '0' + currentDate.getMinutes() : currentDate.getMinutes();

    return this.currentTime = currentHours + ':' + currentMinutes;
  }

  start = () => {
    const checkClock = (ring) => {
      this.getCurrentFormattedTime();
      if (ring.time === this.currentTime) {
        return ring.callback;
      }
    };
    if (this.timerId === null) {
      this.timerId = setInterval(() => {  
        // this.getCurrentFormattedTime();
        this.alarmCollection.forEach(ring => {
          if (ring.time == this.getCurrentFormattedTime()) {
            return ring.callback;
          }
        })
      }, 1000);
    }
  }

  stop() {
    if(this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(ring => console.log('id: ' + ring.id + ' ' + 'time:' + ring.time));
  }

  clearAlarms() {
    this.alarmCollection = [];
  }
  
}
