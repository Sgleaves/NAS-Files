jQuery(document).ready(function () {
  var apps = [
    { name: 'Prowlarr', port: 9696 },
    { name: 'Sonarr', port: 8989 },
    { name: 'Bazarr', port: 6767 },
    { name: 'Radarr', port: 7878 },
    { name: 'Jellyseerr', port: 5055 },
    { name: 'Jellyfin', port: 8096 },
    { name: 'Transmission', port: 9091 },
    { name: 'QNAP', port: 8080, ip: '192.168.1.8' },
  ];
  var url = window.location.hostname;

  apps.forEach((element) => {
    var host = url;
    if (element.ip) host = element.ip;
    var btn =
      '<li class="nav-item"><a id="' +
      element.name +
      '" class="nav-link" target="_blank" data-src="http://' +
      host +
      ':' +
      element.port +
      '">' +
      element.name +
      '</a></li>';
    jQuery('#container').append(btn);
  });

  var anchors = document.querySelectorAll('.nav-link');
  var iframe = document.getElementsByTagName('iframe')[0];
  anchors.forEach(function (el) {
    var link = el.dataset.src;
    el.addEventListener('click', function () {
      iframe.setAttribute('src', link);
    });
  });
});
