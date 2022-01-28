// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
        isFold: true,
        flagObjArr:[
            {
                "fid": 123, 
                "flagger_title":"阅读《肖申克的救赎》",
                "finished_num":34, 
                "flagger_progress":"23/180", 
                "finished_avatar_url":["url1","url2","url3","url4","url5"] 
            },
            {
                "fid": 124, 
                "flagger_title":"title",
                "finished_num":4, 
                "flagger_progress":"9/30", 
                "finished_avatar_url":["url1","url2"] 
            },
        ],
        doneFlagObjArr:[
            {
                "fid": 123, 
                "flagger_title":"阅读《肖申克的救赎》",
                "finished_num":34, 
                "flagger_progress":"359/360", 
                "finished_avatar_url":["url1","url2","url3","url4","url5"] 
            },
            {
                "fid": 124, 
                "flagger_title":"title",
                "finished_num":4, 
                "flagger_progress":"1/7", 
                "finished_avatar_url":["url1","url2"] 
            },
        ],
    },
    makeFlag: function(){
        wx.navigateTo({
          url: '/pages/makeFlag/makeFlag',
        })
    },
    foldFun:function(){
        this.setData({
            isFold: !this.data.isFold
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