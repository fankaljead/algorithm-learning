class BigNumber {
  constructor(value) {
    value = String(value);
    this.value = /[+-]/.test(value) ? value.substring(1) : value;
    this.sign = value[0] === "-" ? -1 : 1;
  }

  toString() {
    return this.value;
  }

  static fromNumber(num = 0) {
    return new BigNumber(String(num));
  }

  static add(n1, n2) {
    const [num1, num2] = [n1, n2].map((n) => {
      if (!BigNumber.isBigNumber(n)) {
        throw TypeError(`${n} cannot be formatted to BigNumber`);
      }

      const num = new BigNumber(n);
      return num;
    });

    let sign = num1.sign * num2.sign === 1 ? "" : "-";

    let res = BigNumber.stringAdd(num1.value, num2.value);

    return `${sign}${res}`;
  }

  static stringAdd(n1, n2) {
    let [l1, r1] = n1.split(".");
    let [l2, r2] = n2.split(".");

    if (l2.length > l1.length) {
      [l1, l2] = [l2, l1];
    }

    if (r2.length > r1.length) {
      [r1, r2] = [r2, r1];
    }

    let r = "";
    let bonus = 0;
    for (let i = r2.length - 1; i >= 0; --i) {
      let sum = parseInt(r1[i]) + parseInt(r2[i]) + bonus;
      if (sum > 10) {
        bonus = 1;
      }
      r += `${sum % 10}${r}`;
    }
    r = `${r}${r1.substring(r2.length)}`;

    let l = "";
    l1 = l1.split("").reverse().join("");
    l2 = l2.split("").reverse().join("");
    for (let i = 0; i < l2.length; ++i) {
      let sum = parseInt(l2[i]) + parseInt(l1[i]) + bonus;
      if (sum > 10) {
        bonus = 1;
      }
      l = `${sum % 10}${l}`;
    }
    l = `${l1.substring(l2.length).split("").reverse().join("")}${l}`;

    if (r.length > 0) {
      return `${l}.${r}`;
    }

    return l;
  }

  static isBigNumber(num) {
    const regex = /^[+-]{0,1}\d*(\.\d*){0,1}$/;

    return regex.test(String(num));
  }
}

// console.log(BigNumber.isBigNumber("123.4"));
// console.log(BigNumber.isBigNumber("+123.4"));
// console.log(BigNumber.isBigNumber("-123.4"));
// console.log(BigNumber.isBigNumber("-123.4."));
// console.log(BigNumber.isBigNumber(1.1));
// console.log(BigNumber.isBigNumber(1));
// console.log(BigNumber.add(-1, 2));
console.log(BigNumber.add("-123.23", "1.2"));
console.log(BigNumber.add("1237755.236666", "1.2"));
console.log(BigNumber.stringAdd("1237755.236666", "1.2"));
