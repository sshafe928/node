setInterval(() => {
    console.log('Hello world!')
}, 2000);
console.log('I will run first')
/*
process stays alive unless you kill the process
you kill process by ctrl + c
unexpected error or logical errors can and will happen be careful
*/

//to avoid infinite loops use clearInterval()