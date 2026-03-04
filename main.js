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
const Ammhook_art = new artist(0, [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]); //["traditional", "other"]
const aloemira_art = new artist(1, [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0]); //["telegram", "chibi", "digital"]
const araghosta_art = new artist(2, [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital", "chibi"]
const cheddart_art = new artist(3, [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital", "icon"]
const cloudwyrms_art = new artist(4, [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0]); //["digital", "chibi", "icon", "traditional", "badge"]
const fruitpunch_art = new artist(5, [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0]); //["digital", "reference", "nsfw"]
const furriesatberkeley_art = new artist(6, [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital"]
const giah_art = new artist(7, [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital"]
const guber_art = new artist(8, [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1]); //["digital", "icon", "badge", "telegram", "traditional", "ych"]
const hunter_art = new artist(9, [0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0]);//["digital", "icon", "badge", "telegram", "reference", "nsfw"]
const isb_art = new artist(10, [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0]); //["digital", "telegram", "chibi"]
const lotuscandy_art = new artist(11, [0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0]);//["digital", "other", "traditional", "nsfw"]
const phoenix_art = new artist(12, [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital"]
const pyre_art = new artist(13,[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0] ); //["digital", "nsfw"]
const scylactic_art = new artist(14, [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1]); //[ "icon", "traditional", "ych"]
const shwahb_art = new artist(15, [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1]); //["digital", "telegram", "ych", "chibi", "reference", "icon"]
const snacc_art = new artist(16, [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital"]
const spiralflute_art = new artist(17, [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0]);//["digital", "telegram", "icon"]
const spooky_art = new artist(18, [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital", "icon"]
const static_art = new artist(19, [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital"]
const thefruitiestbat_art = new artist(20, [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital", "badge"]
const xarical_art = new artist(21, [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //["digital"]
const yellojellow_art = new artist(22, [0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1]); //["digital", "telegram", "ych", "chibi", "other", "icon"]
const yourfriendren_art = new artist(23, [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1]); //["digital", "nsfw", "ych"]
const array = [Ammhook, aloemira, araghosta, cheddart, cloudwyrms, fruitpunch, furriesatberkeley, giah, guber, hunter, isb, lotuscandy,phoenix, pyre, scylactic, shwahb, snacc, spiralflute, spooky, static, thefruitiestbat, xarical, yellojellow, yourfriendren]
const array_art = [Ammhook_art, aloemira_art, araghosta_art, cheddart_art, cloudwyrms_art, fruitpunch_art, furriesatberkeley_art, giah_art, guber_art, hunter_art, isb_art, lotuscandy_art,phoenix_art, pyre_art, scylactic_art, shwahb_art, snacc_art, spiralflute_art, spooky_art, static_art, thefruitiestbat_art, xarical_art, yellojellow_art, yourfriendren_art]
/* const item = hunter.classList[0]
console.log(array_art[0].name)
console.log(array_art[0].tags)
const length = array_art[0].tags.length
console.log(length)
for(let i = 0; i<length; i++){
    console.log(array_art[0].tags[i])
} */
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
function array_add(array, length){
    let sum = 0;
    for (let i = 0; i<length; i++){
        sum += array[i];
    }
    return sum;
}
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
    console.log(tags_array);
}
tag1.addEventListener("click",
    (event) => {
        switchtag(0);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[0] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[0] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
        /* for (let i = 0; i<24; i++){
            if(array[i].classList[0] == "none"){
                array[i].classList.toggle("artist_icon")
            }else{
                array[i].classList.toggle("none")
            }
        } */
    }
    , false);
tag2.addEventListener("click", 
    (event) => {
        switchtag(1);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[1] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[1] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag3.addEventListener("click",
    (event) => {
        switchtag(2);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[2] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[2].tags[6] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag4.addEventListener("click", 
    (event) => {
        switchtag(3);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[3] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[3] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag5.addEventListener("click",
    (event) => {
        switchtag(4);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[4] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[4] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag6.addEventListener("click", 
    (event) => {
        switchtag(5);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[5] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[5] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag7.addEventListener("click",
    (event) => {
        switchtag(6);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[6] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[6] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag8.addEventListener("click", 
    (event) => {
        switchtag(7);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[7] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[7] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag9.addEventListener("click",
    (event) => {
        switchtag(8);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[8] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[8] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag10.addEventListener("click", 
    (event) => {
        switchtag(9);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[9] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[9] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag11.addEventListener("click",
    (event) => {
        switchtag(10);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[10] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[10] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag12.addEventListener("click", 
    (event) => {
        switchtag(11);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[11] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[11] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag13.addEventListener("click",
    (event) => {
        switchtag(12);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[12] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[12] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);
tag14.addEventListener("click", 
    (event) => {
        switchtag(13);
        for (let i = 0; i<24; i++){
            if (array_art[i].tags[13] == 0 && array[i].classList[0] == "artist_icon"){
                array[i].classList.toggle("none")
            } else if(array_art[i].tags[13] == 0 && array[i].classList[0] == "none" ){
                array[i].classList.toggle("artist_icon")
            }
        }
    }
    , false);

