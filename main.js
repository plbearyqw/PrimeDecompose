
function isOdd(positive){
    if(positive % 2 != 0){
        return true;
    }else{
        return false;
    }
}

function isPrime(positive){
    if(!isOdd(positive) && positive !== 2){
        return false;
    }
    else if(positive ===2){
        return true;
    }
    else{
        for(let each = 3; each < positive; each += 2){
            if(positive % each == 0){
                return false;
            }
        }
    }
    return true;
}

function generatePrime(minimum, maximum){
    let primes = [];
    for(let each = minimum; each <= maximum; each++){
        if(!isOdd(each) && each !== 2){
            continue;
        }
        else if(isPrime(each)){
            primes.push(each);
        }
    }
    return primes;
}

function decompose(positive){
    if(positive <= 0){
        return -1;
    }

    let primes = generatePrime(2, positive / 2);
    let result = [];
    let number = positive;
    while(number != 1 && !isPrime(number)){
        for(let each of primes){
            if(number % each === 0){
                number /= each;
                result.push(number);
                break;
            }
        }
    }
    if(number != 1){
        return -2;
    }
    return result;
}