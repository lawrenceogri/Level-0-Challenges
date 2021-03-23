function printCommonChar(str1, str2){
    var splitStr = str2.split('');
    var commonCharArr = []
    for(var i = 0; i < str1.length; ++i){
        if(splitStr.includes(str1.charAt([i])))
            commonCharArr.push(str1.charAt([i]));
    }
    console.log(commonCharArr.join(", "));
}
