//버튼 클릭 및 이돈 애니메이션 주기

document.querySelectorAll(".nav ul li a").forEach((li) => {
    li.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

//스크롤
let $nav = document.querySelector(".nav");
let lastscrollTop = 0; //이전 스크롤 위치를 저장할 변수

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let scrollTop2 = window.scrollY;

    if (scrollTop > lastscroll) {
        $nav.classList.add("hide");
    } else {
        $nav.classList.remove("hide");
    }

    console.log("현재scrollTop값:" + scrollTop);
    console.log("과거scrollTop값:" + lastscroll);
    lastscroll = scrollTop; //현재 위치를 다음 비교를 위해 저장

    //메뉴+content_item 에니메이션
    let content = document.querySelectorAll(".content_item")
    let navli = document.querySelectorAll(".content_item")

    contentitem.forEach((item, idx)=>{
        //메뉴
        if (scrollTop >= item.offsetTo) {navli.forEach((li)=>{li.classList.remove("activate");
    });
    document.querySelector('.nav ul li:nth-child(${idx+1})').classList.add("active");
    }
    contentItem 애니메이션
    (scrollTop2 >= item.offsetTop){
    item.classList,add("show");
    }
  });
  
//info
    document.querySelector("scroll span").innerText = parseInt(scrollTop);

