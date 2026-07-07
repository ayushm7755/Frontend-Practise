
//=>> for single One <<==//

// var elem1 =document.querySelector("#elem1");
// var elemImg = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", function(abc){
//     elemImg.style.left = abc.x + "px";
//     elemImg.style.top = abc.y + "px";

// })

// elem1.addEventListener("mouseenter", function(abc){
//     elemImg.style.opacity = 1;

// })

// elem1.addEventListener("mouseleave", function(abc){
//     elemImg.style.opacity = 0;

// }) 

//>> Trying easy step for multiple elements <<==//

// var elem = document.querySelectorAll(".elem");

// elem.forEach(function(val){
//     var img = val.querySelector("img")
//    val.addEventListener("mouseenter",function(){
//     img.style.opacity =1;
//    });
//    val.addEventListener("mouseleave",function(){
//     img.style.opacity = 0;
//    });
//     val.addEventListener("mousemove",function(abc){
//         img.style.left = abc.x + "px";
//         img.style.top = abc.y + "px";

//     });
// })


//==>> Final One <<==// 

let elem = document.querySelectorAll(".elem");

elem.forEach(function(val){

    let img = val.querySelector("img");

    val.addEventListener("mouseenter",function(){
        img.style.opacity = 1;
    });

    val.addEventListener("mouseleave",function(){
        img.style.opacity = 0;
    });

    val.addEventListener("mousemove",function(e){

        let rect = val.getBoundingClientRect();

        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        img.style.left = x + "px";
        img.style.top = y + "px";

    });

});