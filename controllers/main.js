

function showClothes(category) {
  
  var clothesData = {
    ao: ["../assets/images/clothes/topcloth1_show.jpg", "../assets/images/clothes/topcloth2_show.jpg", "../assets/images/clothes/topcloth3_show.jpg"],
    quan: ["../assets/images/clothes/botcloth1_show.jpg", "../assets/images/clothes/botcloth2_show.jpg", "../assets/images/clothes/botcloth3_show.jpg"],
    giay: ["../assets/images/shoes/shoes1_show.jpg", "../assets/images/shoes/shoes2_show.jpg", "../assets/images/shoes/shoes3_show.jpg"],
    tui: ["../assets/images/handbags/handbag1_show.jpg", "../assets/images/handbags/handbag2_show.jpg", "../assets/images/handbags/handbag3_show.jpg"],
    daychuyen: ["../assets/images/necklaces/necklace1_show.jpg", "../assets/images/necklaces/necklace2_show.jpg", "../assets/images/necklaces/necklace3_show.jpg"],
    kieutoc: ["../assets/images/hairstyle/hairstyle1_show.jpg", "../assets/images/hairstyle/hairstyle2_show.jpg", "../assets/images/hairstyle/hairstyle3_show.jpg"],    
  };
  const clothesContainer = document.getElementById('clothesContainer');
  clothesContainer.innerHTML = '';

  clothesData[category].forEach((clothesPath) => {
    
    const clothesItem = document.createElement('div');

   
    const img = document.createElement('img');
    img.src = clothesPath;
    img.alt = 'Clothes';

    
    const tryOnButton = document.createElement('button');
    tryOnButton.innerText = 'Thử Đồ';
    tryOnButton.addEventListener('click', () => tryOnClothes(clothesPath, category));

    clothesItem.appendChild(img);
    clothesItem.appendChild(tryOnButton);

    clothesContainer.appendChild(clothesItem);
  });

  
}



function tryOnClothes(clothesPath, category) {
  if (clothesPath) {
    const modelElement = document.getElementById('modelBody');
    const bikiniTopElement = document.querySelector('.bikinitop');
    const bikiniBottomElement = document.querySelector('.bikinibottom');

    if (modelElement && bikiniTopElement && bikiniBottomElement) {


      modelElement.style.background = `url("${clothesPath}")`;
      modelElement.style.backgroundRepeat = 'no-repeat';
      modelElement.style.left='22%';
      modelElement.style.top='12%';
      modelElement.style.position='absolute';

      modelElement.style.zIndex = 10; 


      bikiniTopElement.style.zIndex = 1; 
      bikiniBottomElement.style.zIndex = 1; 

      bikiniTopElement.style.display = 'none';
      bikiniBottomElement.style.display = 'none';

      
   }
   

   
}
}

