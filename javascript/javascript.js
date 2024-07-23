let msg=document.getElementById("text");
function check(){
    if(msg=='how was your day?'){
        document.getElementById("content").innerHTML="your question is accepted";
        document.getElementsByClassName("btn1")[0].style.backgroundColor="green";
        document.getElementsByClassName("btn1")[0].style.color="white";
        document.getElementsByClassName("btn2")[0].style.backgroundColor="gold";
        document.getElementsByClassName("btn2")[0].style.color="black";
    }
    else{
        document.getElementById("content").innerHTML="your question is declined";
        document.getElementsByClassName("btn2")[0].style.backgroundColor="red";
        document.getElementsByClassName("btn2")[0].style.color="white";
        document.getElementsByClassName("btn1")[0].style.backgroundColor="gold";
        document.getElementsByClassName("btn1")[0].style.color="black";
    }
}
