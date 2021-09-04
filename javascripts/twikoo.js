;(function () {
    if (window.aomori.twikoo && window.aomori.twikoo.enable) {
        twikoo.init({
            envId: window.aomori.twikoo.envId,
            el: '#tcomment',
            // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
            // path: 'window.location.pathname', // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
          })
    }
})()