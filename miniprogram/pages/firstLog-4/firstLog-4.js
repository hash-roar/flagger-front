// pages/firstLog-4/firstLog-4.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hideInputFlag: true,
        addOwnFlag: "自定义",
        clear: '',
        isChecked:false,

        interestedtag:[],
        createstag:'',
    },
    inputFlagFun: function(){
        this.setData({
            hideInputFlag: !this.data.hideInputFlag
        })
        if(this.data.addOwnFlag==='自定义'){
            this.setData({
                isChecked:false
            })
        }
        else{
            this.setData({
                isChecked:true
            })
        }
    },
    inputFun: function(e){
        if(e.detail.value.replace(/\s+/g, "").length>0){
            this.setData({
                addOwnFlag: e.detail.value,
                isChecked:true
            })
        }
        else{
            this.setData({
                addOwnFlag: "自定义",
                clear: '',
                isChecked:false
            })
        }
    },
    selectFlagFun:function(e){
        let index=e.detail.value.indexOf(this.data.addOwnFlag)
        if(index!=-1){
            e.detail.value.splice(index,1)
        }
        this.setData({
            interestedtag:e.detail.value
        })
        
    },
    next4Fun:function(){
        if(this.data.isChecked&&this.data.addOwnFlag!=='自定义'){
            app.firstLogData.createstag=this.data.addOwnFlag
        }
        else{
            app.firstLogData.createstag=""
        }
        app.firstLogData.interestedtag=this.data.interestedtag
    },
    skipFun:function(){
        app.firstLogData.createstag=""
        app.firstLogData.interestedtag=[]
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