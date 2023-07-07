const { relative } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  
  
  rl.question('What is your favourite activity ', (activity) => {
    ;

    rl.question('What do you listen to when you code?', (music) => {
      //console.log(`Thank you:${answer2} from ${answer3} who likes ${answer1}`)

      rl.question('What is your favourite food: ', (food) => {

        rl.question('What is your favoutie movie of all time ', (movie) => {
          
          rl.question('What is your superpower?', (superpower) => {
            console.log(`Meet ${name}. His favourite activity is ${activity}. When he is not ${activity}, he is coding 
          or watching his favourite movie ${movie}. While coding he listens to ${music}. When it is time to eat, he prefers ${food}. 
          He is quite likeable, but watch out, ${superpower} is his superpower`)

            rl.close();
          })
          
          
        })

        
      })

      
    })
   
  });
  
  
});


