// pages/historyDetail/historyDetail.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
        isJoined: false,    //默认未加入flag
        hideGiveUp: true,   
        hideGiveUpMsg: true,
        hasClickOn: true,     //默认已经打卡，打卡按钮不可用
        fid: -1,    
        uid: -1,
        flagInfo:{},
    },
    joinFlagFun:function(){
        if(this.data.fid!==-1){
            const token=wx.getStorageSync('token')
            const p = wx.cloud.callContainer({
                config: {
                  env: 'prod-6gbc6i9v491283c0', 
                },
                path: '/join-flag', 
                method: 'POST',
                data:{
                    'fid':this.data.fid
                },
                header: {
                    'authentication':token,
                    'X-WX-SERVICE': 'flagger',
                    "content-type": "application/json"
                },
                complete:(res)=>{
                    console.log(res);
                    if(res.statusCode===200){
                        this.setData({
                            isJoined: !this.isJoined
                        })
                        wx.showToast({
                            title: '已加入！',  
                            icon: 'success',  
                            duration: 1500  
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
                title: '请求失败',
                icon: 'error'
            })
        }
    },
    giveUpFlagFun:function(){
        this.setData({
            hideGiveUp: !this.data.hideGiveUp
        })
    },
    confirmGiveUpFun:function(){
        if(!this.data.hideGiveUp&&this.data.fid!==-1){
            const token=wx.getStorageSync('token')
            const p = wx.cloud.callContainer({
                config: {
                env: 'prod-6gbc6i9v491283c0', 
                },
                path: '/abandon-flag',
                method: 'POST',
                data:{
                    "fid": this.data.fid,
                },
                header: {
                    'authentication':token,
                    'X-WX-SERVICE': 'flagger',
                    "content-type": "application/json"
                },
                success:(res)=>{
                    if(res.statusCode===200){
                        wx.showToast({
                          title: res.data.message,
                        })
                        if(this.data.isJoined){
                            this.setData({
                                isJoined: !this.data.isJoined
                            })
                        }
                        
                        this.setData({
                            hideGiveUp: !this.data.hideGiveUp
                        })
                        this.setData({
                            hideGiveUpMsg: !this.data.hideGiveUpMsg
                        })
                    }
                    else{
                        wx.showToast({
                            title: '请求失败',
                            icon: 'error'
                        })
                        this.setData({
                            hideGiveUpMsg: !this.data.hideGiveUpMsg
                        })
                    }
                },
                fail:(res)=>{
                    console.log(res);
                    this.setData({
                        hideGiveUpMsg: !this.data.hideGiveUpMsg
                    })
                }
            });
        }
        else{
            this.setData({
                hideGiveUpMsg: !this.data.hideGiveUpMsg
            })
            wx.navigateBack({
              delta: 0,
            })
        }
    },
    clickOnFun:function(){
        if(!this.data.hasClickOn){
            const token=wx.getStorageSync('token')
            const p = wx.cloud.callContainer({
                config: {
                env: 'prod-6gbc6i9v491283c0', 
                },
                path: '/doing-flag',
                method: 'POST',
                data:{
                    "fid": this.data.fid,
                },
                header: {
                    'authentication':token,
                    'X-WX-SERVICE': 'flagger',
                    "content-type": "application/json"
                },
                success:(res)=>{
                    if(res.statusCode===200){
                        wx.showToast({
                          title: res.data.message,
                        })
                        this.setData({
                            hasClickOn:true
                        })
                    }
                    else{
                        wx.showToast({
                            title: '请求失败',
                            icon: 'error'
                        })
                    }
                },
                fail:(res)=>{
                    console.log(res);
                }
            });
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    // 判断是否打卡的函数：
    flaggedTodayFun(members){
        const app=getApp()
        for(let i=0;i<members.length;i++){
            if(app.globalData.userUID==members[i].uid){
                this.setData({
                    hasClickOn:members[i].flagged_today
                })
            }
        }
    },
    onLoad: function (options) {
        this.setData({
            fid: parseInt(options.fid),
            uid: app.globalData.userUID
        })
        console.log(this.data.uid)
        const token=wx.getStorageSync('token')
        const p = wx.cloud.callContainer({
            config: {
              env: 'prod-6gbc6i9v491283c0', 
            },
            path: '/flaginfo',
            method: 'POST',
            data:{
                'fid':this.data.fid
            },
            header: {
                'authentication':token,
                'X-WX-SERVICE': 'flagger',
                "content-type": "application/json"
            },
            complete:(res)=>{
                console.log(res);
                if(res.statusCode===200){
                    this.setData({
                        flagInfo:res.data,
                        isJoined: res.data.is_member,
                    })
                    this.flaggedTodayFun(res.data.flagger_member)
                }
                else{
                    wx.showToast({
                        title: '请求失败',
                        icon: 'error'
                    })
                }
            }
        });
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