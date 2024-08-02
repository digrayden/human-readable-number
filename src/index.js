module.exports = function toReadable(number) {
    let stroka = "";
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hungreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

    if (number === 0) return "zero";
    
    if (Math.floor(number / 100) > 0) {
        stroka += hungreds[Math.floor(number / 100)] + " ";
        number %= 100;
    }

    if (number > 10 && number < 20) {
        stroka += teens[number - 10] + " ";
    } else {
        if (Math.floor(number / 10) > 0) {
            stroka += tens[Math.floor(number / 10)] + " ";
            number %= 10;
        }
        
        if (number > 0) {
            stroka += ones[number] + " ";
        }
    }

    return stroka.trim();
}
