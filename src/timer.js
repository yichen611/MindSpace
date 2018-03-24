
    var c = 0
    var t
    var ti
    var num =[3,2,1,5,4,3,2,1]
    var tasktext = ["Get Ready","Get Ready","Get Ready","Breathe in","Breathe in","Breathe in","Breathe in","Breathe in",
    "Hold","Hold","Hold","Hold","Hold","Breathe out","Breathe out","Breathe out","Breathe out","Breathe out",]
    var i = 0
    var j = 0
    var elem = document.getElementById("start")
    var elem1 = document.getElementById("st")
    var cout = document.getElementById("Counter")
    var task = document.getElementById("Task")
//     function timedCount() {
//         document.getElementById('time-elapsed').value = c
//         c = c + 1
//         t = setTimeout("timedCount()", 1000)
//     }
 
//     function stopCount() {
//         clearTimeout(t)
//     }
// //--------------------------------------------------------


function CountDown() {
        
            if (i == 8){i = 3}
            cout.innerHTML = num[i++]
            t = setTimeout("CountDown()", 1000)
            ti = setTimeout("ChangeTask()",1000)   
        
    }

function switchPlay(){
    if(elem.innerText== 'START')
        {
            elem.innerText = 'PAUSE'
            elem1.style.background = "#FFBB00"
            CountDown()
        }
    else
    {
        elem.innerText = 'START'
        elem1.style.background = "#89DA59"
        clearTimeout(t)
     //   clearTimeout(ti)
    }
}

function ChangeTask(){
    if(0 <= j < 18)
        {
            task.innerHTML = tasktext[++j] 
            if(j == 18)
            {
                j = 3
                task.innerHTML = tasktext[j]
            }
        }      
           
}

 function reset(){
        self.location = 'timer.html';
}

 function backtoindex(){
        self.location = 'timerindex.html';
}
