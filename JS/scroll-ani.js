function scrollAnimation(hide,show,repeated,del=0){
  const observer = new IntersectionObserver((entries => {
    entries.forEach(entry => {
      if (repeated) {
        if (entry.isIntersecting) {
          setTimeout(del)
          entry.target.classList.add(show)
        }else {
          entry.target.classList.remove(show);}
      }
      else {
        if (entry.isIntersecting) {
          setTimeout(del)
          entry.target.classList.add(show)}}
    });
  }))

  const hiddenElements = document.querySelectorAll(hide);
  hiddenElements.forEach((el) => observer.observe(el));
}

scrollAnimation('.hidden-fade', 'show-fade', true);
scrollAnimation('.hidden-pop-up', 'show-pop-up', false);
scrollAnimation('.hidden-slide', 'show-slide', false);