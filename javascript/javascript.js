let ques=["how was your day?","what is html?","why we use html?",
    "what is the full form of css?","what javascript does in web design?",
    "can we use bootstrap?","can media query is mandatory?",
    "what if the style is not done for web page?","can the web page always dynamic?"]
    
function check(){
    let msg=document.getElementById("text").value;

    if(ques.includes(msg)){
        document.getElementById("content").innerHTML="your question is accepted";
        document.getElementsByClassName("btn1")[0].style.backgroundColor="green";
        document.getElementsByClassName("btn1")[0].style.color="white";
    }
    else{
        if(msg==""){
            alert("ask the question properly");
        }
        else{
        document.getElementById("content").innerHTML="your question is declined <br>try to give correct question to get accepted";
        document.getElementsByClassName("btn1")[0].style.backgroundColor="red";
        document.getElementsByClassName("btn1")[0].style.color="white";
        }
    }
}

function decline(){
    document.getElementsByClassName("btn1")[0].style.backgroundColor="gold";
    document.getElementsByClassName("btn1")[0].style.color="black";
    document.getElementsByClassName("btn2")[0].style.backgroundColor="gold";
    document.getElementsByClassName("btn2")[0].style.color="black";
    document.getElementById("content").innerHTML="";
    // document.getElementById("text").reset();
}
