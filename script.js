const SIN__CURRENT__AGE__ENGLISH = document.getElementById("SIN__Current__Age--english");
const SIN__CURRENT__AGE__PERSIAN = document.getElementById("SIN__Current__Age--persian");
const CALL__US__DATA = document.querySelectorAll(".call__us__data");
const PAGE__SCROLL__BAR__HANDLE = document.querySelector(".page__scroll__bar--handle")
window.addEventListener("load", currentWebSituation);
window.addEventListener("scroll", currentWebSituation);

function currentWebSituation () {
    let heights = collectDataForSituation();
    let OnePercent = heights.ThePageHeight / 100;
    let CurrentPercent = heights.UserCurrentPage / OnePercent;
    PAGE__SCROLL__BAR__HANDLE.style.width = `${CurrentPercent}%`;
}

function collectDataForSituation () {
    let heights = {};
    heights.UserPageHeight = window.innerHeight;
    heights.ThePageHeight = document.body.scrollHeight;
    heights.UserCurrentPage = window.scrollY + heights.UserPageHeight;
    return heights;
}

const CalcAge  = function() {
    let SINCurrentAge, CurrentTime = new Date(), CurrentMonth = CurrentTime.getMonth() + 1, CurrentYear = CurrentTime.getFullYear();
    const SIN__MONTH__BIRTHDAY = 9, SIN__YEAR__BIRTHDAY = 2005;
    let ConvertNumberToPersian = function(n) {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    
        return n
            .toString()
            .replace(/\d/g, x => farsiDigits[x]);
    }
    if(CurrentMonth >= SIN__MONTH__BIRTHDAY){
        SINCurrentAge = CurrentYear - SIN__YEAR__BIRTHDAY;
    }else{
        SINCurrentAge = CurrentYear - SIN__YEAR__BIRTHDAY - 1;
    }
    SIN__CURRENT__AGE__ENGLISH.innerHTML = SINCurrentAge;
    SIN__CURRENT__AGE__PERSIAN.innerHTML = ConvertNumberToPersian(SINCurrentAge);
}();

CALL__US__DATA.forEach((element) => {
    element.addEventListener("click" , () => {
        let ClipBoardValue = element.getAttribute("data-clipboard-text");
        navigator.clipboard.writeText(ClipBoardValue);
        // changing the value of tooltips
        CALL__US__DATA.forEach((element) => {
            // element.removeAttribute("data-tooltip");
            element.setAttribute("data-tooltip" , "محتوا کپی شد");
        })
    })
})

CALL__US__DATA.forEach((element) => {
    element.addEventListener("mouseout" , () => {
        CALL__US__DATA.forEach((element) => {
            element.setAttribute("data-tooltip" , "برای کپی کلیک کنید");
        })
    })
})