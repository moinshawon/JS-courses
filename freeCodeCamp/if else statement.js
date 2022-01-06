// class 15:

function check(booleanValue){
    if (booleanValue){
        console.log("it is true");
    }
    else{
        console.log("it was false");
    } 
}
check(true);

function numberCheck1(num){
    if (num == "13"){              // double equal doesn't care about the type
        return "equal";
    }
    return "not equal";
}
console.log(numberCheck1(13));

function numberCheck2(num){
    if (num === "13"){              // triple equal cares about the type. it call strict equality operator
        return "equal";
    }
    return "not equal";
}
console.log(numberCheck2(13));

function numberCheck3(num){
    if (num != "13"){              // double equal doesn't care about the type.
        return "not equal";
    }
    return "equal";
}
console.log(numberCheck3(13));

function numberCheck4(num){
    if (num !== "13"){
        return "not equal";
    }
    return "equal";
}
console.log(numberCheck4(13));

// class 16:
function gt(num){
    if (num > 50){
        return "greater than 50";
    }
    return "less or equal of 50";
}
console.log(gt(50));

function gtOrEq(num){
    if (num >= 50){
        return "greater or equal of 50";
    }
    return "less than 50";
}
console.log(gtOrEq(50));

// class 17:
function check(num){
    if (num < 150 && num > 110){
        return "yes";
    }
    return "no";
}
console.log(check(140));

function check(num){
    if (num < 150 || num > 110){
        return "yes";
    }
    return "no";
}
console.log(check(140));

// class 18:

function check2(num){
    if (num <= 50){
        return "less or eq of 50";
    }
    else if (num > 30){
        return "gt than 30";
    }
    else{
        return "outside of 31 to 50";
    }
}
console.log(check2(33));

// class 19:

function caseWithSwitch(val){
    var ans = "";
    switch(val){
        case 1:
            ans = "moin";
            break;
        case 2:
            ans ="raihan";
            break;;
        case 3:
            ans = "rifat";
            break;
        case 4:
        case 5:
        case 6:
            ans = "arnob";
            break;
        case 'bc':
            ans = "zarif";
            break;
    }
    return ans;
}
console.log(caseWithSwitch('bc'));

var count = 0;

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case 'A':
        case 'J':
        case 'K':
        case 'Q':
            count --;
            break;
    }

    var holdbet = 'Hold';
    if (count > 0){
        holdbet = 'bet';
    }

    return count + " " + holdbet;
}

cc(2);
cc(3);
cc(4);
cc(7);
cc('A');
cc('K');
cc(10);
cc('Q');
console.log(cc(4));
