class Numeri {
  integer: number;
  roman: string;
  integerRemains: number;

  constructor(integer: number) {
    this.integer = integer;
    this.integerRemains = integer;
    this.roman = '';

    if (this.integer > 3999) {
      throw new Error('can only convert up to 3999');
    }
  }

  public convertToRoman() {
    const findInDictionary = this.findIntegerInDictionary(this.integer);
    if (findInDictionary) return findInDictionary;

    this.buildOutput();
    return this.roman;
  }

  findIntegerInDictionary(integer: number): string | boolean {
    const pair = symbolsDictionary.find(pair => pair.integer === integer);
    return pair?.roman || false;
  }

  buildOutput() {
    symbolsDictionary.forEach(pair => {
      const numberOfMultiples = this.symbolOccurences(pair);

      this.integerRemains =
        this.integerRemains - numberOfMultiples * pair.integer;
      this.appendToOutput(pair.roman.repeat(numberOfMultiples));
    });
  }

  symbolOccurences(pair: ISymbolPair) {
    return (
      (this.integerRemains - (this.integerRemains % pair.integer)) /
      pair.integer
    );
  }

  appendToOutput(string: string): void {
    this.roman = this.roman.concat(string);
  }
}

export const toRoman = (integer: number) => {
  const numeri = new Numeri(integer);
  return numeri.convertToRoman();
};

interface ISymbolPair {
  integer: number;
  roman: string;
}

const symbolsDictionary: Array<ISymbolPair> = [
  { integer: 1000, roman: 'M' },
  { integer: 500, roman: 'D' },
  { integer: 100, roman: 'C' },
  { integer: 50, roman: 'L' },
  { integer: 10, roman: 'X' },
  { integer: 5, roman: 'V' },
  { integer: 1, roman: 'I' },
];
