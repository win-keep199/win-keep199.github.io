const ap = new APlayer({
  container: document.getElementById('aplayer'),
  listFolded: false,
  fixed: false,
  listMaxHeight: 90,
  lrcType: 3,
  audio: [
    {
      name: '勇气',
      artist: '棉子',
      url: 'http://music.163.com/song/media/outer/url?id=1411358329.mp3',
      cover: 'https://tse3-mm.cn.bing.net/th?id=OIP.1e3YVW946dgy5uJH764JXwHaFj&pid=Api&rs=1',
    },
    {
      name: "星星",
      artist: '张杰',
      url: 'http://music.163.com/song/media/outer/url?id=1399004693.mp3',
      cover: 'https://ae01.alicdn.com/kf/HTB1eE2mXPlxYKJjSZFuq6yYlVXay/Laeacco-Seaside-Wooden-View-Bridge-Platform-Scenic-Photography-Backgrounds-Vinyl-Custom-Photographic-Backdrops-For-Photo-Studio.jpg_640x640.jpg',
    },
    {
      name: '这就是爱吗',
      artist: '十豆',
      url: 'http://music.163.com/song/media/outer/url?id=1412242872.mp3',
      cover: 'http://pic6.nipic.com/20100427/4365846_231110093316_2.jpg',
    },
  ]
});
