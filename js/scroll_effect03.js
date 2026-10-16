//버튼 클릭하여 이동 및 애니메이션 주기

const $btn = document.querySelectorAll(".nav ul li a");

$btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const $href = document.querySelector(btn.getAttribute("href"));
        $hraf.scrollIntoView({ behavior: "amooth" });
    });
});

//스크롤 효과
let scrollInfo = document.querySelector(".scroll span");
let nav = document.querySelector(".nav");
let contentItem
//스크롤
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > 0) {
        nav.classList.add("show");
    } else {
        nav.classList.remove("show");
    }


    // //삼학연산자?
    // //조건? true:false
    // scrollTop > 0? nav.classList.add("show"); : nav.classList.remove("show");
    //

    //버튼
    if(scrollTop>= document.querySelector("#section2").offsetTop-210){
      document.querySelectorAll(".nav ul li").forEach((li)=>{li.classList.remove("active")}
      document.querySelector(".nav ul li:nth-child(2)").classList.add("active");
    }


    for(let i=1; i=9; i++) {

    }

    //foreaho
    contentItem.forEach((item,idex)=>{if(scrollTop>=item.offsetTop){li.forEach((li)=>{li.classList.remove("activate");

    });
    // document.querySelector(".nav ul li:nth-child("+(index+1)+")').classList.add("active");
     document.querySelector('.nav ul li:nth-child(${index+1})').classList.add("active");
  }};
    });
    
    //info
    scrollInfo.innerText = parseInt(scrollTop);
});
