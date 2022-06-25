let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("13:37", () => {console.log('Wake up')}, 1);
phoneAlarm.addClock("13:36", () => {console.log('Wake up please')}, 2);
phoneAlarm.addClock("13:38", () => {console.log('Wake up please'); phoneAlarm.removeClock(3)}, 3);
phoneAlarm.addClock("21:27", () => {console.log('Wake up please incorrect')}, 2);
// phoneAlarm.addClock("21:27", () => {console.log('Wake up please incorrect')}, );
phoneAlarm.start();
console.log(phoneAlarm);

