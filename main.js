let a = document.querySelector('button');

a.onclick = function hello(){
    let num1 = document.getElementById("1").value;
    let arg = document.getElementById("2").value;
    let num2 = document.getElementById("3").value;
    let out = document.querySelector('p');

    num1 = Number(num1);
    num2 = Number(num2);

    if (arg === '+'){
        out.textContent = String(num1 + num2);
    }else if (arg === '-'){
        out.textContent = String(num1 - num2);
    }else if (arg === '*'){
        out.textContent = String(num1 * num2);
    }else if (arg === '/'){
        out.textContent = String(num1 / num2);
    }else{
    }
}