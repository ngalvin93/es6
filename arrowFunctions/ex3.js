

let getFullName = (user = {firstName: 'nofirst', lastName: 'nolast'}) => {
    return `${user.firstName} ${user.lastName}`;
}

// Calling this function will error out if you don't provide input arguments
// Change the function definition above to include default values that won't break code execution
console.log(getFullName());