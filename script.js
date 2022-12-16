function toggle(id) {
    let button=document.getElementById(id);
    if(button.style.display=='block') {
        button.style.display='none';
    }else{
        button.style.display='block';
    }
    let x="hello world";
} 
function myfunction(){
    let a=23;b=453;
    let  c=a+b;
    // document.getelementbyId('demo').innerHTML="the sum is"+c+".";
    document.getElementById('demo').innerHTML="the sum is "+c+".";
}
function hisfunction(){
    let name='Believe';
    document.getElementById('me').innerHTML="HELLO mr. "+name+" !!";
    document.getElementById('you').innerHTML="Welcome to our website";
}
document.write(x);

