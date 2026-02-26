class artist{
    constructor(artistname, artisttags){
        this.name = artistname;
        this.tags = artisttags;
    }
    ListTags(){
        let tags = this.tags;
        if (tags === undefined) {
            console.log("return")
            return
        }
        let length = this.tags.length;
        for(let i = 0; i < length; i++){
            console.log(tags[i])
        }
    }
}
const ChangeAppearance = (tagged) => {
    tagged.classList.toggle("none");
    tagged.classList.toggle("artist_icon");
}
const tag1 = document.querySelector("#tag1");
const tag2 = document.querySelector("#tag2");
const tag3 = document.querySelector("#tag3");
const tag4 = document.querySelector("#tag4");
const sourjers = document.querySelector(".artist_icon:nth-child(1)");
const test1 = document.querySelector(".artist_icon:nth-child(2)");
const test2 = document.querySelector(".artist_icon:nth-child(3)");
const giah = document.querySelector(".artist_icon:nth-child(5)");
console.log(sourjers);
console.log(test1);
console.log(test2);
console.log(giah);
tag1.addEventListener("click",
    (event) => {
        sourjers.classList.toggle("none");
        sourjers.classList.toggle("artist_icon");
    }
    , false);
tag2.addEventListener("click", 
    (event) => {
        test1.classList.toggle("none");
        test1.classList.toggle("artist_icon");
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
