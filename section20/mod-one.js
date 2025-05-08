import { a as numOne, b as numTwo, c as numThree } from './mod-two.js';

export { numOne, numTwo, numThree };

export default function (a, b, c) {
    return a + b + c;
}
