// pages/historyDetail/historyDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isJoined: false,
        hideGiveUp: true,
        hideGiveUpMsg: true
    },
    joinFlagFun:function(){
        this.setData({
            isJoined: !this.isJoined
        })
        wx.showToast({
            title: '已加入！',  
            icon: 'success',  
            duration: 1500  
        })
    },
    giveUpFlagFun:function(){
        this.setData({
            hideGiveUp: !this.data.hideGiveUp
        })
    },
    confirmGiveUpFun:function(){
        if(!this.data.hideGiveUp){
            this.setData({
                hideGiveUp: !this.data.hideGiveUp
            })
        }
        if(this.data.isJoined){
            this.setData({
                isJoined: !this.data.isJoined
            })
        }
        this.setData({
            hideGiveUpMsg: !this.data.hideGiveUpMsg
        })
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