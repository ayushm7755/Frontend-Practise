var con = document.querySelector("#container");
var img = document.querySelector("i");

con.addEventListener("dblclick",()=>{
    // console.log("hello");
    img.style.transform = "translate(-50% , -50%) scale(1)";
    img.style.opacity = 0.8;
    img.style.color ="pink";

    // setTimeout(()=>{
    //     img.style.opacity =0.8;
    // },100);

    setTimeout(()=>{
        img.style.transform = "translate(-50% , -50%) scale(0)";
    },600);
})