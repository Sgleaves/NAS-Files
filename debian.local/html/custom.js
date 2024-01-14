jQuery(document).ready(function () {
  var apps = [
    { name: 'Prowlarr', port: 9696, img: 'img/prowlarr.png' },
    { name: 'Sonarr', port: 8989, img: 'img/sonarr.png' },
    { name: 'Bazarr', port: 6767, img: 'img/bazarr.png' },
    { name: 'Radarr', port: 7878, img: 'img/radarr.png' },
    {name: 'Readarr', port: 8787, img:'img/readarr.png'},
    {name: 'Calibre', port: 8083, img:'img/calibre-web.png'},
    { name: 'Jellyseerr', port: 5055, img: 'img/jellyseerr.png' },
    { name: 'Jellyfin', port: 8096, img: 'img/jellyfin.png' },
    { name: 'Transmission', port: 9091, img: 'img/transmission.png' }
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
      '<li class="nav-item pe-auto" style="cursor:pointer;">' +
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
      '<img class="bi me-2" style="height:1em;width:1em;" src="' +
      element.img +
      '" alt="' +
      element.name +
      '"/>' +
      '</li>';

    jQuery('#container').append(btn);
  });

  var anchors = document.querySelectorAll('.nav-link');
  var iframe = document.getElementsByTagName('iframe')[0];
  anchors.forEach(function (el) {
    var link = el.dataset.src;
    if (el.dataset.newtab === 'true') return;
    el.addEventListener('click', function () {
      removeActiveLinks();
      iframe.setAttribute('src', link);
      iframe.classList.remove('d-none');
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
