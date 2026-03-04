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
const Ammhook_art = new artist(0, [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]); //["traditional", "other", "$15 or less"]
const aloemira_art = new artist(1, [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0]); //["telegram", "chibi", "digital", "$15 or less"]
const araghosta_art = new artist(2, [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital", "chibi"]
const cheddart_art = new artist(3, [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital", "icon"]
const cloudwyrms_art = new artist(4, [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0]); //["digital", "chibi", "icon", "traditional", "badge", "$15 or less"]
const fruitpunch_art = new artist(5, [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0]); //["digital", "reference", "nsfw", "$15 or less"]
const furriesatberkeley_art = new artist(6, [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital"]
const giah_art = new artist(7, [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0]); //["digital", "$15 or less", "sketch"]
const guber_art = new artist(8, [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1]); //["digital", "icon", "badge", "telegram", "traditional", "ych", "$15 or less", "skecth"]
const hunter_art = new artist(9, [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0]);//["digital", "icon", "badge", "telegram", "reference", "nsfw", "mystery", "$15 or less", "sketch"]
const isb_art = new artist(10, [1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0]); //["animated","digital", "telegram", "chibi", "mystery", "$15 or less", "sketch"]
const lotuscandy_art = new artist(11, [0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0]);//["digital", "other", "traditional", "nsfw", "sketch"]
const phoenix_art = new artist(12, [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital"]
const pyre_art = new artist(13,[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0] ); //["digital", "nsfw"]
const scylactic_art = new artist(14, [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1]); //[ "icon", "traditional", "ych", "sketch"]
const shwahb_art = new artist(15, [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1]); //["digital", "telegram", "ych", "chibi", "reference", "icon", "$15 or less"]
const snacc_art = new artist(16, [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0]); //["digital", "$15 or less", "sketch"]
const spiralflute_art = new artist(17, [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0]);//["digital", "telegram", "icon"]
const spooky_art = new artist(18, [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]); //["animate","digital", "icon", "$15 or less"]
const static_art = new artist(19, [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital"]
const thefruitiestbat_art = new artist(20, [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital", "badge"]
const xarical_art = new artist(21, [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital"]
const yellojellow_art = new artist(22, [0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1]); //["animated","digital", "telegram", "ych", "chibi", "other", "icon"]
const yourfriendren_art = new artist(23, [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1]); //["digital", "nsfw", "ych", "$15 or less"]
const array = [Ammhook, aloemira, araghosta, cheddart, cloudwyrms, fruitpunch, furriesatberkeley, giah, guber, hunter, isb, lotuscandy,phoenix, pyre, scylactic, shwahb, snacc, spiralflute, spooky, static, thefruitiestbat, xarical, yellojellow, yourfriendren]
const array_art = [Ammhook_art, aloemira_art, araghosta_art, cheddart_art, cloudwyrms_art, fruitpunch_art, furriesatberkeley_art, giah_art, guber_art, hunter_art, isb_art, lotuscandy_art,phoenix_art, pyre_art, scylactic_art, shwahb_art, snacc_art, spiralflute_art, spooky_art, static_art, thefruitiestbat_art, xarical_art, yellojellow_art, yourfriendren_art]
const art_num = 24;
const tag_num = 14;
tag1.checked = false;
tag2.checked = false;
tag3.checked = false;
tag4.checked = false;
tag5.checked = false;
tag6.checked = false;
tag7.checked = false;
tag8.checked = false;
tag9.checked = false;
tag10.checked = false;
tag11.checked = false;
tag12.checked = false;
tag13.checked = false;
tag14.checked = false;

let tags_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
function array_mul(array1, array2, length){
    let new_arr = [];
    for (let n = 0; n<length; n++){
        new_arr.push(array1[n] * array2[n]);
    }
    return new_arr;
}
function switchtag(n){
    if(tags_array[n] == 0){
            tags_array[n] = 1;
        } else {
            tags_array[n] = 0;
        }
}
function filtering(){
    for(let i =0; i<art_num; i++){
            let filtering = array_mul(array_art[i].tags, tags_array, tag_num);
            let is_none = (array[i].classList[0] == "none");
            let is_artist = (array[i].classList[0] == "artist_icon");
            let same = filtering.join() == tags_array.join();
            let item = array[i].classList[0]
            if (same && is_none){
                array[i].classList.remove("none")
                array[i].classList.add("artist_icon")
            } else if ((!(same) && is_artist)){
                array[i].classList.remove("artist_icon")
                array[i].classList.add("none")
            }
            item = array[i].classList[0];
            console.log(item)
        }
}
tag1.addEventListener("click",
    (event) => {
        switchtag(0);
        filtering();
    }
    , false);
tag2.addEventListener("click", 
    (event) => {
        switchtag(1);
        filtering();
    }
    , false);
tag3.addEventListener("click",
    (event) => {
        switchtag(2);
        filtering();
    }
    , false);
tag4.addEventListener("click", 
    (event) => {
        switchtag(3);
        filtering();
    }
    , false);
tag5.addEventListener("click",
    (event) => {
        switchtag(4);
        filtering();
    }
    , false);
tag6.addEventListener("click", 
    (event) => {
        switchtag(5);
        filtering();
    }
    , false);
tag7.addEventListener("click",
    (event) => {
        switchtag(6);
        filtering();
    }
    , false);
tag8.addEventListener("click", 
    (event) => {
        switchtag(7);
        filtering();
    }
    , false);
tag9.addEventListener("click",
    (event) => {
        switchtag(8);
        filtering();
    }
    , false);
tag10.addEventListener("click", 
    (event) => {
        switchtag(9);
        filtering();
    }
    , false);
tag11.addEventListener("click",
    (event) => {
        switchtag(10);
        filtering();
    }
    , false);
tag12.addEventListener("click", 
    (event) => {
        switchtag(11);
        filtering();
    }
    , false);
tag13.addEventListener("click",
    (event) => {
        switchtag(12);
        filtering();
    }
    , false);
tag14.addEventListener("click", 
    (event) => {
        switchtag(13);
        filtering();
    }
    , false);

