// pages/logIn/logIn.js
const app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        allSearchFlags:[] 
      },
    onLoad:function(){
        this.setData({
            allSearchFlags : app.globalData.searchSuccessFlags.data
        })
        console.log("allSearchFlags");
        console.log(this.data.allSearchFlags);
    },
    onShareAppMessage: function () {
    
    }
})