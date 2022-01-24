// pages/makeFlag/makeFlag.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // sortBig: [{value:"运动",checked:true},{value:"阅读"},{value:"学习"},{value:"其他"}],
        sortSmall: [{value:'健身',checked:true},{value:'减脂'},{value:'四级'},{value:'六级'},{value:'羽毛球'},{value:'篮球'},{value:'网球'},{value:'足球'},{value:"排球"},{value:"公益"},{value:"乒乓球"},{value:"脱单"},{value:"学习"}],
        pplNum: [{value:"3 ~ 5",checked:true},{value:"5 ~ 10"},{value:"10 ~ 20"},{value:"无限制"}],
        grade: [{value:'大一',checked:true},{value:'大二',checked:true},{value:'大三'},{value:'大四'},{value:'研一'},{value:'研二'},{value:'研三'},{value:'博士生'},],
        cycle: [{value:'7天',checked:true},{value:'14天'},{value:'21天'},{value:'30天'},{value:'60天'},{value:'90天'},{value:'180天'},{value:'360天'}],
        frequency: [{value:'1',checked:true},{value:'2'},{value:'3'},{value:'4'},{value:'5'},{value:'6'},{value:'7'},],

        statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
        addSortActive: false,
        addCycleActive: false,
        cycleNum: '',
    },

    addSortFun:function(e){
        if(e.detail.value){
            let item=this.data.sortSmall
            for(let i=0;i<item.length;i++){
                item[i].checked=false
            }
            this.setData({
                addSortActive: true,
                sortSmall: item
            })
        }
        else{
            let item=this.data.sortSmall
            item[0].checked=true
            this.setData({
                addSortActive: false,
                sortSmall: item
            })
        }
    },
    addCycleFun:function(e){
        if(e.detail.value){
            let item=this.data.cycle
            for(let i=0;i<item.length;i++){
                item[i].checked=false
            }
            this.setData({
                addCycleActive: true,
                cycle: item,
                cycleNum: e.detail.value+'天'
            })
        }
        else{
            let item=this.data.cycle
            item[0].checked=true
            this.setData({
                addCycleActive: false,
                cycle: item,
                cycleNum: ''
            })
        }
    },
    cycleFun:function(e){
        console.log(e.detail)
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