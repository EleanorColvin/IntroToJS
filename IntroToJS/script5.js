function initialize()
{
    messageOutput = document.getElementById("output");

    message = "";
}
function display()
{
    messageOutput.innerHTML = message;
}
function addCharacter(ch)
{
    message += ch;
    display();
}