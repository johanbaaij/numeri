import { toRoman } from '../src';

describe('toRoman', () => {
  it('converts dictionary entries', () => {
    expect(toRoman(1000)).toEqual('M');
    expect(toRoman(500)).toEqual('D');
    expect(toRoman(100)).toEqual('C');
    expect(toRoman(50)).toEqual('L');
    expect(toRoman(10)).toEqual('X');
    expect(toRoman(5)).toEqual('V');
    expect(toRoman(1)).toEqual('I');
  });

  it('throws an error for > 3999', () => {
    expect(() => toRoman(4000)).toThrow('can only convert up to 3999');
  });

  it('converts basic multiples', () => {
    expect(toRoman(3000)).toEqual('MMM');
    expect(toRoman(535)).toEqual('DXXXV');
    expect(toRoman(350)).toEqual('CCCL');
    expect(toRoman(333)).toEqual('CCCXXXIII');
    expect(toRoman(36)).toEqual('XXXVI');
  });

  it('converts exceptions', () => {
    expect(toRoman(34)).toEqual('XXXIV');
  });
});
