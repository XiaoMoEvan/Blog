$(".index-nav-more").click(function() {
    let _$this = $(this);
    let _$thisParent = _$this.parent();
    let _$navItemMore = _$thisParent.find(".index-nav-items-more");

    let _hasClass = _$navItemMore.hasClass("index-nav-items-more-hide");
    if (_hasClass) {
        _$navItemMore.removeClass("index-nav-items-more-hide").addClass("index-nav-items-more-show");
        //设置二级导航的宽度
        _$thisParent.find(".index-nav-items-more").css({
            "min-width": _$thisParent.width() + 60
        });
        bindCancelItemsMoreShow();

    } else {
        _$navItemMore.removeClass("index-nav-items-more-show").addClass("index-nav-items-more-hide");
    }
})

var bindCancelItemsMoreShow = function() {
    $(".index-nav-items-more-show").off("mouseleave").on("mouseleave", function() {
        $(this).removeClass("index-nav-items-more-show").addClass("index-nav-items-more-hide");
    })
}

// $("body").css({
//     height: $(window).height() + 500
// })