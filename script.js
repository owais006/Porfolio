console.log("script running .......")
document.querySelector('.cencel').style.display='none';
document.querySelector('.hamburgur').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.hem').style.display='inline'
        document.querySelector('.cencel').style.display='none'
    }
    else{
        document.querySelector('.hem').style.display='none'
        setTimeout(()=>{
        document.querySelector('.cencel').style.display='inline'
        },300);
    }

})