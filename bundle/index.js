"use strict";
let namaSaya = 'Dyaksa Jauharuddin';
let isNikah = true;
let pacarSaya = 'Putri Oktaviani';
// array
let isHobi;
isHobi = ['Mendaki', 'Gunung', 'Balapan'];
// tuple array
let isNotHobi;
isNotHobi = ['Mendaki', 1, true];
let isTeman;
isTeman = {
    nama: 'Alfa',
    umur: 25,
    isNikah: true,
};
//! Function
function create() {
    return 1;
}
// arrow function
const update = () => 'success update';
// func parameter
const add = (x, y) => {
    return `${x} ditambah ${y} hasilnya ${x + y}`;
};
const result = add(30, 20);
console.log(result);
console.log(create());
console.log(update());
console.log({ namaSaya });
console.log({ isNikah });
console.log({ pacarSaya });
console.log({ isHobi });
console.log({ isNotHobi });
console.log({ isTeman });
const createIntel = (processor) => {
    console.log(processor.brand);
    console.log(processor.baseModel);
};
const createAMD = (processor) => {
    console.log(processor.brand);
    console.log(processor.baseModel);
};
const intel = {
    brand: 'Intel',
    baseModel: 'Core i7',
    modelName: 'Core i7-10700K',
    clockSpeed: 3.8,
    turboBoost: true,
};
const ryzen = {
    brand: 'AMD',
    baseModel: 'Ryzen 7',
    modelName: 'Ryzen 7 5800X',
    clockSpeed: 3.8,
    precisionBoost: true,
};
createIntel(intel);
createAMD(ryzen);
