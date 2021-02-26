var a;
function show1(){

if (a==0){
    document.getElementById("show").style.display="none";
    document.getElementById("con").style.display="block";
    document.getElementById("showSkil").style.display="none";
    document.getElementById("about").style.display="none";
    return a=1;
}
else{
    document.getElementById("show").style.display="block";
    document.getElementById("con").style.display="none";
    document.getElementById("showSkil").style.display="none";
    document.getElementById("about").style.display="none";
    return a=0;
}


}



var s;
function show2(){
    if (s==0){
        document.getElementById("showSkil").style.display="none";
        document.getElementById("con").style.display="block";
        document.getElementById("show").style.display="none";
        document.getElementById("contMe").style.display="none";
        document.getElementById("about").style.display="none";
        return s=1;
    }
    else{
        document.getElementById("showSkil").style.display="block";
        document.getElementById("con").style.display="none";
        document.getElementById("show").style.display="none";
        document.getElementById("contMe").style.display="none";
        document.getElementById("about").style.display="none";

        return s=0;
    }
    

}
var t;
function show3(){
    if (t==0){
        document.getElementById("showSkil").style.display="none";
        document.getElementById("con").style.display="block";
        document.getElementById("show").style.display="none";
        document.getElementById("contMe").style.display="none";
        document.getElementById("about").style.display="none";
        return t=1;
    }
    else{
        document.getElementById("showSkil").style.display="none";
        document.getElementById("con").style.display="none";
        document.getElementById("show").style.display="none";
        document.getElementById("contMe").style.display="block";
        document.getElementById("about").style.display="none";
        return t=0;
    }
    

}
function show4(){
    if (t==0){
        document.getElementById("showSkil").style.display="none";
        document.getElementById("con").style.display="block";
        document.getElementById("show").style.display="none";
        document.getElementById("contMe").style.display="none";
        document.getElementById("about").style.display="none";
        return t=1;
    }
    else{
        document.getElementById("showSkil").style.display="none";
        document.getElementById("con").style.display="none";
        document.getElementById("show").style.display="none";
        document.getElementById("contMe").style.display="none";
        document.getElementById("about").style.display="block";
        return t=0;
    }
    

}



