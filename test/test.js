'use strict';
const expect = require('chai').expect;
require('../dist/index');

describe('format function test', () => {
    it('should return 2021-07-07', () => {
        const result = new Date("2021-07-07").format("yyyy-MM-dd");//2021-07-07
        expect(result).to.equal("2021-07-07");
    });
});

describe('addDays function test', () => {
    it('should return 2021-07-08"', () => {
        const result = new Date("2021-07-07").addDays(1).format("yyyy-MM-dd");//2021-07-07
        expect(result).to.equal("2021-07-08");
    });
});

describe('addHours function test', () => {
    it('should return 2021-07-07 01:00:00', () => {
        const result = new Date("2021-07-07 00:00:00").addHours(1).format();//2021-07-07
        expect(result).to.equal("2021-07-07 01:00:00");
    });
});

describe('addMonths function test', () => {
    it('should return 2021-08-07', () => {
        const result = new Date("2021-07-07").addMonths(1).format("yyyy-MM-dd");//2021-07-07
        expect(result).to.equal("2021-08-07");
    });
});