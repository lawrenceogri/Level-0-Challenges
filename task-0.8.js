function numberToMinutes(num){
    var hours = Math.trunc(num/60);
    var minutes = num % 60;
    hours > 1? hours += " hours" : hours += " hour";
    minutes > 1? minutes += " minutes" : minutes += " minute";
    console.log(hours + ", " + minutes);
}
