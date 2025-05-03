let string = "";
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    });
});