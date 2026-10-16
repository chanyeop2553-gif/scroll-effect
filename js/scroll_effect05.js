//버튼 클릭 및 이동 애니메에션 추가

document.querySelectorAll(".nav ul li a").forEach((li) => {
    li.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

//스크롤
let $nav = document.querySelector(".nav");
let lastscrollTop = 0;

window.addEventListener("scroll", () => {
    let scrolling = window.scrollY;
});

//메뉴+content_item 에니메이션
