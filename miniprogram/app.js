// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        traceUser: true,
      });
    }

    this.globalData = {
      userUID:0,
      imageURL: "../../images/default-portrait.png",
      ifIsVistor:"true",
      firstLogData: {
        sex:0,
        grade:0, 
        major:0,
        interestedtag:[],
        createstag:"",
        environment:0,
        socialtendency:0,
      },
    };
  },
});
