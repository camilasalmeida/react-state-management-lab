# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Filter explanation:
`const newTeam = team.filter(fighter => fighter.name !== fighterToBeRemoved.name);`
This line is filtering the team array to remove a fighter whose name matches the fighterToBeRemoved.name. Here's a step-by-step breakdown:

team.filter(...):

The .filter() method is an array method in JavaScript that creates a new array containing all the elements from the original array that pass a condition specified in the callback function.
The .filter() method does not modify the original team array, it returns a new array that includes only the elements that satisfy the condition in the provided callback.
fighter => fighter.name !== fighterToBeRemoved.name:

This is the callback function that's passed to .filter().

It takes each fighter object from the team array one by one and compares the name property of the fighter with the name of the fighterToBeRemoved.

The expression fighter.name !== fighterToBeRemoved.name checks if the name of the current fighter in the loop is not equal to the name of the fighter that you want to remove (fighterToBeRemoved).

If this condition is true (meaning the fighter's name doesn't match the one you're removing), that fighter will stay in the new array.

If the condition is false (meaning the fighter's name matches the one you're removing), that fighter will not be included in the new array.

Result:

The result is a new array, newTeam, which contains all the fighters from the team except the one whose name matches fighterToBeRemoved.name.
Essentially, it removes the fighter you want to remove, based on the name comparison.

//-----------------------------------------\\
How .filter() Works:
Array Iteration:

.filter() goes through every element in the array and runs the callback function for each element.
For each element (which in your case would be a fighter object in the team array), the callback function checks if the element meets a certain condition.
Callback Function:

The callback function takes one element from the array at a time and evaluates the condition inside it.
The callback can have any condition you want, and it must return a boolean value (true or false).
Condition:

If the condition inside the callback returns true, that item will stay in the resulting array (the new array created by .filter()).
If the condition returns false, that item will not be included in the resulting array.
Return:

The .filter() method always returns a new array with only the elements that passed the condition. It does not modify the original array.