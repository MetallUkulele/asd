class AlarmClock {
  constructor (id) {
    this.alarmCollection = [];
    this.timerId = id;
  }

  addClock(time, callback,id) {
    setTimeout (callback, Date.parse(time));

    if (id === undefined) {
      throw new Error('error text');
    }

    this.alarmCollection.push({id, time, callback});
  }

  removeClock(id) {
    this.alarmCollection.filter((id, index) => {

      if (id === undefined) {
        return false;
      }

      this.alarmCollection.splice(index, 1)
      return true;
    });
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString.slice(0, -3);
  }

  start() {
    
  }
  
}
