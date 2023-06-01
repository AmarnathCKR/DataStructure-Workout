// Anagram
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    let count = {};
    for (let i = 0; i < str1.length; i++) {
      let char = str1[i];
      count[char] = count[char] ? count[char] + 1 : 1;
    }
    for (let i = 0; i < str2.length; i++) {
      let char = str2[i];
      if (!count[char]) {
        return false;
      }
      count[char]--;
    }
    return true;
  }
  
  console.log(isAnagram('amar','rmaa'))
  
  
  