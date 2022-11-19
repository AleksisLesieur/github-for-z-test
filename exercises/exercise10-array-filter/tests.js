zTestSuite = {};
zTestSuite.removeOddNumbers = {
  title: "function removeOddNumbers",
  instructions: `For each consecutive exercise you'll need to use the "filter" method to solve it, here you need to remove odd numbers on each array element, example: removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]) returns [2,4,6, 8]`,
  tests: [
    {
      description: `removeOddNumbers has been declared`,
      test: () => {
        expect(removeOddNumbers).toBeDeclared();
      },
    },
    {
      description: `removeOddNumbers has a value`,
      test: () => {
        expect(removeOddNumbers).toHaveValue();
      },
    },
    {
      description: `removeOddNumbers is a function`,
      test: () => {
        expect(removeOddNumbers).toBeFunction();
      },
    },
    {
      description: `removeOddNumbers takes one argument`,
      test: () => {
        expect(removeOddNumbers).takesXArguments(1);
      },
    },
    {
      description: `checking if the "filter" method has been called`,
      test: () => {
        expect(removeOddNumbers)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeOddNumbers([1, 2, 3, 4, 5, 6, 7]);
        expect(result).toBeSameArrayAs([2, 4, 6]);
      },
    },
  ],
};

zTestSuite.removeNumbersLessThan3 = {
  title: "function removeNumbersLessThan3",
  instructions: `using the filter method, you'll need to remove all the elements inside the array that are equal or higher than 3, example: removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]) returns [4,5,6,7,8]`,
  tests: [
    {
      description: `removeOddNumbers has been declared`,
      test: () => {
        expect(removeNumbersLessThan3).toBeDeclared();
      },
    },
    {
      description: `removeNumbersLessThan3 has a value`,
      test: () => {
        expect(removeNumbersLessThan3).toHaveValue();
      },
    },
    {
      description: `removeNumbersLessThan3 is a function`,
      test: () => {
        expect(removeNumbersLessThan3).toBeFunction();
      },
    },
    {
      description: `removeNumbersLessThan3 takes one argument`,
      test: () => {
        expect(removeNumbersLessThan3).takesXArguments(1);
      },
    },
    {
      description: `checking if the "filter" method has been called`,
      test: () => {
        expect(removeNumbersLessThan3)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeNumbersLessThan3([1, 2, 3, 4, 5, 6, 7]);
        expect(result).toBeSameArrayAs([4, 5, 6, 7]);
      },
    },
  ],
};

zTestSuite.removeLetterFromArray = {
  title: "function removeLetterFromArray",
  instructions: `same as above, but this time you need to divide the result by 2, example: removeLetterFromArray([10,8]) returns [5,3]`,
  tests: [
    {
      description: `removeLetterFromArray has been declared`,
      test: () => {
        expect(removeLetterFromArray).toBeDeclared();
      },
    },
    {
      description: `removeLetterFromArray has a value`,
      test: () => {
        expect(removeLetterFromArray).toHaveValue();
      },
    },
    {
      description: `removeLetterFromArray is a function`,
      test: () => {
        expect(removeLetterFromArray).toBeFunction();
      },
    },
    {
      description: `removeLetterFromArray takes one argument`,
      test: () => {
        expect(removeLetterFromArray).takesXArguments(1);
      },
    },
    {
      description: `checking if the "filter" method has been called`,
      test: () => {
        expect(removeLetterFromArray)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeLetterFromArray([2, 4, 6, 8, 10, 12]);
        expect(result).toBeSameArrayAs([1, 2, 3, 4, 5, 6]);
      },
    },
  ],
};

zTestSuite.squareArrayValues = {
  title: "function squareArrayValues",
  instructions: `same as above, but this time you need to square the results, example: squareArrayValues([10,8]) returns [100, 64]`,
  tests: [
    {
      description: `removeOddNumbers has been declared`,
      test: () => {
        expect(squareArrayValues).toBeDeclared();
      },
    },
    {
      description: `squareArrayValues has a value`,
      test: () => {
        expect(squareArrayValues).toHaveValue();
      },
    },
    {
      description: `squareArrayValues is a function`,
      test: () => {
        expect(squareArrayValues).toBeFunction();
      },
    },
    {
      description: `squareArrayValues takes one argument`,
      test: () => {
        expect(squareArrayValues).takesXArguments(1);
      },
    },
    {
      description: `checking if the "filter" method has been called`,
      test: () => {
        expect(squareArrayValues)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = squareArrayValues([2, 4, 6, 8, 10, 12]);
        expect(result).toBeSameArrayAs([4, 16, 36, 64, 100, 144]);
      },
    },
  ],
};

zTestSuite.onlyFirstLetterOfWords = {
  title: "function onlyFirstLetterOfWords",
  instructions: `make a function called "onlyFirstLetterOfWords" that will pass an array of words as an argument and return only the 1st letter of each word, example: onlyFirstLetterOfWords(['cat', 'sibling', 'President', 'Massasuchets']) returns ['c', 's', 'P', 'M']`,
  tests: [
    {
      description: `removeOddNumbers has been declared`,
      test: () => {
        expect(onlyFirstLetterOfWords).toBeDeclared();
      },
    },
    {
      description: `onlyFirstLetterOfWords has a value`,
      test: () => {
        expect(onlyFirstLetterOfWords).toHaveValue();
      },
    },
    {
      description: `onlyFirstLetterOfWords is a function`,
      test: () => {
        expect(onlyFirstLetterOfWords).toBeFunction();
      },
    },
    {
      description: `onlyFirstLetterOfWords takes one argument`,
      test: () => {
        expect(onlyFirstLetterOfWords).takesXArguments(1);
      },
    },
    {
      description: `checking if the "filter" method has been called`,
      test: () => {
        expect(onlyFirstLetterOfWords)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = onlyFirstLetterOfWords([
          "cat",
          "sibling",
          "President",
          "Neo",
        ]);
        expect(result).toBeSameArrayAs(["c", "s", "P", "N"]);
      },
    },
  ],
};

zTestSuite.onlyLastLetterOfWords = {
  title: "function onlyLastLetterOfWords",
  instructions: `same as above, only this time it returns the last letter of each word, example: onlyLastLetterOfWords(['cat', 'sibling', 'President', 'Massasuchets']) returns ['t', 'g', 't', 's']`,
  tests: [
    {
      description: `removeOddNumbers has been declared`,
      test: () => {
        expect(onlyLastLetterOfWords).toBeDeclared();
      },
    },
    {
      description: `onlyLastLetterOfWords has a value`,
      test: () => {
        expect(onlyLastLetterOfWords).toHaveValue();
      },
    },
    {
      description: `onlyLastLetterOfWords is a function`,
      test: () => {
        expect(onlyLastLetterOfWords).toBeFunction();
      },
    },
    {
      description: `onlyLastLetterOfWords takes one argument`,
      test: () => {
        expect(onlyLastLetterOfWords).takesXArguments(1);
      },
    },
    {
      description: `checking if the "filter" method has been called`,
      test: () => {
        expect(onlyLastLetterOfWords)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = onlyLastLetterOfWords([
          "cat",
          "sibling",
          "President",
          "Neo",
        ]);
        expect(result).toBeSameArrayAs(["t", "g", "t", "o"]);
      },
    },
  ],
};

// for parseInt .callsFunction(Window, "parseInt");

// for math.random .callsFunction(Math, "random");

Z_T.testAll(zTestSuite);
