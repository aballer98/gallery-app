let body = document.querySelector('body');
let galleryImage = document.querySelector('#gallery-image');
let galleryDetail = document.querySelector('#gallery-detail');
let img = document.querySelector('img');
let h1 = document.querySelector('h1');
let h4 = document.querySelectorAll('h4');

let nextButton = document.querySelector('#next-button');
let detailsButton = document.querySelector('#details-button');

// var date = new Date();
//
// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();
//
// if (month < 10) month = "0" + month;
// if (day < 10) day = "0" + day;
//
// var today = year + "-" + month + "-" + day;
//
//
// document.getElementById('theDate').value = today;

//
// Next image
let x = 0;


function nextImage() {
 img.src = './media/' + photosInfo[x].src;
 // galleryImage.appendChild(img);


let fullName = photosInfo[x].firstName + ' ' + photosInfo[x].lastName;
 h1.textContent = fullName;
 galleryDetail.appendChild(h1);

let title = 'Title: ' + photosInfo[x].title;
 h4[0].textContent = title;
 galleryDetail.appendChild(h4[0]);

let nationality = 'Nationality: ' + photosInfo[x].nationality;
 h4[1].textContent = nationality;
 galleryDetail.appendChild(h4[1]);

let skills = "Skills:" + photosInfo[x].skills;
 h4[2].textContent = skills;
 galleryDetail.appendChild(h4[2]);

let longTermVision = "Vision:" + photosInfo[x].longTermVision;
 h4[3].textContent = longTermVision;
 galleryDetail.appendChild(h4[3]);

let motivatesMe = "Motivation:" + photosInfo[x].motivatesMe;
 h4[4].textContent = motivatesMe;
 galleryDetail.appendChild(h4[4]);

let favoriteQuote = "Favorite Quote:" + photosInfo[x].favoriteQuote;
 h4[5].textContent = favoriteQuote;
 galleryDetail.appendChild(h4[5]);

let joinedOn = "Date joined:" + photosInfo[x].joinedOn;
 h4[6].textContent = joinedOn;
 galleryDetail.appendChild(h4[6]);

let whySofterDeveloper = "Why a software Developer:" + photosInfo[x].whySofterDeveloper;
 h4[7].textContent = whySofterDeveloper;
 galleryDetail.appendChild(h4[7]);



}

nextImage();

nextButton.addEventListener('click', function() {
 nextImage();
 x++;

if (x === photosInfo.length) {
   x = 0
 }

});

detailsButton.addEventListener('click', function() {
 if (galleryDetail.style.display === "none") {
   galleryDetail.style.display = "block";
 } else {
   galleryDetail.style.display = "none";
 }
});

function changeImg() {
 let count = 2;

setInterval(function() {
   let imageUrl = "./media/" + 'group' + count + '.jpg';
   body.style.backgroundImage = `url(${imageUrl})`;
   if (count === 5) {
     count = 2;
   }
   count++;

}, 2000);

}
changeImg();
//
// body.appendChild(galleryImage);
// body.appendChild(galleryDetail);


// let fullName = photosInfo[0].firstName + " " + photosInfo[0].lastName;
// let imgUrl = './media/'+  photosInfo[0].src;
//
//
// img.src = imgUrl;
//
// img.alt = photosInfo[0].alt;
// galleryImage.appendChild(img);
//
//
// galleryDetail.textContent= fullName;
// galleryDetail.textContent= nationality;
//
// body.appendChild(galleryImage);
// body.appendChild(galleryDetail);
// body.appendChild(nationality);
