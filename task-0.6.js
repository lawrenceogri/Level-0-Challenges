function maxNumber(){
    var args = arguments;
    var arr = [];
    

    for(var a in args){
        arr.push(args[a]);
    }
    var biggest = arr[0];
    for(var i = 0; i < arr.length; ++i){
      if(arr[i] > biggest)
        biggest = arr[i];
    }
  return biggest;
}