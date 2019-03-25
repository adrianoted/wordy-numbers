export const transformNumberInWords = (el) => {

    // Variables
    // Convert the argument passed to number
    let elNumber = parseFloat(el);
    // Store the final result
    let numberTransformedToWord = "";

    // GENERIC CHECKS
    // check if there is empty space or zero
    if (el === "" || elNumber === 0) {
        return numberTransformedToWord = "zero";
    }

    // Check if is "isNaN" throw error
    if (isNaN(elNumber)) {
        throw new Error("isNaN");
    };

    // Check if is positive infinity
    if (elNumber === Number.POSITIVE_INFINITY) {
        return numberTransformedToWord = "infinity";
    }
    // Check if is negative infinity
    if (elNumber === Number.NEGATIVE_INFINITY) {
        return numberTransformedToWord = "negative infinity";
    }

    // Check if negative number
    if (elNumber < 0) {
        elNumber = elNumber * -1;
        numberTransformedToWord += "negative ";
    }

    // Store the words for the numbers 
    const AUnitName = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const ATensName = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    // store the unit of each
    let numberToTransform = elNumber;

    const quadrillion = Math.floor(numberToTransform / (1000 * 1000 * 1000 * 1000 * 1000));
    numberToTransform -= quadrillion * (1000 * 1000 * 1000 * 1000 * 1000);

    const trillion = Math.floor(numberToTransform / (1000 * 1000 * 1000 * 1000));
    numberToTransform -= trillion * (1000 * 1000 * 1000 * 1000);

    const billion = Math.floor(numberToTransform / (1000 * 1000 * 1000));
    numberToTransform -= billion * (1000 * 1000 * 1000);

    const million = Math.floor(numberToTransform / (1000 * 1000));
    numberToTransform -= million * (1000 * 1000);

    const thousand = Math.floor(numberToTransform / 1000);
    numberToTransform -= thousand * 1000;

    const hundred = Math.floor(numberToTransform / 100);
    numberToTransform -= hundred * 100;

    let tens = 0;

    if (numberToTransform > 19) {
        tens = Math.floor(numberToTransform / 10);
        numberToTransform -= tens * 10;
    }

    // Add the unit each order unit
    if (quadrillion) {
        numberTransformedToWord += transformNumberInWords(quadrillion) + " quadrillion ";
    }

    if (trillion) {
        numberTransformedToWord += transformNumberInWords(trillion) + " trillion ";
    }

    if (billion) {
        numberTransformedToWord += transformNumberInWords(billion) + " billion ";
    }

    if (million) {
        numberTransformedToWord += transformNumberInWords(million) + " million ";
    }

    if (thousand) {
        numberTransformedToWord += transformNumberInWords(thousand) + " thousand ";
    }

    if (hundred) {
        numberTransformedToWord += transformNumberInWords(hundred) + " hundred";
    }

    if (tens) {
        numberTransformedToWord += (hundred || thousand || million || billion || trillion || quadrillion ? " and " : " ") + ATensName[tens];
    }

    if (Math.floor(numberToTransform)) {
        numberTransformedToWord += ((hundred || thousand || million || billion || trillion || quadrillion) && !tens ? " and " : (tens ? "-" : " ")) + AUnitName[Math.floor(numberToTransform)];
    }

    if (numberTransformedToWord === "") {
        numberTransformedToWord += " zero";
    }

    // If is not integer the the decimals and split
    if (!checkInteger(elNumber)) {
        numberTransformedToWord += ' point ';

        // split the number by "."
        let ANumbersDivided = (el + "").split(".");

        // store the decimals
        let decimals = ANumbersDivided.pop();

        // split each number an store in array
        const ADecimals = decimals.split("");

        // convert each decimal into words and add to the final variable 
        ADecimals.map(el => numberTransformedToWord += AUnitName[parseInt(el)] + " ");
    }

    // remove extra spaces
    numberTransformedToWord = numberTransformedToWord.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");

    return numberTransformedToWord;

}

const checkInteger = (num) => (num ^ 0) === num;