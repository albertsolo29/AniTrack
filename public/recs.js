
const FetchTopAnime = async (query) => {
    const res = await fetch(`https://api.jikan.moe/v4/recommendations/anime`);
    const resData = await res.json();
    
    
    console.log(resData);
    displayTopAnime(resData.data);

}

FetchTopAnime();


const displayTopAnime = async(anime)=>{

    let html='';
    let listing = document.querySelector('#all_card2');


    for(let ani of anime){
        html+=`

        <div class="anime-card2">
        <a href="${ani.entry[0].url}">
        <img src="${ani.entry[0].images.jpg.image_url} "alt="Anime Image" >
        <p>${ani.entry[0].title}</p> 
          </a>



         
        </div>
            
        `
    }
    listing.innerHTML = html;
}

