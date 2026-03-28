import loggy from './logo512.png' ;

export const products = [
    {
        id: 1,
        name: "Victory surge",// NEW WHITE ONES
        price: 49.99,
        color: "White and Silver",
        image: loggy,
        description: "Quality layering",
        inStock: true,   // IMPORTANT for you
        slug:"victory-surge",
    },
    {
        id:2,
        name:"Noir Treasure ",//Old Tall Black ones
        price: 39.99,
        color:"Black and Gold",
        image:loggy,
        description:"Smooth soft attractiveness",
        inStock: true,   // IMPORTANT for you
        slug:"noir-treasure",
    },
    {
        id:3,
        name:"Dusk Aura",//Outta stock Short white ones 
        price: 19.99,
        color:"Transparent/White and Gold",
        image:loggy,
        description:"Comfy yet strong",
        inStock: false,   // IMPORTANT for you
        slug:"dusk-aura",
    },
    {
        id:4,
        name:"Allure",//Outta stock kinda white ones
        price: 19.99,
        color:"Transparent/White and Gold",
        image:loggy,
        description:"Comfy yet strong",
        inStock: false,   // IMPORTANT for you
        slug:"allure",
    },
]

// Optional note 
// {
//   size: "50ml",
//   category: "Fragrance",
//   notes: ["Woody", "Vanilla"], // scent notes
//   gender: "Unisex"
// }


