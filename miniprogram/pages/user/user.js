// pages/user/user.js
var app = getApp();
Page({
  data: {
    imageURLOne:app.globalData.imageURL,
    complete: {
      type: Number,
      value: 1,
    }, 
    nickName: {
      type: String,
      value: "用户名"
    },
    completeRate: {
      type: Number,
      value: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const notTheFirstTime = wx.cloud.callContainer({
      config: {
        env: 'prod-6gbc6i9v491283c0',
      },
      path: '/get-user-info',
      method: 'GET',
      header: {
        'X-WX-SERVICE': 'flagger'
      },
      success: result=> {
        //成功拿到数据以后用  用户昵称、头像、完成度、荣誉值 填充页面
        console.log(result);
        this.getUserInformation(result);
      }
    });
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
    var that = this;
    var p2;
    // 先判断一下是否是初次登陆

    var p = new Promise((resolve, reject) => {
      const ifTheFirstTime = wx.cloud.callContainer({
        config: {
          env: 'prod-6gbc6i9v491283c0',
        },
        path: '/isregistered',
        method: 'GET',
        header: {
          'X-WX-SERVICE': 'flagger'
        },
        success: function (result) {
          if (result.data.is_registered) {
            reject();
          } else {
            resolve();
          }
        }
      });
    })
    var p0 = p.then(()=>{
      return new Promise((resolve, reject) => {
        wx.showModal({
          title: '提示',
          content: '是否允许微信登陆',
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              resolve();
            } else if (res.cancel) {
              console.log('用户点击取消');
              wx.switchTab({
                url: '../index/index',
              })
            }
          } 
        })
      })
    });

    var p1 = p0.then(() => {
      return new Promise((resolve, reject) => {
        wx.login({
          success(res) {
            app.globalData.ifIsVistor = false;
            console.log("登录成功");
            if (res.code) {
              //发起网络请求
              resolve(res);
            }
          }
        })
      });
    }, () => {
      console.log("not the first time, get user information to draw");
      const notTheFirstTime = wx.cloud.callContainer({
        config: {
          env: 'prod-6gbc6i9v491283c0',
        },
        path: '/get-user-info',
        method: 'GET',
        header: {
          'X-WX-SERVICE': 'flagger'
        },
        success: function (result) {
          //成功拿到数据以后用  用户昵称、头像、完成度、荣誉值 填充页面
          that.getUserInformation(result);
        }
      });
    })
    var p2 = p1.then((res) => {
      let loginData = res.code;
      return new Promise((resolve, reject) => {
        wx.getUserInfo({
          desc: 'desc',
          success: function (res) {
            resolve(loginData, res);
          },
          fail: function (reason) {
            console.log(reason);
          }
        })
      })
    }, () => {
      console.log("not the first time to Log");
    })
    var p3 = p2.then((loginData, avatar_url) => {
      return new Promise((resolve, reject) => {
        console.log("发送用户相关数据到后台进行保存");
        const res = wx.cloud.callContainer({
          config: {
            env: 'prod-6gbc6i9v491283c0',
          },
          data: {
            code: loginData,
            avatar_url: "",
            nickname: "",
          },
          path: '/login',
          method: 'POST',
          header: {
            'X-WX-SERVICE': 'flagger'
          },
          success: function (result) {
            if (result.statusCode == 200) {
              app.globalData.userUID = result.data.uid;
              wx.setStorageSync('token', result.data.token);
              wx.redirectTo({
                url: '../logIn/logIn'
              })
            }
          }
        });
      })
    }, () => {
      console.log("not the first time to Log");
    })


  },

  //登陆后请求获取用户数据
  getUserInformation: function (userInformation) {

    let res = userInformation.data;
    //获取用户信息，填充用户名
    if (res.nickname) {
      this.setData({
        nickName: {
          type: String,
          value: res.nickname
        }
      })
    }
    //获取用户荣誉值渲染
    const yellowBackChild = this.selectAllComponents('.yellow-back-honor');
    yellowBackChild[0].setData({
      "innerText.value": '荣誉' + res.credence_value.toString()
    })
    //获取用户flag完成度渲染页面
    if (res.should_flag_sum) {
      let theCompleteRate = res.have_flaged / res.should_flag_sum;
      this.setData({
        completeRate: {
          type: Number,
          value: theCompleteRate
        }
      })
    }
    if (res.avatar_url) {
      //登录修改用户头像
      app.globalData.imageURL = res.avatar_url;
    }
    this.setData({
      imageURLOne: app.globalData.imageURL
    })
    console.log(app.globalData.imageURL);
  },

  onReady: function () {
    this.drawProgressbg();
    this.drawCircle(this.data.completeRate.value);
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
