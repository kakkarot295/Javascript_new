'use strict';

const x = 10;
console.log(x);
console.log(this);
const calcl = {
  year: 1991,
  ca: function () {
    console.log(2027 - this.year);
  },
};

calcl.ca();

const fd = {
  year: 2017,
};
fd.ca = calcl.ca;
console.log(fd);
fd.ca();

const self = fd;
