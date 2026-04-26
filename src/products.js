// import loggy from './logo512.png' ;

const vic_S = 'https://images.unsplash.com/photo-1535683577427-740aaac4ec25?w=600&auto=format&fit=crop&q=';

const nior_T = 'https://images.unsplash.com/photo-1588514912908-8f5891714f8d?w=600&auto=format&fit=crop&q=60';

const dusk_A = 'https://images.unsplash.com/photo-1610461888750-10bfc601b874?w=600&auto=format&fit=crop&q=';

const allure = 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=';

const oud_N = 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&auto=format&fit=crop&q=60&i';

export const products = [
    {
        id: 1,
        name: "Victory Surge",// NEW WHITE ONES
        price: 49.99,
        color: "White and Silver",
        image: vic_S,
        description : 'Loading...',
        quote:"Soft love" ,
        inStock: true,   // IMPORTANT for you
        slug:"victory-surge",
    },
    {
        id:2,
        name:"Noir Treasure ",//Old Tall Black ones
        price: 39.99,
        color:"Black and Gold",
        image:nior_T,
        description : '...',
        quote:"Quality layering",
        inStock: true,   // IMPORTANT for you
        slug:"noir-treasure",
    },
    {
        id:3,
        name:"Dusk Aura",//Outta stock Short white ones 
        price: 19.99,
        color:"Transparent/White and Gold",
        image:dusk_A,
        description : '...',
        quote:"Comfy yet strong",
        inStock: false,   // IMPORTANT for you
        slug:"dusk-aura",
    },
    {
        id:4,
        name:"Allure",//Outta stock kinda white ones
        price: 19.99,
        color:"Transparent/White and Gold",
        image:allure,
        description : '...',
        quote:"Adoring attraction",
        inStock: false,   // IMPORTANT for you
        slug:"allure",
    },
    {
        id:5,
        name:"Oud Nirvana",//New White and Black drops
        price: 39.99,
        color:"Transparent/Black and Gold",
        image:oud_N,
        description : '...',
        quote:"New Available Drop",
        inStock: true,   // IMPORTANT for you
        slug:"oud-nirvana",
    },
].sort((a,b)=> a.name.localeCompare(b.name))

// Optional note 
// {
//   size: "50ml",
//   category: "Fragrance",
//   notes: ["Woody", "Vanilla"], // scent notes
//   gender: "Unisex"
// }


