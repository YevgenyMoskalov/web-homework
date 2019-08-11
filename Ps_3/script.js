$(document).ready(function () {
    let icons = new Map();
    let wallpaper = new Map();
    const $tanks = [
        {
            name: "XM551 Sheridan",
            icon: "https://ru-wotp.wgcdn.co/dcont/tankopedia_images/a116_xm551/a116_xm551_image_resized.png",
            wallpaper: "images/wallpaper/maxresdefault.jpg"
        },
        {
            name: "Maus",
            icon: "https://ru-wotp.wgcdn.co/dcont/tankopedia_images/g42_maus/g42_maus_image_resized.png",
            wallpaper: "images/wallpaper/Maus_render_1.jpg"
        },
        {
            name: "Grille 15",
            icon: "https://ru-wotp.wgcdn.co/dcont/tankopedia_images/g121_grille_15_l63/g121_grille_15_l63_image_resized.png",
            wallpaper: "images/wallpaper/SPG_World_of_Tanks_Rhm_Borsig_Waffentrager_Grille_521888_1920x1080.jpg"
        },
        {
            name: "Kranvagn",
            icon: "https://ru-wotp.wgcdn.co/dcont/tankopedia_images/s16_kranvagn/s16_kranvagn_image_resized.png",
            wallpaper: "images/wallpaper/Kranvagn_render_3.jpg"
        },
        {
            name: "FV217 Badger",
            icon: "https://ru-wotp.wgcdn.co/dcont/tankopedia_images/gb92_fv217/gb92_fv217_image_resized.png",
            wallpaper: "images/wallpaper/FV217_Badger_art_1.jpg"
        },
        {
            name: "Bat.-Châtillon 25 t",
            icon: "https://ru-wotp.wgcdn.co/dcont/tankopedia_images/f18_bat_chatillon25t/f18_bat_chatillon25t_image_resized.png",
            wallpaper: "images/wallpaper/Bat.-Châtillon_25_t_art_9.jpg"
        },
        {
            name: "T110E5",
            icon: "https://ru-wotp.wgcdn.co/dcont/tankopedia_images/a69_t110e5/a69_t110e5_image_resized.png",
            wallpaper: "images/wallpaper/wot-art-t110e5.jpg"
        },
        {
            name: "Jagdpanzer E 100",
            icon: "https://ru-wotp.wgcdn.co/dcont/tankopedia_images/g72_jagdpz_e100/g72_jagdpz_e100_image_resized.png",
            wallpaper: "images/wallpaper/rabstol_net_world_of_tanks_33.jpg"
        }];

    const $select = $("<ul>", {id: "newSelect"});

    $tanks.forEach(function (tank) {
        let name = tank.name;
        icons.set(name, tank.icon);
        wallpaper.set(name, tank.wallpaper);
        const $text = $("<li>", {id: name, class: "tank", text: name});
        $text.css({
            'background-image': 'url(' + tank.icon + ')',
            'background-repeat': 'no-repeat',
        });
        $select.append($text);
    });
    $select.appendTo("#mySelect");
    $select.hide();

    $("#item-Selection").on("click", function (event) {
        event.stopPropagation();
        $select.stop().slideToggle();
    });

    $(".tank").on("click", function () {
        $select.slideUp();
        const content = $(this).html();
        $("#item-Selection").html(content);
        $("#item-Selection").css({'background-image': 'url(' + icons.get(content) + ')'});
        $('body').css({'background-image': 'url(' + wallpaper.get(content) + ')'});
        console.log("Ok");
    })
});