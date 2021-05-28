$(document).ready(function () {
  var owl = $('#testimonial-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  })

  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel')
  })
  $('.customPreviousBtn').click(function () {
    owl.trigger('prev.owl.carousel')
  })

  var job = $('#job-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  })
  var company = $('#company-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  })
  $('input[name=experience_skills]').change(function () {
    var experience_val = $('input[name=experience_skills]:checked').val()

    var one = $('.experience_one')
    var two = $('.experience_two')
    var three = $('.experience_three')
    var four = $('.experience_four')
    var five = $('.experience_five')
    var six = $('.experience_six')
    var seven = $('.experience_seven')
    var eight = $('.experience_eight')
    var nine = $('.experience_nine')
    var ten = $('.experience_ten')
    console.log(experience_val)
    one.removeClass('active')
    two.removeClass('active')
    three.removeClass('active')
    four.removeClass('active')
    five.removeClass('active')
    six.removeClass('active')
    seven.removeClass('active')
    eight.removeClass('active')
    nine.removeClass('active')
    ten.removeClass('active')
    switch (experience_val) {
      case '1':
        one.addClass('active')
        break
      case '2':
        one.addClass('active')
        two.addClass('active')
        break
      case '3':
        one.addClass('active')
        two.addClass('active')
        three.addClass('active')
        break
      case '4':
        one.addClass('active')
        two.addClass('active')
        three.addClass('active')
        four.addClass('active')
        break
      case '5':
        one.addClass('active')
        two.addClass('active')
        three.addClass('active')
        four.addClass('active')
        five.addClass('active')
        break
      case '6':
        one.addClass('active')
        two.addClass('active')
        three.addClass('active')
        four.addClass('active')
        five.addClass('active')
        six.addClass('active')
        break
      case '7':
        one.addClass('active')
        two.addClass('active')
        three.addClass('active')
        four.addClass('active')
        five.addClass('active')
        six.addClass('active')
        seven.addClass('active')
        break
      case '8':
        one.addClass('active')
        two.addClass('active')
        three.addClass('active')
        four.addClass('active')
        five.addClass('active')
        six.addClass('active')
        seven.addClass('active')
        eight.addClass('active')
        break
      case '9':
        one.addClass('active')
        two.addClass('active')
        three.addClass('active')
        four.addClass('active')
        five.addClass('active')
        six.addClass('active')
        seven.addClass('active')
        eight.addClass('active')
        nine.addClass('active')
        break
      case '10':
        one.addClass('active')
        two.addClass('active')
        three.addClass('active')
        four.addClass('active')
        five.addClass('active')
        six.addClass('active')
        seven.addClass('active')
        eight.addClass('active')
        nine.addClass('active')
        ten.addClass('active')
        break

      default:
        break
    }
  })
})

const logoButton = document.getElementById("company-logo-file");
const VideoButton = document.getElementById("company-video-file");
const imgButton = document.getElementById("company-img-file");

const customLogoButton = document.getElementById("logo-button");
const customVideoButton = document.getElementById("video-button");
const customImgFile = document.getElementById("img-button");

customLogoButton.addEventListener("click", function () {
  logoButton.click();
})

customVideoButton.addEventListener("click", function () {
  VideoButton.click();
})

customImgFile.addEventListener("click", function () {
  imgButton.click();
})

