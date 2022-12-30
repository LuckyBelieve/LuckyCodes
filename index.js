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
console.log(mynonVowel('academy'));