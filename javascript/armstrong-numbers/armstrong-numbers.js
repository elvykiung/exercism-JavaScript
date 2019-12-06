//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = input => {
  const strNum = input.toString();

  let newNum = 0;
  for (let i = 0; i < strNum.length; i++) {
    const digit = strNum[i];

    newNum = newNum + parseInt(digit) ** strNum.length;
  }
  console.log(newNum);

  if (input === newNum) {
    return true;
  } else {
    return false;
  }
};

// const reducer = (acc, cur, _idx, arr) => acc += Math.pow(cur, arr.length);

// export const validate = (n) => {
//   const arr = [...n.toString()];
//   const armstrong = arr.reduce(reducer, 0);
//   return n === armstrong;
// };
