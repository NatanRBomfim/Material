let calc = {
  value: 0,
  soma(n) {
    this.value += n;
    return this;
  },
  sub(n) {
    this.value -= n;
    return this;
  },
  log() {
    console.log(this.value);
    return this
  },
};

calc.soma(2).soma(5).sub(2).log().soma(4).log();
