var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();

let btnProject = document.getElementById('btnProject');
let showLessBtn = document.getElementById('showLessBtn');
let divProjects = document.getElementById('divProject');


btnProject.onclick = function() { 
  showLessBtn.classList.remove('d-none');
  btnProject.classList.add('d-none');  
  divProjects.classList.remove('d-none');
}

showLessBtn.onclick = function() {
  btnProject.classList.remove('d-none');
  showLessBtn.classList.add('d-none');
  divProjects.classList.add('d-none');
}

$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {          
          $('.navbar').addClass('navbar-light');
          $('.navbar').removeClass('navbar-dark');
          $('.navbar').addClass('bg-light');
          $('#logo-dark').addClass('d-none');
          $('#logo-light').removeClass('d-none');
      } else {          
          $('.navbar').addClass('navbar-dark');
          $('.navbar').removeClass('navbar-light');
          $('.navbar').removeClass('bg-light');
          $('#logo-dark').removeClass('d-none');
          $('#logo-light').addClass('d-none');
      }
  });
});

