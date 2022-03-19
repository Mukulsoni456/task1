var sentence = 'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answer'

var strArray = sentence.split(/[, ]+/).filter(w=>w!==' ');
console.log(strArray)

var maxlength = Math.max(...(strArray.map(e=>e.length)))

console.log(maxlength)
const longest_string = (strArray)=>{
    var Wordwithvow = []
    const result = strArray.filter(v=> v.length == maxlength)
    console.log(result)

    for (let i = 0; i < result.length; i++) {
        var maxVowel=0
        const word = result[i];
        const wordSplit = word.split('')
        console.log(wordSplit)
        

        for (let j = 0; j < wordSplit.length; j++) {
            if(wordSplit[j]== 'a'
            || wordSplit[j]=='e'
            || wordSplit[j]=='i'
            || wordSplit[j]=='o'
            || wordSplit[j]=='u'){
                maxVowel += 1;

            }
        }

        Wordwithvow.push({
            word:word,
            maxVowel:maxVowel
        })
        /****************************************/ 
    }
var maxvow = Math.max(...Wordwithvow.map(e => e.maxVowel))
const WordWithMaxVow = Wordwithvow.filter(v=> v.maxVowel == maxvow)
return WordWithMaxVow

}

console.log(longest_string(strArray))



