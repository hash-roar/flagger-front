// components/checkbox/checkbox.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        arr: Array
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
        checkboxFun: function(e){
            let index=e.target.dataset.index
            let items=this.properties.arr
            items[index].checked = !(items[index].checked);
            this.setData({
                arr: items
            })
        }
    }
})
