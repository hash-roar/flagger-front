// components/my-flag/my-flag.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        flagIsDone: {
            type: Boolean,
            value: false
        },
        flagObj:Object
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        
        flagDetailFun:function(e){
            wx.navigateTo({
              url: '/pages/flagDetail/flagDetail?fid='+this.data.flagObj.fid,
            })
        },
        clockOnFun:function(){
            const token=wx.getStorageSync('token')
            const p = wx.cloud.callContainer({
                config: {
                env: 'prod-6gbc6i9v491283c0', 
                },
                path: '/doing-flag',
                method: 'POST', 
                data:{
                    "fid": this.data.flagObj.fid,
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
                    }
                    else{
                        wx.showToast({
                            title: res.data.error,
                            icon: 'error'
                        })
                    }
                },
                fail:(res)=>{
                    console.log(res);
                }
            });
        }
    }
})
