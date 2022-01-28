// pages/firstLog-5/firstLog-5.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        environment:0,
    },
    radioFun:function(e){
        this.setData({
            environment:parseInt(e.detail.value)
        })
    },
    next5Fun:function(){
        app.firstLogData.environment=this.data.environment
    }, 
    skipFun:function(){
        app.firstLogData.environment=0
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