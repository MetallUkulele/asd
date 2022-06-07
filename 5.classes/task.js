class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;    
  }

  get state() {
    return this._state;
  }

  set state(_state) {
    if (_state < 0) {
      return this._state = 0;
    } else if (_state > 100){
      return this._state = 100;
    } else {
      return this._state = _state;
    }    
  } 

  fix() {        
    return this.state = this._state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {    
    let book = this.books.find(book => book[type] === value);

    if (book === undefined) {
      return null;
    }

    return book;
  }

  giveBookByName(bookName) {
    let book = this.books.find(book => book.name === bookName);
    
    if (book === undefined) {
      return null;
    } else {
      this.books.splice(this.books.indexOf(book), 1);
      return book;
    }
  }
}

//3

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  setSubject(subjectName) {
    this.subject = subjectName;
  }

  addMark(mark, subjectName) {
    
    if (mark < 0 || mark > 5){
      return console.error('Ошибка, оценка должна быть числом от 1 до 5');
    } 

    if (subjectName === undefined) {
      if (this.marks === undefined) {
        return this.marks = [mark];
      } else {
        return this.marks.push(mark);
      }
    }
    this.subject = subjectName;
    this.subject.subjectName = [mark];
  }

  addMarks(...marks) {
    if (this.marks === undefined) {
      this.marks = [...marks];
    } else {
      this.marks.push(...marks);
    }
  }

  getAverageBySubject() {

  }

  getAverage() {
    if (this.marks.length === 0) {
      return 0;
    }
  
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  }

  exclude(reason) {
    this.excluded = reason;
  
    if (this.excluded !== undefined) {
      delete this.subject;
      delete this.marks;
    }
  }
}



