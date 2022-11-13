let submitForm = document.getElementById('result');

let form = document.getElementById('form');


submitForm.addEventListener('click' , (e) => {
    e.preventDefault();
    let a = Number(form.a.value);
    let b = Number(form.b.value);
    let result = 0;
    
    for (let i = a + 1; i < b; i++) {
        let check = true
        for (let j = 2; j <= i/2; j ++) {
            if (i % j == 0) {
                check = false;
            }
        }
        if (check) {
            result = result + i;
        }
    }
    
    let haveResult = document.createElement('h3');
    haveResult.innerText = `${result}`;
    form.appendChild(haveResult)
    
})