jQuery(document).ready(function(){
    var apps = [
        {name:"Prowlarr", port:9696},
        {name:"Sonarr", port:8989},
        {name:"Bazarr", port:6767},
        {name:"Radarr", port:7878},
        {name:"Jellyseerr", port:5055},
        {name:"Jellyfin", port:8096},
        {name:"Transmission", port:9091}
    ];
    var url = window.location;
    
    apps.forEach(element => {
        var btn = '<a href="'+url+':'+element.port+'"><button type="button" class="btn btn-dark m-2">'+element.name+'</button></a>';
        jQuery('#container').append(btn);
    });
});
