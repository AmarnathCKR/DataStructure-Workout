// count Substring
function countSubstring(str, substr) {
    let count = 0;
    for (let i = 0; i <= str.length - substr.length; i++) {
      let sub = str.substring(i, i + substr.length);
      if (sub === substr) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countSubstring('amal','a'))