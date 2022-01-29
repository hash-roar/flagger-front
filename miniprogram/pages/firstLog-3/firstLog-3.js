// pages/firstLog-3/firstLog-3.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selectDepartment:[
            {id:1,department:'数学与统计学院'},
            {id:2,department:'物理学院'},
            {id:3,department:'化学与化工学院'},
            {id:4,department:'机械科学与工程学院'},
            {id:5,department:'材料科学与工程学院'},
            {id:6,department:'能源与动力工程学院'},
            {id:7,department:'电气与电子工程学院'},
            {id:8,department:'船舶与海洋工程学院'},
            {id:9,department:'生命科学与技术学院'},
            {id:10,department:'电子信息与通信学院'},
            {id:11,department:'光学与电子信息学院'},
            {id:12,department:'工程科学学院'},
            {id:13,department:'计算机科学与技术学院'},
            {id:14,department:'网络空间安全学院'},
            {id:15,department:'软件学院'},
            {id:16,department:'人工智能与自动化学院'},
            {id:17,department:'建筑与城市规划学院'},
            {id:18,department:'土木与水利工程学院'},
            {id:19,department:'环境科学与工程学院'},
            {id:20,department:'管理学院'},
            {id:21,department:'经济学院'},
            {id:22,department:'外国语学院'},
            {id:23,department:'新闻与信息传播学院'},
            {id:24,department:'法学院'},
            {id:25,department:'人文学院'},
            {id:26,department:'哲学学院'},
            {id:27,department:'社会学院'},
            {id:28,department:'第一临床学院'},
            {id:29,department:'第二临床学院'},
            {id:30,department:'基础医学院'},
            {id:31,department:'公共卫生学院'},
            {id:32,department:'护理学院'} 
        ],
        selectMajor: [
            [
                {id:101,major:"数学与应用数学"},
                {id:102,major:"信息与计算科学"},
                {id:103,major:"统计学"}
            ],
            [
                {id:201,major:"物理学"},
                {id:202,major:"应用物理学"},
                {id:203,major:"物理学(严济慈物理学英才班)"}
            ],
            [
                {id:301,major:"化学"},
                {id:302,major:"应用化学"}
            ],
            [
                {id:401,major:"机械设计制造及其自动化"},
                {id:402,major:"工业工程"},
                {id:403,major:"机械设计制造...(卓越计划实验班)"},
                {id:404,major:"机械设计制造...(启明本硕博实验班)"},
                {id:405,major:"产品设计"}
            ],
            [
                {id:501,major:"材料科学与工程"},
                {id:502,major:"材料成型及控制工程"},
                {id:503,major:"材料成型及控制工程(卓越计划实验班)"},
                {id:504,major:"材料成型及控制工程(启明本硕博实验班)"}
            ],
            [
                {id:601,major:"能源与动力工程"},
                {id:602,major:"新能源科学与工程"},
                {id:603,major:"核工程与核技术"},
                {id:604,major:"能源与动力工程(能源卓越计划实验班)"},
                {id:605,major:"能源与动力工程(启明本硕博实验班)"}
            ],
            [
                {id:701,major:"电气工程及其自动化"},
                {id:702,major:"电气工程及其自动化(电气卓越计划实验班)"},
                {id:703,major:"电气工程及其自动化(启明本硕博实验班)"}
            ],
            [
                {id:801,major:"船舶与海洋工程(船海卓越计划实验班)"},
                {id:802,major:"船舶与海洋工程(含智能船舶与海洋开发技术方向)"}
            ],
            [
                {id:901,major:"生物科学"},
                {id:902,major:"生物制药"},
                {id:903,major:"生物技术"},
                {id:904,major:"生物医学工程"},
                {id:905,major:"生物信息学"},
                {id:906,major:"生物医学工程(国家级一流专业及卓越计划实验班)"},
                {id:907,major:"生物科学(国家科教协同计划贝时璋菁英班)"},
                {id:908,major:"生物技术(国家级一流专业及特色专业实验班)"}
            ],
            [
                {id:1001,major:"电子信息工程"},
                {id:1002,major:"通信工程"},
                {id:1003,major:"电磁场与无线技术"},
                {id:1004,major:"电子信息工程(电信卓越计划实验班)"},
                {id:1005,major:"电子信息工程(信息类数理提高班)"}
            ],
            [
                {id:1101,major:"光电信息科学与工程"},
                {id:1102,major:"电子科学与技术"},
                {id:1103,major:"集成电路设计与集成系统"},
                {id:1104,major:"微电子科学与工程"},
                {id:1105,major:"光电信息科学与工程(卓越计划实验班)"},
                {id:1106,major:"光电信息科学与工程(王大珩光电创新实验班)"},
                {id:1107,major:"集成电路设计与集成系统(卓越计划实验班)"},
                {id:1108,major:"电子信息类(启明本硕博实验班)"}
            ],
            [
                {id:1201,major:"生物医学工程(工医理交叉国际化实验班)"}
            ],
            [
                {id:1301,major:"计算机科学与技术"},
                {id:1302,major:"物联网工程"},
                {id:1303,major:"计算机科学与技术(卓越计划实验班)"},
                {id:1304,major:"计算机科学与技术(启明本硕博实验班)"}
            ],
            [
                {id:1401,major:"信息安全"},
                {id:1402,major:"网络空间安全"}
            ],
            [
                {id:1501,major:"软件工程"}
            ],
            [
                {id:1601,major:"人工智能"},
                {id:1602,major:"自动化"},
                {id:1603,major:"自动化(自动化卓越计划实验班)"},
                {id:1604,major:"人工智能(创新实验班)"},
                {id:1605,major:"人工智能(启明本硕博实验班)"}
            ],
            [
                {id:1701,major:"建筑学(五年制)"},
                {id:1702,major:"城乡规划(五年制)"},
                {id:1703,major:"风景园林(五年制)"},
                {id:1704,major:"建筑学(创新实验班)(五年制)"},
                {id:1705,major:"环境设计"},
                {id:1706,major:"数字媒体艺术"}
            ],
            [
                {id:1801,major:"智能建造"},
                {id:1802,major:"土木工程"},
                {id:1803,major:"工程管理"},
                {id:1804,major:"交通工程"},
                {id:1805,major:"水利水电工程"}
            ],
            [
                {id:1901,major:"环境工程"},
                {id:1902,major:"给排水科学与工程(含给排水卓越计划实验班)"},
                {id:1903,major:"建筑环境与能源应用工程"}
            ],
            [
                {id:2001,major:"工商管理(人力资源)"},
                {id:2002,major:"市场营销(数字化营销)"},
                {id:2003,major:"会计学(注册会计师)"},
                {id:2004,major:"财政学(税务)"},
                {id:2005,major:"财务管理"},
                {id:2006,major:"信息管理与信息系统"},
                {id:2007,major:"物流管理"}
            ],
            [
                {id:2101,major:"经济学(实验班)"},
                {id:2102,major:"经济统计学"},
                {id:2103,major:"国际经济与贸易"},
                {id:2104,major:"金融学"},
                {id:2105,major:"金融工程"},
                {id:2106,major:"国际商务(英语二学位)"},
                {id:2107,major:"经济学(经济学创新实验班)"}
            ],
            [
                {id:2201,major:"英语"},
                {id:2202,major:"德语"},
                {id:2203,major:"日语"},
                {id:2204,major:"翻译"},
                {id:2205,major:"法语"}
            ],
            [
                {id:2301,major:"新闻学"},
                {id:2302,major:"广播电视学"},
                {id:2303,major:"广告学"},
                {id:2304,major:"传播学(网络传播、计算机双学位)"},
                {id:2305,major:"播音与主持艺术"}
            ],
            [
                {id:2401,major:"法学"}
            ],
            [
                {id:2501,major:"汉语国际教育"},
                {id:2502,major:"汉语言文学"}
            ],
            [
                {id:2601,major:"哲学"}
            ],
            [
                {id:2701,major:"社会学"},
                {id:2702,major:"社会工作"}
            ],
            [
                {id:2801,major:"临床医学(本硕博贯通培养、八年制)"},
                {id:2802,major:"临床医学(启明本硕博实验班)"},
                {id:2803,major:"临床医学(五年制)"},
                {id:2804,major:"医学影像学(五年制)"},
                {id:2805,major:"口腔医学(五年制)"},
                {id:2806,major:"医学检验技术"}
            ],
            [
                {id:2901,major:"临床医学(本硕博贯通培养、八年制)"},
                {id:2902,major:"临床医学(启明本硕博实验班)"},
                {id:2903,major:"临床医学(五年制)"},
                {id:2904,major:"儿科学(五年制)"},
                {id:2905,major:"中西医临床医学(五年制)"}
            ],
            [
                {id:3001,major:"基础医学(五年制)"}
            ],
            [
                {id:3101,major:"预防医学(五年制)"},
                {id:3102,major:"预防医学(启明本硕博实验班)"},
                {id:3103,major:"法医学系"},
                {id:3104,major:"法医学(五年制)"}
            ],
            [
                {id:3201,major:"护理学"},
            ]
        ],
        tempMajor: [
            {id:101,major:"数学与应用数学"},
            {id:102,major:"信息与计算科学"},
            {id:103,major:"统计学"}
        ],

        index:0
    },
    changeLeft: function(e){
        this.setData({
            tempMajor: this.data.selectMajor[e.detail.value[0]]
        })
    },
    changeRight: function(e){  
        this.setData({
            index:e.detail.value[0]
        })
    },
    next3Fun:function(){
        app.firstLogData.major=parseInt(this.data.tempMajor[this.data.index].id)
    },
    skipFun:function(){
        app.firstLogData.major=0
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