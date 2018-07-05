module.exports = (number) => {

  // For the roman numeral output
  let output = '';

  // Define a object containing the roman numeral letters against the integer value
  const romans = {
    M:  1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,
    XC: 90,
    L:  50,
    XL: 40,
    X:  10,
    IX: 9,
    V:  5,
    IV: 4,
    I:  1
  };

  // Loop through the roman numerals
  for ( let i in romans ) {
    // While the input number is greater than the value of the numeral e.g. 1000
    while ( number >= romans[i] ) {
      // Append the key (roman numeral) to the output string
      output += i;
      // Reduce the number by the roman amount
      number -= romans[i];
    }
  }

  // Return the result
  return output;
}