const url="https://api.jikan.moe/v4/anime";

   


const FetchTopAnime = async (query) => {
    const res = await fetch(`https://api.jikan.moe/v4/random/anime`);
    const resData = await res.json();
    
    
    console.log(resData);
    displayTopAnime(resData.data);

}

FetchTopAnime();


const displayTopAnime = async(ani)=>{

    let html='';
    let listing = document.querySelector('#layout');


    
        html+=`

        <div id="sidebar">
          
          <a href="${ani.url}">
        
          <img src=${ani.images.jpg.image_url} alt="">
          <button id ="add" >Add to List</button>
          </a>
        </div>

        <div class="body">
        <h2>${ani.title} </h4>
        <p>${ani.synopsis}</p>
        <div id="ani-info">
            <div class="sec1">
              <p>Genre: ${ani.genres[0].name}</p>
              <p>Score: ${ani.score}</p>
              <p>Ranked: ${ani.rank}</p>
              <p>Episodes: ${ani.episodes}</p>
            </div>

            <div class="sec2">
              <p>Year: ${ani.year}</p>
              <p>Status: ${ani.popularity}</p>
              <p>Duration: ${ani.duration}</p>
              <p>Status: ${ani.status}</p>
            </div>
        
          </div>
        
        </div>



        
        `
    
    listing.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  const randbtn = document.getElementById('Random');
  randbtn.addEventListener('click', FetchTopAnime);

});