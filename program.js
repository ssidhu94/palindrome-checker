function palindrome(str) {

  const lowerCase = str.toLowerCase();
  console.log(lowerCase);

  const replaced = lowerCase.replace(/[^a-z0-9]/gi,'');
  console.log(replaced);

  const palindromeStr = [];
  console.log(palindromeStr)

  for (let i = 0; i < replaced.length; i++) {
    palindromeStr.unshift(replaced[i]);
    console.log(palindromeStr);
  }

    const checkStr = palindromeStr.join('');
    console.log(checkStr);

  if (checkStr === replaced) {
  return true;
  } else {
    return false;
  }
}
 
palindrome("_eye");
