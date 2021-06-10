const button = document.querySelectorAll('.button');
const content = document.querySelectorAll('.answer');
for(let i = 0;i<button.length;i++){
    button[i].addEventListener('click' , () =>{
        content[i].classList.toggle('show');
        if(content[i].classList.contains('show')){
        button[i].innerHTML = '<i class="fa fa-angle-up"></i>';
    }else{
        button[i].innerHTML = '<i class="fa fa-angle-down"></i>';
    }
    });
};
