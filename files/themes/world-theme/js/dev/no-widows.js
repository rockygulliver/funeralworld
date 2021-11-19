jQuery(function($){


  // 1a. Tab Accessible Accordions (Explore Resource by Topic)
  $('.sidebar-h3').keypress(function(event){

    var target  = $(this).attr('for');
    var input   = $('#' + target);
    var control = $(this);
    var div     = $(this).next('.sidebar-ul-div');

    var keycode = (event.keyCode ? event.keyCode : event.which);

    // if closed and keyboard ENTER...
    // - open
    // - make each topic link tab accessible
    if( keycode == '13' && control.attr('aria-expanded') == 'false' ){

      input.prop('checked', true);
      control.attr('aria-expanded', 'true');

      div.find('[href]').each(function(){
        $(this).attr('tabindex', 0);
      });
    }

    // if open and keyboard ENTER ...
    // - close
    // - make each topic link tab inaccessible
    else if( keycode == '13' && control.attr('aria-expanded') == 'true' ){

      input.prop('checked', false);
      control.attr('aria-expanded', 'false');

      div.find('[href]').each(function(){
        $(this).attr('tabindex', -1);
      });
    }

  }); // END Tab-Accessible Accordions



  // 1b. Mouse-Accessible Accordions
  $('.sidebar-h3').on('click', function(){

    var target  = $(this).attr('for');
    var input   = $('#' + target);
    var control = $(this);
    var div     = $(this).next('.sidebar-ul-div');

    if ( control.attr('aria-expanded') == 'false' ){

      control.attr('aria-expanded', 'true');

      div.find('[href]').each(function(){
        $(this).attr('tabindex', 0);
      });
    }

    else if ( control.attr('aria-expanded') == 'true' ) {

      control.attr('aria-expanded', 'false');

      div.find('[href]').each(function(){
        $(this).attr('tabindex', -1);
      });
    }

  }); // END Mouse-Accessible Accordions



  // 2. No widows in titles
  $('.archive-h2').each(function(){

    var title = $(this).text();
    var lastword = title.split(" ").slice(-1);
    var allbutlastword = title.replace(lastword, '');


    var icon     = $(this).next('.picture-div');
    if (icon !== '[object Object]' && icon.length !== 0) {
      var iconhtml = icon.html();
      icon.remove();
    }
    else { var iconhtml = ''; }


    $(this).html(allbutlastword);
    $(this).after('<div class="nowrap"><h2 class="archive-h2">' + lastword + '</h2>&nbsp;' + iconhtml + '</div>');

  }); // END No Widows



  // 3. Show Advanced Search form drawer
  $('#advanced-search-trigger [href]').on('click', function(){
    var trigger = $('#advanced-search-trigger');

    if( trigger.hasClass('-show')) {
      trigger.removeClass('-show');
    }
    else {
      trigger.addClass('-show');
    }
  }); // END Advanced Search form drawer



});



// 4. Define loadpage()
function loadpage() {
  alert('i cahnged');
}
