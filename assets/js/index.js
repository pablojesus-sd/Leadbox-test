
// Responsive Menu, hamburguer icon

const toggleMenu = document.getElementById('toggle_menu');
const mainNav = document.getElementById('main_nav');

toggleMenu.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    toggleMenu.classList.toggle('open');
})

$('nav a').on( "click", function() {
    mainNav.classList.toggle('show');
    toggleMenu.classList.toggle('open');
});
// end responsive menu functions

// function footer select

$('select').on('change', function (e) {
    $('.departament-info.show').removeClass('show');
    switch($(this).val()) {
        case 'SAL':
          $('.departament-info#infoSales').addClass('show');
          break;
        case 'SER':
            $('.departament-info#infoServices').addClass('show');
            break;
        case 'PAR':
            $('.departament-info#infoParts').addClass('show');
            break;
      }
});

// end function footer select

$(document).ready(function(){
    $('.hero-slider').slick();
    $('.featured-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      });
  });


const links = document.querySelectorAll(".smooth-link");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}