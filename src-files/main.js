
// Publicity section
( ()=>{
    return( 
        document.getElementById('publicity-container').innerHTML =  rest_recipe_event_details.map((x)=>{
            let {title , image , details } = x
        return(
            `
            <div class="rest-recipe-event-container">
            <div class="element-details details">
            <div class="img-overlay-container">
            <a href="https://www.google.com" target="blank"><img  src=${image} alt=""></a>
            <div class="img-overlay-content-box" >
            <i class="fa-solid fa-angle-right"></i>              
            </div>
            </div>
            <div>
            <div > <a href="#" class="secondary-heading">${title}</a> </div>
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
                const {name , image} = city
                return(
            `
            <figure class="city-image-wrapper">
            <img src=${image}>
            </figure>
            `
        )
        // return ([name , image])
    })
}
citiesDataDisplayer()