
let newNear = ""; 
let randX;
let randY;
let randomizer;
let limit = 0;


randomCreator = function(){
    randomizer = Math.floor(Math.random()*4);
    randX = Math.floor(Math.random()*210);
    randY = Math.floor(Math.random()*87);
    let pos = 'style="position:relative;left:'+randX+'px;top:'+randY+'px;"';
    switch(randomizer){
        case 0:
            newNear='<div onclick="clicked(this)" '+pos+' class="nearest garanti"><span class="bankName" >garanti<span class="trinagle"></span></span></div>';
            break;
        case 1:
            newNear='<div onclick="clicked(this)" '+pos+' class="nearest vakif"><span class="bankName" >vakıfbank<span class="trinagle"></span></span></div>';
            break;
        case 2:
            newNear='<div  onclick="clicked(this)" '+pos+' class="nearest is"><span class="bankName" >işbank<span class="trinagle"></span></span></div>';
            break;
        case 3:
            newNear='<div onclick="clicked(this)" '+pos+' class="nearest ak"><span class="bankName" >akbank<span class="trinagle"></span></span></div>';
            break;
    }
 
    return newNear;
}

$().ready(function (){


    
for(var x = 0;x<5;x++){
    $("#map").append(randomCreator());
}
    

clicked = function(e){
    limit = 0;
    $(".nearest").removeClass("selected");
    if(limit == 0 ){
        $(e).addClass("selected");
        limit++;
    }
};
    
    
$("#takeIt").click(()=>{
    let bankName;
    let nearS = document.getElementsByClassName("nearest");
    for(var x = nearS.length-1; x >= 0; x--){
        switch(nearS[x].className){
            case "nearest is selected":
                bankName = "İş Bankası";
                break;
            case "nearest vakif selected":
                bankName = "VakıfBank";
                break;
            case "nearest garanti selected":
                bankName = "Garanti Bankası";
                break;
            case "nearest ak selected":
                bankName = "AkBank";
                break;
        }
    }
    if(bankName == undefined){
        alert("Bir banka seçiniz.");
    }else{
     if($("#tcNo").val()=="" || $("#tcNo").val().length<11){
         alert("TC'nizi Kontrol Ediniz!");
     }else{
     $("#border").attr("style","display:none;");
     $("#after").attr("style","display:block;");
     $("#bankName").text(bankName);
     let color;
     switch(bankName){
         case "İş Bankası":
             color = "#063c80";
             break;
         case "Garanti Bankası":
             color = "#0f6840";
             break;
         case "VakıfBank":
             color = "#f4ab00";
             break;
         case "AkBank":
             color = "#e82f24";
     }
     $("#bankName").css("background-color",color);
     $("#number").text(Math.floor(Math.random() * (200 - 100 + 1)) + 100);
     $("#recent").text(Math.floor(Math.floor(Math.random() * (100 - 1 + 1)) + 1));   
     }
    }
});



$(".circle").click(()=>{
  alert("mertcanuslu18@gmail.com");  
});

    

    
    
    
    
});



