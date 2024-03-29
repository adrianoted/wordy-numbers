import { transformNumberInWords } from './Utils';

const numberToEnglish = transformNumberInWords;

test('one', () => expect(numberToEnglish(1)).toBe('one'))
test('five', () => expect(numberToEnglish(5)).toBe('five'))
test('ten', () => expect(numberToEnglish(10)).toBe('ten'))
test('eleven', () => expect(numberToEnglish(11)).toBe('eleven'))
test('twelve', () => expect(numberToEnglish(12)).toBe('twelve'))
test('eighteen', () => expect(numberToEnglish(18)).toBe('eighteen'))
test('twenty', () => expect(numberToEnglish(20)).toBe('twenty'))
test('nineteen thousand', () => expect(numberToEnglish(19000)).toBe('nineteen thousand'))
test('three hundred and nineteen thousand', () => expect(numberToEnglish(319000)).toBe('three hundred and nineteen thousand'))
test('one million', () => expect(numberToEnglish(1000000)).toBe('one million'))
test('one million and one', () => expect(numberToEnglish(1000001)).toBe('one million and one'))
test('one million eleven thousand and eleven', () => expect(numberToEnglish(1011011)).toBe('one million eleven thousand and eleven'))
test('one million one hundred and one thousand one hundred and one', () => expect(numberToEnglish(1101101)).toBe('one million one hundred and one thousand one hundred and one')) 
test('negative six million and six', () => expect(numberToEnglish(-6000006)).toBe('negative six million and six'))
test('one hundred million twenty-three thousand nine hundred and ninety-nine', () => expect(numberToEnglish(100023999)).toBe('one hundred million twenty-three thousand nine hundred and ninety-nine'))
test('Decimal numbers count each digit', () => expect(numberToEnglish(3.14159)).toBe('three point one four one five nine'))
test('Include leading zeroes in decimals', () => expect(numberToEnglish(0.0001)).toBe('zero point zero zero zero one'))
test('negative thousand with decimals', () => expect(numberToEnglish(-65721.55531)).toBe('negative sixty-five thousand seven hundred and twenty-one point five five five three one'))
test('zero', () => expect(numberToEnglish(0)).toBe('zero'))
test('strings that evaluate to numbers are ok', () => expect(numberToEnglish(6)).toBe('six'))
test('positive infinity', () => expect(numberToEnglish(Number.POSITIVE_INFINITY)).toBe('infinity'))
test('negative infinity', () => expect(numberToEnglish(Number.NEGATIVE_INFINITY)).toBe('negative infinity'))
test('Negative numbers should include the word "negative" before the first digit', () => expect(numberToEnglish(-50)).toBe('negative fifty'))
test('NaN should throw an error', () => expect(numberToEnglish).toThrow('isNaN'))
