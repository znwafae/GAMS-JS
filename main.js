let btn = document.getElementById('btn');
let output=document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click',function(){
    let input = document.getElementById('userinput').value;
    if(input == number){
        output.innerHTML ="You guessed right"
    } else if (input<number){
        output.innerHTML="You geussed too low!"
    };
    if (input>number){
        output.innerHTML="you geussed too high!"
    }
})