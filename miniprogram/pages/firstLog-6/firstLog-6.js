// pages/firstLog-6/firstLog-6.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        socialtendency:0,
    },
    radioFun:function(e){
        this.setData({
            socialtendency:parseInt(e.detail.value)
        })
    },
    next6Fun:function(){
        app.firstLogData.socialtendency=this.data.socialtendency
        const token=wx.getStorageSync('token')
        const p = wx.cloud.callContainer({
            config: {
              env: 'prod-6gbc6i9v491283c0', 
            },
            path: '/addinfo', 
            method: 'POST', 
            data:app.firstLogData,
            header: {
                'authentication':token,
                'X-WX-SERVICE': 'flagger',
                "content-type": "application/x-www-form-urlencoded"
            },
            success:(res)=>{
                console.log(res.data);
            },
            fail:(res)=>{
                console.log(res);
            }
        });
    },
    skipFun:function(){
        app.firstLogData.socialtendency=0
        console.log(app.firstLogData);
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