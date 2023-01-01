let myAge = 23;
let myName = "Ineza lucky believe";
console.log( 'my name is '+ myName +' and my age is '+ myAge);
let metime = "it's just a begining";

function mynonVowel(word){

    let nonVowelString = '';
    for( let i=0;i<word.length;i++){
        let myWord = word[i].toLowerCase();
        if(myWord =='a' || myWord =='i' || myWord =='e' || myWord =='o' || myWord =='u' ){
            continue;
        }
        nonVowelString+=word[i];
    }
    return nonVowelString;

}
console.log(mynonVowel('happiness'));
  

 // a function that finds the long word in a sentence
 
function maxSentence(myword){
   let myArray = myword.split(" ");
    let maxWord = 0;
    let longWord;

    for(let x=0;x<myArray.length;x++){
        if(myArray[x].length>maxWord){
            maxWord = myArray[x].length;
            longWord = myArray[x];
        }
    }
    return longWord;

}
console.log(maxSentence('the favourite franchise and  it it is very intresting at all'));

//reversing a string and removing all of it's vowel

function reversed(myword){
    let reversedString=''
    for(let y=myword.length-1;y>0;y--){
        let nonVowel = myword[y].toLowerCase();
        if(nonVowel =='a' || nonVowel =='e' || nonVowel =='i' || nonVowel =='u' || nonVowel =='o'){
            continue;
        }
        reversedString+=myword[y];
    }
    return reversedString;
}
console.log(reversed('AcaDemy'));