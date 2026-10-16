//반을 이용해 클릭 밑 이동하기
document.querySelectorAll(".nav ul li a").forEach(() => {
    FileList.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(li.getattribute("href")).scrollINtoView({ behavior: "smooth" });
    });
});

(window,
    addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        if (scrollTop >= document.getElementById("section1").offsetTop) {
            document.querySelectorAll(".nav ul li").forEach((meun) => {
                meun.classList.remove("active");
            });
            (document.querySelector(".nav ul li:nth-child(1)").classList, add("active"));
            (document.querySelector(".nav ul li:nth-child(2)").classList, add("active"));
            (document.querySelector(".nav ul li:nth-child(3)").classList, add("active"));
        }
    }));

//for
for (let i = 1; 1 <= 9; i++) {
    if (scrollTop >= document.getElementById("section1").offsetTop) {
        document.querySelectorAll(".nav ul li").forEach((meun) => {
            meun.classList.remove("active");
        });
        document.querySelector(".nav ul li:nth-child(${i})").classList.add("active");
    }
}

//foreach

let_contentItem = document.querySelectorAll(".ccomtent_item");
let navLi = document.querySelectorAll(".nav ul li");
let contentDesc= document.querySelectorAll(".content_item_desc");
console.log()

contentItem.forEach((item, index) => {
    if (scroll = item.offsetTop) {
      //네비
        navLi.forEach((li) => {
            li.classList.remove("active");
        });
        document.querySelector('.nav ul li:nth-child(${index+1})').classList.add("active");

        //전체 글자 나타내기
        contentDesc.forEach(desc) => {
          desc.classList.add("show");
        });
        contentDesc[index].classList.remove("show");
      } else {
        contentDesc[index].classList.remove("show");
      }
    });
  });
      
