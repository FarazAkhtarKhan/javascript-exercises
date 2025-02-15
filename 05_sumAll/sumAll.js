const sumAll = function(lowerlimit, upperlimit) {
    let sum =0;
    if(lowerlimit && upperlimit !== Number) return 'ERROR';
    else if(lowerlimit > upperlimit) {
        temp =  lowerlimit; 
        lowerlimit = upperlimit;
        upperlimit = temp;
    }
    else if((upperlimit || lowerlimit) < 0) return 'ERROR'
    for(let i=lowerlimit; i <= upperlimit; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
