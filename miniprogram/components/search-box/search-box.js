// components/my-flag/my-flag.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        flagIsDone: {
            type: Boolean,
            value: false
        }
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
        getWhatToSearch(){
            console.log("输出搜索内容");
        }
    }
})
