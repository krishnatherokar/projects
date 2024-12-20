function getid(Elem){
    return document.getElementById(Elem)
};
function getclass(Elem){
    return document.querySelectorAll("."+Elem)
};
taskHold = getid("taskHold");
taskForm = getid("taskForm");
taskInput = getid("taskInput");
taskArea = getid("taskArea");
alertHold = getid("alertHold");
progress1 = getid("progress1");
progressB = getid('progressB');
progPerc = getid("progPerc");
studyInput = getid("studyInput");
subInput1 = getid("subInput1");
subInput2 = getid("subInput2");
subArea = getid("subArea");
quoteMain = getid("quoteMain");
taskHold = getid("taskHold");
studyHold = getid("studyHold");
quoteHold = getid("quoteHold");
itemNum = localStorage.getItem("itemNum");
itemNum2 = localStorage.getItem("itemNum2");

function visTask(){
    $('#taskHold').fadeIn(200);
    $('#studyHold').hide();
    $('#quoteHold').hide();
    $("#taskForm").show();
    $("#topnav1").hide();
    $("#topnav2").hide();
    window.scrollTo(0 ,0);
    getclass("bottomIc")[0].setAttribute("state1", "active");
    getclass("bottomIc")[1].setAttribute("state1", "");
    getclass("bottomIc")[2].setAttribute("state1", "");
    getItems(false);
}            
function visStudy(){
    $('#taskHold').hide();
    $('#studyHold').fadeIn(200);
    $('#quoteHold').hide();
    $("#taskForm").hide();
    $("#topnav1").show();
    $("#topnav2").hide();
    window.scrollTo(0 ,0);
    getclass("bottomIc")[0].setAttribute("state1", "");
    getclass("bottomIc")[1].setAttribute("state1", "active");
    getclass("bottomIc")[2].setAttribute("state1", "");
    getSubs();
}
function visQuote(){
    $('#taskHold').hide();
    $('#studyHold').hide();
    $('#quoteHold').fadeIn(200);
    $("#taskForm").hide();
    $("#topnav1").hide();
    $("#topnav2").show();
    setTimeout(() => {
        quoteMain.innerHTML = 'Quotes API is not working';
    }, 1000);
    window.scrollTo(0 ,0);
    getclass("bottomIc")[0].setAttribute("state1", "");
    getclass("bottomIc")[1].setAttribute("state1", "");
    getclass("bottomIc")[2].setAttribute("state1", "active");
}

if(itemNum == null || itemNum == undefined){
    localStorage.setItem("itemNum", 0);
    itemNum = localStorage.getItem("itemNum");
}
if(itemNum2 == null || itemNum == undefined){
    localStorage.setItem("itemNum2", 0);
    itemNum2 = localStorage.getItem("itemNum2");
}

function congo1(){
    alertHold.innerHTML = '<section onclick="exitAlert()" id="alert1"><section id="alertmain"><span class="text4">100% Progress</span><br><svg class="trophy" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path style="fill:#E6F3FF;" d="M217.464,265.425h-49.111c-19.909,0-37.216-13.655-41.153-32.466l-12.033-57.51  c-2.431-11.619,0.521-23.631,8.095-32.954c8.014-9.866,20.063-15.522,33.058-15.522h61.143v15.515H156.32  c-8.301,0-15.96,3.567-21.014,9.79c-4.684,5.766-6.442,12.866-4.951,19.994l12.033,57.51c2.441,11.664,13.36,20.13,25.965,20.13  h49.111V265.425z"/><path style="fill:#CFDBE6;" d="M343.647,265.425h-49.111v-15.515h49.111c12.605,0,23.524-8.466,25.965-20.13l12.033-57.509  c1.491-7.128-0.267-14.227-4.951-19.994c-5.055-6.222-12.714-9.79-21.014-9.79h-61.143v-15.515h61.143  c12.995,0,25.043,5.656,33.058,15.522c7.575,9.323,10.526,21.335,8.095,32.954l-12.033,57.51  C380.862,251.771,363.556,265.425,343.647,265.425z"/><path style="fill:#F9B54C;" d="M302.702,413.689h-33.773V270.677h-25.859v143.012h-33.771c-4.674,0-8.463,3.789-8.463,8.463  c0,4.674,3.789,8.463,8.463,8.463h33.773v3.2h25.859v-3.2h33.773c4.673,0,8.463-3.789,8.463-8.463  C311.167,417.478,307.378,413.689,302.702,413.689z"/><path style="fill:#EDA23E;" d="M302.702,413.689h-33.773V270.677h-12.641v163.137h12.641v-3.2h33.773  c4.673,0,8.463-3.789,8.463-8.463C311.165,417.478,307.378,413.689,302.702,413.689z"/><path style="fill:#FFD300;" d="M256.002,325.056L256.002,325.056c-39.972,0-73.054-29.708-75.547-67.841l-9.787-149.675h170.667  l-9.787,149.675C329.054,295.348,295.972,325.056,256.002,325.056z"/><path style="fill:#F4A200;" d="M256.288,107.539v217.51c39.841-0.143,72.771-29.793,75.259-67.834l9.787-149.675h-85.045V107.539z"/><path style="fill:#FFD300;" d="M315.108,443.701H196.892c-5.915,0-10.711-4.796-10.711-10.711l0,0  c0-5.915,4.796-10.711,10.711-10.711h118.215c5.915,0,10.711,4.796,10.711,10.711l0,0  C325.82,438.906,321.024,443.701,315.108,443.701z"/><path style="fill:#F4A200;" d="M315.108,422.279h-58.82v21.421h58.82c5.915,0,10.711-4.796,10.711-10.711  C325.818,427.075,321.024,422.279,315.108,422.279z"/><circle style="fill:#F4E3C3;" cx="256" cy="208.386" r="37.064"/><path style="fill:#FED8B2;" d="M293.066,208.387c0-20.373-16.441-36.893-36.776-37.05v74.099  C276.625,245.281,293.066,228.761,293.066,208.387z"/><path style="fill:#DD8D00;" d="M299.961,208.387c0-24.143-19.565-43.796-43.672-43.953v13.798  c16.501,0.157,29.88,13.615,29.88,30.155s-13.379,29.998-29.88,30.155v13.798C280.395,252.185,299.961,232.531,299.961,208.387z"/><path style="fill:#F4A200;" d="M256.002,238.556c-16.634,0-30.168-13.534-30.168-30.168s13.534-30.168,30.168-30.168  c0.097,0,0.191,0.014,0.288,0.014v-13.798c-0.097,0-0.191-0.007-0.288-0.007c-24.24,0-43.96,19.72-43.96,43.96  s19.72,43.96,43.96,43.96c0.097,0,0.191-0.007,0.288-0.007v-13.798C256.191,238.544,256.098,238.556,256.002,238.556z"/></svg><span class="text6">Congratulations!</span><hr><span class="text7">Click anywhere to close</span></section></section>';
    $('#alertHold').fadeIn(200, "linear");
}

function getItems(change1){
    taskArea.innerHTML = '';
    itemNum = localStorage.getItem("itemNum");
    if (itemNum == 0){} else {
        progCount = 0;
        for(i = 1; i <= itemNum; i++){
            taskList = localStorage.getItem("item"+i);
            taskArr = JSON.parse(taskList);
            if (taskArr[1] == true){
                taskAttr = 'checked';
                color1 = 'blue1';
                progCount += 1;
            } else {
                taskAttr = '';
                color1 = 'dark2';
            }
            taskArea.innerHTML += '<section class="taskHere" info1="'+taskAttr+'"><section class="delButton delTaskBtn" onclick="confDel('+i+')"><svg viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve"><g><path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26   S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/><path d="M35.707,16.293c-0.391-0.391-1.023-0.391-1.414,0L26,24.586l-8.293-8.293c-0.391-0.391-1.023-0.391-1.414,0   s-0.391,1.023,0,1.414L24.586,26l-8.293,8.293c-0.391,0.391-0.391,1.023,0,1.414C16.488,35.902,16.744,36,17,36   s0.512-0.098,0.707-0.293L26,27.414l8.293,8.293C34.488,35.902,34.744,36,35,36s0.512-0.098,0.707-0.293   c0.391-0.391,0.391-1.023,0-1.414L27.414,26l8.293-8.293C36.098,17.316,36.098,16.684,35.707,16.293z"/></g></svg></section><section onclick="tickItems('+i+')" class="tickButton" info2="'+taskAttr+'"><svg viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve" fill="var(--'+color1+')"><polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></><g></g><g></g><g></g><g></g></svg></section>'+taskArr[0]+'</section>';
        }
        percent1 = Math.round((progCount/itemNum)*100);
        if (percent1 == 100 && change1 == true){
            congo1();
        }
        if (percent1 <= 20){color2 = 'var(--red1)'}
        else if (percent1 <= 60){color2 = 'var(--yellow1)'}
        else {color2 = 'var(--green1)'}
        progPerc.innerHTML = percent1+'%';
        progPerc.style.setProperty('color', color2);
        progressB.style.setProperty('background', color2);
        progressB.style.setProperty('width', percent1+'%');
    }
}
function hideSub(subNum1){
    getid("subSec"+subNum1).innerHTML = '';
    getid("ShowIt"+subNum1).style.setProperty('display', 'inline');
    getid("HideIt"+subNum1).style.setProperty('display', 'none');
}
function showSub(subNum1, subLen, change1){
    getid("ShowIt"+subNum1).style.setProperty('display', 'none');
    getid("HideIt"+subNum1).style.setProperty('display', 'inline');
    subList2 = localStorage.getItem("sub"+subNum1);
    subArr2 = JSON.parse(subList2);
    getid("subSec"+subNum1).innerHTML = '';
    progCount3 = 0;
    for(j=1; j<=subLen; j++){
        for(k=1; k<=3; k++){
            if(subArr2[j][k] == true){
                progCount3 += 1;
            }
        }
    }
    percent3 = Math.round((progCount3/(subLen*3))*100);
    if (percent3 == 100 && change1 == true){
        congo1();
    }
    if (percent3 <= 20){colorPer1 = 'var(--red1)'}
    else if (percent3 <= 60){colorPer1 = 'var(--yellow1)'}
    else {colorPer1 = 'var(--green1)'}
    getid("progSub"+subNum1).innerHTML = percent3+'%';
    getid("progSub"+subNum1).style.setProperty('color', colorPer1);
    for (i=1; i<=subLen; i++){
        subAttr = '';
        subAttr1 = '';
        subAttr2 = '';
        subAttr3 = '';
        color1 = 'dark2';
        color2 = 'dark2';
        color3 = 'dark2';
        
        if (subArr2[i][1] == true && subArr2[i][2] == true && subArr2[i][3] == true){
            subAttr = 'checked';
        }
        if (subArr2[i][1] == true){
            subAttr1 = 'checked';
            color1 = 'blue1';
        }
        if (subArr2[i][2] == true){
            subAttr2 = 'checked';
            color2 = 'green1';
        }
        if (subArr2[i][3] == true){
            subAttr3 = 'checked';
            color3 = 'yellow1';
        };
        getid("subSec"+subNum1).innerHTML += '<section class="subHere" info3="'+subAttr+'"><section onclick="tickSubs('+subNum1+','+i+','+3+','+subLen+')" class="tickButton" info6="'+subAttr3+'"><svg viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve" fill="var(--'+color3+')"><polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></><g></g><g></g><g></g><g></g></svg></section><section onclick="tickSubs('+subNum1+','+i+','+2+','+subLen+')" class="tickButton" info5="'+subAttr2+'"><svg viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve" fill="var(--'+color2+')"><polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></><g></g><g></g><g></g><g></g></svg></section><section onclick="tickSubs('+subNum1+','+i+','+1+','+subLen+')" class="tickButton" info4="'+subAttr1+'"><svg viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve" fill="var(--'+color1+')"><polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></><g></g><g></g><g></g><g></g></svg></section>'+subArr2[i][0]+'</section>';
    }
}

function getSubs(){
    subArea.innerHTML = '';
    itemNum2 = localStorage.getItem("itemNum2");
    if (itemNum2 == 0){} else {
        for(i = 1; i <= itemNum2; i++){
            progCount2 = 0;
            subList = localStorage.getItem("sub"+i);
            subArr = JSON.parse(subList);
            subLen1 = subArr.length-1;
            for(j=1; j<subArr.length; j++){
                for(k=1; k<=3; k++){
                    if(subArr[j][k] == true){
                        progCount2 += 1;
                    }
                }
            }
            percent2 = Math.round((progCount2/(subLen1*3))*100);
            if (percent2 <= 20){colorPer = 'var(--red1)'}
            else if (percent2 <= 60){colorPer = 'var(--yellow1)'}
            else {colorPer = 'var(--green1)'}
            subArea.innerHTML += '<section class="taskHere"><section class="delButton" onclick="confDel2('+i+')"><svg viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve"><g><path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26   S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/><path d="M35.707,16.293c-0.391-0.391-1.023-0.391-1.414,0L26,24.586l-8.293-8.293c-0.391-0.391-1.023-0.391-1.414,0   s-0.391,1.023,0,1.414L24.586,26l-8.293,8.293c-0.391,0.391-0.391,1.023,0,1.414C16.488,35.902,16.744,36,17,36   s0.512-0.098,0.707-0.293L26,27.414l8.293,8.293C34.488,35.902,34.744,36,35,36s0.512-0.098,0.707-0.293   c0.391-0.391,0.391-1.023,0-1.414L27.414,26l8.293-8.293C36.098,17.316,36.098,16.684,35.707,16.293z"/></g></svg></section><section id="ShowIt'+i+'" class="showHide" onclick="showSub('+i+','+subLen1+', false)"><svg viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve" fill="var(--dark1)"><g><path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/></g></svg></section><section id="HideIt'+i+'" class="showHide" onclick="hideSub('+i+')"><svg style="transform: rotate(180deg)" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve" fill="var(--dark1)"><g><path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/></g></svg></section><span id="progSub'+i+'" style="float: right; color: '+colorPer+'">'+percent2+'%</span>'+subArr[0]+'<br><section id="subSec'+i+'"></section></section>';
            getid("ShowIt"+i).style.setProperty('display', 'inline');
            getid("HideIt"+i).style.setProperty('display', 'none');
        }
    }
}

function tickItems(tickNum){
    tickTo = localStorage.getItem("item"+tickNum);
    tickArr = JSON.parse(tickTo);
    tickIn = tickArr[0];
    if (tickArr[1] == false){
        tickArr1 = [tickIn, true];
        change1 = true;
    } else {
        tickArr1 = [tickIn, false];
        change1 = false;
    }
    localStorage.setItem("item"+tickNum, JSON.stringify(tickArr1));
    getItems(change1);
}

function tickSubs(tickNum, chNo, tickNo, subLen2){
    tickTo = localStorage.getItem("sub"+tickNum);
    tickArr = JSON.parse(tickTo);
    if (tickArr[chNo][tickNo] == false){
        tickArr[chNo][tickNo] = true;
        change1 = true;
    } else {
        tickArr[chNo][tickNo] = false;
        change1 = false;
    }
    localStorage.setItem("sub"+tickNum, JSON.stringify(tickArr));
    showSub(tickNum, subLen2, change1);
}

taskForm.addEventListener("submit", function(event1){
    event1.preventDefault();
    itemNum = localStorage.getItem("itemNum");
    itemNumIn = parseInt(itemNum)+1;
    localStorage.setItem("itemNum", itemNumIn);
    val1 = [getid("taskInput").value, false];
    localStorage.setItem("item"+itemNumIn, JSON.stringify(val1));
    getItems(false);
    taskInput.value = "";
    window.scrollTo(0, 100000);
});

studyInput.addEventListener("submit", function(event1){
    event1.preventDefault();
    itemNum2 = localStorage.getItem("itemNum2");
    itemNumIn2 = parseInt(itemNum2)+1;
    localStorage.setItem("itemNum2", itemNumIn2);
    val2 = [getid("subInput1").value];
    for (i = 1; i <= getid("subInput2").value; i++){
        val2.push(["CH"+i, false, false, false]);
    }
    localStorage.setItem("sub"+itemNumIn2, JSON.stringify(val2));
    getSubs();
    subInput1.value = "";
    subInput2.value = "";
    window.scrollTo(0, 100000);
});

function delItems(taskNum){
    itemNum = localStorage.getItem("itemNum");
    localStorage.removeItem("item"+taskNum);
    localStorage.setItem("itemNum", itemNum-1);
    taskNum += 1;
    for(i = taskNum; i <= itemNum; i++){
        delTask1 = localStorage.getItem("item"+i);
        delNum1 = i-1;
        localStorage.setItem("item"+delNum1, delTask1);
        localStorage.removeItem("item"+i)
    }
    exitAlert();
    getItems(false);
}
function delItems1(taskNum4){
    itemNum4 = localStorage.getItem("itemNum");
    localStorage.removeItem("item"+taskNum4);
    localStorage.setItem("itemNum", itemNum4-1);
    taskNum4 += 1;
    for(j = taskNum4; j <= itemNum; j++){
        delTask1 = localStorage.getItem("item"+j);
        delNum1 = j-1;
        localStorage.setItem("item"+delNum1, delTask1);
        localStorage.removeItem("item"+j)
    }
}
function delByDate(){
    itemNum3 = localStorage.getItem("itemNum");
    itemDate = localStorage.getItem("itemDate");
    const date1 = new Date();
    date2 = date1.getDate();
    if (itemDate == null){
        localStorage.setItem("itemDate", date2);
        itemDate = itemDate = localStorage.getItem("itemDate");
    }
    if (itemDate == date2){} else {
        dateNum1 = 1;
        for (i=1; i<=itemNum3; i++){
            console.log(itemNum);
            delList = localStorage.getItem("item"+dateNum1);
            delArr = JSON.parse(delList);
            if (delArr[1] == true){
                delItems1(dateNum1);
            } else {
                dateNum1 += 1;
            }
        }
        localStorage.setItem("itemDate", date2);
    }
}
function confDel(Num1){
    alertHold.innerHTML = '<section id="alert1"><section id="alertmain">Are you sure you want to Delete?<br><button onclick="exitAlert()">Cancel</button><button class="delConf" onclick="delItems('+Num1+')">Delete</button></section></section>';
    $('#alertHold').fadeIn(200, "linear");
}
function delSubs(taskNum){
    itemNum2 = localStorage.getItem("itemNum2");
    localStorage.removeItem("sub"+taskNum);
    localStorage.setItem("itemNum2", itemNum2-1);
    taskNum += 1;
    for(i = taskNum; i <= itemNum2; i++){
        delTask1 = localStorage.getItem("sub"+i);
        delNum1 = i-1;
        localStorage.setItem("sub"+delNum1, delTask1);
        localStorage.removeItem("sub"+i)
    }
    exitAlert();
    getSubs();
}            
function confDel2(Num1){
    alertHold.innerHTML = '<section id="alert1"><section id="alertmain">Are you sure you want to Delete?<br><button onclick="exitAlert()">Cancel</button><button class="delConf" onclick="delSubs('+Num1+')">Delete</button></section></section>';
    $('#alertHold').fadeIn(200, "linear");
}
function exitAlert(){
    $('#alertHold').fadeOut(200, "linear");
}

delByDate();
visTask();