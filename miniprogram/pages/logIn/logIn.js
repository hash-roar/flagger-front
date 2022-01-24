// pages/logIn/logIn.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        studentID: '',
        password: '',
        loginBtnDisable: true,
    },
    touristLogFun:function(){
        wx.switchTab({
          url: '/pages/index/index',
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
    // inputPwd: function(e){
    //     this.setData({
    //         password: e.detail.value
    //     })
    //     const checkID=/^[A-Z]\d{9}/
    //     if(checkID.test(this.data.studentID)){
    //         this.setData({
    //             loginBtnDisable: false
    //         })
    //     }
    //     else{
    //         this.setData({
    //             loginBtnDisable: true
    //         })
    //     }
    // },

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