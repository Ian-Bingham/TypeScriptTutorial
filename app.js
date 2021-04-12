// compile using: tsc app.ts
var add = function (num1, num2, showResult, phrase) {
    var results = num1 + num2;
    if (showResult) {
        console.log(phrase + results);
    }
    else {
        return results;
    }
};
add(5, 2.8, true, 'Result is: ');
