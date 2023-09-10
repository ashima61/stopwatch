//variables to keep track of the hours, minutes, seconds, and a count value in the timer

var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

//if the timer is working or not
var timer = false;

//onclick 
// It sets the timer variable to true to indicate that the timer is running and then calls the stopWatch() function
function start(){
    timer=true;
    stopWatch();
}

//This function is called when the "Stop" button is clicked. It sets the timer variable to false, effectively pausing the timer
function stop(){
    timer=false;
}

function reset(){
    timer=false;
    
    hr=0;
    min=0;
    sec=0;
    count=0;

document.getElementById("hr").innerHTML="00";
document.getElementById("min").innerHTML="00";
document.getElementById("sec").innerHTML="00";
document.getElementById("count").innerHTML="00";
}

//to run the program
//It checks if the timer variable is true, indicating that the timer is running. If it is, the function increments the count variable 
and checks if it reaches 60.If so, it increments the sec variable and resets the count to 0. Similar checks are performed for minutes and hours
function stopWatch(){
    if(timer==true){
        count++;
        if(count==60){
            sec++;
            count=0;
        }

        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hr++;
            min=0;
        }

        var hrString=hr;
        var minString=min;
        var secString=sec;
        var countString=count;

        if(hr<10){
            hrString = "0" + hrString;
        }
        if(min<10){
            minString = "0" + minString;
        }
        if(sec<10){
            secString = "0" + secString;
        }
        if(count<10){
            countString="0" + countString;
        }

        //fetch
        
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        //schedules the stopWatch function to be called again after a 10-millisecond delay, creating the effect of a 
        continuously updating timer as long as timer is true
        setTimeout("stopWatch()",10);
    }
}
