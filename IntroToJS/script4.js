function initialize()
{
    numberOutput = document.getElementById("numberout");
    negativeButton = document.getElementById("negativebtn");

    myNumber = 0;
    negativesAllowed = false;

    display();
}

function addOne()
{
        myNumber++;
        display();
}
function display()
{
    numberOutput.innerHTML = myNumber;

    if (!negativesAllowed)
    {
        negativeButton.innerHTML = "Negatives are OFF";
    }
    else
    {
        negativeButton.innerHTML = "Negatives are ON";
    }
}

function subtractOne()
{
    myNumber--;
    if (myNumber < 0 && !negativesAllowed)
    {
        myNumber=0;
    }
    display();
}

function toggleNegatives()
{
    negativesAllowed = !negativesAllowed;
    if(!negativesAllowed && myNumber < 0)
    {
        myNumber = 0;
    }
    display();
}
