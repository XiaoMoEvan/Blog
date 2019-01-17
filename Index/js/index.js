/**
 * 导航设置
 *  */

let _$moreThis = null;
$(".index-nav-more").click(function() {
    _$moreThis = $(this);
    let _$thisParent = _$moreThis.parent();
    let _$navItemMore = _$thisParent.find(".index-nav-items-more");
    let _hasClass = _$navItemMore.hasClass("index-nav-items-more-hide");
    if (_hasClass) {
        _$navItemMore.removeClass("index-nav-items-more-hide").addClass("index-nav-items-more-show");
        _$moreThis.css({
            "transform": "rotate(180deg)"
        });
        //设置二级导航的宽度
        _$thisParent.find(".index-nav-items-more").css({
            "min-width": _$thisParent.width() + 60
        });
        bindCancelItemsMoreShow();

    } else {
        _$navItemMore.removeClass("index-nav-items-more-show").addClass("index-nav-items-more-hide");
        _$moreThis.css({
            "transform": "rotate(0deg)"
        });
    }
})

var bindCancelItemsMoreShow = function() {
    $(".index-nav-items-more-show").off("mouseleave").on("mouseleave", function() {
        $(this).removeClass("index-nav-items-more-show").addClass("index-nav-items-more-hide");
        _$moreThis.css({
            "transform": "rotate(0deg)"
        });
    })
}

let loginAndRegisterHtml = "<p>这里将会调用登录注册表单页面</p>";

var bindEvents = function() {
    //用户弹窗，用于显示登录注册界面
    $(".index-nav-user-info").off("click").on("click", function(e) {
        layer.open({
            title: "登录/注册",
            area: ['400px', '500px'],
            fixed: false, //不固定
            maxmin: true,
            scrollbar: false,
            btn: [],
            content: loginAndRegisterHtml
        });
    })
}
bindEvents();


// 初始化友情链接
var getIndexFriendLinks = function() {
    // $.ajax({
    //     url: "",
    //     type: "get",
    //     success: function(res) {
    //         //todo:
    //     }
    // })


    let _temp =
        '<li>' +
        ' <a href="javascript:" title="友情链接">' +
        '    <img class="friendLinksAvatar circle" src="images/friendLinks/link_0001.gif" alt="">' +
        '    <span>奇创云盟</span>' +
        '   </a>' +
        '</li>' +
        '<li>' +
        ' <a href="javascript:" title="友情链接">' +
        '    <img class="friendLinksAvatar circle" src="images/friendLinks/link_0002.jpg" alt="">' +
        '    <span>提拉米苏的呆猫</span>' +
        ' </a>' +
        '</li>';
    let _indexFriendLinksTemplate = _temp;
    for (let i = 7; i > 0; i--) {
        _indexFriendLinksTemplate += '<li>' +
            ' <a href="javascript:" title="友情链接">' +
            '    <img class="friendLinksAvatar circle" src="images/friendLinks/link_0001.gif" alt="">' +
            '    <span>奇创云盟' + i + '</span>' +
            '   </a>' +
            '</li>' +
            '<li>' +
            ' <a href="javascript:" title="友情链接">' +
            '    <img class="friendLinksAvatar circle" src="images/friendLinks/link_0002.jpg" alt="">' +
            '    <span>提拉米苏的呆猫' + i + '</span>' +
            ' </a>' +
            '</li>';;
    }
    $(".index-friendLinks-content").html(_indexFriendLinksTemplate);
}
getIndexFriendLinks();