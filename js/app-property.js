const lis = document.querySelectorAll(".aly>li");
const boll = document.querySelector(".ball")
const divs = document.querySelectorAll(".aly>li>.cont");
const hero = document.querySelector(".hero")
const ply = document.querySelector(".play")
const menue = document.querySelector(".menue")
const scr = document.querySelector(".score")
const _heroCar = [
    {
        img: "url('./img/hero/hero0.png')",
        w: "30px",
        h: "30px",
        test: "This is Test 0"
    },
    {
        img: "url('./img/hero/hero1.png')",
        w: "30px",
        h: "45px",
        test: "This is Test 1"
    },
    {
        img: "url('./img/hero/hero2.png')",
        w: "30px",
        h: "45px",
        test: "This is Test 1"
    },
    {
        img: "url('./img/hero/hero3.png')",
        w: "30px",
        h: "45px",
        test: "This is Test 1"
    },
    {
        img: "url('./img/hero/hero4.png')",
        w: "30px",
        h: "30px",
        test: "This is Test 1"
    },
    {
        img: "url('./img/hero/hero5.png')",
        w: "30px",
        h: "45px",
        test: "This is Test 1"
    },
    {
        img: "url('./img/hero/hero6.png')",
        w: "30px",
        h: "45px",
        test: "This is Test 1"
    },
    {
        img: "url('./img/hero/hero7.png')",
        w: "30px",
        h: "65px",
        test: "This is Test 1"
    },
    {
        img: "url('./img/hero/hero9.png')",
        w: "30px",
        h: "65px",
        test: "This is Test 1"
    }

]
icon = [
    "url('./img/icon/icon.png')",
    "url('./img/icon/ico.png')",
]

_heroCar.forEach((e, i) => {
    let heroDiv = document.createElement("div")
    heroDiv.classList = 'w-[115px] lg:w-[90px] h-[100px] bg-white m-[5px] flex justify-center items-center bg-no-repeat shadow-2xl'
    heroDiv.style.background = "white"
    heroDiv.style.backgroundRepeat = "no-repeat "
    heroDiv.style.backgroundImage = e.img
    heroDiv.style.backgroundPosition = "center"
    heroDiv.style.backgroundSize = "50px"
    heroDiv.style.borderRadius = "5px"
    heroDiv.setAttribute("hero", i)
    heroDiv.id = "char"
    hero.appendChild(heroDiv)

})

const SelectHero = ((num = 0) => {
    boll.style.backgroundImage = _heroCar[num].img;
    boll.style.width = _heroCar[num].w
    boll.style.height = _heroCar[num].h
})
SelectHero()

function hideAllDivs() {
    divs.forEach((div) => {
        div.classList.add("hidden");
    });

}
ply.addEventListener('click', () => {
    menue.classList.add("hidden")
    scr.classList.remove("hidden")
})


lis.forEach((li, i) => {
    li.style.backgroundImage = icon[i]
    li.style.backgroundPosition = "center"
    li.style.backgroundSize = "30px"
    li.style.backgroundRepeat = "no-repeat "
    // event
    li.addEventListener("click", (event) => {
        event.stopPropagation();
        if (event.target.id) {
            ply.classList.add("hidden")
            hideAllDivs();
            const div = li.querySelector(".cont");
            div.classList.remove("hidden");
            if (event.target.getAttribute("hero")) {
                SelectHero(parseInt(event.target.getAttribute("hero")))
                div.classList.add("hidden");
                ply.classList.remove("hidden");
            }
        }

    });

});

document.addEventListener("click", (e) => {
    ply.classList.remove("hidden");
    hideAllDivs();
});
