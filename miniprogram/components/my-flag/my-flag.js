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
        arr:[1,2,3,4,5]

    },

    /**
     * 组件的方法列表
     */
    methods: {
        
        flagDetailFun:function(e){
            wx.navigateTo({
              url: '/pages/flagDetail/flagDetail',
            })
        },
        clockOnFun:function(){
            console.log('打卡')
        }
    }
})
