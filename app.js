$("#leftSide").on("mouseenter",function(){
    $(".layerLeft").addClass("hovered");
    $(this).on("mouseleave",function(){
        $(".layerLeft").removeClass("hovered");
    })
});

$("#rightSide").on("mouseenter",function(){
    $(".layerRight").addClass("hoveredRight");
    $(this).on("mouseleave",function(){
        $(".layerRight").removeClass("hoveredRight");
    })
});



