// pages/modifyData/modifyData.js
var app = getApp();
Page({
    data: {
        changeNickname:"",
        imageURLOne: app.globalData.imageURL,
        whichSocialRadio: -1,
        afterChangerWhichSocialRadio: -1,
        whichEnvironmentRadio: -1,
        afterChangerWhichEnvironmentRadio: -1,
        theTappedOne: {
            type: Number,
            value: -1
        },
        // 倾向flag选择数组
        radioTime: [
            1, 2, 3, 4
        ],
        preferFlagTime: [{
                id: 0,
                value: "健身"
            },
            {
                id: 1,
                value: "阅读"
            },
            {
                id: 2,
                value: "学习"
            },
            {
                id: 3,
                value: "减脂"
            },
            {
                id: 4,
                value: "游玩"
            },
            {
                id: 5,
                value: "科幻小说"
            },
            {
                id: 6,
                value: "其他"
            },

        ],
        // 环境选择数组 室内室外
        preferEnviTime: [{
                id: 7,
                value: "室内"
            },
            {
                id: 8,
                value: "户外"
            },
            {
                id: 9,
                value: "不确定"
            },

        ],
        innerTextOne: [{
            id: 0,
            value: "用户名"
        }],
        // 本科生、研究生、博士生
        innerTextTwo: [{
                id: 0,
                defaultValue: "本科生/研究生/博士",
                value: "本科生/研究生/博士",
                flagClass: "data-grade-box"
            },
            {
                id: 1,
                defaultValue: "一年级",
                value: "一年级",
                flagClass: "data-grade-box"
            },
            {
                id: 2,
                defaultValue: "请填写专业完整名称",
                value: "请填写专业完整名称",
                flagClass: "data-major-box"
            }
        ],
        innerTextThree: [{
                id: 0,
                value: "倾向Flag",
                flagClass: "data-prefer-flag-box"
            },
            {
                id: 1,
                value: "环境选择",
                flagClass: "data-environment-choosing-box"
            },
            {
                id: 2,
                value: "社交程度",
                flagClass: "data-degree-box"
            }

        ],
        isTap: [{
                type: Boolean,
                value: false
            },
            {
                type: Boolean,
                value: false
            },
            {
                type: Boolean,
                value: false
            }
        ],
        selectMajor: [
            [{
                    id: 101,
                    major: "数学与应用数学"
                },
                {
                    id: 102,
                    major: "信息与计算科学"
                },
                {
                    id: 103,
                    major: "统计学"
                },
            ],
            [{
                    id: 201,
                    major: "物理学"
                },
                {
                    id: 202,
                    major: "应用物理学"
                },
                {
                    id: 203,
                    major: "物理学(严济慈物理学英才班)"
                },
            ],
            [{
                    id: 301,
                    major: "化学"
                },
                {
                    id: 302,
                    major: "应用化学"
                },
                {
                    id: 401,
                    major: "机械设计制造及其自动化"
                },
                {
                    id: 402,
                    major: "工业工程"
                },
                {
                    id: 403,
                    major: "机械设计制造...(卓越计划实验班)"
                },
                {
                    id: 404,
                    major: "机械设计制造...(启明本硕博实验班)"
                },
                {
                    id: 405,
                    major: "产品设计"
                },
            ],
            [{
                    id: 501,
                    major: "材料科学与工程"
                },
                {
                    id: 502,
                    major: "材料成型及控制工程"
                },
                {
                    id: 503,
                    major: "材料成型及控制工程(卓越计划实验班)"
                },
                {
                    id: 504,
                    major: "材料成型及控制工程(启明本硕博实验班)"
                },
            ],
            [{
                    id: 601,
                    major: "能源与动力工程"
                },
                {
                    id: 602,
                    major: "新能源科学与工程"
                },
                {
                    id: 603,
                    major: "核工程与核技术"
                },
                {
                    id: 604,
                    major: "能源与动力工程(能源卓越计划实验班)"
                },
                {
                    id: 605,
                    major: "能源与动力工程(启明本硕博实验班)"
                },
            ],
            [{
                    id: 701,
                    major: "电气工程及其自动化"
                },
                {
                    id: 702,
                    major: "电气工程及其自动化(电气卓越计划实验班)"
                },
                {
                    id: 703,
                    major: "电气工程及其自动化(启明本硕博实验班)"
                },
            ],
            [{
                    id: 801,
                    major: "船舶与海洋工程(船海卓越计划实验班)"
                },
                {
                    id: 802,
                    major: "船舶与海洋工程(含智能船舶与海洋开发技术方向)"
                },
            ],
            [{
                    id: 901,
                    major: "生物科学"
                },
                {
                    id: 902,
                    major: "生物制药"
                },
                {
                    id: 903,
                    major: "生物技术"
                },
                {
                    id: 904,
                    major: "生物医学工程"
                },
                {
                    id: 905,
                    major: "生物信息学"
                },
                {
                    id: 906,
                    major: "生物医学工程(国家级一流专业及卓越计划实验班)"
                },
                {
                    id: 907,
                    major: "生物科学(国家科教协同计划贝时璋菁英班)"
                },
                {
                    id: 908,
                    major: "生物技术(国家级一流专业及特色专业实验班)"
                },
            ],
            [{
                    id: 1001,
                    major: "电子信息工程"
                },
                {
                    id: 1002,
                    major: "通信工程"
                },
                {
                    id: 1003,
                    major: "电磁场与无线技术"
                },
                {
                    id: 1004,
                    major: "电子信息工程(电信卓越计划实验班)"
                },
                {
                    id: 1005,
                    major: "电子信息工程(信息类数理提高班)"
                },
            ],
            [{
                    id: 1101,
                    major: "光电信息科学与工程"
                },
                {
                    id: 1102,
                    major: "电子科学与技术"
                },
                {
                    id: 1103,
                    major: "集成电路设计与集成系统"
                },
                {
                    id: 1104,
                    major: "微电子科学与工程"
                },
                {
                    id: 1105,
                    major: "光电信息科学与工程(卓越计划实验班)"
                },
                {
                    id: 1106,
                    major: "光电信息科学与工程(王大珩光电创新实验班)"
                },
                {
                    id: 1107,
                    major: "集成电路设计与集成系统(卓越计划实验班)"
                },
                {
                    id: 1108,
                    major: "电子信息类(启明本硕博实验班)"
                },
            ],
            [{
                id: 1201,
                major: "生物医学工程(工医理交叉国际化实验班)"
            }, ],
            [{
                    id: 1301,
                    major: "计算机科学与技术"
                },
                {
                    id: 1302,
                    major: "物联网工程"
                },
                {
                    id: 1303,
                    major: "计算机科学与技术(卓越计划实验班)"
                },
                {
                    id: 1304,
                    major: "计算机科学与技术(启明本硕博实验班)"
                },
            ],
            [{
                    id: 1401,
                    major: "信息安全"
                },
                {
                    id: 1402,
                    major: "网络空间安全"
                },
            ],
            [{
                id: 1501,
                major: "软件工程"
            }, ],
            [{
                    id: 1601,
                    major: "人工智能"
                },
                {
                    id: 1602,
                    major: "自动化"
                },
                {
                    id: 1603,
                    major: "自动化(自动化卓越计划实验班)"
                },
                {
                    id: 1604,
                    major: "人工智能(创新实验班)"
                },
                {
                    id: 1605,
                    major: "人工智能(启明本硕博实验班)"
                },
            ],
            [{
                    id: 1701,
                    major: "建筑学(五年制)"
                },
                {
                    id: 1702,
                    major: "城乡规划(五年制)"
                },
                {
                    id: 1703,
                    major: "风景园林(五年制)"
                },
                {
                    id: 1704,
                    major: "建筑学(创新实验班)(五年制)"
                },
                {
                    id: 1705,
                    major: "环境设计"
                },
                {
                    id: 1706,
                    major: "数字媒体艺术"
                },
            ],
            [{
                    id: 1801,
                    major: "智能建造"
                },
                {
                    id: 1802,
                    major: "土木工程"
                },
                {
                    id: 1803,
                    major: "工程管理"
                },
                {
                    id: 1804,
                    major: "交通工程"
                },
                {
                    id: 1805,
                    major: "水利水电工程"
                },
            ],
            [{
                    id: 1901,
                    major: "环境工程"
                },
                {
                    id: 1902,
                    major: "给排水科学与工程(含给排水卓越计划实验班)"
                },
                {
                    id: 1903,
                    major: "建筑环境与能源应用工程"
                },
            ],
            [{
                    id: 2001,
                    major: "工商管理(人力资源)"
                },
                {
                    id: 2002,
                    major: "市场营销(数字化营销)"
                },
                {
                    id: 2003,
                    major: "会计学(注册会计师)"
                },
                {
                    id: 2004,
                    major: "财政学(税务)"
                },
                {
                    id: 2005,
                    major: "财务管理"
                },
                {
                    id: 2006,
                    major: "信息管理与信息系统"
                },
                {
                    id: 2007,
                    major: "物流管理"
                },
            ],
            [{
                    id: 2101,
                    major: "经济学(实验班)"
                },
                {
                    id: 2102,
                    major: "经济统计学"
                },
                {
                    id: 2103,
                    major: "国际经济与贸易"
                },
                {
                    id: 2104,
                    major: "金融学"
                },
                {
                    id: 2105,
                    major: "金融工程"
                },
                {
                    id: 2106,
                    major: "国际商务(英语二学位)"
                },
                {
                    id: 2107,
                    major: "经济学(经济学创新实验班)"
                },
            ],
            [{
                    id: 2201,
                    major: "英语"
                },
                {
                    id: 2202,
                    major: "德语"
                },
                {
                    id: 2203,
                    major: "日语"
                },
                {
                    id: 2204,
                    major: "翻译"
                },
                {
                    id: 2205,
                    major: "法语"
                },
            ],
            [{
                    id: 2301,
                    major: "新闻学"
                },
                {
                    id: 2302,
                    major: "广播电视学"
                },
                {
                    id: 2303,
                    major: "广告学"
                },
                {
                    id: 2304,
                    major: "传播学(网络传播、计算机双学位)"
                },
                {
                    id: 2305,
                    major: "播音与主持艺术"
                },
            ],
            [{
                id: 2401,
                major: "法学"
            }, ],
            [{
                    id: 2501,
                    major: "汉语国际教育"
                },
                {
                    id: 2502,
                    major: "汉语言文学"
                },
            ],
            [{
                id: 2601,
                major: "哲学"
            }, ],
            [{
                    id: 2701,
                    major: "社会学"
                },
                {
                    id: 2702,
                    major: "社会工作"
                },
            ],
            [{
                    id: 2801,
                    major: "临床医学(本硕博贯通培养、八年制)"
                },
                {
                    id: 2802,
                    major: "临床医学(启明本硕博实验班)"
                },
                {
                    id: 2803,
                    major: "临床医学(五年制)"
                },
                {
                    id: 2804,
                    major: "医学影像学(五年制)"
                },
                {
                    id: 2805,
                    major: "口腔医学(五年制)"
                },
                {
                    id: 2806,
                    major: "医学检验技术"
                },
            ],
            [{
                    id: 2901,
                    major: "临床医学(本硕博贯通培养、八年制)"
                },
                {
                    id: 2902,
                    major: "临床医学(启明本硕博实验班)"
                },
                {
                    id: 2903,
                    major: "临床医学(五年制)"
                },
                {
                    id: 2904,
                    major: "儿科学(五年制)"
                },
                {
                    id: 2905,
                    major: "中西医临床医学(五年制)"
                },
            ],
            [{
                id: 3001,
                major: "基础医学(五年制)"
            }, ],
            [{
                    id: 3101,
                    major: "预防医学(五年制)"
                },
                {
                    id: 3102,
                    major: "预防医学(启明本硕博实验班)"
                },
                {
                    id: 3103,
                    major: "法医学系"
                },
                {
                    id: 3104,
                    major: "法医学(五年制)"
                },
            ],
            [{
                id: 3201,
                major: "护理学"
            }, ]
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    getBasicInfo() {
        const userPersonalInterface = wx.cloud.callContainer({
            config: {
                env: 'prod-6gbc6i9v491283c0',
            },
            path: '/get-user-info',
            method: 'GET',
            header: {
                'X-WX-SERVICE': 'flagger'
            },
            success: result => {
                console.log(result);
                this.drawBasicInfo(result);
            }
        });
    },

    // 函数功能：提示“用户名不允许为空”的弹窗
    showUserNameModal(content) {
        wx.showModal({
            title: '提示',
            content: content,
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定');
                } else if (res.cancel) {
                    console.log('用户点击取消');
                }
            }
        })
    },
    //填写基本信息

    drawBasicInfo(result) {
        const query = wx.createSelectorQuery();
        let userBasicData = result.data;
        //头像信息
        this.setData({
            imageURLOne: userBasicData.avatar_url
        })
        //昵称信息
        if (userBasicData.nickname) {
            this.setData({
                'innerTextOne.value': userBasicData.nickname
            })
        } else {
            this.showUserNameModal("用户名不允许为空");
        }
        //渲染学位年级
        let gradeDegree = "本科生";
        let gradeString = '';
        if (userBasicData.grade) {
            if (userBasicData.grade == 1 || userBasicData.grade == 2 || userBasicData.grade == 3 || userBasicData.grade == 4) {
                gradeDegree = "本科生";
                if (userBasicData.grade == 1) {
                    gradeString = "一年级";
                }
                if (userBasicData.grade == 2) {
                    gradeString = "二年级";
                }
                if (userBasicData.grade == 3) {
                    gradeString = "三年级";
                }
                if (userBasicData.grade == 4) {
                    gradeString = "四年级";
                }
            }
            if (userBasicData.grade == 5 || userBasicData.grade == 6 || userBasicData.grade == 7) {
                gradeDegree = "研究生";
                if (userBasicData.grade == 5) {
                    gradeString = "一年级";
                }
                if (userBasicData.grade == 6) {
                    gradeString = "二年级";
                }
                if (userBasicData.grade == 7) {
                    gradeString = "三年级";
                }
            }
            if (userBasicData.grade == 8) {
                gradeDegree = "博士生";
                gradeString = "/";
            }
            this.setData({
                'innerTextTwo[0].value': gradeDegree
            })
            this.setData({
                'innerTextTwo[1].value': gradeString
            })
        } else {
            this.setData({
                'innerTextTwo[0].value': "本科生/研究生/博士"
            })
            this.setData({
                'innerTextTwo[1].value': "一年级/二年级/三年级/四年级/..."
            })
        }
        // 渲染专业
        if (userBasicData.major) {
            let majorTheFirstTwo = userBasicData.major.toString()
            majorTheFirstTwo = majorTheFirstTwo.slice(0, majorTheFirstTwo.length - 2);
            this.data.selectMajor[majorTheFirstTwo - 1].map((majorContent) => {

                if (majorContent.id == userBasicData.major) {
                    this.setData({
                        'innerTextTwo[2].value': majorContent.major
                    })
                }
            })
        }
        // 渲染倾向Flag
        let userTags = this.selectAllComponents('.userTagChild');
        if (userBasicData.user_social_trend) {
            console.log(userBasicData.user_social_trend);
            this.setData({
                whichSocialRadio: userBasicData.user_social_trend[0]
            })
        }
        if (userBasicData.environment) {
            this.setData({
                whichEnvironmentRadio: userBasicData.environment[0],
            })
        }


    },

    onReady: function () {
        this.getBasicInfo();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
    choosePreferEnvironment(e) {
        const childUserTag = this.selectAllComponents('.userTagChild');
        for (let i = 4; i < 6; i++) {
            childUserTag[i].setData({
                ["innerText.value"]: this.data.preferEnviTime[i - 4].value,
            })
        }
    },
    choosePreferFlag(e) {
        let nowIndex = parseInt(e.currentTarget.dataset.index);
        let temIsTap = !this.data.isTap[nowIndex].value;
        this.setData({
            ['isTap[' + nowIndex + '].value']: temIsTap
        })
        this.setData({
            theTappedOne: nowIndex.toString()
        })
        const childUserTag = this.selectAllComponents('.userTagChild');
        for (let i = 0; i < 7; i++) {
            childUserTag[i].setData({
                ["innerText.value"]: this.data.preferFlagTime[i].value,
            })
        }



    },

    choosePreferContent(e) {
        let nowIndex = parseInt(e.currentTarget.dataset.index);
    },

    // 点击保存发送请求，保存用户更改信息
    saveModifyData(e) {
        this.data.innerTextTwo[e.currentTarget.dataset.index].value = e.detail.value;
        console.log(this.data.innerTextTwo[e.currentTarget.dataset.index].value);
    },
    saveModifyNickname(e){
        this.data.changeNickname = e.detail.value;
    },
    toSave() {
        console.log("保存");
        let data = {
            grade_str:this.data.innerTextTwo[1].value,
            major_str: this.data.innerTextTwo[2].value,
            environment: [this.data.afterChangerWhichEnvironmentRadio],
            socialtendency:[this.data.afterChangerWhichSocialRadio],
            nickname:this.data.changeNickname,
        };
        const userPersonalInterface = wx.cloud.callContainer({
            config: {
                env: 'prod-6gbc6i9v491283c0',
            },
            path: '/save-user-info',
            method: 'POST',
            data: {
                grade_str:this.data.innerTextTwo[1].value,
                major_str: this.data.innerTextTwo[2].value,
                environment: [this.data.afterChangerWhichEnvironmentRadio],
                socialtendency:[this.data.afterChangerWhichSocialRadio],
                nickname:this.data.changeNickname,
            },
            header: {
                'X-WX-SERVICE': 'flagger'
            },
            success: result => {
                console.log(data);
            }
        });
    },
    handleTapOnSocialRadio(e) {
        this.setData({
            afterChangerWhichSocialRadio: e.currentTarget.dataset.index + 1
        })
        console.log(this.data.afterChangerWhichSocialRadio);
    },
    handleTapOnEnvironmentRadio(e) {
        this.setData({
            afterChangerWhichEnvironmentRadio: e.currentTarget.dataset.index + 1
        })
        console.log(this.data.afterChangerWhichEnvironmentRadio);
    },

})