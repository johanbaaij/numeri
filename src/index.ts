const symbolsDictionary: { [key: number]: string } = {
  1000: 'M',
  500: 'D',
  100: 'C',
  50: 'L',
  10: 'X',
  5: 'V',
  1: 'I',
};

class Numeri {
  arabicNumeral: number;
  numberLeftToConvert: number;
  romanNumeral: string;

  constructor(arabicNumeral: number | keyof typeof symbolsDictionary) {
    this.arabicNumeral = arabicNumeral;
    this.numberLeftToConvert = parseInt(`${arabicNumeral}`);
    this.romanNumeral = '';
    if (this.arabicNumeral > 3999) {
      throw new Error('can only convert up to 3999');
    }
  }

  public convertToRoman() {
    if (this.arabicNumeral in symbolsDictionary)
      return symbolsDictionary[this.arabicNumeral];

    this.symbolModulos();
    return this.romanNumeral;
  }

  private symbolModulos() {
    [1000, 500, 100, 50, 10, 5, 1].forEach(value => {
      const numberOfMultiples =
        (this.numberLeftToConvert - (this.numberLeftToConvert % value)) / value;
      this.numberLeftToConvert =
        this.numberLeftToConvert - numberOfMultiples * value;
      this.appendToOutput(symbolsDictionary[value].repeat(numberOfMultiples));
    });
  }

  private appendToOutput(string: string) {
    this.romanNumeral = this.romanNumeral.concat(string);
  }
}

export const toRoman = (arabicNumeral: number) => {
  const numeri = new Numeri(arabicNumeral);
  return numeri.convertToRoman();
};
