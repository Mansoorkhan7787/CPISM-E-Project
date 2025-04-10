$(document).ready(function () {
    $.ajax({
        url: "./E-Project/assets/JSON/home.json",
        type: "GET",
        success: function (data) {

            let card = " ";
            let modal = " ";
            $.each(data, function (keys, values) {

                card += `
                 <div class=" col-lg-3 col-md-4 mt-5 mb-4">
          <div class="card">
              <img src="${values.image}" class="card-img-top" alt="${values.name}">
              <div class="card-body">
               
                  <h5 class="card-title fw-bold"> PKR: ${values.price}</h5>
                   <p class="card-text ct">  ${values.rating}</p>
                   <p class="card-text ct">  ${values.reviews}</p>
                   
                    <div class="d-flex justify-content-center">
                        <a href="#${values.id}" data-bs-toggle="modal" class="btn button mx-2">Details</a>
                         <a href="./feedback.html" class="btn button mx-2">Feedback</a>
                    </div>

              </div>
          </div>
      </div> `

                modal += ` <div class="modal fade " id="${values.id}" tabindex="-1"  aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${values.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
       <div class="row">
          <div class="col-lg-4">
              <div class="cards">
                  <img class="card-img-top" src="${values.image}" alt="Title" />
                 
              </div>
              
          </div>
          <div class="col-lg-8">
              <div class="card-body">
                  <h4 class="card-title">${values.name}</h4>
                  <p class="card-text">${values.price}</p>
                  <p class="card-text">${values.discription}</p>
                   <button type="button" class="btn btn-outline-primary decrement" onclick="decreament()">-</button>
  <input type="text" name="" value="1" >
  <button type="button" class="btn btn-outline-primary increment" onclick="increament()">+</button>
  <span class="mt-3" id="alert"></span>
              </div>
          </div>
       </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary  close" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn button" id="addToCart"onclick="addToCart('`+ values.id + `')">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>`



            })
            document.getElementById("home").innerHTML = card;
            document.getElementById("modalData").innerHTML = modal;
        }
    })
})

function addToCart(productId) {
    alert("your order has been submited!");
}


let count = 1;

function increament() {
    let qty = $("input[type='text']");
    count++;
    qty.val(count);
    if (qty.val() > 1) {
        $("#alert").hide();
    }
    // console.log(qty.val());
}
function decreament() {
    let qty = $("input[type='text']");
    if (qty.val() > 1) {
        count--;
        qty.val(count);

    } else {
        $("#alert").show().html("atleast 1 product must be added into cart")


    }
}


// document.addEventListener("DOMContentLoaded", function () {
//     let text = document.getElementById("animated-text");
//     text.style.opacity = "1";
//     text.style.transform = "translateY(360)";
// });
document.addEventListener("DOMContentLoaded", function () {
    let text = document.getElementById("animated-text");
    if (text) {
        text.style.opacity = "1";
    text.style.transform = "translateY(360)";
    } 
    
});



document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', function () {
        this.style.setProperty('--hover-color', this.getAttribute('data-color'));
    });
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});

