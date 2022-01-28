
// pages/user/user.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    complete: {
      type: Number,
      value: 1,
    },
    nickName:{
      type: String,
      value: "用户名"
    },
    completeRate:{
      type:Number,
      value:0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  drawProgressbg: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg', this)
    ctx.setLineWidth(15); // 设置圆环的宽度
    ctx.setStrokeStyle('#fff7ce'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath(); //开始一个新的路径
    ctx.arc(110, 110, 92, 0, 2 * Math.PI, false);
    //设置一个原点(110,110)，半径为100的圆的路径到当前路径
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  },
  drawCircle: function (step) {
    var context = wx.createCanvasContext('canvasProgress', this);
    context.setLineWidth(15);
    context.setStrokeStyle("#fdd245");
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(110, 110, 92, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    context.stroke();
    context.draw()
  },
  //点击“我的”触发登录
  onTabItemTap: function (item) { 
    var p2;
    var p1 = new Promise((resolve, reject) => {
      wx.login({
        success(res) {
          if (res.code) {
            console.log(res);
            //发起网络请求
            resolve(res);
          }
        }
      })
    });
    p1.then((res) => {
      p2 = new Promise((resolve, reject) => {
        wx.request({
          url: 'https://example.com/onLogin',
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/json' //默认值
          },
          success: function () {
            console.log("登录成功后发送请求获取openid和session_key");
            resolve(res);
          },
          fail: function () {
            console.log('登录失败！' + res.errMsg)
          }
        })
      })
      p2.then(res => {
        console.log("获取openid和session_key后获取判断初次登录");
        wx.request({
          // 通过接口判断是否是第一次登录, 若是则获取用户授权，否则则不
          url: 'https://example.com/onLogin',
          success: function (res) {
            //若为初次登陆则跳转到新用户填写信息界面(firsttLog系列)
          },
          fail:function(){
            console.log("error");
          }
        })
      })
    })
    
  }, 

  //请求获取用户数据
  getUserInformation:function()
  {
    wx.request({
      // 请求用户信息
      url: 'https://example.com/onLogin',
      success: res=>{
        //获取用户信息，填充用户名
        this.setData({
          nickName:{
            type:String,
            value:res.nickname
          }
        })
        //获取用户荣誉值渲染
        const yellowBackChild = this.selectAllComponents('.yellow-back-honor');
        yellowBackChild.setData({
          innerText: {
            type: String,
            value: '荣誉' + res.credence_value,
          }
        })
        //获取用户flag完成度渲染页面
        let theCompleteRate = res.have_flaged / res.should_flag_sum;
        this.setData({
          completeRate:{
            type:Number,
            value:theCompleteRate
          }
        })
      }
    })
  },
  onReady: function () {
    this.getUserInformation();
    this.drawProgressbg();
    this.drawCircle(completeRate.value);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})