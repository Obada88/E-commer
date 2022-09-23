const product =[{
    id:1,
    colord:[
       {
        code: "black",
        img:"./img/air.png"
       },
       {
        code: "darkblue",
        img:"./img/air2.png"
       },
       {
        id:2,
        colord:[
            {
                code:"gray",
                img:"./img/jordan.png"
            },
            {
                code:"green",
                img:"./img/jordan2.png"
            }
        ]
       }

    ],
    
}];
 

let choosenProduct =product[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductColors = document.querySelectorAll(".color");


//change the choosen product
    choosenProduct = product[0];

    //change texts of currentProduct
    currentProductImg.src = choosenProduct.colord[0].img;
    //assing new colors
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colord[index].code;
      });
      currentProductColors.forEach((color, index) => {
        color.addEventListener("click", () => {
          currentProductImg.src = choosenProduct.colord[index].img;
        });
      });
      