// we can mutate objects and arrays even if they are declared as constant
// but we can prevent objects from mutating using Object.freeze() method

function freezeObject() {
  const pi = {
    PI: 3.14,
  };

  //   freezing the pi object so its value remains immutable
  Object.freeze(pi);

  try {
    pi.PI = 100;
  } catch (ex) {
    console.log(ex);
  }
  return pi.PI;
}

const freezedObj = freezeObject();
console.log(freezedObj);
