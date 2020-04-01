const express = require('express');
const port = 3000;
const app = express();

const { printHeader, 
    printUsecase, 
    printContent, 
    printTotal,
    printOutput,
    printLine,
    printInput 
} = require('./display/print');

const { getLocation,
    getProductName,
    getQuanlity, 
    rounded  
} = require('./utils/common');

const { SPILT_IN_INPUT, 
    SPILT_IN_PURCHASED,  
    TEXT_TOTAL,
    TEXT_SUBTOTAL,
    TEXT_TAX, 
} = require('./constant/type');

app.get('/', async (req, res) => {
    let result = '';
    const input = [
        'Location: CA, 1 book at 17.99, 1 potato chips at 3.9',
        'Location: NY, 1 book at 17.99, 3 pencils at 2.99',
        'Location: NY, 2 pencils at 2.99, 1 shirt at 29.99',
    ];
    let count = 1;
    let tax = 0;
    let subtotal = 0;
    for(const record of input){
        printUsecase(count);
        printInput(record);
        printOutput();
        printLine();
        printHeader();
        const elements = record.split(SPILT_IN_INPUT);
        const city = getLocation(elements[0]);
        elements.shift();
        await Promise.all(
            elements.map(async item => {
                const purchased = item.split(SPILT_IN_PURCHASED);
                const quantity  = getQuanlity(purchased[0])
                const product = getProductName(purchased[0]);
                const price = purchased[1];
                subtotal += price * quantity
                if(!city.exempt.includes(product)){
                    tax = rounded(parseFloat(tax), parseFloat((city.salestaxrate * price) * quantity));
                }
                printContent(product, price, quantity);
            }),
        );
        printTotal(subtotal.toFixed(2), TEXT_SUBTOTAL);
        printTotal(parseFloat(tax).toFixed(2), TEXT_TAX);
        printTotal((parseFloat(subtotal)+ parseFloat(tax)).toFixed(2), TEXT_TOTAL);
        printLine();
        count += 1;
        subtotal = 0;
        tax = 0;
    }
    res.send('Shopping Receipt');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));