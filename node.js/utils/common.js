const { LEN_CITY } = require('../constant/type');
const CA = require('../salestaxrates/CA');
const NY = require('../salestaxrates/NY');

const rounded = (tax, amount) => {
    const roundIndex = 0.5;
    const ceilIndex = 1;
    const multipleIndex = 10;
    tax =(parseFloat(tax)+  parseFloat(amount)).toFixed(3) * multipleIndex ;
    const floor =  Math.floor( tax );
    let remain = tax - floor;
    if(remain > roundIndex){
        tax = ((ceilIndex - remain) + remain +floor)/multipleIndex
    }else{
        tax = ((roundIndex - remain) + remain +floor)/multipleIndex
    }
    return tax.toFixed(2);
}

const getLocation = (city) => {
    city = city.trim().substr(city.length - LEN_CITY, city.length)
    switch(city){
        case 'CA':
            return new CA();
        case 'NY':
            return new NY();
        default:
            return 'N/A'
    }
}

const getProductName = (input) => {
    return input.substr(input.trimStart().indexOf(' '), input.length).trimLeft()
}

const getQuanlity = (input) => {
    return input.substr(0, input.trimStart().indexOf(' '));
}

module.exports = {
    rounded,
    getLocation,
    getProductName,
    getQuanlity,
}