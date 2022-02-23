$(document).ready(() =>{
  //Click Events
  $('.hint-box').on('click', () => {
    $('.hint').slideToggle(500);
  })
  // wrong Answers
  $('.wrong-answer-one').on('click', () => {
    $('.wrong-text-one').fadeOut('slow');
    $('.frown').show();
  })
  $('.wrong-answer-two').on('click', () => {
    $('.wrong-text-two').fadeOut('slow');
    $('.frown').show();
  })
  $('.wrong-answer-three').on('click', ()=> {
    $('.wrong-text-three').fadeOut('slow');
    $('.frown').show();
  })
  // Correct Answers
  $('.correct-answer').on('click', () => {
    $('.frown').hide();
    $('.smiley').show();
    $('.wrong-answer-one').fadeOut('fast');
    $('wrong-answer-two').fadeOut('fast');
    $('.wrong-answer-three').fadeOut('fast');
  });
  $('.reset').on('click', () => {
    $('.wrong-text-one').fadeIn();
    $('.wrong-text-two').fadeIn();
    $('.wrong-text-three').fadeIn();
    $('.answer').fadeIn();
    $('.frown').hide();
    $('.smiley').hide();
  });
  });