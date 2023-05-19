function buttonClick()
{
    document.getElementById("boxtext").style.fontSize = "24pt";

}

function fancy()
{
    document.getElementById("boxtext").style.fontWeight = "bold";
    document.getElementById("boxtext").style.color = "blue";
    document.getElementById("boxtext").style.textDecoration = "underline";

}

function normal()
{
    document.getElementById("boxtext").style.fontWeight = "normal";
    document.getElementById("boxtext").style.color = "black";
    document.getElementById("boxtext").style.textDecoration = "none";

}

function upper()
{
    var text = document.getElementById("boxtext").value;
    var parts = text.split(".");  // ["How", "are", "you?"]
    text = parts.join("-Moo.");
    document.getElementById("boxtext").value=text.toUpperCase();

}