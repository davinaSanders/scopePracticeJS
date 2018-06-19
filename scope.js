
 // 1. this should return Miss Scarlet as all the const variables are declared outside of blocks.
// 2. you cant re- assign the value of a constant variable. error.
// 3. first murderer would be Mrs peacock because that function is stored inside the first verdict variable and that return statement has access to the in block let. the second one doesnt call any function so only has access to the let outside of the blocks.
// 4. first suspects would be Scarlet, Plum and mustard because the declareAllSuspects has access to a let block which is re-assignable. the second one doesnt call any function so only has access to the let outside of the blocks.
// 5. However, const has its limitations. It only prevents us from reassigning to the constant variable. It won't stop us modifying any mutable objects that are declared with const.
// 6. because the variable murderer is global and its most recent to be executed.
let murderer = 'Professor Plum';
console.log(murderer);

const changeMurderer = function() {
  console.log(murderer);
  murderer = 'Mr. Green';
  console.log(murderer);

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';
    console.log(murderer);

    const unexpectedOutcome = function() {
      console.log(murderer);
      murderer = 'Miss Scarlet';
      console.log(murderer);
    }

    unexpectedOutcome();
    console.log(murderer);
  }

  plotTwist();
  console.log(murderer);
}

console.log(murderer);

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Miss Scarlet changes the newly declared variable Colonel Mustard only. So there are two murderers declared here (two seperate instances).



const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
// Everything works. It;s just a case of following the code.

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// when you use let again you are declaring a second instance of a variable with the same name. You are not re-assigning. the first time you use a variable with no keyword is the declaration of it(and it is global) the second time you use the variable name with no keyword you are re-assigning the value. 
