window.alert = function(message, timeout=null){
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');
    alertButton.innerText= 'OK';
    alert.classList.add('alert');
    alert.setAttribute('style',`
    position:fixed;
    top: 40px;
    left:50%;
    padding:5px;
    border-radius:10px;
    box-shadow:0 10px 5px 0 #00000022;
    display:flex;
    flex-direction:column;
    border:1px solid #333;
    transform:translateX(-50%);
    color:black;
    `);
    alertButton.setAttribute('style',`
        border:1px solid #333;
        background: white;
        border-radius:5px;
        padding:5px;
        color:blue;
    `);
    alert.innerHTML= `<span style="padding:10px">${message}</span>`;
    alert.appendChild(alertButton);
    alertButton.addEventListener('click', (e)=>{
        alert.remove();
    });
    if(timeout !=null){
        setTimeout(()=>{
            alert.remove();
        }, Number(timeout))
    }
    document.body.appendChild(alert);
}