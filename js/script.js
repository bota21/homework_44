$(() => {
  $('.menu').on('click', (e) => {
    e.preventDefault();
    $('.menulist').addClass('active');
    $('.menulist').toggle();
  })
});