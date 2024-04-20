const url="https://api.jikan.moe/v4/anime";

   
const FetchTopAnime = async (query) => {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?sfw=true&limit=20`);
    const resData = await res.json();
    
    
    console.log(resData);
    displayTopAnime(resData.data);

}

FetchTopAnime();


const displayTopAnime = async(anime)=>{

    let html='';
    let listing = document.querySelector('#all_card');


    for(let ani of anime){
        html+=`

            
        <div class="ani-card">
            <a href="${ani.url}">
            <img src=${ani.images.jpg.image_url} alt="Anime Image" >
            <p>${ani.title}</p> 
            </a>

        </div>
            
        `
    }
    listing.innerHTML = html;
}

function promptBox(){
let text;
  let person = prompt("Please enter your name:", "Jake Peralta");
  if (person == null || person == "") {
    text = "Guest";
  } 
  document.getElementById("login").innerHTML = text;
}

const sortbyPopularity = async () => {
       
    const res = await fetch(url+"?sfw=true&page=1&limit=20&orderby=popularity");
    const resData = await res.json();
    
    
    console.log(resData);
    displayTopAnime(resData.data);

}


const sortbyRelease = async () => {
    
    const res = await fetch(url+"?sfw=true&limit=20&orderby=popularity");
    const resData = await res.json();
    
    
    console.log(resData);
    displayTopAnime(resData.data);

}


//load dropdown genre menu
const FetchGenres = async (query) => {
    const res = await fetch(`https://api.jikan.moe/v4/genres/anime`);
    const resData = await res.json();
    console.log(resData);
    displayDropdown(resData.data);

}

FetchGenres();

function displayDropdown(anime){
    
    let html='';
    let genrelink = document.querySelector('#genrelink');


    for(let ani of anime){
        let html = '';
        const genrelink = document.querySelector('#genrelink');
    
        for (let ani of anime) {
            html += `<a href="#" class="genre-link" data-genre-id="${ani.mal_id}">${ani.name}</a>`;
        }
    
        genrelink.innerHTML = html;
    
        const genreLinks = document.querySelectorAll('.genre-link');
        genreLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                
                event.preventDefault();
                genID = link.getAttribute('data-genre-id'); 
                FetchAllParam();


                const genreDropdownBtn = document.querySelector('#genre');
                genreDropdownBtn.textContent = link.textContent;


            });
        });
    }}


   
  


const FetchGenreAnimes = async (genID) => {
    console.log("genre in fetch", genID);
    const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${genID}`);
    const resData = await res.json();
    
    console.log("new genre data");
    console.log(resData);
    displayTopAnime(resData.data);

}

let page = 1;
let ani_type = "tv";
let ani_status = "complete"; 
let genID=1;
let sfw = false;

const FetchAllParam = async () => {
    console.log(`genre in fetch, ${genID}`);
    console.log(`sfw in fetch", ${sfw}`);
    console.log(`anistatus in fetch", ${ani_status}`);
    console.log(`type:, ${ani_type}`);


    const apiUrl = `https://api.jikan.moe/v4/anime?limit=20&page=${page}&type=${ani_type}&status=${ani_status}&sfw=${sfw}&genres=${genID}`;
    const res = await fetch(apiUrl);
    console.log("Api link", apiUrl);
    const resData = await res.json();
    console.log(resData);
    displayTopAnime(resData.data);
}

//SFW MENU DROPDOWN
function setupDropdownListeners() {
    
    const sfwChoice = document.querySelectorAll("#sfw");
    sfwChoice.forEach(link => {
        link.addEventListener("click", function(event) {
            sfw = link.textContent;
            document.getElementById("sfw").innerHTML = sfw;
            event.preventDefault();
            let newlinkText = link.textContent.trim();
            sfw = newlinkText.toLowerCase() === "yes" ? true : false;
            FetchAllParam();
        });
    });

    // Anime Status dropdown
    const aniStatus = document.querySelectorAll("#status");
    aniStatus.forEach(link => {
        link.addEventListener("click", function(event) {
            ani_status = link.textContent;
            document.getElementById("status").innerHTML = ani_status;
            event.preventDefault();
            ani_status = link.textContent.trim().toLowerCase();
            FetchAllParam();
        });
    });

    const anitype = document.querySelectorAll("#type");
    anitype.forEach(link => {
        link.addEventListener("click", function(event) {
            ani_type = link.textContent;
            document.getElementById("type").innerHTML = ani_type;
            event.preventDefault();
            ani_type = link.textContent.trim().toLowerCase();
            FetchAllParam();
        });
    });




}


setupDropdownListeners();




const searchFunc  = async (query) => {
    query.preventDefault();
    const searchBtn = document.getElementById('searchbtn');
    searchBtn.addEventListener('click', searchFunc);


     query = document.getElementById('query').value.trim();

    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
    const resData = await res.json();
    
  
    console.log(resData);
    displayTopAnime(resData.data);

}

searchFunc();

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchbtn');
    searchBtn.addEventListener('click', searchFunc);

});



export {sortbyPopularity, sortbyRelease, FetchGenres};

