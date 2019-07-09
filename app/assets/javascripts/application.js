// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery/dist/jquery.js
//= require jquery_ujs
//= require jquery.remotipart
//= require bootstrap/dist/js/bootstrap.js
//= require chart.js/dist/Chart.min.js
//= require @coreui/coreui/dist/js/coreui.js
//= require @coreui/plugin-chartjs-custom-tooltips/dist/js/custom-tooltips.min
//= require select2/dist/js/select2.full
//= require_tree ./templates
//= require datatables.net/js/jquery.dataTables
//= require jquery.expander
//= require bootstrap-notify/bootstrap-notify.js
//= require bootstrap4-editable/bootstrap-editable.js
//= require_tree ./app

(function() {


  $.fn.editable.defaults.mode = 'inline';
  $.fn.editableform.buttons =
    '<button type="submit" class="btn btn-primary btn-sm editable-submit">'+
      '<i class="fa fa-fw fa-check"></i>'+
    '</button>'+
    '<button type="button" class="btn btn-default btn-sm editable-cancel">'+
      '<i class="fa fa-fw fa-times"></i>'+
    '</button>';

    // select2 bindings
    $(".select2-tag-multiple").select2({
      theme: 'bootstrap',
      tags: true
    });

    $(".select2-multiple, .select2-single").select2({
      theme: 'bootstrap'
    });


    var notifyRailsFlash;
    (notifyRailsFlash = function(){
      var notifyMessage = $('body').data('notifyMessage');
      var notifyClass   = $('body').data('notifyClass');
      switch(notifyClass){
        case 'error':
          Notification.error(notifyMessage);
          break;
        case 'info':
          Notification.info(notifyMessage);
          break;
        case 'success':
          Notification.success(notifyMessage);
          break;
      };
    })();

  });


