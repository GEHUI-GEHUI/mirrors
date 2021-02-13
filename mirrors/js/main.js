var tables=document.getElementById("tables");
var xmlhttp=new XMLHttpRequest();
var navigations=document.getElementsByClassName("navigations")[0];
var search=document.getElementsByClassName("search")[0];
var num="data";
loadxmlDoc(num);
function createElements(){
    var div=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var div4=document.createElement("div");
    var a=document.createElement("a");
    var strong=document.createElement("strong");
    var strong2=document.createElement("strong");
    var strong3=document.createElement("strong");
    div.setAttribute("class","mdui-row mdui-row-gapless LI");
    div2.setAttribute("class","mdui-col-md-5 mdui-col-xs-5");
    div3.setAttribute("class","mdui-col-md-4 mdui-col-xs-4");
    div4.setAttribute("class","mdui-col-md-3 mdui-col-xs-3");
    a.appendChild(strong);
    div2.appendChild(a);
    div3.appendChild(strong2);
    div4.appendChild(strong3);
    div.appendChild(div2);
    div.appendChild(div4);
    div.appendChild(div3);
    var arrays= new Array();
    arrays[0]=strong;
    arrays[1]=strong2;
    arrays[2]=strong3;
    arrays[3]=a;
    arrays[4]=div;
    return arrays;
}
function menu(){
    if(navigations.style.height==""||navigations.style.height=="0px"){
        navigations.style.height="150px";
    }else{
        navigations.style.height="0px";
    }
}
function loadxmlDoc(num){
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            var json=xmlhttp.responseText;
            var JSONs=JSON.parse(json);
            tables.innerHTML="";
            for(var i=-1;i<JSONs.sites.length;i++){
                var Arrays=createElements();
                var arrays=null;
                if(JSONs.sites.length!=0){
                    arrays=JSONs.sites[0].id.split("/");
                    if(i==-1&&arrays.length>2){
                            Arrays[0].innerText="返回上一级";
                            Arrays[1].innerText="-";
                            Arrays[2].innerText="-";
                            if(arrays.length==3){
                                Arrays[3].setAttribute("href","javascript:loadxmlDoc("+"\""+"data"+"\""+");");
                            }else{
                                var id="";
                                for(var j=0;j<arrays.length-2;j++){
                                    if(j==0){
                                        id=id+arrays[j];
                                    }else{
                                        id=id+"/"+arrays[j];	
                                    }
                                }
                                Arrays[3].setAttribute("href","javascript:loadxmlDoc("+"\""+id+"\""+");");
                            }
                    }else{
                            if(i==-1){
                                i=i+1;
                            }
                            Arrays[0].innerText=JSONs.sites[i].name;
                            Arrays[1].innerText=JSONs.sites[i].date;
                            if(JSONs.sites[i].size!=undefined){
                                Arrays[3].setAttribute("href",JSONs.sites[i].id);
                                Arrays[3].setAttribute("target","_blank");
                                Arrays[2].innerText=JSONs.sites[i].size;
                            }else{
                                Arrays[3].setAttribute("href","javascript:loadxmlDoc("+"\""+JSONs.sites[i].id+"\""+");");
                                Arrays[2].innerText="-";
                            }
                    }
                }else{
                    if(num==""){
                        Arrays[0].innerText="返回上一级";
                        Arrays[1].innerText="-";
                        Arrays[2].innerText="-";
                        Arrays[3].setAttribute("href","javascript:loadxmlDoc("+"\""+"data"+"\""+");");
                    }else{
                        var nums=num.split("/");
                        var id="";
                        for(var k=0;k<nums.length-1;k++){
                            if(k==0){
                                id=id+nums[k];
                            }else{
                                id=id+"/"+nums[k];
                            }
                        }
                        Arrays[0].innerText="返回上一级";
                        Arrays[1].innerText="-";
                        Arrays[2].innerText="-";
                        Arrays[3].setAttribute("href","javascript:loadxmlDoc("+"\""+id+"\""+");");
                    }
                }
                tables.appendChild(Arrays[4]);
            }
        }
    }
    xmlhttp.open("GET","process.php?dir="+num,true);
    xmlhttp.send();
}
function Search(){
    var keywords=search.value;
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            var json=xmlhttp.responseText;
            var JSONs=JSON.parse(json);
            tables.innerHTML="";
            for(var i=0;i<JSONs.sites.length;i++){
                var Arrays=createElements();
                Arrays[0].innerText=JSONs.sites[i].name;
                Arrays[1].innerText=JSONs.sites[i].date;
                if(JSONs.sites[i].size!=undefined){
                    Arrays[3].setAttribute("href",JSONs.sites[i].id);
                    Arrays[3].setAttribute("target","_blank");
                    Arrays[2].innerText=JSONs.sites[i].size;
                }else{
                    Arrays[3].setAttribute("href","javascript:loadxmlDoc("+"\""+JSONs.sites[i].id+"\""+");");
                    Arrays[2].innerText="-";
                }
                tables.appendChild(Arrays[4]);
            }
        }
    }
    xmlhttp.open("GET","process.php?dir=data&keywords="+keywords,true);
    xmlhttp.send();
}