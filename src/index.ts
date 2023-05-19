let namaSaya: string = 'Dyaksa Jauharuddin';
let isNikah: boolean = true;
let pacarSaya: string = 'Putri Oktaviani';

// array
let isHobi: string[];
isHobi = ['Mendaki', 'Gunung', 'Balapan'];

// tuple array
let isNotHobi: [string, number, boolean];
isNotHobi = ['Mendaki', 1, true];

//! tipe data custom
type Teman = {
  nama: string;
  umur: number;
  isNikah: boolean;
};

let isTeman: Teman;
isTeman = {
  nama: 'Alfa',
  umur: 25,
  isNikah: true,
};

//! Function
function create(): number {
  return 1;
}

// arrow function
const update = (): string => 'success update';

// func parameter
const add = (x: number, y: number): string => {
  return `${x} ditambah ${y} hasilnya ${x + y}`;
};

const result: string = add(30, 20);
console.log(result);

console.log(create());
console.log(update());

console.log({ namaSaya });
console.log({ isNikah });
console.log({ pacarSaya });
console.log({ isHobi });
console.log({ isNotHobi });
console.log({ isTeman });

//! Interface
interface IProcessor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSpeed: number;
}

interface Intel extends IProcessor {
  turboBoost: boolean;
}

interface AMD extends IProcessor {
  precisionBoost: boolean;
}

const createIntel = (processor: Intel): void => {
  console.log(processor.brand);
  console.log(processor.baseModel);
};

const createAMD = (processor: AMD): void => {
  console.log(processor.brand);
  console.log(processor.baseModel);
};

const intel: Intel = {
  brand: 'Intel',
  baseModel: 'Core i7',
  modelName: 'Core i7-10700K',
  clockSpeed: 3.8,
  turboBoost: true,
};

const ryzen: AMD = {
  brand: 'AMD',
  baseModel: 'Ryzen 7',
  modelName: 'Ryzen 7 5800X',
  clockSpeed: 3.8,
  precisionBoost: true,
};

createIntel(intel);
createAMD(ryzen);
