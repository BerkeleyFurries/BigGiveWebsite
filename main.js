class artist{
    constructor(artistname, artisttags){
        this.name = artistname;
        this.tags = artisttags;
    }
}
const tag1 = document.querySelector("#tag1");
const tag2 = document.querySelector("#tag2");
const tag3 = document.querySelector("#tag3");
const tag4 = document.querySelector("#tag4");
const tag5 = document.querySelector("#tag5");
const tag6 = document.querySelector("#tag6");
const tag7 = document.querySelector("#tag7");
const tag8 = document.querySelector("#tag8");
const tag9 = document.querySelector("#tag9");
const tag10 = document.querySelector("#tag10");
const tag11 = document.querySelector("#tag11");
const tag12 = document.querySelector("#tag12");
const tag13 = document.querySelector("#tag13");
const tag14 = document.querySelector("#tag14");
const Ammhook = document.querySelector(".artist_icon:nth-child(1)");
const aloemira = document.querySelector(".artist_icon:nth-child(2)");
const araghosta = document.querySelector(".artist_icon:nth-child(3)");
const cheddart = document.querySelector(".artist_icon:nth-child(4)");
const cloudwyrms = document.querySelector(".artist_icon:nth-child(5)");
const fruitpunch = document.querySelector(".artist_icon:nth-child(6)");
const furriesatberkeley = document.querySelector(".artist_icon:nth-child(7)");
const giah = document.querySelector(".artist_icon:nth-child(8)");
const guber = document.querySelector(".artist_icon:nth-child(9)");
const hunter = document.querySelector(".artist_icon:nth-child(10)");
const isb = document.querySelector(".artist_icon:nth-child(11)");
const lotuscandy = document.querySelector(".artist_icon:nth-child(12)");
const phoenix = document.querySelector(".artist_icon:nth-child(13)");
const pyre = document.querySelector(".artist_icon:nth-child(14)");
const scylactic = document.querySelector(".artist_icon:nth-child(15)");
const shwahb = document.querySelector(".artist_icon:nth-child(16)");
const snacc = document.querySelector(".artist_icon:nth-child(17)");
const spiralflute= document.querySelector(".artist_icon:nth-child(18)");
const spooky = document.querySelector(".artist_icon:nth-child(19)");
const static = document.querySelector(".artist_icon:nth-child(20)");
const thefruitiestbat = document.querySelector(".artist_icon:nth-child(21)");
const xarical = document.querySelector(".artist_icon:nth-child(22)");
const yellojellow = document.querySelector(".artist_icon:nth-child(23)");
const yourfriendren = document.querySelector(".artist_icon:nth-child(24)");
const Ammhook_art = new artist(0, ["traditional", "other"]);
const aloemira_art = new artist(1, ["telegram", "chibi", "digital"]);
const araghosta_art = new artist(2, ["digital", "chibi"]);
const cheddart_art = new artist(3, ["digital", "icon"]);
const cloudwyrms_art = new artist(4, ["digital", "chibi", "icon", "traditional", "badge"]);
const fruitpunch_art = new artist(5, ["digital", "reference", "nsfw"]);
const furriesatberkeley_art = new artist(6, ["digital"]);
const giah_art = new artist(7, ["digital"]);
const guber_art = new artist(8, ["digital", "icon", "badge", "telegram", "traditional", "ych"]);
const hunter_art = new artist(9, ["digital", "icon", "badge", "telegram", "reference", "nsfw"]);
const isb_art = new artist(10, ["digital", "telegram", "chibi"]);
const lotuscandy_art = new artist(11, ["digital", "other", "traditional", "nsfw"]);
const phoenix_art = new artist(12, ["digital"]);
const pyre_art = new artist(13, ["digital", "nsfw"]);
const scylactic_art = new artist(14, [ "icon", "traditional", "ych"]);
const shwahb_art = new artist(15, ["digital", "telegram", "ych", "chibi", "reference", "icon"]);
const snacc_art = new artist(16, ["digital"]);
const spiralflute_art = new artist(17, ["digital", "telegram", "icon"]);
const spooky_art = new artist(18, ["digital", "icon"]);
const static_art = new artist(19, ["digital"]);
const thefruitiestbat_art = new artist(20, ["digital", "badge"]);
const xarical_art = new artist(21, ["digital"]);
const yellojellow_art = new artist(22, ["digital", "telegram", "ych", "chibi", "other", "icon"]);
const yourfriendren_art = new artist(23, ["digital", "nsfw", "ych"]);
const array = [Ammhook, aloemira, araghosta, cheddart, cloudwyrms, fruitpunch, furriesatberkeley, giah, guber, hunter, isb, lotuscandy,phoenix, pyre, scylactic, shwahb, snacc, spiralflute, spooky, static, thefruitiestbat, xarical, yellojellow, yourfriendren]
const array_art = [Ammhook_art, aloemira_art, araghosta_art, cheddart_art, cloudwyrms_art, fruitpunch_art, furriesatberkeley_art, giah_art, guber_art, hunter_art, isb_art, lotuscandy_art,phoenix_art, pyre_art, scylactic_art, shwahb_art, snacc_art, spiralflute_art, spooky_art, static_art, thefruitiestbat_art, xarical_art, yellojellow_art, yourfriendren_art]
const item = hunter.classList[0]
const tag_array = []
console.log(array_art[0].name)
console.log(array_art[0].tags)
const length = array_art[0].tags.length
console.log(length)
for(let i = 0; i<length; i++){
    console.log(array_art[0].tags[i])
}

tag1.addEventListener("click",
    (event) => {
        console.log(tag1.checked)
        for (let i = 0; i<24; i++){
            if(array[i].classList[0] == "none"){
                array[i].classList.toggle("artist_icon")
            }else{
                array[i].classList.toggle("none")
            }
        }
        /* Ammhook.classList.toggle("none");
        aloemira.classList.toggle("none")
        araghosta.classList.toggle("none")
        cheddart.classList.toggle("none")
        cloudwyrms.classList.toggle("none")
        fruitpunch.classList.toggle("none")
        furriesatberkeley.classList.toggle("none")
        giah.classList.toggle("none")
        guber.classList.toggle("none")
        hunter.classList.toggle("none")
        isb.classList.toggle("none")
        lotuscandy.classList.toggle("none")
        phoenix.classList.toggle("none")
        pyre.classList.toggle("none")
        scylactic.classList.toggle("none")
        shwahb.classList.toggle("none")
        snacc.classList.toggle("none")
        spiralflute.classList.toggle("none")
        spooky.classList.toggle("none")
        static.classList.toggle("none")
        thefruitiestbat.classList.toggle("none")
        xarical.classList.toggle("none")
        yellojellow.classList.toggle("none")
        yourfriendren.classList.toggle("none")
        Ammhook.classList.toggle("artist_icon");
        aloemira.classList.toggle("artist_icon")
        araghosta.classList.toggle("artist_icon")
        cheddart.classList.toggle("artist_icon")
        cloudwyrms.classList.toggle("artist_icon")
        fruitpunch.classList.toggle("artist_icon")
        furriesatberkeley.classList.toggle("artist_icon")
        giah.classList.toggle("artist_icon")
        guber.classList.toggle("artist_icon")
        hunter.classList.toggle("artist_icon")
        isb.classList.toggle("artist_icon")
        lotuscandy.classList.toggle("artist_icon")
        phoenix.classList.toggle("artist_icon")
        pyre.classList.toggle("artist_icon")
        scylactic.classList.toggle("artist_icon")
        shwahb.classList.toggle("artist_icon")
        snacc.classList.toggle("artist_icon")
        spiralflute.classList.toggle("artist_icon")
        spooky.classList.toggle("artist_icon")
        static.classList.toggle("artist_icon")
        thefruitiestbat.classList.toggle("artist_icon")
        xarical.classList.toggle("artist_icon")
        yellojellow.classList.toggle("artist_icon")
        yourfriendren.classList.toggle("artist_icon") */
    }
    , false);
tag2.addEventListener("click", 
    (event) => {
        hunter.classList.toggle("none");
        snacc.classList.toggle("none")
        snacc.classList.toggle("artist_icon")
        hunter.classList.toggle("artist_icon");
    }
    , false);
tag3.addEventListener("click",
    (event) => {
        test2.classList.toggle("none");
        test2.classList.toggle("artist_icon");
    }
    , false);
tag4.addEventListener("click", 
    (event) => {
        giah.classList.toggle("none");
        giah.classList.toggle("artist_icon");
    }
    , false);
tag5.addEventListener("click",
    (event) => {
        sourjers.classList.toggle("none");
        sourjers.classList.toggle("artist_icon");
    }
    , false);
tag6.addEventListener("click", 
    (event) => {
        test1.classList.toggle("none");
        test1.classList.toggle("artist_icon");
    }
    , false);
tag7.addEventListener("click",
    (event) => {
        for (let i = 0; i<24; i++){
            const is_in = array_art[i].tags.includes("nsfw");
            if (!is_in && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(!is_in && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag8.addEventListener("click", 
    (event) => {
        giah.classList.toggle("none");
        giah.classList.toggle("artist_icon");
    }
    , false);
tag9.addEventListener("click",
    (event) => {
        sourjers.classList.toggle("none");
        sourjers.classList.toggle("artist_icon");
    }
    , false);
tag10.addEventListener("click", 
    (event) => {
        test1.classList.toggle("none");
        test1.classList.toggle("artist_icon");
    }
    , false);
tag11.addEventListener("click",
    (event) => {
        test2.classList.toggle("none");
        test2.classList.toggle("artist_icon");
    }
    , false);
tag12.addEventListener("click", 
    (event) => {
        giah.classList.toggle("none");
        giah.classList.toggle("artist_icon");
    }
    , false);
tag13.addEventListener("click",
    (event) => {
        sourjers.classList.toggle("none");
        sourjers.classList.toggle("artist_icon");
    }
    , false);
tag14.addEventListener("click", 
    (event) => {
        test1.classList.toggle("none");
        test1.classList.toggle("artist_icon");
    }
    , false);

