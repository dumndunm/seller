export class Counter {
  initial: number;
  current: number;

  constructor(initial: number) {
    this.initial = initial;
    this.current = initial;
  }

  tick() {
    this.current += 1;
  }
}
