$(function() {


  // $.fancybox($("#modal"), {
  //   padding: 0,
  //   width: '100%'
  // });
  
  $("#modal-btn").click(function(event) {
    event.preventDefault();
    $.fancybox($("#modal"), {
      padding: 0,
      width: '100%'
    });
  
  })

  $("#modal-btn2").click(function(event) {

    event.preventDefault();
    $.fancybox($("#modal2"), {
      padding: 0,
      width: '100%'
    });
  
  })

  $("#modal-btn3").click(function(event) {

    event.preventDefault();
    $.fancybox($("#modal3"), {
      padding: 0,
      width: '100%'
    });
  
  })

  $('.form-close').click(function() {
    $.fancybox.close()
  })
  // form variables
  var formStep = 0

  $('#btn-next').click(function() {
    ++formStep
    if(formStep > 6) {
      $(this).hide()
      $('#btn-send').show()
    }
    if(formStep > 7) {
      return false
    }
    
    
    if(formStep > 0) {
      $('#btn-prew').css('transform', 'translateX(0)')
    }
    
    
    $('.progress__item').eq(formStep).addClass('progress__item--active')
    $('.progress__item').eq(formStep - 1).find('.progress-circle').addClass('progress-circle--done')
    $('.form-tab').hide()
    $('.form-tab').eq(formStep).show()
    console.log("TCL: formStep", formStep)
    $('.form-count span').text(formStep + 1)
  })

  $('#btn-prew').click(function() {
    
    
    if(formStep <= 0) {
      return false
    }
    if(formStep <= 1) {
      $(this).css('transform', 'translateX(-300px)')
    }
    
    $('.progress__item').eq(formStep).removeClass('progress__item--active')
    $('.progress__item').eq(formStep - 1).find('.progress-circle').removeClass('progress-circle--done')
    $('.form-tab').hide()
    $('.form-tab').eq(formStep - 1).show();
    
    --formStep
    console.log("TCL: formStep", formStep)
    $('.form-count span').text(formStep + 1)
    if(formStep < 7) {
      $('#btn-next').show()
      $('#btn-send').hide()
    }
  })


  $('#calendar-sm').datepicker()
  $('#calendar-burn').datepicker()


  $('.file-input').change(function() {
    if ($(this).val() != '') $(this).siblings('.file-text').find('span').show()
    if ($(this).val() == '') $(this).siblings('.file-text').find('span').hide()
  });

  $(".file-text span").click(function(e) {
    e.preventDefault()
    $(this).parent().siblings('.file-input').val('')
    $(this).hide()
  })


  $(".radio").change(function() {
    console.log('sa', $(".radio").is(':checked'))
    $('.radio').each(function(index, item) {
      console.log('each radio', item.is(':checked'))
    })
    
  })
})