// const addEventListener = (action, button, actionOnElement, callback) => {
//   if(!action){
//     console.log('Error!!!');
//   }
//   console.log(`pressed ${button} button`);
//   return callback(action, button, actionOnElement);
// }

// const button1 = 'click me';
// let state = true;
// state = addEventListener('click', button1, state , () => false);
// pressed click me button
// false

// const button2 = 'Edit';
// let text = 'Today is a beautiful day';
// text = addEventListener('changeTxt', button2, text, ()=> `today is a long day` );

// const button3 = 'Details'
// addEventListener('hover', button3, _, (action) => `${action} shows the details`);



// addEventListener('hover' ,(action) => `button ${action}ed`)
/*
button1.setOnEventListener('click', (action) => `button ${action}`);
*/

const onCLick = () => {
  const subscribers = {};

  return {
    addEventListener(event, callback){
      subscribers[event] ? subscribers[event] = event : subscribers[event] = [callback];
    },
    
  }
}
