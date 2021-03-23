function printVowels(str){
    var lowerCase = str.toLowerCase();
    var arr = [];
    for(var i = 0; i < lowerCase.length; ++i){
        switch (lowerCase.charAt([i])){
            case "a":
                arr.push("a");
                break;
            case "e":
                arr.push("e");
                break;
            case "i":
                arr.push("i");
                break;
            case "o":
                arr.push("o");
                break;
            case "u":
                arr.push("u");
                break;
        }
    }
    var uniqueString = [...new Set(arr)];
    var outputString = uniqueString.join(", ");
    console.log(outputString);
}
