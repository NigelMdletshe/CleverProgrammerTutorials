console.log('hello')
//alert("YO")

//var age = prompt('What is your age?')
//document.getElementById('someText').innerHTML= age
//functions
function fun(){
    console.log('This is a function')

}
//fun()

/* Lets create a function that says hello followed by your name
For example
Name : 'Nigel'
Return : 'Hello Nigel'
*/
function getName(){
    var name = prompt('What is your name?')
    console.log("Hello"+ " " + name)
}
//getName()
// How argument work in a function

function sumNumbers(num1, num2){
    var result = num1 + num2
    console.log(result)
}
//sumNumbers(224344, 3435456)

function greeting(yourName){
   
    
    var results = 'Hello' + " "+ yourName
    console.log(results)
    

}
//var name =  prompt('What is  your  name?')
//greeting(name)

var num = 0
while (num < 100){
    num += 1
   // console.log(num)
}

//for loop
for( let num =0; num <= 100;num++){
    console.log(num)
}


