Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: '获赞',
    }
  },
  data: {
    // 这里是一些组件内部数据
    
    isUserTap:{
      type:Boolean,
      value:true
    }
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){},
    handleUserTagTap:function(){
      let temIsTap = !this.data.isUserTap.value;
      this.setData({
        isUserTap:{
          type:Boolean,
          value:temIsTap
        }
      })
      console.log(this.data.isUserTap.value);
    }
  }
})
