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

console.log(create());
console.log(update());

console.log({ namaSaya });
console.log({ isNikah });
console.log({ pacarSaya });
console.log({ isHobi });
console.log({ isNotHobi });
console.log({ isTeman });
