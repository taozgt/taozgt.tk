if(typeof(Friend)=='undefined'){
  // 这个地址按照你的地址填写，主要是为了防止pjax不加载重新刷新页面
  location.href='/link'
}
  document.querySelector('.flink').insertAdjacentHTML('afterbegin',"<div id='friend1'></div>")
  new Friend(obj)
 var obj = {
    // 容器选择器
    el: '#friend1',
    // 你的友链JSON 需配合项目 https://www.yuque.com/kdoc/bf/dcu90d 使用
    url: 'https://unpkg.zhimg.com/taozgt-myfriend/friend.json',
    // 按标签排序
    sort_container: ['博客框架及工具'],
    // 标签描述
    labelDescr: {
      博客框架及工具: "<span style='color:red;'>博客框架及工具</span>"
    },
    // 头像加载失败时显示的图像(可不填，有默认值)
    fail_img: '',
    // loading的图片
    loading_img: 'https://7.dusays.com/2021/03/04/d2d5e983e2961.gif'
  }
document.querySelector('.flink').insertAdjacentHTML('afterbegin',"<div id='friend1'></div>")
  new Friend(obj)