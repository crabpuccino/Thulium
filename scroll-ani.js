function scrollAnimation(hide,show,repeated){
  const observer = new IntersectionObserver((entries => {
    entries.forEach(entry => {
      if (repeated) {
        if (entry.isIntersecting) {
          entry.target.classList.add(show)
        }else {
          entry.target.classList.remove(show);}
      }
      else {
        if (entry.isIntersecting) {
          entry.target.classList.add(show)}}
    });
  }))

  const hiddenElements = document.querySelectorAll(hide);
  hiddenElements.forEach((el) => observer.observe(el));
}

scrollAnimation('.hidden-fade', 'show-fade', true);
scrollAnimation('.hidden-pop-up', 'show-pop-up', false);