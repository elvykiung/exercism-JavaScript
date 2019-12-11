const encode = input => {
  let encodedOutput = "";
  let previousChar = "";
  let count = 0;
  if (input === "") {
    return encodedOutput;
  }

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (previousChar === "") {
      count = 0;
      previousChar = char;
    }

    if (previousChar != char) {
      if (count > 1) {
        encodedOutput += count;
      }
      encodedOutput += previousChar;
      previousChar = char;
      count = 0;
    }
    if (previousChar === char) {
      count++;
    }
  }
  if (count > 1) {
    encodedOutput += count;
  }
  encodedOutput += previousChar;
  return encodedOutput;
};
// console.log(encode("AABBBCCCC"));

const decode = deCode => {
  if (decode === "") {
    return "";
  }

  let num;
  let output = "";

  for (let i = 0; i < deCode.length; i++) {
    const current = deCode[i];
    if (!isNaN(parseInt(current))) {
      num = current;
    } else {
      for (let j = 0; j < num; j++) {
        output += current;
      }
    }
  }

  return output;
};

console.log(decode("2A3B4C"));
