zTestSuite = {};
zTestSuite.makeXAsterisks = {
  title: "function makeXAsterisks",
  instructions: `create a function that will take one argument, inside of it declare a variable that's an empty string, make a for loop so that you will add to the variable the amount of asterisks to the number that was passed as an argument and return that said variable
  example: makeXAsterisk(5) returns "*****"`,
  tests: [
    {
      description: `"makeXAsterisks" is declared`,
      test: () => {
        expect(makeXAsterisks).toBeDeclared();
      },
    },
    {
      description: `"makeXAsterisks" is a function`,
      test: () => {
        expect(makeXAsterisks).toBeFunction();
      },
    },
    {
      description: `"makeXAsterisks" takes one argument`,
      test: () => {
        expect(makeXAsterisks).takesXArguments(1);
      },
    },
    {
      description: `"makeXAsterisks" returns the correct result`,
      test: () => {
        var result = makeXAsterisks(5);
        expect(result).toBe("*****");
      },
    },
  ],
};

zTestSuite.makeArrayOfNumbersUpToX = {
  title: "function makeArrayOfNumbersUpToX",
  instructions: `create a function called makeArrayOfNumbersUpToX that takes one argument, inside the function create a variable with an empty array, afterwards create a for loop that will begin at number 1 and end at the number you pass as an argument, inside your for loop you want to push the numbers inside the empty array and then return the array, 
  example: makeArrayOfNumbersUpToX(5) return [1,2,3,4,5]`,
  tests: [
    {
      description: `"makeArrayOfNumbersUpToX" is declared`,
      test: () => {
        expect(makeArrayOfNumbersUpToX).toBeDeclared();
      },
    },
    {
      description: `"makeArrayOfNumbersUpToX" is a function`,
      test: () => {
        expect(makeArrayOfNumbersUpToX).toBeFunction();
      },
    },
    {
      description: `"makeArrayOfNumbersUpToX" takes one argument`,
      test: () => {
        expect(makeArrayOfNumbersUpToX).takesXArguments(1);
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = makeArrayOfNumbersUpToX(8);
        expect(result).toBeSameArrayAs([1, 2, 3, 4, 5, 6, 7, 8]);
      },
    },
  ],
};

zTestSuite.makeWordWithXLetterY = {
  title: "function makeWordWithXLetterY",
  tests: [
    {
      description: `"makeWordWithXLetterY" is declared`,
      test: () => {
        expect(makeWordWithXLetterY).toBeDeclared();
      },
    },
    {
      description: `"makeWordWithXLetterY" is a function`,
      test: () => {
        expect(makeWordWithXLetterY).toBeFunction();
      },
    },
    {
      description: `"makeWordWithXLetterY" takes two arguments`,
      test: () => {
        expect(makeWordWithXLetterY).takesXArguments(2);
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = makeWordWithXLetterY(5, "a");
        expect(result).toBe("aaaaa");
      },
    },
  ],
};

zTestSuite.reverseWord = {
  title: "function reverseWord",
  tests: [
    {
      description: `"reverseWord" is declared`,
      test: () => {
        expect(reverseWord).toBeDeclared();
      },
    },
    {
      description: `"reverseWord" is a function`,
      test: () => {
        expect(reverseWord).toBeFunction();
      },
    },
    {
      description: `"reverseWord" takes one argument`,
      test: () => {
        expect(reverseWord).takesXArguments(1);
      },
    },
    {
      description: `"reverseWord" returns the correct result`,
      test: () => {
        var result = reverseWord("towel");
        expect(result).toBe("lewot");
      },
    },
  ],
};

zTestSuite.removeVowels = {
  title: "function removeVowels",
  tests: [
    {
      description: `"removeVowels" is declared`,
      test: () => {
        expect(removeVowels).toBeDeclared();
      },
    },
    {
      description: `"removeVowels" is a function`,
      test: () => {
        expect(removeVowels).toBeFunction();
      },
    },
    {
      description: `"removeVowels" takes one argument`,
      test: () => {
        expect(removeVowels).takesXArguments(1);
      },
    },
    {
      description: `"removeVowels" returns the correct result`,
      test: () => {
        var result = removeVowels("Presidentofusa");
        expect(result).toBe("Prsdntfs");
      },
    },
  ],
};

zTestSuite.removeConsonants = {
  title: "function removeConsonants",
  tests: [
    {
      description: `"removeConsonants" is declared`,
      test: () => {
        expect(removeConsonants).toBeDeclared();
      },
    },
    {
      description: `"removeConsonants" is a function`,
      test: () => {
        expect(removeConsonants).toBeFunction();
      },
    },
    {
      description: `"removeConsonants" takes one argument`,
      test: () => {
        expect(removeConsonants).takesXArguments(1);
      },
    },
    {
      description: `"removeConsonants" returns the correct result`,
      test: () => {
        var result = removeConsonants("Presidentofusa");
        expect(result).toBe("eieoua");
      },
    },
  ],
};

// I don't get the function below ↓ ↓

zTestSuite.countWordsLongerThanX = {
  title: "function countWordsLongerThanX",
  tests: [
    {
      description: `"countWordsLongerThanX" is declared`,
      test: () => {
        expect(countWordsLongerThanX).toBeDeclared();
      },
    },
    {
      description: `"countWordsLongerThanX" is a function`,
      test: () => {
        expect(countWordsLongerThanX).toBeFunction();
      },
    },
    {
      description: `"countWordsLongerThanX" takes two arguments`,
      test: () => {
        expect(countWordsLongerThanX).takesXArguments(2);
      },
    },
    {
      description: `"countWordsLongerThanX" returns the correct result`,
      test: () => {
        var result = countWordsLongerThanX("Presidentofusa");
        expect(result).toBeSameArrayAs("eieoua");
      },
    },
  ],
};

// I don't get the function above ^^

Z_T.testAll(zTestSuite);
