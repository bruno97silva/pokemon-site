$(document).ready(() => {
    $(".lista-items .menu-item").click((function(t) {
        $(this).parent().hasClass("active") ?
            $(this).parent().removeClass("active") :
            ($("ul.menu-lista").parent().removeClass("active"), $(this).parent().addClass("active"))
    }))

    $(".categoria-item .hover-menu .lista-menu-itens").on("mouseenter", (function() {
        var t = $(this).data("menuid");
        $(".nav-desktop").find(".menu-categoria-item").stop().fadeOut('fast');
        $("#".concat(t)).stop().fadeIn();
    }));

    $('#sidebarCollapse').click(function() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
    $(".categoria-item.has-subitens").on("mouseenter", (function() {
        $("#header").addClass("overlay-priority"), $("body").find(".overlay").addClass("active"), $(this).addClass("active")
    })), $(".categoria-item.has-subitens").on("mouseleave", (function() {
        $("#header").removeClass("overlay-priority"), $("body").find(".overlay").removeClass("active"), $(this).removeClass("active"), $(".nav-desktop").find(".menu-categoria-item").fadeOut()
    }))

    $(".categoria-item.has-subitens").on("mouseenter", (function() {

        $("#header").addClass("overlay-priority"), $("body").find(".overlay").addClass("active"), $(this).addClass("active")
    })), $(".categoria-item.has-subitens").on("mouseleave", (function() {

        $("#header").removeClass("overlay-priority"), $("body").find(".overlay").removeClass("active"), $(this).removeClass("active"), $(".nav-desktop").find(".menu-categoria-item").fadeOut()
    })), $(".filters-first-level-item").click((function(t) {

        $(this).hasClass("active") ? ($(this).removeClass("active"), $(this).next(".list-group").removeClass("active"), $(".filtros-menu-mobile div").removeClass("active")) : ($(".filters-first-level-item").removeClass("active"), $(".list-group").removeClass("active"), $(".filtros-menu-mobile div").removeClass("active"), $(this).parent().addClass("active"), $(this).addClass("active"), $(this).parent().addClass("active"), $(this).next(".list-group").addClass("active"))
    }))

})