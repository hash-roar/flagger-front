// components/radio.js
Component({
    option:{
		styleIsolation: 'apply-shared'
	},
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
        radioFun: function(e){
            let items=this.properties.arr
            let currentval = e.target.dataset.value;
            for (let i = 0; i < items.length; i++) {
                if (currentval==items[i].value) {
                    items[i].checked = true;
                } else {
                    items[i].checked = false;
                }
            }
            this.setData({
                arr: items
            })
        }
    }
})
