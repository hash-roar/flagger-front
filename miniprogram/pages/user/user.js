// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      complete:{
        type: Number,
        value:1,
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
    drawProgressbg: function(){
        // 使用 wx.createContext 获取绘图上下文 context
        var ctx = wx.createCanvasContext('canvasProgressbg',this)
        ctx.setLineWidth(15);// 设置圆环的宽度
        ctx.setStrokeStyle('#fff7ce'); // 设置圆环的颜色
        ctx.setLineCap('round') // 设置圆环端点的形状
        ctx.beginPath();//开始一个新的路径
        ctx.arc(110, 110, 92, 0, 2 * Math.PI, false);
        //设置一个原点(110,110)，半径为100的圆的路径到当前路径
        ctx.stroke();//对当前路径进行描边
        ctx.draw();
      },
      drawCircle: function (step){  
        var context = wx.createCanvasContext('canvasProgress',this);          
          context.setLineWidth(15);
          context.setStrokeStyle("#fdd245");
          context.setLineCap('round')
          context.beginPath(); 
          // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
          context.arc(110, 110, 92, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
          context.stroke(); 
          context.draw() 
      },
     onReady: function () {
         this.drawProgressbg(); 
         this.drawCircle(1); 
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