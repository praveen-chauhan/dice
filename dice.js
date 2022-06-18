function myfunc() {let text;
let a=Math.floor(Math.random() * 6);
let b=Math.floor(Math.random() * 6);
document.getElementById('demo1').innerHTML = a+1;
document.getElementById('demo2').innerHTML = b+1;
    function myfunction1(c) {switch (c) {
        case 0: text = `<img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-512.png">`;
            break;
        case 1: text = `<img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_2-512.png">`; break;
        case 2: text = `<img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_3-512.png">`; break;
        case 3: text = `<img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png">`; break;
        case 4: text = `<img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_5-512.png">`; break;
        case 5: text = `<img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_6-512.png">`;
    }
    return text;
}
    document.getElementById('demo').innerHTML = myfunction1(a);
    document.getElementById('demo3').innerHTML = myfunction1(b);
    
}