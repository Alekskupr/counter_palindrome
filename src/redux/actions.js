const addOneAC = str => {
  return {
    type: 'ADDONE',
    payload: str,
  };
};

const palindromeResultAC = boolean => {
  return {
    type: 'PALINDROME',
    payload: boolean,
  }
}

export { addOneAC, palindromeResultAC };
