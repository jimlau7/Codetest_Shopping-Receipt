const { LEN_CITY } = require('../constant/type');
const CA = require('../salestaxrates/CA');
const NY = require('../salestaxrates/NY');
/*
    Rounded function will define 3 digit after decimal first,
    then it multiples 'multipleIndex' = 10, in order to reduce decimal and the first digit after decimal.
        => variable 'roundIndex' is the determiner that whether floor or ceil based on 0.5
        => variable 'ceilIndex' deals with ceil case
    Finally, the number will add the remain part (variable 'remain') for decimal and the first digit after decimal
    and multiple 'multipleIndex'
*/
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