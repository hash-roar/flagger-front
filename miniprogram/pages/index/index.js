// pages/index/index.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
        isFold: true,
        flagObjArr:[
            
        ],
        doneFlagObjArr:[
            
        ],
    },
    makeFlag: function(){
        if(!app.globalData.ifIsVistor){
            wx.navigateTo({
                url: '/pages/makeFlag/makeFlag',
            })
        }
        else{
            wx.showToast({
              title: '请先登录',
              icon: 'error'
            })
        }
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
        //这里要写请求，再setData
        if(!app.globalData.ifIsVistor){
            const token=wx.getStorageSync('token')
            console.log(token);
            const p = wx.cloud.callContainer({
                config: {
                env: 'prod-6gbc6i9v491283c0', 
                },
                path: '/get-doing-flag', 
                method: 'GET',
                header: {
                    'authentication':token,
                    'X-WX-SERVICE': 'flagger',
                    "content-type": "application/json"
                },
                complete:(res)=>{
                    if(res.statusCode===200){
                        this.setData({
                            flagObjArr:res.data
                        })
                    }
                    else{
                        wx.showToast({
                            title: '请求失败',
                            icon: 'error'
                        })
                    }
                }
            });
            const q = wx.cloud.callContainer({
                config: {
                env: 'prod-6gbc6i9v491283c0', 
                },
                path: '/get-finished-flag', 
                method: 'GET',
                header: {
                    'authentication':token,
                    'X-WX-SERVICE': 'flagger',
                    "content-type": "application/json"
                },
                complete:(res)=>{
                    console.log(res);
                    if(res.statusCode===200){
                        this.setData({
                            doneFlagObjArr:res.data
                        })
                    }
                    else{
                        wx.showToast({
                            title: '请求失败',
                            icon: 'error'
                        })
                    }
                }
            });
        }
        else{
            wx.showToast({
                title: '请登录',
                icon: 'error'
            })
        }
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