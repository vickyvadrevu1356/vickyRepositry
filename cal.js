// (function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(button =>{
        button.addEventListener('click',(e)=>{
            console.log(e.target.dataset.num);
            screen.innerText += e.target.innerText;
        })
    });

    equal.addEventListener('click',(e) =>{
        if(screen.innerText === "" || screen.innerText === "="){            
            screen.innerText = "";
        }else{
            screen.innerText = eval(screen.innerText.slice(0,-1));
        }
    });

    clear.addEventListener('click',(e) =>{       
            screen.innerText = "";      
    });


// })()