// pages/firstLog-2/firstLog-2.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selectEdu: [{id:1, value:'本科'},{id:2, value:'研究生'},{id:3, value:'博士'}],
        selectGrade:[[{id:1, value:'本科一'},{id:2, value:'本科二'},{id:3, value:'本科三'},{id:4, value:'本科四'}],[{id:5, value:'研一'},{id:6, value:'研二'},{id:7, value:'研三'}],[{id:8, value:'博士'}]],
        tempGrade:[{id:1, value:'本科一'},{id:2, value:'本科二'},{id:3, value:'本科三'},{id:4, value:'本科四'}],

        index:0
    },
    changeLeft: function(e){
        this.setData({
            tempGrade: this.data.selectGrade[e.detail.value[0]]
        })
        // .id
        // console.log(this.data.grade);
    },
    changeRight: function(e){  
        this.setData({
            index:e.detail.value[0]
        })
    },
    next2Fun:function(){
        app.firstLogData.grade=parseInt(this.data.tempGrade[this.data.index].id)
    },
    skipFun:function(){
        app.firstLogData.grade=0
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