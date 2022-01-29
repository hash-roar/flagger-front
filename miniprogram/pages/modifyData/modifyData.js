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
        preferFlagTime:[
            {
                id:0,
                value:"健身"
            },
            {
                id:1,
                value:"阅读"
            },
            {
                id:2,
                value:"学习"
            },
            {
                id:3,
                value:"其他"
            },
        ],
        preferEnviTime:[
            {
                id:0,
                value:"室内"
            },
            {
                id:1,
                value:"户外"
            },
        ],
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

    getBasicInfo(){
        wx.request({
          url: 'url',
          success:function(res){
              console.log("hello");
              //获取用户名并渲染
              this.setData({
                innerTextOne:{
                    type:String,
                    value:res.nickname
                }
              });
              //获取年级专业并渲染
              this.setData({
                ['innerTextTwo[0]'.value]:res.grade
              });
              this.setData({
                ['innerTextTwo[1]'.value]:res.major
              });
              //获取倾向Flag、环境选择、社交程度等信息渲染
          }
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.getBasicInfo();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
    choosePreferEnvironment(e)
    {
        const childUserTag = this.selectAllComponents('.userTagChild');
        console.log("userTag",childUserTag);
        console.log(preferEnviTime);
        for(let i = 4; i < 6; i++)
        {
            childUserTag[i].setData({
                ["innerText.value"]: 
                    this.data.preferEnviTime[i - 4].value,
               })
        }
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
        const childUserTag = this.selectAllComponents('.userTagChild');
        console.log("userTag",childUserTag);
        for(let i = 0; i < 4; i++)
        {
            childUserTag[i].setData({
                ["innerText.value"]: 
                    this.data.preferFlagTime[i].value,
               })
        }
        for(let i = 4; i < 6; i++)
        {
            childUserTag[i].setData({
                ["innerText.value"]: 
                    this.data.preferEnviTime[i - 4].value,
               })
        }
            

    },

    choosePreferContent(e)
    {
        let nowIndex = parseInt(e.currentTarget.dataset.index);
        console.log(nowIndex);
    },

    // 点击保存后触发
    saveModifyData(){
        console.log("保存");
        //发送post请求上传数据 记得在共享文档中添加并提醒zlf
        wx.request({
          url: 'url',
          method:"POST",
        })
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
