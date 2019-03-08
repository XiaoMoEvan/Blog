/**
 * 导航设置
 *  */

let _$moreThis = null;
$(".index-nav-more").click(function() {
    console.info("点击了");
    _$moreThis = $(this);
    let _$thisParent = _$moreThis.parent();
    let _$navItemMore = _$thisParent.find(".index-nav-items-more");
    let _isShow = _$navItemMore.hasClass("index-nav-items-more-show");
    if (!_isShow) {
        navItemMoreShowOrHide(_$moreThis, _$navItemMore, "show");
        //设置二级导航的宽度
        _$thisParent.find(".index-nav-items-more").css({
            "min-width": _$thisParent.width() + 60
        });
        bindCancelItemsMoreShow();

    } else {
        navItemMoreShowOrHide(_$moreThis, _$navItemMore, "hide");
    }
})

var bindCancelItemsMoreShow = function() {
    $(".index-nav-items-more-show").off("mouseleave").on("mouseleave", function() {
        navItemMoreShowOrHide(_$moreThis, $(this), "hide");
    })
}

/**控制首页导航下 二级子菜单的显示与隐藏，parentEle：具体的某个更多按钮或者全局，ele：具体子菜单导航，或者全局 type：是类型显示（show）或者隐藏（hide） */
var navItemMoreShowOrHide = function(parentEle, thisEle, type) {
    let _navMoreBtn = $(parentEle);
    let _navItemMore = $(thisEle);
    if (type === "show") {
        _navMoreBtn.css({
            "transform": "rotate(180deg)"
        });
        _navItemMore.stop().fadeIn();
        _navItemMore.addClass("index-nav-items-more-show");
    } else {
        _navMoreBtn.css({
            "transform": "rotate(0deg)"
        });
        _navItemMore.stop().fadeOut();
        _navItemMore.removeClass("index-nav-items-more-show");
    }
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

    for (let i = 1; i <= 20; i++) {
        $(".index-friendLinks-content").append('<li>' +
            ' <a href="javascript:" title="友情链接">' +
            '    <img class="friendLinksAvatar circle" src="images/friendLinks/userAvatar_' + fillZero(i) + '.jpeg" alt="">' +
            '    <span>友情链接（' + i + '）</span>' +
            '   </a>' +
            '</li>');
    }
    // $(".index-friendLinks-content").html(_indexFriendLinksTemplate);
}

/**数字位数不足两位补0 */
var fillZero = (num) => {
    return num < 10 ? "0" + num : num;
}

getIndexFriendLinks();




/***使用Vue导航切换设置 */

var routes = [{
    name: 'index',
    path: '/',
    components: {
        index: {
            template: `
            <div>
                <div class="index-content-left fillet">
                    这是用router-view加载的首页页面
                </div>
                <div class="index-content-right fillet">

                </div> 
            </div> 
         `
        }
    }
}, {
    name: 'personalDrip',
    path: '/personalDrip',
    components: {
        personalDrip: {
            template: `
                <div class="common-page" style="background:palevioletred;">
                    这是用router-view加载的个人点滴页面               
                </div>            
            `
        }
    }
}, {
    name: 'curriculumVitae',
    path: '/curriculumVitae',
    components: {
        curriculumVitae: {
            template: `
                <div class="common-page" style="background:orange;">
                    这是用router-view加载的个人简历页面
                </div>
            `
        }
    }
}, {
    name: 'friendshipLink',
    path: '/friendshipLink',
    components: {
        friendshipLink: {
            template: `
                <div class="common-page" style="background:yellowgreen;">
                    这是用router-view加载的友情链接
                </div>
             `
        }
    }
}, {
    name: 'about',
    path: '/about',
    components: {
        about: {
            template: `
                <div class="common-page" style="background:#00a0e9;">
                    这是用router-view加载的关于本站内容                  
                </div>
            `
        }
    }
}]

const router = new VueRouter({
    routes: routes,
})

var allianceApp = new Vue({
    el: '#alliance-app',
    router: router
})