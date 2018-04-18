var name = prompt('Hi there!  What is your name?');
var output = document.querySelector('#greeting');


var checkName = function(){
  if(name === "" || name === null){// checks for an empty string
    name = prompt('What is your name, for real this time?');

    checkName(); // repeats until a name exists
 }
}

checkName(); // kicks off the name=checking the first time


output.innerHTML = '<h1>Thanks for visiting, ' + name + '.</h1>';
