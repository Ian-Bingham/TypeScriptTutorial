// compile using: tsc app.ts

const add = (num1: number, num2: number, showResult: boolean, phrase: string) => {
  const results = num1 + num2;

  if (showResult) {
    console.log(phrase + results);
  } else {
    return results;
  }
};

add(5, 2.8, true, 'Result is: ');
