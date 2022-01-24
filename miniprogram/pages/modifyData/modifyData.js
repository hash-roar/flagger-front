// pages/modifyData/modifyData.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        theTappedOne:{
            type:Number,
            value:-1
        },
        innerTextOne:[
            {
                id:0,
                value:"用户名"
            }
        ],
        innerTextTwo:[
            {
                id:0,
                value:"大一",
                flagClass:"data-grade-box"
            },
            {
                id:1,
                value:"产设",
                flagClass:"data-major-box"
            }
        ],
        innerTextThree:[
            {
                id:0,
                value:"倾向Flag",
                flagClass:"data-prefer-flag-box"
            },
            {
                id:1,
                value:"环境选择",
                flagClass:"data-environment-choosing-box"
            },
            {
                id:2,
                value:"社交程度",
                flagClass:"data-degree-box"
            }
    
        ],
        isTap: [
                {
                    type: Boolean,
                    value: false
                },
                {
                    type: Boolean,
                    value: false
                },
                {
                    type: Boolean,
                    value: false
                }
            ]
        

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

    choosePreferFlag(e){
        let nowIndex = parseInt(e.currentTarget.dataset.index);
        let temIsTap = !this.data.isTap[nowIndex].value;
        this.setData({
           ['isTap[' + nowIndex +'].value']:
                temIsTap
          })
        this.setData({
            theTappedOne:nowIndex.toString()
        })
        console.log(this.data.theTappedOne);
        console.log(this.data.isTap[nowIndex].value);
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