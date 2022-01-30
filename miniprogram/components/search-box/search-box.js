// components/my-flag/my-flag.js
var app = getApp();
Component({
    properties: {
        flagIsDone: {
            type: Boolean,
            value: false
        }
    },
    data: {

    },
    methods: {
        getWhatToSearch(e){
            console.log(e.detail.value);
            const token=wx.getStorageSync('token');
            const res = wx.cloud.callContainer({
                config: {
                  env: 'prod-6gbc6i9v491283c0',
                },
                path: '/search-flag',
                method: 'POST',
                data:{
                    "key_word":e.detail.value
                },
                header: {
                  'X-WX-SERVICE': 'flagger',
                  'authentication':token,
                },
                success: function (result) {
                    console.log("搜索成功");
                    app.globalData.searchSuccessFlags = result;
                    console.log(app.globalData.searchSuccessFlags);
                    wx.redirectTo({
                      url: '../successSearch/successSearch',
                    })
                    console.log(result);
                }
              }); 
        },
    }
})
