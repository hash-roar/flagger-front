// pages/logIn/logIn.js
const app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
        studentID: '',
        password: '',
        loginBtnDisable: true,
        userNickName: "微信用户",
        userAvatarUrl:"../../images/default-portrait.png"
    },
    PostStudentIDFun:function(){
        const token=wx.getStorageSync('token')
        wx.cloud.callContainer({
            config: {
              env: 'prod-6gbc6i9v491283c0', 
            },
            path: '/add-student-id', 
            method: 'POST',
            data:{
                "student_id":this.data.studentID,
                "password":"",
                "avatar_url":this.data.userAvatarUrl,
                "nickname":this.data.userNickName
            },
            header: {
                'authentication':token,
                'X-WX-SERVICE': 'flagger',
                "content-type": "application/json"
            },
            complete:(res)=>{
                if(res.statusCode===200){
                    wx.showToast({
                      title: res.data.message,
                    })
                    wx.navigateTo({
                        url: '/pages/firstLog-1/firstLog-1',
                    })
                }
                else{
                    wx.showToast({
                        title: res.data.error,
                        icon: 'error'
                    })
                }
            }
        });
    },
    studentLogFun:function(){
        // app.firstLogData.student_id=this.data.studentID 直接post学号
        
        wx.getUserProfile({
          desc: '请求获取您的头像、昵称',
          success:(res)=>{
            //   console.log(res.userInfo);
              this.setData({
                  userNickName:res.userInfo.nickName,
                  userAvatarUrl:res.userInfo.avatarUrl
              })
              
              this.PostStudentIDFun();
          },
          fail:(res)=>{
              wx.showToast({
                title: '授权失败',
                icon: 'error'
              })
          }
        })

        
        
    },
    inputID:function(e){
        const checkID=/^[A-Z]\d{9}/
        if(e.detail.value.length==10&&checkID.test(e.detail.value)){
            this.setData({
                studentID: e.detail.value,
                loginBtnDisable: false
            })
        }
        else{
            this.setData({
                loginBtnDisable: true
            })
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
    onReady: function () {

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