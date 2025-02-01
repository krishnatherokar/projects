//While writing this code at that time, I had no idea about file system and hosting them on sites like github. So i used to write the code for all the pages in one file and use the display property to change the content on the page. And hence those properties are getting manipulated for many elements when the visitor clicks some icons, making this code bit too lenghty.

const getid=id=>document.getElementById(id);
const getq=(q)=>document.querySelectorAll(q);
const rnum=(min, max)=>Math.floor(Math.random() * (max - min) + min);

svgC1=`<svg viewBox="0 0 15.571 15.571"><g><g><path style="fill:var(--dark4);" d="M3.73,3.771h0.708c0.26,0,0.471-0.166,0.471-0.374V0.373C4.909,0.166,4.7,0,4.438,0H3.73    C3.47,0,3.258,0.167,3.258,0.373v3.024C3.258,3.605,3.47,3.771,3.73,3.771z"/><path style="fill:var(--dark4);" d="M11.132,3.771h0.707c0.263,0,0.471-0.166,0.471-0.374V0.373C12.31,0.166,12.102,0,11.839,0h-0.707    c-0.26,0-0.471,0.167-0.471,0.373v3.024C10.662,3.605,10.872,3.771,11.132,3.771z"/><path style="fill:var(--dark4);" d="M14.751,1.443h-1.876v2.316c0,0.517-0.465,0.938-1.037,0.938h-0.707    c-0.572,0-1.038-0.421-1.038-0.938V1.443h-4.62v2.316c0,0.517-0.465,0.938-1.038,0.938H3.73c-0.57,0-1.037-0.421-1.037-0.938    V1.443H0.816c-0.312,0-0.566,0.255-0.566,0.568v12.994c0,0.313,0.254,0.566,0.347,0.566h13.938c0.53,0,0.786-0.253,0.786-0.566    V2.009C15.32,1.698,15.064,1.443,14.751,1.443z M14.447,14.287c0,0.564-0.486,0.515-0.486,0.515H8.88c0,0,3.107-1.557,5.567-3.768    C14.447,11.034,14.447,13.635,14.447,14.287z M14.554,9.474c-0.213,0.841-0.684,1.815-1.543,1.178    c-1.252-0.927-2.486-1.714-2.645,0.15c-0.131,1.57-3.033,3.705-3.665,4.151H1.193c-0.099,0-0.177-0.079-0.177-0.177v-8.01    c0-0.099,0.079-0.178,0.177-0.178h13.184c0.097,0,0.178,0.079,0.178,0.178L14.554,9.474L14.554,9.474z"/><rect x="3.258" y="7.97" style="fill:var(--dark4);" width="2.202" height="2.201"/><rect x="6.88" y="7.97" style="fill:var(--dark4);" width="2.2" height="2.201"/><rect x="3.258" y="11.309" style="fill:var(--dark4);" width="2.202" height="2.201"/><path style="fill:var(--dark4);" d="M6.88,13.51h0.637c0.465-0.436,1.168-1.157,1.563-1.652v-0.549h-2.2V13.51z"/><path style="fill:var(--dark4);" d="M10.386,9.008c0.222-0.217,0.489-0.283,0.729-0.283c0.453,0,0.952,0.253,1.471,0.596V7.97h-2.2    V9.008z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
svgC2=`<svg fill="var(--dark4)" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>`;
svgC3=`<svg fill="var(--dark4)" viewBox="0 0 512 512"><path d="M256,156c0-9.2-7.5-16.7-16.7-16.7h-86.4L164,86.4c0.2-1.2,0.4-2.6,0.4-3.9c0-5.2-2.1-9.8-5.5-13.2L145.7,56l-82.3,82.3  c-4.5,4.5-7.3,10.8-7.3,17.7v108.3c0,13.8,11.2,25,25,25h112.5c10.3,0,19.2-6.2,23-15.2l37.8-88.2c1.1-2.8,1.8-5.8,1.8-9.1V156z   M431,222.7H318.5c-10.3,0-19.2,6.2-23,15.2l-37.8,88.2c-1.1,2.8-1.7,5.8-1.7,9.1V356c0,9.2,7.5,16.7,16.7,16.7h86.4L348,425.6  c-0.2,1.2-0.4,2.6-0.4,3.9c0,5.2,2.1,9.8,5.5,13.2l13.3,13.2l82.3-82.3c4.5-4.5,7.3-10.8,7.3-17.7V247.7  C456,233.8,444.8,222.7,431,222.7z"/></svg>`;

svgQ1=`<svg fill="var(--dark4)" viewBox="0 0 512 512"><path d="M256,156c0-9.2-7.5-16.7-16.7-16.7h-86.4L164,86.4c0.2-1.2,0.4-2.6,0.4-3.9c0-5.2-2.1-9.8-5.5-13.2L145.7,56l-82.3,82.3  c-4.5,4.5-7.3,10.8-7.3,17.7v108.3c0,13.8,11.2,25,25,25h112.5c10.3,0,19.2-6.2,23-15.2l37.8-88.2c1.1-2.8,1.8-5.8,1.8-9.1V156z   M431,222.7H318.5c-10.3,0-19.2,6.2-23,15.2l-37.8,88.2c-1.1,2.8-1.7,5.8-1.7,9.1V356c0,9.2,7.5,16.7,16.7,16.7h86.4L348,425.6  c-0.2,1.2-0.4,2.6-0.4,3.9c0,5.2,2.1,9.8,5.5,13.2l13.3,13.2l82.3-82.3c4.5-4.5,7.3-10.8,7.3-17.7V247.7  C456,233.8,444.8,222.7,431,222.7z"></path></svg>`;
svgQ2=`<svg fill="var(--dark4)" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>`;

function round1(iid){
    getid(iid).innerHTML += `<section class="round1"><svg class="tick" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve" fill="var(--blue1)"><polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></><g></g><g></g><g></g><g></g></svg></section>`;
}

function round2(iid){
    getid(iid).innerHTML += `<section class="round2"></section>`;
}

function question1(iid, ques1, tag, id1, user, likes){
    getid(iid).innerHTML += `<section class="card3"><span class="upvotes">${svgQ1,likes}</span><span class="question">${ques1}</span><br><span class="tag">${tag}</span><img onclick="profile1(\'${user}\')" class="avatar1" src="https://avatar.iran.liara.run/username?username=${user}" onerror=this.src="files/img/sololearnLogo.webp"><span onclick="profile1(\'${user}\')" class="name1">${user}</span><span class="views">${svgQ2, rnum(100, 1000)}</span></section>`;
}

function course1(iid, src, cls){
    clsBor = {0: 'partbor', .5: 'halfbor', 1: 'fullbor'}
    getid('coursehold'+String(iid)).innerHTML += '<img class="courseround '+clsBor[cls]+'"  src="files/img/'+src+'" onerror=this.src="files/img/Course1.png">';
}

function coach1(iid, src){
    getid('coursehold'+String(iid)).innerHTML += '<img class="coachimg"  src="files/img/'+src+'" onerror=this.src="files/img/Course1.png">';
}

function code3(iid, id1, codename1, user, likes){
    getid(iid).innerHTML += `<section class="card3 flex"><section class="wrapimg"><img class="avatar1" onclick="profile1(\'${user}\')" src="https://avatar.iran.liara.run/username?username=${user}" onerror=this.src="files/img/sololearnLogo.webp"></section><section class="wrapcode"><span class="codename1">${codename1}</span><span class="name1"><span onclick="profile1(\'${user}\')">${user}</span></span><span class="views">${svgC1} ${rnum(2, 24)} Hrs${svgC2} ${rnum(200, 2000)}</span><span class="upvotes">${svgC3}${likes}</span></section></section>`;
}

function feed1(iid, id1, user, title, content){
    getid(iid).innerHTML += `<section class="card1"><img class="avatar4" onclick="profile1(\'${user}\')" src="https://avatar.iran.liara.run/username?username=${user}" onerror=this.src="files/img/sololearnLogo.webp"><span onclick="profile1(\'${user}\')" class="blueclr1 size2">${user} </span><span class="txtclr5 size2">${title}</span><br><section class="content1"><span class="right ic2">"</span><span class="maincont">${content}</span><span class="left ic1">"</span></section><span class="arroww1">&gt;</span><span class="likess">+${rnum(10, 100)}</span><span class="arroww2">&lt;</span><span class="time1">${rnum(2, 24)} Hrs</span></section>`;
}

function feed2(iid, id1, user, title, imgsrc){
    getid(iid).innerHTML += `<section class="card1"><img class="avatar4" onclick="profile1(\'${user}\')" src="https://avatar.iran.liara.run/username?username=${user}" onerror=this.src="files/img/sololearnLogo.webp"><span onclick="profile1(\'${user}\')" class="blueclr1 size2">${user} </span><span class="txtclr5 size2">${title}</span><br><img class="postimg1" src="${imgsrc}" onload=this.style.height="auto" onerror=this.src="files/img/Noimg.png"><span class="arroww1">&gt;</span><span class="likess">+${rnum(10, 1000)}</span><span class="arroww2">&lt;</span><span class="time1">${rnum(2, 24)} Hrs</span></section>`;
}

function notif1(iid, id1, user, title){
    getid(iid).innerHTML += `<section class="card3"><img class="avatar1" onclick="profile1(\'${user}\')" src="https://avatar.iran.liara.run/username?username=${user}" onerror=this.src="files/img/sololearnLogo.webp"><span onclick="profile1(\'${user}\')" class="blueclr1 size2">${user} </span><span class="txtclr6 size2">${title}</span><span class="txtclr3 time1">${rnum(2, 24)} Hrs</span></section>`;
}

function msg3(iid, id1, user, title){
    getid(iid).innerHTML += `<section class="card3"><span class="txtclr3 time1">${rnum(2, 24)} Hrs</span><section class="flex"><img onclick="profile1(\'${user}\')" class="avatar1" src="https://avatar.iran.liara.run/username?username=${user}" onerror=this.src="files/img/sololearnLogo.webp"><section onclick="chatbot2(${id1}, \'${user}\')" class="main1"><span class="blueclr1 size2">${user}</span><br><span class="txtclr6 size2">${title}</span></section></section></section>`;
}

function sugest(sug){
    getid("suggestions").innerHTML += `<span class="pill1" style="min-width:${sug.length*10}px" onclick="setvalue(\'${sug}\')">${sug}</span>`;
}

//define elements
var all1 = getq("*");
cssRoot = document.querySelector(':root');

var codes = getid("codes");
var loader1 = getid("loader1");
var part1 = getid("part1");
var part2 = getid("part2");
var part3 = getid("part3");
var part4 = getid("part4");
var part5 = getid("part5");
var avatar = getid("avatar");
var username = getid("username");
var levell = getid("levell");
var xps = getid("xps");
var bio = getid("bio");
var followers = getid("followers");
var following = getid("following");
var streak = getid("streak");
var streakflex1 = getid("streakflex1");
var codeshold = getid("codeshold");
var topnav = getid("topnav");
var fade1 = getid("fade1");
var fade2 = getid("fade2");
var fade3 = getid("fade3");
var livemsgholder1 = getid("livemsg");
var info1 = getid("info1");
var modethemehold = getid("modethemehold");
var alertmain = getid("alertmain");
var sidediv1 = getid("sidediv1");
var sidediv2 = getid("sidediv2");
var inputformsg = getid("inputformsg");
var chlhold = getid('chlhold');

var loader2 = getq(".loader2");
var viewbtn = getq(".viewbtn");
var drop1 = getq(".drop1");

var alert1 = getid("alert1");
var loader1 = getid("loader1");
var discuss = getid("discuss");
var codes = getid("codes");
var profile2 = getid("profile2");
var learn = getid("learn");
var options = getid("options");
var community = getid("community");
var feed = getid("feed");
var notif = getid("notif");
var bottomnav = getid("bottomnav");
var msg = getid("msg");
var chatbot = getid("chatbot");
var swipe1 = getid("swipe1");
var swipe2 = getid("swipe2");

var coursehold1 = getid("coursehold1");
var coursehold2 = getid("coursehold2");
var coursehold3 = getid("coursehold3");
var coursehold4 = getid("coursehold4");
var coursehold5 = getid("coursehold5");
var code2 = getid("code1");
var ques1 = getid("ques");
var notifhold1 = getid("notifhold1");
var msghold1 = getid("msghold1");
var feedhold1 = getid("feedhold1");
var feedhold2 = getid("feedhold2");

var pageNum=null;

var navcontent1 = `<span onclick="settingshow1()" class="menu1">&#9776;</span><svg fill="#fff" class="msg1" onclick="swipe2show2()"  viewBox="0 -30 200 300" style="enable-background:new 0 0 233.058 233.058;" xml:space="preserve"><g><path d="M116.538,4.05C52.284,4.05,0,45.321,0,96.043c0,28.631,16.729,55.208,45.889,72.911c4.525,2.737,7.635,7.283,8.572,12.478   c2.876,16.045-0.991,32.948-6.758,47.576c19.239-9.134,39.064-23.161,54.8-36.63c3.879-3.314,9.055-4.701,14.087-4.354h0.023   c64.191,0,116.445-41.259,116.445-91.987C233.058,45.321,180.792,4.05,116.538,4.05z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg><svg class="bell1" onclick="swipe2show1()" viewBox="0 0 512 512" fill="#fff"><g><path d="M381.7,225.9c0-97.6-52.5-130.8-101.6-138.2c0-0.5,0.1-1,0.1-1.6c0-12.3-10.9-22.1-24.2-22.1c-13.3,0-23.8,9.8-23.8,22.1   c0,0.6,0,1.1,0.1,1.6c-49.2,7.5-102,40.8-102,138.4c0,113.8-28.3,126-66.3,158h384C410.2,352,381.7,339.7,381.7,225.9z"/><path d="M256.2,448c26.8,0,48.8-19.9,51.7-43H204.5C207.3,428.1,229.4,448,256.2,448z"/></g></svg><section id="topinfo" onclick="swipe2show2()">${rnum(20,100)}</section>`;
var navcontent2 = `<section onclick="settingshow1()" class="menu1 fixedleft">&#9776;</section><section class="tophold"><section onclick="community1()" class="txtclr7 size4 navtxt1">Practice</section><section onclick="feed3()" class="txtclr7 size4 navtxt1">Feed</section></section>`;
var navcontent3 = `<section onclick="settingshow1()" class="menu1 fixedleft">&#9776;</section><section class="tophold"><section onclick="notification1()" class="txtclr7 size4 navtxt1">Notifs</section><section onclick="message1()" class="txtclr7 size4 navtxt1">Messages</section></section>`;

$('#sidenav').hide();

getid("form2").addEventListener("submit", event1=>{
    event1.preventDefault();
    searchcode();
});
getid("form3").addEventListener("submit", event2=>{
    event2.preventDefault();
    searchques();
});

function property1(elem2){
    for (i=0; i<elem2.length; i++){
        if (elem2[i].hasAttribute('onclick')){
            elem2[i].style.setProperty('cursor', 'pointer');
            elem2[i].style.setProperty('-webkit-tap-highlight-color', '#0000');
        }
    }
}

function check1(){
    var span1 = getq("span");
    var svg1 = getq("svg");
    var img2 = getq("img");
    var section1 = getq("section");
    var button1 = getq("button");
    property1(span1);
    property1(svg1);
    property1(img2);
    property1(section1);
    property1(button1);
}

function votes1(){
    var arroww1 = getq(".arroww1");
    var arroww2 = getq(".arroww2");
    var likess = getq(".likess");
    for (let i = 0; i < arroww1.length; i++) {
        arroww1[i].onclick = ()=>{
            likecount1 = likess[i].innerHTML;
            likecountint1 = parseInt(likecount1);
            flike1 = likecountint1 + 1;
            likess[i].innerHTML = '+' + flike1;
        }
        arroww2[i].onclick = ()=>{
            likecount2 = likess[i].innerHTML;
            likecountint2 = parseInt(likecount2);
            flike2 = likecountint2 - 1;
            likess[i].innerHTML = '+' + flike2;
        }
    };
}

function chl2(){
    chlhold.innerHTML = '<button class="btn3">You\'re not eligibile to play challanges</button>';
}

function codelist(){
    var arr1 = [];
    var codearr1 = ['', '19107895', '14022015', '3573369', '19394415', '7439484', '16812836', '19480187', '18717961', '18772045', '18653347'];
    var codearr2 = ['', 'Sololearn clone', 'Facebook app UI', 'My physics engine', 'ToDo list app', 'Magical words', 'What is AI', 'Check your number', 'Rainy day', 'Color game', 'Customizable particles'];
    var codearr3 = ['', 'Shruti', 'Divyanshu', 'Prashanth Kumar', 'Queen', 'Dhruva', 'Riddhi', 'Manya', 'Anmol', 'Harsh', 'Anshika'];
    while(arr1.length < 10){
        var r1 = Math.floor(Math.random() * 10) + 1;
        if(arr1.indexOf(r1) === -1) arr1.push(r1);
    }
    for (num=0; num<10; num++){
        code3('code1', codearr1[arr1[num]], codearr2[arr1[num]], codearr3[arr1[num]], rnum(100, 1000));
    }
}
function queslist(){
    var arr2 = [];
    var quesarr1 = ['', 'What is html?', 'Why it\'s giving error by god', 'Where is my haveli?', 'What is array?', 'Why this Ml is not working?', 'How to fetch data?', 'How to upload image?', 'Why this array have 0 elements?', 'What is the difference?', 'What is image processing?'];
    var quesarr2 = ['', 'Html', 'ByGod', 'Haveli', 'Array', 'Ml', 'Fetching', 'Image', 'Array', 'Code', 'Image'];
    var quesarr3 = ['', '18669173', '10107008', '18736943', '17555554', '18109487', '16882555', '14097887', '18088635', '13000293', '7109620'];
    var quesarr4 = ['', 'Satnam', 'Amit', 'Pari', 'Deepanjali', 'Namit', 'Ayush', 'Assassin', 'Suhana', 'Priyarth', 'SR'];
    while(arr2.length < 10){
        var r2 = Math.floor(Math.random() * 10) + 1;
        if(arr2.indexOf(r2) === -1) arr2.push(r2);
    }
    for (num=0; num<10; num++){
        question1('ques', quesarr1[arr2[num]], quesarr2[arr2[num]], quesarr3[arr2[num]], quesarr4[arr2[num]], rnum(100, 1000));
    }
}
function feed1list(){
    var arr3 = [];
    var feed1arr1 = ['', '18653347', '19480187', '19107895', '18772045', '18717961', '14022015'];
    var feed1arr2 = ['', 'Anshika', 'Manya', 'Shruti', 'Harsh', 'Anmol', 'Divyanshu'];
    var feed1arr3 = ['', 'Post', 'Posted a new answer to the question "How to avoid errors?"', 'Posted a new code "Manjar"', 'Replied to a comment on code "Color game"', 'Posted a new code "Curious Coders"', 'Posted a comment on code "Sololearn"'];
    var feed1arr4 = ['', '<section class="top40"></section><section class="center1">Thankkkkkkkkkk Youuuuuuuu Soooooo Much</section><section class="top40"></section>', 'Don\'t write any code!<br>Na rhega code na rhege errors.', 'for i in range(100):<br>print("Testing")', 'Thank you', '&lt;html&gt;<br>&lt;head&gt;<br>&lt;style&gt;<br>body {<br>...', 'Awesome Bawa'];
    while(arr3.length < 6){
        var r3 = Math.floor(Math.random() * 6) + 1;
        if(arr3.indexOf(r3) === -1) arr3.push(r3);
    }

    var arr4 = [];
    var feed2arr1 = ['', '18736943', '3573369'];
    var feed2arr2 = ['', 'Pari', 'Prashanth Kumar'];
    var feed2arr3 = ['', 'Post', 'Post'];
    var feed2arr4 = ['', 'files/img/post2.png', 'files/img/post1.png'];
    while(arr4.length < 2){
        var r4 = Math.floor(Math.random() * 2) + 1;
        if(arr4.indexOf(r4) === -1) arr4.push(r4);
    }
    num3 = 2;
    for (num=0; num<2; num++){
        feed1('feedhold1', feed1arr1[arr3[num]], feed1arr2[arr3[num]], feed1arr3[arr3[num]], feed1arr4[arr3[num]]);
        for (i=0; i<2; i++){
            feed1('feedhold1', feed1arr1[arr3[num3]], feed1arr2[arr3[num3]], feed1arr3[arr3[num3]], feed1arr4[arr3[num3]]);
            num3 += 1;
        }
        feed2('feedhold1', feed2arr1[arr4[num]], feed2arr2[arr4[num]], feed2arr3[arr4[num]], feed2arr4[arr4[num]]);
    }
    num3 = 3;
}
function notiflist(){
    var arr5 = [];
    var notifarr1 = ['', '20278522', '19107895', '14574715', '14022015', '18109487', '16882555', '3573369', '14097887', '19801748', '19394415', '7439484', '16812836', '17555554', '13000293'];
    var notifarr2 = ['', 'Shreyash', 'Shruti', 'Jay', 'Divyanshu', 'Namit', 'Ayush', 'Prashanth Kumar', 'Assassin', 'Sowmya', 'Queen', 'Dhruva', 'Riddhi', 'Deepanjali', 'Priyarth'];
    var notifarr3 = ['', 'liked your comment on "Gm"', 'mentioned you in comment for code "Fruity"', 'challanged you in Html', 'mentioned you in comment for the post "Meow"', 'Liked your code "Instagram"', 'started following you', 'helped you for API', 'liked your comment on code "Variables in Html"', 'started following you', 'challanged you in Js', 'liked your comment on post "So today is..."', 'replied to your comment on the code "Ai"', 'posted a comment on your code "Quora"', 'started following you'];
    while(arr5.length < 14){
        var r5 = Math.floor(Math.random() * 14) + 1;
        if(arr5.indexOf(r5) === -1) arr5.push(r5);
    }
    for (num=0; num<14; num++){
        notif1('notifhold1', notifarr1[arr5[num]], notifarr2[arr5[num]], notifarr3[arr5[num]]);
    }
}
function msglist(){
    var arr6 = [];
    var msgarr1 = ['', '18736943', '18772045', '18717961', '9151475', '7109620', '10107008', '18088635', '19181491', '19480187', '14808477', '18044537', '18653347', '18669173'];
    var msgarr2 = ['', 'Pari', 'Harsh', 'Anmol', 'Amardeep Kesharwani', 'SR', 'Amit', 'Suhana', 'Sakshi', 'Manya', 'Raghav', 'Vamshi', 'Anshika', 'Satnam'];
    var msgarr3 = ['', 'Haveli op', 'Bro ye code...', 'Haa', 'You: Vaise...', 'You: Hehe', 'By god', 'You: xD', 'Gift?', 'You: Chocolate...', 'You: Accha', 'Okay', 'You: Princess Sista...', 'You: Bawa ye clone...'];
    while(arr6.length < 13){
        var r6 = Math.floor(Math.random() * 13) + 1;
        if(arr6.indexOf(r6) === -1) arr6.push(r6);
    }
    for (num=0; num<13; num++){
        msg3('msghold1', msgarr1[arr6[num]], msgarr2[arr6[num]], msgarr3[arr6[num]]);
    }
}

function learn1(){
    getq(".high1")[0].style.setProperty('fill', 'var(--blue1)');
    getq(".high2")[0].style.setProperty('color', 'var(--blue1)');
    for (ii=1; ii<=3; ii++){
        getq(".high1")[ii].style.setProperty('fill', 'var(--dark1)');
        getq(".high2")[ii].style.setProperty('color', 'var(--dark1)');
    }
    getq(".high2")[4].style.setProperty('color', 'var(--dark1)');
    coursehold1.innerHTML = "";
    coursehold2.innerHTML = "";
    coursehold3.innerHTML = "";
    topnav.style.background = "var(--blue1)";
    $('#discuss').hide();
    $('#codes').hide();
    $('#profile2').hide();
    $('#options').hide();
    $('#swipe1').hide();
    $('#swipe2').hide();
    topnav.innerHTML = navcontent1;
    for (s=0; s<2; s++){
    course1(1, 'Py-1.jpg', 1);
    course1(1, 'Ai-1.jpg', .5);
    course1(1, 'Data-1.jpg', 0);
    course1(1, 'Ml-1.jpg', 1);
    course1(2, 'Html-1.jpg', .5);
    course1(2, 'Css-1.png', .5);
    course1(2, 'Js-1.png', 1);
    }
    course1(3, 'React-1.png', 0);
    course1(3, 'Redux-1.png', .5);
    course1(3, 'C-1.png', 1);
    course1(3, 'Cpp-1.png', 1);
    course1(3, 'Cs-1.png', .5);
    course1(3, 'Py-1.jpg', 0);
    course1(3, 'Java-1.png', 0);
    course1(3, 'Js-1.png', 1);
    coursehold4.innerHTML = "";
    coursehold5.innerHTML = "";
    notifhold1.innerHTML = "";
    msghold1.innerHTML = "";
    feedhold1.innerHTML = "";
    window.removeEventListener('scroll', loadanim);
    window.removeEventListener('scroll', topnav1);
    $('#learn').show();
    $('#bottomnav').show();
    check1();
    window.scrollTo(0,0);
}

function swipe1show(){
    getq(".high1")[0].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[0].style.setProperty('color', 'var(--dark1)');
    getq(".high1")[1].style.setProperty('fill', 'var(--blue1)');
    getq(".high2")[1].style.setProperty('color', 'var(--blue1)');
    getq(".high1")[2].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[2].style.setProperty('color', 'var(--dark1)');
    getq(".high1")[3].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[3].style.setProperty('color', 'var(--dark1)');
    getq(".high2")[4].style.setProperty('color', 'var(--dark1)');
    coursehold4.innerHTML = "";
    coursehold5.innerHTML = "";
    feedhold1.innerHTML = '';
    topnav.style.background = "var(--blue1)";
    $('#discuss').hide();
    $('#codes').hide();
    $('#learn').hide();
    $('#profile2').hide();
    $('#options').hide();
    $('#swipe2').hide();
    topnav.innerHTML = navcontent2;
    for (t=0; t<2; t++){
    coach1(4, 'Fruit-1.jpg');
    coach1(4, 'Secret-password-1.png');
    coach1(4, 'Security-1.jpg');
    course1(5, 'Kotlin-1.jpg', .5);
    course1(5, 'Data-structures-1.jpg', 1);
    course1(5, 'Data-1.jpg', 0);
    }
    feed1list();
    votes1();
    coursehold1.innerHTML = "";
    coursehold2.innerHTML = "";
    coursehold3.innerHTML = "";
    notifhold1.innerHTML = "";
    msghold1.innerHTML = "";
    pageNum = 1;
    window.removeEventListener('scroll', loadanim);
    window.removeEventListener('scroll', topnav1);
    swipe1.addEventListener('touchstart', handleTouchStart1, false);
    swipe1.addEventListener('touchmove', touchMove, false);
    $('#swipe1').fadeIn();
    $('#bottomnav').show();
    check1();
    window.scrollTo(0,0);
}

function community1(){
    if (window.innerWidth > 560){
        getq(".swipewrap")[0].style.setProperty('margin', '0 0 0 0vw');
    } else {
        getq(".navtxt1")[0].style.setProperty('border-bottom', '3px solid #fff');
        getq(".navtxt1")[1].style.setProperty('border-bottom', '3px solid #0000');
        getq(".swipewrap")[0].style.setProperty('margin', '0 0 0 0vw');
    }
}

function feed3(){
    if (window.innerWidth > 560){
        getq(".swipewrap")[0].style.setProperty('margin', '0 0 0 0vw');
    } else {
        getq(".navtxt1")[1].style.setProperty('border-bottom', '3px solid #fff');
        getq(".navtxt1")[0].style.setProperty('border-bottom', '3px solid #0000');
        getq(".swipewrap")[0].style.setProperty('margin', '0 0 0 -100vw');
    }
}

function swipe1show1(){
    swipe1show();
    community1();
}

function swipe1show2(){
    swipe1show();
    feed3();
}

function codes1(){
    getq(".high1")[0].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[0].style.setProperty('color', 'var(--dark1)');
    getq(".high1")[1].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[1].style.setProperty('color', 'var(--dark1)');
    getq(".high1")[2].style.setProperty('fill', 'var(--blue1)');
    getq(".high2")[2].style.setProperty('color', 'var(--blue1)');
    getq(".high1")[3].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[3].style.setProperty('color', 'var(--dark1)');
    getq(".high2")[4].style.setProperty('color', 'var(--dark1)');
    topnav.style.background = "var(--blue1)";
    $('#discuss').hide();
    $('#learn').hide();
    $('#profile2').hide();
    $('#options').hide();
    $('#swipe1').hide();
    $('#swipe2').hide();
    topnav.innerHTML = navcontent1;
    window.addEventListener('scroll', loadanim);
    window.removeEventListener('scroll', topnav1);
    coursehold1.innerHTML = "";
    coursehold2.innerHTML = "";
    coursehold3.innerHTML = "";
    coursehold4.innerHTML = "";
    coursehold5.innerHTML = "";
    notifhold1.innerHTML = "";
    msghold1.innerHTML = "";
    feedhold1.innerHTML = "";
    $('#codes').show();
    $('#bottomnav').show();
    check1();
    showcode1('Hot today', '');
    window.scrollTo(0,0);
}

function discuss1(){
    getq(".high1")[0].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[0].style.setProperty('color', 'var(--dark1)');
    getq(".high1")[1].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[1].style.setProperty('color', 'var(--dark1)');
    getq(".high1")[2].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[2].style.setProperty('color', 'var(--dark1)');
    getq(".high1")[3].style.setProperty('fill', 'var(--blue1)');
    getq(".high2")[3].style.setProperty('color', 'var(--blue1)');
    getq(".high2")[4].style.setProperty('color', 'var(--dark1)');
    topnav.style.background = "var(--blue1)";
    $('#codes').hide();
    $('#learn').hide();
    $('#profile2').hide();
    $('#options').hide();
    $('#swipe1').hide();
    $('#swipe2').hide();
    topnav.innerHTML = navcontent1;
    window.addEventListener('scroll', loadanim);
    window.removeEventListener('scroll', topnav1);
    coursehold1.innerHTML = "";
    coursehold2.innerHTML = "";
    coursehold3.innerHTML = "";
    coursehold4.innerHTML = "";
    coursehold5.innerHTML = "";
    notifhold1.innerHTML = "";
    msghold1.innerHTML = "";
    feedhold1.innerHTML = "";
    $('#discuss').show();
    $('#bottomnav').show();
    check1();
    showques1('Trending', '');
    window.scrollTo(0,0);
}

function profile1(iid){
    getq(".high1")[0].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[0].style.setProperty('color', 'var(--dark1)');
    getq(".high1")[1].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[1].style.setProperty('color', 'var(--dark1)');
    getq(".high1")[2].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[2].style.setProperty('color', 'var(--dark1)');
    getq(".high1")[3].style.setProperty('fill', 'var(--dark1)');
    getq(".high2")[3].style.setProperty('color', 'var(--dark1)');
    getq(".high2")[4].style.setProperty('color', 'var(--blue1)');
    $('#discuss').hide();
    $('#codes').hide();
    $('#learn').hide();
    $('#options').hide();
    $('#swipe1').hide();
    $('#swipe2').hide();
    $('#chatbot').hide();
    topnav.innerHTML = navcontent1;
    data(iid);
    coursehold1.innerHTML = "";
    coursehold2.innerHTML = "";
    coursehold3.innerHTML = "";
    coursehold4.innerHTML = "";
    coursehold5.innerHTML = "";
    notifhold1.innerHTML = "";
    msghold1.innerHTML = "";
    feedhold1.innerHTML = "";
    window.removeEventListener('scroll', loadanim);
    window.addEventListener('scroll', topnav1);
    $('#profile2').fadeIn();
    $('#bottomnav').show();
    check1();
    window.scrollTo(0,0);
}

function swipe2show(){
    notifhold1.innerHTML = "";
    msghold1.innerHTML = "";
    topnav.style.background = "var(--blue1)";
    $('#discuss').hide();
    $('#codes').hide();
    $('#learn').hide();
    $('#profile2').hide();
    $('#options').hide();
    $('#swipe1').hide();
    $('#chatbot').hide();
    notiflist()
    msglist()
    topnav.innerHTML = navcontent3;
    pageNum = 2;
    window.removeEventListener('scroll', loadanim);
    window.removeEventListener('scroll', topnav1);
    swipe2.addEventListener('touchstart', handleTouchStart1, false);
    swipe2.addEventListener('touchmove', touchMove, false);
    coursehold1.innerHTML = "";
    coursehold2.innerHTML = "";
    coursehold3.innerHTML = "";
    coursehold4.innerHTML = "";
    coursehold5.innerHTML = "";
    feedhold1.innerHTML = "";
    $('#swipe2').fadeIn();
    $('#bottomnav').show();
    check1();
    window.scrollTo(0,0);
}

function notification1(){
    if (window.innerWidth > 560){
        getq(".swipewrap")[1].style.setProperty('margin', '0 0 0 0vw');
    } else {
        getq(".navtxt1")[0].style.setProperty('border-bottom', '3px solid #fff');
        getq(".navtxt1")[1].style.setProperty('border-bottom', '3px solid #0000');
        getq(".swipewrap")[1].style.setProperty('margin', '0 0 0 0vw');
    }
}

function message1(){
    if (window.innerWidth > 560){
        getq(".swipewrap")[1].style.setProperty('margin', '0 0 0 0vw');
    } else {
        getq(".navtxt1")[1].style.setProperty('border-bottom', '3px solid #fff');
        getq(".navtxt1")[0].style.setProperty('border-bottom', '3px solid #0000');
        getq(".swipewrap")[1].style.setProperty('margin', '0 0 0 -100vw');
    }
}

function swipe2show1(){
    swipe2show();
    notification1();
}

function swipe2show2(){
    swipe2show();
    message1();
}

function chatbot2(id1, user){
    livemsgholder1.innerHTML = '';
    inputformsg.value = '';
    topnav.style.background = "var(--blue1)";
    $('#swipe2').hide();
    topnav.innerHTML = `<section class="flex"><svg onclick="swipe2show2()" id="backsvg" viewBox="0 0 24 24"><path fill="var(--white4)" d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg><br><img class="avatar1" onclick="profile1(\'${user}\')" src="https://avatar.iran.liara.run/username?username=${user}" onerror=this.src="files/img/sololearnLogo.webp"><br><span onclick="profile1(\'${user}\')" class="size3 txtclr8">${user}</span></section>`;
    window.removeEventListener('scroll', loadanim);
    window.removeEventListener('scroll', topnav1);
    coursehold1.innerHTML = "";
    coursehold2.innerHTML = "";
    coursehold3.innerHTML = "";
    coursehold4.innerHTML = "";
    coursehold5.innerHTML = "";
    msghold1.innerHTML = "";
    notifhold1.innerHTML = "";
    feedhold1.innerHTML = "";
    $('#chatbot').fadeIn();
    $('#bottomnav').hide();
    check1();
    inputformsg.focus();
}

function settingexit(){
    topnav.style.transition = '0s background';
    $('#sidenav').fadeOut();
    $('#sidediv2').fadeOut();
    sidediv1.style.margin = '0 0 0 -300px';
}

function settingshow1(){
    topnav.style.transition = '.4s background';
    $('#sidenav').show();
    $('#sidediv2').fadeIn();
    sidediv1.style.margin = '0';
}

function settingshow2(){
    notifhold1.innerHTML = "";
    topnav.style.background = "var(--blue1)";
    $('#discuss').hide();
    $('#codes').hide();
    $('#learn').hide();
    $('#profile2').hide();
    $('#swipe1').hide();
    $('#swipe2').hide();
    topnav.innerHTML = navcontent1;
    window.addEventListener('scroll', loadanim);
    window.removeEventListener('scroll', topnav1);
    coursehold1.innerHTML = "";
    coursehold2.innerHTML = "";
    coursehold3.innerHTML = "";
    coursehold4.innerHTML = "";
    coursehold5.innerHTML = "";
    feedhold1.innerHTML = "";
    $('#options').show();
    $('#bottomnav').hide();
    $('#sidenav').fadeOut();
    $('#sidediv2').fadeOut();
    sidediv1.style.margin = '0 0 0 -300px';
    check1();
    window.scrollTo(0,0);
}

//define function for load animation
function loadanim(){
    for (i=0; i<loader2.length; i++){
        let elem1 = loader2[i];
        let position = elem1.getBoundingClientRect();
    }
}
//define a funtion for topnav
function topnav1(){
    let ele1 = part1.offsetHeight - 60;
    let wind = window.pageYOffset + 10;
    let opac = 1000-wind*4;
    let marg = wind/6;
    if (wind > ele1) {
        topnav.style.background = "var(--blue1)";
    } else {
        topnav.style.background = "#0000";
        part1.style.margin = `0 0 ${marg}px 0`;
        fade1.style.marginLeft = `${wind}px`;
        fade1.style.opacity = opac/1000;
    }
}
//define function for time
function gettime(){
    try {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        let timee = `It\'s ${hh}:${mm} now`;
        return timee;
    } catch(err){return 'I don\'t know';}
}
//function for battery
function getbatt(){
    try {
        navigator.getBattery().then(battery=>{
            battlevel = `Your battery level is ${(battery.level * 100).toFixed()}%`;
        });
        return battlevel;
    } catch (err){
        return 'I don\'t know';
    }
}
//define function for memes
function showmeme(){
    memelink = ['files/img/Meme4.jpg', 'files/img/Meme3.jpg', 'files/img/Meme1.png', 'files/img/Meme2.png']
    function checklink(){
        memeimg = getq('.memeimg');
        if (memeimg.length == memelink.length){
            finalmeme = 'No'
        } else {
            finalmeme = memelink[rnum(0,4)];
            for (i=0; i<memeimg.length; i++){
                memeimg[i].src.slice(-19,) == finalmeme?checklink():0;
            }
        }
    }
    checklink();
    return finalmeme == 'No'?'No memes available':`<img class="memeimg" src="${finalmeme}" onload=this.style.height="auto" onerror=this.src="files/img/Noimg.png">`;
}

checked = false;
devScore = 0;
arrDev = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i]

//define function for msgs
var num2 = 100;
function submitmsg(){
    msg10 = ['Hello', 'Converting oxygen to carbon dioxide', 'Chatting with you', 'I\'m fine', 'Just like you!', 'Just like any human being haha', 'I\'m mad', 'What do you think?', 'Alien!!', gettime(), 'Javascript', 'Python', 'Java', 'Html', 'Kuch kaam nahi lol', 'Oxygen ko carbon dioxide me convert', 'Kuch nhi', 'Mujhe nhi pta', 'I don\'t know', 'What do you think?', 'Shut up', 'Nooo', 'Tum ho!', 'Nhii', 'Lol', 'Really?', getbatt(), 'This code is created by Krishna Therokar', 'Btw, what\'s your name?', 'Hehe', 'No', 'Yes', 'What\'re you doing?', 'I don\'t know', 'Can you hack NASA with CSS?', 'Bye', 'What\'re you saying?', 'Nothing much tbh', 'Lol', 'Yeah so', 'Awesome', 'Nice', showmeme()];
    //code for checking the device before focusing the input as it's causing UI glithces in mobile devices
    if (checked==false){
        for (v=0; v<arrDev.length; v++){
            navigator.userAgent.match(arrDev[v])?devScore+=1:false;
        }
        checked = true;
    }
    devScore==0?inputformsg.focus():false;
    msg1 = inputformsg.value;
    livemsgholder1.innerHTML += `<section class="innermsghold1"><section class="whitespace1"></section><section class="innermsg1">${msg1}</section></section>`;
    inputformsg.value = "";
    window.scrollTo(0, num2);
    num2 += 200;
    msg = msg1.toLowerCase();
    if (msg == 'hello' || msg == 'hi' || msg == 'hlo' || msg == 'hey' || msg == 'hii'){
        msgno = 0
    }
    else if (msg.includes('what') && (msg.includes('you') || msg.includes('u')) && msg.includes('doing')){
        msgno = rnum(1,3)
    }
    else if (msg.includes('how') && (msg.includes('are') || msg.includes('r')) && (msg.includes('you') || msg.includes('u'))){
        msgno = rnum(3,6)
    }
    else if (msg.includes('who') && (msg.includes('are') || msg.includes('r')) && (msg.includes('you') || msg.includes('u'))){
        msgno = rnum(6, 9)
    }
    else if (msg.includes('what') && msg.includes('time') && msg.includes('now')){
        msgno = 9
    }
    else if (msg.includes('what') && (msg.includes('you') || msg.includes('u')) && msg.includes('learning')){
        msgno = rnum(10,14)
    }
    else if ((msg.includes('you') || msg.includes('u')) && (msg.includes('mad') || msg.includes('stupid'))){
        msgno = rnum(20,22)
    }
    else if (msg.includes('what') && msg.includes('battery')){
        msgno = 26
    }
    else if (msg.includes('who') && (msg.includes('creator') || msg.includes('created')) && msg.includes('code')){
        msgno = 27
    }
    else if (msg.includes('show') && msg.includes('meme')){
        msgno = 42
    }
    else if (msg.includes('what') || msg.includes('why') || msg.includes('how')){
        msgno = rnum(18,20)
    }
    else if ((msg.includes('kya') || msg.includes('ky')) && (msg.includes('kr') || msg.includes('kar') || msg.includes('chl') || msg.includes('chal'))){
        msgno = rnum(14,16)
    }
    else if ((msg.includes('tum') || msg.includes('tu')) && (msg.includes('pagal') || msg.includes('pgl') || msg.includes('mad'))){
        msgno = rnum(22,24)
    }
    else if (msg.includes('kya') || msg.includes('kaise') || msg.includes('kyu')){
        msgno = rnum(16,18)
    }
    else {
        msgno = 'Random';
        msgRandom = msg10[rnum(1,43)];
    }
    msg21= msgno=='Random'?msgRandom:msg10[msgno];
    if(msgno==42){
        time1=1000
    } else {
        time1 = msg21.length*80
        time1<=600?time1=600:false;
        time1>3000?time1=3000:false;
    }
    
    setTimeout(() => {
        livemsgholder1.innerHTML += '<section class="innermsghold1"><section class="innermsg2"><section class="dothold"><span class="dott dot1"></span><span class="dott dot2"></span><span class="dott dot3"></span></section></section><section class="whitespace1"></section></section>';
        window.scrollTo(0, num2);
    }, 400);
    setTimeout(function(){
        var innermsg = getq(".innermsghold1");
        inner1 = innermsg[innermsg.length-1].innerHTML;
        if (inner1.includes('innermsg1')){
            innermsg[innermsg.length-2].innerHTML = `<section class="innermsg2">${msg21}</section><section class="whitespace1"></section>`;
        } else {
            innermsg[innermsg.length-1].innerHTML = `<section class="innermsg2">${msg21}</section><section class="whitespace1"></section>`;
        }
        window.scrollTo(0, num2);
        num2 += 1000;
    }, time1);
}
$("#form1").submit(function(e){
    e.preventDefault();
    submitmsg();
})

//define function for input value
function setvalue(valuee){
    inputformsg.value = valuee;
    submitmsg();
}

arrSug = ['What r u doing?','Show me a meme','Whats my battery level?','What time is it now?','How r u?','Kya chal raha hai?']
for(i=0; i<arrSug.length; i++){
    sugest(arrSug[i])
}

function theme1(codee){
    cssRoot.style.setProperty('--blue1', '#'+codee);
}
arrClr = ['dark1', 'dark2', 'dark3', 'dark4', 'white1', 'white2', 'white3', 'back2']
function theme2(){
    arrHex = ['202020', '404040', '606060', '808080', 'ffffff', 'f3f3f3', 'cacaca', 'bdbdbd40']
    for (j=0; j<arrClr.length; j++){
        cssRoot.style.setProperty('--'+arrClr[j], '#'+arrHex[j]);
    }
}
function theme3(){
    arrHex = ['f3f3f3', 'eeeeee', 'd8d8d8', 'c6c6c6', '292c39', '1f222f', '707070', '40404040']
    for (j=0; j<arrClr.length; j++){
        cssRoot.style.setProperty('--'+arrClr[j], '#'+arrHex[j]);
    }
}
function theme4(){
    arrHex = ['f3f3f3', 'eeeeee', 'd8d8d8', 'c6c6c6', '343434', '282828', '707070', '40404040']
    for (j=0; j<arrClr.length; j++){
        cssRoot.style.setProperty('--'+arrClr[j], '#'+arrHex[j]);
    }
}        

function showcode1(sorting1, search1){
code2.innerHTML= '';
$('.drophold').hide();
loader2[1].style.display = 'block';
drop1[1].innerHTML = sorting1;
setTimeout(() => {
    codelist();
    loader2[1].style.display = 'none';
    if (search1!=''){
        code2.innerHTML= '<section class="card3 center1">An error occured<br>Server might be down or document structure might have been changed.</section><br>';
    }
}, 1000);
}

function showques1(sorting1, search1){
ques1.innerHTML= '';
$('.drophold').hide();
loader2[0].style.display = 'block';
drop1[0].innerHTML = sorting1;
setTimeout(() => {
    queslist();
    loader2[0].style.display = 'none';
    if (search1!=''){
        ques1.innerHTML= '<section class="card3 center1">An error occured<br>Server might be down or document structure might have been changed.</section><br>';
    }
}, 1000);
}

function searchcode(){
msg2 = getid('input2').value;
val2 = drop1[1].innerHTML;
showcode1(val2, msg2);
}

function searchques(){
msg2 = getid('input3').value;
val2 = drop1[0].innerHTML;
showques1(val2, msg2);
}

function dropshow(){
getid('input2').value = '';
getid('input3').value = '';
$('.drophold').show();
}
function alert2(){
    $('#btn1').hide();
    $('#cross1').hide();
    alertmain.style.margin = '16vh auto 10px auto';
    topnav.style.display = 'block';
    $('#mainn').fadeIn();
    info1.innerHTML = `<section id="cross2" onclick="alert3()" class="right size5">&#10005;</section>${modethemehold.innerHTML}<button onclick="alert3()" class="btn1" id="btn2">Next</button><hr><span class="size1 txtclr5">You can always change it in Settings</span>`;
    topnav.style.transition = '.4s background';
    check1();
}
function alert3(){
    topnav.style.transition = '0s background';
    $('#alert1').fadeOut();
}
function scroll1(num1){
    var coursey = getid('coursehold'+num1);
    coursein = coursey.innerHTML;
    coursey.innerHTML = '';
    coursey.innerHTML = coursein + coursein;
    coursey.scrollTo(2000, 0);
    viewbtn[num1-1].style.display = 'none';
    setTimeout(() => {
        coursey.innerHTML = coursein;
        viewbtn[num1-1].style.display = 'block';
    }, 1000);
}
function feed4(){
    try {
        var username1 = getid('username').innerHTML;
        var id4 = getid('avatar').getAttribute("class");
        window.scrollTo(0,part1.offsetHeight-40);
        part2.style.display = 'none';
        part3.style.display = 'none';
        part4.style.display = 'none';
        $('#part5').fadeIn();
        $('#feedhold2').fadeIn();
        var arr7 = [];
        var feed3arr1 = ['', 'Posted a comment on code "Instagram"', 'Posted a new answer to question "How to calculate stars in sky"', 'Posted a new code "How to use search bar"'];
        var feed3arr2 = ['', 'Awesome!', 'You need to have advanced Html knowledge for counting stars in the sky...', '&lt;html&gt;<br>&lt;head&gt;<br>&lt;style&gt;<br>body {<br>...'];
        while(arr7.length < 3){
            var r7 = Math.floor(Math.random() * 3) + 1;
            if(arr7.indexOf(r7) === -1) arr7.push(r7);
        }
        var arr8 = [];
        var feed4arr1 = ['', 'Post', 'Post', 'Post'];
        var feed4arr2 = ['', 'files/img/Meme4.jpg', 'files/img/Meme3.jpg', 'files/img/Meme1.png', 'files/img/Meme2.png'];
        while(arr8.length < 1){
            var r8 = Math.floor(Math.random() * 3) + 1;
            if(arr8.indexOf(r8) === -1) arr8.push(r8);
        }
        num4 = 1;
        for (num=0; num<1; num++){
            feed1('feedhold2', id4, username1, feed3arr1[arr7[num]], feed3arr2[arr7[num]]);
            feed2('feedhold2', id4, username1, feed4arr1[arr8[num]], feed4arr2[arr8[num]]);
            for (i=0; i<2; i++){
                feed1('feedhold2', id4, username1, feed3arr1[arr7[num4]], feed3arr2[arr7[num4]]);
                num4 += 1;
            }
        }
        num4 = 3;
        votes1();
        check1();
    } catch(err){
        part4.innerHTML = '<section class="center1">Data unavailable<br>Please ReRun the code</section>';
    }
}
check1();
//Touch detector code is inspired from an answer from StackOverFlow
var xDown = null, yDown = null;
function handleTouchStart1(evt) {
    const firstTouch = (evt.touches  ||  evt.originalEvent.touches)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};
function touchMove(evt){
    if (!xDown || !yDown){return}
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if ( Math.abs(xDiff) > Math.abs(yDiff)){
        if ( xDiff > 10) {pageNum==1?feed3():message1();} else if ( xDiff < 10) {pageNum==1?community1():notification1();}
    }
    xDown = null; yDown = null;
}

msg11 = ['Hello', 'Converting oxygen to carbon dioxide', 'Inactive', 'Welcome to my Profile', 'Learning', 'Thanks for visiting', 'Just like any human being!', 'Haha wassup?', 'Check out my codes!', 'Alien?']

function data(userid){
    codeshold.innerHTML = '';
    feedhold2.innerHTML = '';
    feedhold2.style.display = 'none';
    loader1.style.display = "block";
    part5.style.display = 'none';
    feedhold2.style.display = 'none';
    $('.drophold').hide();
    $('#part2').fadeIn();
    $('#part3').fadeIn();
    $('#part4').fadeIn();
    part1.style.margin = 0;
    fade1.style.marginLeft = 0;
    fade1.style.opacity = 1;
    var error1 = setTimeout(()=>{
        if (loader1.style.display == "block"){
            loader1.innerHTML = '<section class="main">Tooks too long to respond</section>';
            setTimeout(() => {
                $("#loader1").fadeOut();
            }, 2000);
            setTimeout(() => {
                loader1.innerHTML = '<section class="main"><section class="loadanim"></section><br>Fetching...</section>';
            }, 4000);
        } else {}
    }, 4000);
    try {
        username01 = userid;
        levell01 = rnum(1,15);
        xps01 = rnum(100,10000);
        bio01 = msg11[rnum(0,10)];
        followers01 = rnum(1,1000);
        following01 = rnum(1,100);
        streak1 =  rnum(1,900);
    } catch(err){
        topnav.style.background = "var(--blue1)";
        profile2.innerHTML = "<section class='top40'></section><section class='center1 top40'>Unable to Fetch<br>Server might be down or document structure might have been changed. Please ReRun the code</section>";
        $("#loader1").fadeOut();
    }
    
    try {
        avatar.src = `https://avatar.iran.liara.run/username?username=${userid}`;
        getid('avatar').setAttribute("class", userid);
        username.innerHTML = username01;
        levell.innerHTML = levell01;
        xps.innerHTML = xps01;
        bio.innerHTML = bio01;
        followers.innerHTML = followers01;
        following.innerHTML = following01;
    } catch (err){}

    try {streakflex1.innerHTML = "";
    let streakno1 = streak1%7;
    let streakno2 = 7-streakno1;
    if (streak1 == 0){
        for (i=0; i<7; i++){
            round2("streakflex1");
        }
    } else if (streakno1 == 0 && streak1 > 0){
        for (i=0; i<1; i++){
            round1("streakflex1");
        }
        for (i=0; i<6; i++){
            round2("streakflex1");
        }
    } else {
        for (i=0; i<streakno1; i++){
            round1("streakflex1");
        }
        for (i=0; i<streakno2; i++){
            round2("streakflex1");
        }
    }
    
    streak.innerHTML = `<svg class="firesvg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path style="fill:var(--red1);" d="M97.103,353.103C97.103,440.86,168.244,512,256,512l0,0c87.756,0,158.897-71.14,158.897-158.897  c0-88.276-44.138-158.897-14.524-220.69c0,0-47.27,8.828-73.752,79.448c0,0-88.276-88.276-51.394-211.862  c0,0-89.847,35.31-80.451,150.069c8.058,98.406-9.396,114.759-9.396,114.759c0-79.448-62.115-114.759-62.115-114.759  C141.241,247.172,97.103,273.655,97.103,353.103z"/><path style="fill:#FFDC64;" d="M370.696,390.734c0,66.093-51.033,122.516-117.114,121.241  c-62.188-1.198-108.457-48.514-103.512-110.321c2.207-27.586,23.172-72.276,57.379-117.517l22.805,13.793  C229.517,242.023,256,167.724,256,167.724C273.396,246.007,370.696,266.298,370.696,390.734z"/><path style="fill:#FFFFFF;" d="M211.862,335.448c-8.828,52.966-26.483,72.249-26.483,105.931C185.379,476.69,216.998,512,256,512  l0,0c39.284,0,70.729-32.097,70.62-71.381c-0.295-105.508-61.792-158.136-61.792-158.136c8.828,52.966-17.655,79.448-17.655,79.448  C236.141,345.385,211.862,335.448,211.862,335.448z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></><g></g><g></g><g></g><g></g><g></g><g></g></svg>${streak1} DAYS STREAK`;} catch (err){}
    var codearrPro = ['', 'Sololearn clone', 'Facebook app UI', 'My physics engine', 'ToDo list app', 'Magical words', 'What is AI', 'Check your number', 'Rainy day', 'Color game', 'Customizable particles'];
    var langArr = ['', 'Web', 'Cpp', 'Java', 'Py', 'C']
    try {
        let codeno = rnum(1, 10);
        if (codeno == 0){
            part3.style.display = 'none';
        } else {
            for (i=0; i<codeno; i++){
                let codelang = langArr[rnum(1,5)];
                let codename = codearrPro[rnum(1,10)];
                codeshold.innerHTML += `<section class="card2"><span class="codetype">${codelang}</span><span class="codename">${codename}</span></section>`;
            }
        }
    } catch(err){
        part3.style.display = 'none';
    }
    clearTimeout(error1);
    setTimeout(() => {
        $("#loader1").fadeOut();
    }, 400);
}

codes1();