document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", () => {
    let input = document.querySelector("#inputbox");

    console.log(`you added ${input.value} to the input`);

    secretHandshake(input.value);
  });
});

const secretHandshake = num => {
  // turn input into integer
  num = parseInt(num);

  // handle "not a number" errors
  try {
    if (typeof num !== "number") {
      throw "Handshake must be a number";
    }
  } catch (err) {
    throw err;
  }

  const possibleActions = {
    1: "wink",
    10: "double blink",
    100: "close your eyes",
    1000: "jump"
  };

  let actions = [];

  // changes number from decimal to binary
  let binaryNum = num.toString(2);

  // splits and reverses the binary number
  let reverseStr = function(str) {
    let binaryNum = str.split("");
    binaryNum.reverse();
    let reverseNum = binaryNum.join("");
    return reverseNum;
  };

  let reverseNum = reverseStr(binaryNum);

  let counter = 0;

  for (let digit of reverseNum) {
    // finds the digit place
    let digitPlace = Math.pow(10, counter);

    // finds the corresponding value for secret handshake action
    let secretValue = digit * digitPlace;

    // if the value is a valid action
    if (secretValue in possibleActions) {
      actions.push(possibleActions[secretValue]);
    }

    counter++;

    // if the value is 10000, reverse that son of a gun
    if (secretValue === 10000) {
      actions.reverse();
    }
  }

  alert(actions);
};
