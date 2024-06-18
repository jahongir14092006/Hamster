function plus() {
    let mySpan = document.getElementById('zaxira');
    let myH1 = document.getElementById('h1');
    if(mySpan.innerText>=7){
        mySpan.innerText = mySpan.innerText -7;
        myH1.innerText = parseInt(myH1.innerText) + 7;
    }else{
        mySpan.innerText = '0';
    }
    
    let myImg = document.getElementById('img');
    myImg.addEventListener('click', function(event) {
        let x = event.clientX;
        let y = event.clientY;
        let myB = document.createElement('b');
        myB.innerText = '+7';
        myB.classList = 'tap';
        myB.style.transform = `translate(${x},${y})`;
    })
    
    
    
}

function add() {
    let mySpan = document.getElementById('zaxira');
    if(mySpan.innerText<=3997){
        mySpan.innerText = Number(mySpan.innerText)+3;
    }else{
        mySpan.innerText = '4000';
    }
}

setInterval(add, 1000);

////////////////////////////////////////////////////////////////
// 