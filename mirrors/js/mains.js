var xmlhttp=new XMLHttpRequest();
var xmlhttps=new XMLHttpRequest();
var xmlhttpss=new XMLHttpRequest();
var xmlhttpsss=new XMLHttpRequest();
var xmlhttpssss=new XMLHttpRequest();
var xmlhttp5=new XMLHttpRequest();
var xmlhttp6=new XMLHttpRequest();
var square=document.getElementsByClassName("square");
var R=document.getElementsByClassName("R")[0];
var C=document.getElementsByClassName("C")[0];
var L=document.getElementsByClassName("L")[0];
var system=document.getElementsByClassName("system")[0];
var time=document.getElementsByClassName("time")[0];
var used=document.getElementsByClassName("used")[0];
var total=document.getElementsByClassName("total")[0];
var progress_srate=document.getElementsByClassName("progress-rate")[0];
function disk_total(){
    xmlhttp6.onreadystatechange=function(){
        if(xmlhttp6.readyState==4 && xmlhttp5.status==200){
            var totals=xmlhttp6.responseText;
            total.innerText="总空间:"+totals;
        }
    }
    xmlhttp6.open("GET","disk_total.php",true);
    xmlhttp6.send();
}
setInterval("disk_total()",1000);
function disk_used(){
    xmlhttp5.onreadystatechange=function(){
        if(xmlhttp5.readyState==4 && xmlhttp5.status==200){
            var useds=xmlhttp5.responseText;
            useds=useds.split(" ");
            used.innerText="已使用:"+useds[0]+useds[3];
            progress_srate.style.width=Math.floor((useds[2]/useds[1])*100)+"%";
        }
    }
    xmlhttp5.open("GET","disk_used.php",true);
    xmlhttp5.send();
}
setInterval("disk_used()",1000);
function LOAD(){
    xmlhttpssss.onreadystatechange=function(){
        if(xmlhttpssss.readyState==4 && xmlhttpssss.status==200){
            var load=xmlhttpssss.responseText;
            L.innerText=load+"%";
            square[2].style.marginTop=(100-load)+"px";
        }
    }
    xmlhttpssss.open("GET","load.php",true);
    xmlhttpssss.send();
}
setInterval("LOAD()",1000);
function RAM(){
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            var rams=xmlhttp.responseText;
            R.innerText=rams+"%";
            square[0].style.marginTop=(100-rams)+"px";
        }
    }
    xmlhttp.open("GET","ram.php",true);
    xmlhttp.send();
}
setInterval("RAM()",1000);
function CPU(){
    xmlhttpsss.onreadystatechange=function(){
        if(xmlhttpsss.readyState==4 && xmlhttpsss.status==200){
            var cpu=xmlhttpsss.responseText;
            C.innerText=(100-cpu)+"%";
            square[1].style.marginTop=cpu+"px";
        }
    }
    xmlhttpsss.open("GET","cpu.php",true);
    xmlhttpsss.send();
}
setInterval("CPU()",1000);
function SYSTEM(){
    xmlhttps.onreadystatechange=function(){
        if(xmlhttpss.readyState==4 && xmlhttpss.status==200){
            system.innerText=xmlhttps.responseText;
        }
    }
    xmlhttps.open("GET","system.php",true);
    xmlhttps.send();
}
function date(){
    xmlhttpss.onreadystatechange=function(){
        if(xmlhttpss.readyState==4 && xmlhttpss.status==200){
            time.innerText=xmlhttpss.responseText;
        }
    }
    xmlhttpss.open("GET","date.php",true);
    xmlhttpss.send();
}
date();
SYSTEM();