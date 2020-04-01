const {CATEGORY＿FOOD, CATEGORY＿CLOTHING} = require('../constant/type');

class NY {
    constructor() {
      this.salestaxrate = 0.08875;
      this.exempt = [CATEGORY＿FOOD, 
        ...CATEGORY＿CLOTHING].flat(Infinity);
    }
}
module.exports = NY;