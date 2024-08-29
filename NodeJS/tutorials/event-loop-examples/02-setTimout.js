//started operating system process
//async
console.log('first')
setTimeout(() => {
    console.log('second')
},0)
console.log('third')

//to avoid infinite loops use clearTimeout()