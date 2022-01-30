// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    // 申请拿到发现页面tag栏的标签
    toGetTags(){
        const res = wx.cloud.callContainer({
            config: {
              env: 'prod-6gbc6i9v491283c0',
            },
            path: '/get-intre_tags',
            method: 'GET',
            header: {
              'X-WX-SERVICE': 'flagger'
            },
            success: function (result) {
                if (result.statusCode == 200) {
                    console.log(result.data.all_tags);
                }
            }
          });
    },
    // 拿到所有任务
    toGetFlags(){
        console.log("拿到flag");
        const res = wx.cloud.callContainer({
            config: {
              env: 'prod-6gbc6i9v491283c0',
            },
            path: '/get-flags',
            method: 'GET',
            header: {
              'X-WX-SERVICE': 'flagger'
            },
            success: function (result) {
                console.log("搜寻flag");
                console.log(result);
                //发现广场没有flag
                if (result.statusCode === 403) {
                    console.log("发现广场暂无flag");
                    // wx.showModal({
                    //     title: '提示',
                    //     content: '发现广场暂无flag，可以先去创建flag哦',
                    //   })
                }
                // 发现广场有flag
                else{
                    console.log("有flag");
                }
            }
          });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // this.toGetTags();
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
        this.toGetTags();
        this.toGetFlags();
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
