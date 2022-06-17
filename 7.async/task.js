class AlarmClock { //создаем класс будильника
  constructor (id = null) {
    this.alarmCollection = [];
    this.timerId = id;
  }

  addClock(time, callback, id) { //добавление звонка
    if (id === undefined) { //ошибка, если id не найден
      throw new Error('error text');
    }

    for (let i = 0; i < this.alarmCollection.length; i += 1) { //ошибка если такой id уже существует
      if (this.alarmCollection[i].id === id) {
        return console.error(`id со значением '${id}' уже существует в '${this.alarmCollection[i].id}'`);
      }
    }

    this.alarmCollection.push({id, time, callback}); //добавление звонка в будильник
  }

  removeClock(id) { //удаление звонка
    this.alarmCollection.filter((id, index) => {

      if (id === undefined) {
        return false;
      }

      this.alarmCollection.splice(index, 1)
      return true;
    });
  }

  getCurrentFormattedTime() { //возвращает текущее время в строковом режиме
    let currentDate = new Date(),
      currentHours = (currentDate.getHours() < 10) ? '0' + currentDate.getHours() : currentDate.getHours(),
      currentMinutes = (currentDate.getMinutes() < 10) ? '0' + currentDate.getMinutes() : currentDate.getMinutes();

    return currentHours + ':' + currentMinutes;
  }

  start() {
    checkClock((ring) => {
      for (let ring of this.alarmCollection) {
        if (this.alarmCollection[ring].time === getCurrentFormattedTime()) {
          return this.alarmCollection[ring].callback;
        }
      }
    })
  }
  
}
