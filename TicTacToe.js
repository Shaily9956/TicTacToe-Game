let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let turn0=true;
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      console.log("box clicked")  ;
      if(turn0){
        box.innerText="0";
        turn0=false;
      }else{
        box.innerText="X";
        turn0=true;
      }
     box.disabled=true;


     checkWinner();
    });
});

const checkWinner = ()=>{
    for (let pattern of winningpatterns) {
       
        let a=boxes[pattern[0]].innerText;
        let b=boxes[pattern[1]].innerText;
        let c=boxes[pattern[2]].innerText;
       if(a!=""&&b!=""&&c!=""){
        if(a===b&&b===c){
            console.log("you win the game",a);

            showWinner(a);

        }
       }

    }
};
const showWinner=(winner)=>{
    msg.innerText="Congratulations! winner is "+winner
    msgContainer.classList.remove("hide");
    diabledBoxes();

}
const resetGame=()=>{
    turn0=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
const diabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
