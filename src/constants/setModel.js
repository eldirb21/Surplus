const setModelObj = (key, value, state) => {
  var newState = {...state};
  newState[key] = value;
  return newState;
};

const setModelArr = (key, value, state) => {
  //Type your code here
};

export {setModelArr, setModelObj};
