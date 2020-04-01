const {  
    RECEIPT_HEADER,
    LEN_RECEIPT,
    LEN_RECEIPT_PRICE,
    TEXT_OUTPUT,
} = require('../constant/type');

const content_receipt = (product, price, quantity) => {
    const len_quantity = quantity.length;
    const len_price = price.length;
    let result = product;
    for (let i = product.length; i <= LEN_RECEIPT; i++) {
        result += " ";
        if (i == LEN_RECEIPT_PRICE - len_price) {
            result += price;
            i += len_price;
        }
        if (i == LEN_RECEIPT - len_quantity)
            result += quantity;
    }
    return result;
}

const amount_receipt = (amount, type) => {
    const len_amount = amount.length;
    let result = type;
    for (let i = type.length; i <= LEN_RECEIPT; i++) {
        result += " ";
        if (i == LEN_RECEIPT - len_amount)
            result += amount;
    }
    return result;
}
const printLine = () => {
    console.log('\n');
}
const printInput = (input) => {
    console.log(`Input: ${input}`);
}
const printHeader = () => {
    console.log(RECEIPT_HEADER);
}
const printOutput = () => {
    console.log(TEXT_OUTPUT);
}
const printUsecase = (index) => {
    console.log(`Use case ${index}:`);
 }
const printContent = (product, price, quantity) => {
    console.log(content_receipt(product, `$${price}`, quantity));
}
const printTotal = (amount, type) => {
    console.log(amount_receipt(`$${amount}`, type));
}

module.exports = {
    printLine,
    printInput,
    printHeader,
    printOutput,
    printUsecase,
    printContent,
    printTotal
}