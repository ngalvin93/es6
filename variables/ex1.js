// Declare and instantiate a block scoped variable
// YOUR CODE GOES HERE
const func = number => {
    let total = []
    total.push(number + 1)
    console.log(total)
}
func(5)

// Declare and instantiate a unchangeable block scoped variable
// YOUR CODE GOES HERE
const func2 = (num1, num2) => {
    const num3 = 10
    console.log(num1+num2+num3)
}
func2(5, 2)