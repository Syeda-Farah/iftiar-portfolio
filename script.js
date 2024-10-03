
// change color of the navbar
addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (scrollY > 700) { // Change color after scrolling 50px
      navbar.classList.add('bg-slate-800');
      navbar.classList.add('text-white')
      navbar.classList.remove('bg-cyan-200');
  } else {
      navbar.classList.remove('bg-slate-800');
      navbar.classList.add('bg-cyan-200');
      navbar.classList.remove('text-white')
  }
});


