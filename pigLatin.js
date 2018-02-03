
var vowelRgx = /[aeiou]/
// the brakets [] tell regex to check for an instance of ANY of these

function pigLatin(string){
  string = document.getElementById("English").value
  // tells our function to find the user input on our html page for var string

  if(string.split("")[0]==string.match(vowelRgx)[0]) {
    // this block is executed if the first character of the string is a vowel
    // first, we split the string into an array of characters in that substring
    // then, we match the character at index 0 against the vowelRgx
    document.getElementById("Translation").innerHTML = string + "way"
  } else {
    // this block is executed if first character is not a vowel
    // we are creating 2 substrings:
    // the first substring consists of all the consecutive consonants at the
    // beginning of the original string

    // second substring begins at the first vowel in the word
    // we find out where that happens with the regex
    // .index reffers to the index attribute of the object our match method returns
    // that attribute has the value of the index of the first instance of a vowel in our string

    // finally, we concatenate the two two substrings with "ay"
    var endIdx = string.match(vowelRgx).index
    var needsMoving = string.substring(0, endIdx);
    var restOfString = string.substring(endIdx)
    document.getElementById("Translation").innerHTML = restOfString+needsMoving+"ay"
  }
}
