
// Publicity section
( ()=>{
    return( 
        document.getElementById('publicity-container').innerHTML =  rest_recipe_event_details.map((x)=>{
            let {title , image , details } = x
        return(
            `
            <div class="rest-recipe-event-container">
            <div class="element-details details">
            <div class="img-overlay-wrapper">
            <a href=${source} target="blank" class="image-overlay-container">
            <img  src=${image} alt="">
            <span class="img-overlay-content-box" >
            <i class="fa-solid fa-angle-right"></i>              
            </span>
            </a>
            </div>

            <div>
            <div > 
            <a href="#" class="secondary-heading">${title}</a> </div>
            </div>
            <div>
            <p class="secondary-para">${details}</p>
            </div>
            </div>
            </div>
            `
        )
    })
    )
}
)()

// Cities Section 

const citiesSection = document.getElementById('cities-section-container');

function citiesDataDisplayer(){
    
            citiesSection.innerHTML = cities_collection.map((city)=>{
                const {source, name , image} = city
                return(
            `
            <figure class="city-image-wrapper">
            <a class="city-image-overlay-container"
            href=${source} target="blank"> <img src=${image}></a>
            
            <a href=${source} target="blank" class="city-image-overlay-content-box" >
            <h2>${name}</h2><br><br>
            <button class="city-explore-btn common-btn text-center">Discover</button>
            </a>
            </figure>
            `
        )
        // return ([name , image])
    })
}
citiesDataDisplayer()