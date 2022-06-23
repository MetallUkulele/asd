let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("20:28", () => {console.log('Wake up')}, 1);
phoneAlarm.addClock("20:29", () => {console.log('Wake up please')}, 2);
phoneAlarm.addClock("21:27", () => {console.log('Wake up please incorrect')}, 2);
phoneAlarm.start();
console.log(phoneAlarm);

