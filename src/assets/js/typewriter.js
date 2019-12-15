class Typewriter {
    constructor(id, arr){
      this.el = document.getElementById(id);
      this.period = 200;
      this.interval = '';
      this.deleteInterval = '';
      this.word = '';
      this.add = true;
      this.textArray = arr;
    }
    type(){
      var self = this;
      this.letter = 0;
      this.counter = 0;
      clearInterval(this.interval);
      this.interval = setInterval(function(){ self.addLetters(); }, this.period);
    }
    setWord(){
      this.word = this.textArray[this.counter];
    }
    deleteLetters(){
      if (this.letter > 0 && !this.add) {
        this.letter--;
        var textContent = this.el.textContent;
        this.el.textContent = textContent.substring(0, this.letter);
      } else if (this.letter === 0 && !this.add) {
        this.add = true;
        this.el.innerHTML = '';
        this.counter++;
        this.setWord();
        this.startAdd();
      }
    }
    addLetters(){
      var self = this;
      if (this.counter === this.textArray.length) {
        this.type();
      } else {
        this.setWord();
        if (this.letter < this.word.length && this.add) {
          this.el.textContent += this.word[this.letter];
          this.letter++;
        } else if (this.letter === this.word.length && this.add) {
          this.add = false;
          document.getElementById('blinker').classList = "blink";
          setTimeout(function () { self.startDelete(); }, 1500);
        }
      }
    }
    startDelete(){
      var self = this;
      document.getElementById('blinker').classList = "";
      clearInterval(this.interval);
      this.interval = setInterval(function () { self.deleteLetters(); }, this.period);
    }
    startAdd(){
      var self = this;
      clearInterval(this.interval);
      this.interval = setInterval(function () { self.addLetters(); }, this.period);
    }
  }