// Write an expression that uses an array prototype method (filter, reduce, map, etc.)
//   to compute the total value of the machines in the inventory array;

const inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]

// Filter out things that arent machines:
// let justMachines = YOUR_CODE_HERE
// console.log(justMachines)

// es6
let justMachines = inventory.filter(machine => machine.type === "machine")

// Calculate the total value of the machines
// let totalMachineValue = YOUR_CODE_HERE
// console.log(totalMachineValue)

// es6
let totalMachineValue = justMachines.map(machine => machine.value).reduce((acc,curr) => acc + curr)

console.log(justMachines)
console.log(totalMachineValue)