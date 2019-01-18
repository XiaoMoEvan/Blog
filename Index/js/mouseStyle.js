/**鼠标样式路径 */
var _mouseStylePath = "url(../images/cursors/cursor_001.cur), auto!important;"

/**设置鼠标样式 */
function setMouseStyle(type) {
    $("body").css({
        cursor: _mouseStylePath
    })
}
// setMouseStyle();