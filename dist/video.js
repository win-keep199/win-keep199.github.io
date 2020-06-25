const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    preload: 'auto',
    logo: '/uploads/av.jpg',
    volume: 0.7,
    mutex: true,
    video: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
        //pic: 'dplayer.png',
        //thumbnails: 'thumbnails.jpg',
        type: 'auto',
    },
    subtitle: {
        url: 'https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.vtt',
        type: 'webvtt',
        fontSize: '20px',
        bottom: '10%',
        color: '#b7daff',
    },
    // danmaku: {//弹幕
    //     id: '9E2E3368B56CDBB4',
    //     api: 'https://api.prprpr.me/dplayer/',
    //     token: 'tokendemo',
    //     maximum: 1000,
    //     addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
    //     user: 'DIYgod',
    //     bottom: '15%',
    //     unlimited: true,
    // },
    contextmenu: [
        {
            text: '关注',
            link: 'https://space.bilibili.com/22119869',
        },
    ],
    highlight: [
        {
            time: 20,
            text: '这是第 20 秒',
        },
        {
            time: 120,
            text: '这是 2 分钟',
        },
    ],
},
);