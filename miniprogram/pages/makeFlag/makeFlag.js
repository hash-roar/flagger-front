// pages/makeFlag/makeFlag.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // sortBig: [{value:"运动",checked:true},{value:"阅读"},{value:"学习"},{value:"其他"}],
        sortSmall: [{value:'健身',checked:true},{value:'减脂'},{value:'四级'},{value:'六级'},{value:'羽毛球'},{value:'篮球'},{value:'网球'},{value:'足球'},{value:"排球"},{value:"乒乓球"},{value:"公益"},{value:"脱单"},{value:"学习"}],
        pplNum: [{id:1,value:"3 ~ 5",checked:true},{id:2,value:"5 ~ 10"},{id:3,value:"10 ~ 20"},{id:0,value:"无限制"}],
        grade: [{id:1, value:'本科一', checked:true},{id:2, value:'本科二', checked:true},{id:3, value:'本科三'},{id:4, value:'本科四'},{id:5, value:'研一'},{id:6, value:'研二'},{id:7, value:'研三'},{id:8, value:'博士'}],
        cycle: [{id:7,value:'7天',checked:true},{id:14,value:'14天'},{id:21,value:'21天'},{id:30,value:'30天'},{id:60,value:'60天'},{id:90,value:'90天'},{id:180,value:'180天'},{id:360,value:'360天'}],
        Frequency: [{id:1,value:'1',checked:true},{id:2,value:'2'},{id:3,value:'3'},{id:4,value:'4'},{id:5,value:'5'},{id:6,value:'6'},{id:7,value:'7'},],

        statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
        addSortActive: false,
        addCycleActive: false,
        cycleNum: '',
        hasNum: false,

        "title":"我的flag",
        "tag":"健身",
        "created_tag":"", 
        "max_group_member":1 , 
        "join_auth":[1,2], 
        "end_time":7 ,
        "frequency":1, 
        "announcement":""
    },

    addSortFun:function(e){
        if(e.detail.value.replace(/\s+/g, "").length>0){
            let item=this.data.sortSmall
            for(let i=0;i<item.length;i++){
                item[i].checked=false
            }
            this.setData({
                addSortActive: true,
                sortSmall: item,
                created_tag: e.detail.value,
                tag:''
            })
        }
        else{
            let item=this.data.sortSmall
            item[0].checked=true
            this.setData({
                addSortActive: false,
                sortSmall: item,
                created_tag:'',
                tag:"健身"
            })
        }
    },
    sortResultFun:function(e){
        this.setData({
            tag:e.detail.value,
            created_tag:''
        })
    },
    addCycleFun:function(e){
        if(e.detail.value.replace(/\s+/g, "").length>0){
            let item=this.data.cycle
            for(let i=0;i<item.length;i++){
                item[i].checked=false
            }
            this.setData({
                addCycleActive: true,
                cycle: item,
                cycleNum: e.detail.value,
                hasNum: true,
                end_time: parseInt(e.detail.value)
            })
        }
        else{
            let item=this.data.cycle
            item[0].checked=true
            this.setData({
                addCycleActive: false,
                cycle: item,
                cycleNum: '',
                end_time:7,
                hasNum: false
            })
        }
    },
    cycleResultFun:function(e){
        this.setData({
            end_time:parseInt(e.detail.id)
        })
    },
    pplNumResultFun:function(e){
        this.setData({
            max_group_member:parseInt(e.detail.id)
        })
    },
    gradeResultFun:function(e){
        let items=e.detail;
        let arr=[]
        for(let i=0;i<items.length;i++){
            if(items[i].checked){
                arr.push(parseInt(items[i].id))
            }
        }
        this.setData({
            join_auth:arr
        })
    },
    fqcResultFun:function(e){
        this.setData({
            frequency:parseInt(e.detail.id)
        })
    },
    confirmFun:function(){
        console.log(this.data.end_time);
        const token=wx.getStorageSync('token')
        const p = wx.cloud.callContainer({
            config: {
              env: 'prod-6gbc6i9v491283c0', 
            },
            path: '/create-flag',
            method: 'POST', 
            data:{
                'title':this.data.title,
                'tag':this.data.tag,
                'created_tag':this.data.created_tag,
                'max_group_member':this.data.max_group_member,
                'join_auth':this.data.join_auth,
                'end_time':this.data.end_time,
                'frequency':this.data.frequency,
                'announcement':this.data.announcement,
            },
            header: {
                'authentication':token,
                'X-WX-SERVICE': 'flagger',
                "content-type": "application/json"
            },
            complete:(res)=>{
                console.log(res);
                if(res.statusCode===200){
                    wx.showToast({
                      title: res.data.message,
                    })
                    wx.switchTab({
                      url: '/pages/index/index',
                    })
                }
                else{
                    wx.showToast({
                        title: res.data.error,
                        icon: 'error'
                    })
                }
            }
        });
    },
    nameFun:function(e){
        this.setData({
            title:e.detail.value
        })
    },
    announceFun:function(e){
        this.setData({
            announcement:e.detail.value
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