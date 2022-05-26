function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  this.marks = [...marks];
}

Student.prototype.getAverage = function () {
  if (this.marks.length === 0) {
    return 0;
  }

  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length
} 

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  
  if (this.excluded !== undefined) {
    delete this.subject;
    delete this.marks;
  }
}