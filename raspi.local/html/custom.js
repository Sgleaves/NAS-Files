jQuery(document).ready(function () {
  var apps = [
    { name: 'Prowlarr', port: 9696, img: 'img/prowlarr.png' },
    { name: 'Sonarr', port: 8989, img: 'img/sonarr.svg' },
    { name: 'Bazarr', port: 6767, img: 'img/bazarr.png' },
    { name: 'Radarr', port: 7878, img: 'img/radarr.png' },
    { name: 'Jellyseerr', port: 5055, img: 'img/jellyseerr.png' },
    { name: 'Jellyfin', port: 8096, img: 'img/jellyfin.svg' },
    { name: 'Transmission', port: 9091, img: 'img/transmission.png' },
    { name: 'QNAP', port: 8080, ip: '192.168.1.8', img: 'img/qnap.png' },
  ];
  var url = window.location.hostname;

  apps.forEach((element) => {
    var host = url;
    var newTab = false;
    if (element.ip) {
      // If ip is not the same as the host then open new tab.
      host = element.ip;
      newTab = true;
    }
    var srcType = newTab ? 'href' : 'data-src';

    var btn =
      '<li class="nav-item">' +
      '<a id="' +
      element.name +
      '" class="nav-link" target="_blank" ' +
      srcType +
      '="http://' +
      host +
      ':' +
      element.port +
      '" data-newtab="' +
      newTab +
      '"' +
      '>' +
      '<img style="height:3em;width:3em;" src="' +
      element.img +
      '" alt="' +
      element.name +
      '"/>';
    '</a>' + '</li>';

    jQuery('#container').append(btn);
  });

  var anchors = document.querySelectorAll('.nav-link');
  var iframe = document.getElementsByTagName('iframe')[0];
  anchors.forEach(function (el) {
    var link = el.dataset.src;
    if (el.dataset.newtab) return;
    el.addEventListener('click', function () {
      removeActiveLinks();
      iframe.setAttribute('src', link);
      el.classList.add('active');
    });
  });

  function removeActiveLinks() {
    var allLinks = document.querySelectorAll('.nav-link');
    allLinks.forEach(function (i) {
      i.classList.remove('active');
    });
  }
});
