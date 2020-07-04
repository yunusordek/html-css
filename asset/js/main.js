$('.Header-switch').on('click', function () {
    
    if($('.Header').is('.menu-show')){
        $('.Header').removeClass('menu-show')
    }
    else{
        $('.Header').addClass('menu-show')
    }
  })

var $carousel = $('.Highlight-slider').flickity({
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false
})

$('.Highlight-item:eq(0)').addClass('is-expanded')
$carousel.flickity('reposition');

$carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
  if ( !cellElement ) {
    return;
  }
  $carousel.find('.is-expanded').removeClass('is-expanded');
  $( cellElement ).addClass('is-expanded');
  $carousel.flickity('reposition');
  $carousel.flickity('select',cellIndex);
});