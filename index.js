
color=["red","blue","yellow","green"]
userArr=[]
randCol="";
gameArr=[]
var i=0,level=0;
//generating the random numbers between 0 and 3
const find=()=>
{
    return Math.round(Math.random()*3);

}

//To show the animation for the specific color button clicked

function animate(val)
{
var ff=$("#"+val)
console.log(ff)
ff.addClass("pressed");
setTimeout(() => {
    ff.removeClass("pressed");
}, 100);

}

// function for generating the intended sound for the color button

function sound(ch)
{
switch (ch) {
    case "red":
        var a =new Audio("sounds/red.mp3");
        a.play();
        break;
    case "blue":
        var ad =new Audio("sounds/blue.mp3");
        ad.play();
        break;
    case "yellow":
        var ad =new Audio("sounds/yellow.mp3");
        ad.play();
        break;
    case "green":
        var ad =new Audio("sounds/green.mp3");
        ad.play();
        break;
    case "wrong":
        var ad =new Audio("sounds/wrong.mp3");
        ad.play();
        break;
    default:console.log(ch)
        break;
}
}

// to generate the next random move by the computer(Simply the next move that we have to click)

function autoGenerate()
{
        var pr=find()
        sound(color[pr])
        animate(color[pr])
        gameArr.push(color[pr])

        console.log("in auto generate")
        console.log(gameArr+" val "+pr)

}

// executed when the keyboard button is clicked

$(document).keypress(function(e)
{
    if(i==0)
    {
        level++;
        $("h1").text("Level "+level)
        var pr=find()
        sound(color[pr])
        animate(color[pr])
        gameArr.push(color[pr])
        i++;
    }
    
})

// when you press the wrong button this function is called
function gameOver()
{
    
    sound("wrong");
  $("body").addClass("game-over");
  $("h1").text("Game Over, Press Any Key to Restart");

  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  
}

// for checking the order which we entered a valid one or not

function checkFinal(kk)
{
    // var kk=0;
    var ff=0;
    
        if(gameArr[kk]!=userArr[kk]) 
        {
            gameOver();
            i=0;
            level=0;
            userArr=[];
            gameArr=[];
        }

        if(kk==gameArr.length-1)
        {
            
            $("h1").text("Level "+level)
             
            console.log(kk+" user"+userArr+" game"+gameArr)
            userArr=[]
            setTimeout(() => {
                autoGenerate();
            }, 1000);
            level++;
        }
      
}


// when a button is clicked 

$("button").click(function() {

   
    var col = $(this).attr("id");
    userArr.push(col);
    // console.log(col)
  
    sound(col);
    animate(col);   
    checkFinal(userArr.length-1);

    
  });


