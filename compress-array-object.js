const dogs = [ 
    { name: "Rio", age: 2 },
    { name: "Mac", age: 3 },
    { name: "Bruno", age: 5 },
    { name: "Jucas", age: 10 },
    { name: "Furr", age: 8 },
    { name: "Blu", age: 7 },
]

const namesOnly = Array.from(dogs, ({name}) => name)
namesOnly
