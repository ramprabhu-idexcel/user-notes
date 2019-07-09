$(document).ready(function() {
  mk_clickable();
  notifyDefaults();
});

this.mk_clickable = function() {
  $(".clickable").click(function() {
    window.location = $(this).data('location');
  });
};

this.notifyDefaults = function() {
  return $.notifyDefaults({
    allow_dismiss: true,
    delay: 5000,
    mouse_over: 'pause',
    type: 'success',
    animate: {
      enter: 'animated slideInDown',
      exit: 'animated slideOutUp'
    },
    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert-pastel alert-{0}" role="alert">' + '<div class="text-left"><span data-notify="icon"></span> <span data-notify="title"><strong>{1}</strong></span></div>' + '<div class="text-right small"><button type="button" aria-hidden="true" class="close fa fa-times" data-notify="dismiss"></button></div>' + '<div data-notify="message"><span data-notify="message">{2}</span></div>' + '</div>'
  });
};


//= require bootstrap-notify/bootstrap-notify

var Notification = (function() {
  function _notification(icon, message, type, z_index) {
    $.notify({
      // options
      icon: icon,
      message: message,
    },{
      // settings
      type: type,
      animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutUp'
      },
      delay: 3000,
      z_index: z_index,
    });
  }

  function success(message, z_index = 1031) {
    _notification('fa fa-check-circle', message, 'success', z_index);
  }

  function error(message, z_index = 1031) {
    _notification('fa fa-warning', message, 'danger', z_index);
  }

  function info(message, z_index = 1031) {
    _notification('fa fa-info-circle', message, 'info', z_index);
  }

  function broadcastInfo(message, z_index = 1031) {
    if(isRequestingClient())
      return false
    info(message, z_index);
  }

  return {
    success: success,
    error: error,
    info: info,
    broadcastInfo: broadcastInfo
  };
})();

