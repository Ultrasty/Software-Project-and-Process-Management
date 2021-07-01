let counter = (function () {
    let topVue;
    let sideVue;
    let content;
    let add;
    let deleteVue;
    let equipmentVue;
    let dispatchVue;
    let equipmentMapVue;
    let driversVue;
    let init = function () {
        topVueInit();
        sideVueInit();
        contentInit();
        addInit();
        deleteInit();
        equipmentVueInit();
        dispatchVueInit();
        equipmentMapVueInit();
        driversVueInit();
    };

    let topVueInit = function () {
        topVue = new Vue({
            el: '#top-navigation',
            data : {
                theme : 'light',
                active : 'people'
            },
            methods : {
                click : function (name) {
                    console.log(name);
                    if (name === 'add'){
                        add.open = true;
                    }
                    else if (name === 'delete'){
                        deleteVue.open = true;
                    }
                    else if (name === 'equipment'){
                        $('#content').attr('hidden','hidden');
                        $('#equipment').removeAttr('hidden');
                    }
                    else if (name === 'people'){
                        $('#equipment').attr('hidden','hidden');
                        $('#content').removeAttr('hidden');
                    }
                }
            }
        });
    };

    let sideVueInit = function () {
        sideVue = new Vue({
            el : '#side-navigation',
            data : {
                theme : 'light',
                active : '小红',
                inputVal : ''
            },
            methods:{
                click : function (name) {
                    if (name === '租借用户'){
                        $('#content').removeAttr('hidden');
                        $('#drivers').attr('hidden','hidden');
                    }
                    else if (name === '卡车司机'){
                        $('#drivers').removeAttr('hidden');
                        $('#content').attr('hidden','hidden');
                    }
                },
                enter : function () {
                    console.log(this.active+this.inputVal);
                    this.active = this.inputVal;
                }
            }
        });
    };

    let contentInit = function () {
        content = new Vue({
            el : '#content',
            data : {
                columns:[
                    {
                        title : '姓名',
                        key : 'name'
                    },{
                        title : '地址',
                        key : 'address'
                    },{
                        title : '城市',
                        key : 'city'
                    },{
                        title : '邮编',
                        key : 'zip'
                    },{
                        title : '州',
                        key : 'state'
                    },{
                        title : '设备型号信息',
                        key : 'equipment'
                    },{
                        title : '租期',
                        key : 'days'
                    },{
                        title : '还设备日',
                        key : 'date'
                    }, {
                        title: '借/还',
                        key: 'type'
                    },{
                        title : '分配状态',
                        key : 'dispatched'
                    }

                ],
                row:[
                    {
                        name : 'John',
                        address : '',
                        city : '',
                        zip : '',
                        state : '',
                        equipment : '',
                        days : '',
                        date : '',
                        type : '',
                        dispatched : ''
                    },{
                        name : '',
                        address : '',
                        city : '',
                        zip : '',
                        state : '',
                        equipment : '',
                        days : '',
                        date : '',
                        type : '',
                        dispatched : ''
                    },{
                        name : '',
                        address : '',
                        city : '',
                        zip : '',
                        state : '',
                        equipment : '',
                        days : '',
                        date : '',
                        type : '',
                        dispatched : ''
                    },{
                        name : '',
                        address : '',
                        city : '',
                        zip : '',
                        state : '',
                        equipment : '',
                        days : '',
                        date : '',
                        type : '',
                        dispatched : ''
                    },{
                        name : '',
                        address : '',
                        city : '',
                        zip : '',
                        state : '',
                        equipment : '',
                        days : '',
                        date : '',
                        type : '',
                        dispatched : ''
                    },{
                        name : '',
                        address : '',
                        city : '',
                        zip : '',
                        state : '',
                        equipment : '',
                        days : '',
                        date : '',
                        type : '',
                        dispatched : ''
                    },{
                        name : '',
                        address : '',
                        city : '',
                        zip : '',
                        state : '',
                        equipment : '',
                        days : '',
                        date : '',
                        type : '',
                        dispatched : ''
                    },{
                        name : '',
                        address : '',
                        city : '',
                        zip : '',
                        state : '',
                        equipment : '',
                        days : '',
                        date : '',
                        type : '',
                        dispatched : ''
                    },{
                        name : '',
                        address : '',
                        city : '',
                        zip : '',
                        state : '',
                        equipment : '',
                        days : '',
                        date : '',
                        type : '',
                        dispatched : ''
                    }
                ],
                loading : false
            },
            methods : {
                click : function () {
                    this.loading = false;
                },
                dbclick : function (val) {
                    if(val.dispatched === '已分配')
                        content.row[0].dispatched = '已完成';
                    else {
                        dispatchVue.open = true;
                        $('#content .ivu-table-body .ivu-table-cell span').attr('contenteditable','true');
                        $('#content .ivu-table-body .ivu-table-cell').attr('contenteditable','true');
                    }
                }
            }
        });
        $('#content .ivu-table-body .ivu-table-cell span').attr('contenteditable','true');
        $('#content .ivu-table-body .ivu-table-cell').attr('contenteditable','true');
        $('#content').click(function () {
            content.loading = false;
        });
    };

    let addInit = function () {
        add = new Vue({
            el : '#add',
            data : {
                open : false,
                name : '',
                address : '',
                city : '',
                zip : '',
                state : '',
                equipment : '',
                days : '',
                date : '',
                type : ''
            },
            methods : {
                Ok : function () {
                    content.loading = true;
                    content.row.unshift({
                        name : 'John',
                        address : 'Main Street Block 21',
                        city : 'Redmond',
                        zip : '98102',
                        state : 'California',
                        equipment : 'xxx',
                        days : '3',
                        date : '2017-7-1',
                        type : '借',
                        dispatched : '未分配'
                    })
                },
                show : function () {
                    this.name  = 'John';
                    this.address  = 'Main Street Block 21';
                    this.city  = 'Redmond';
                    this.zip  = '98102';
                    this.state = 'California';
                }
            }
        });
    };

    let deleteInit = function () {
        deleteVue = new Vue({
            el : '#delete',
            data : {
                open : false,
                name : '',
                address : '',
                city : '',
                zip : '',
                state : '',
                equipment : '',
                days : '',
                date : '',
                type : ''
            },
            methods : {
                Ok : function () {
                    content.loading = true;
                },
                show : function () {
                    this.name  = 'John';
                    this.address  = 'Main Street Block 21';
                    this.city  = 'Redmond';
                    this.zip  = '98102';
                    this.state = 'California';
                    this.equipment = 'z1928';
                    this.days = '3';
                    this.date = '2018-7-1';
                    this.type = '借';
                }
            }
        });
    };

    let equipmentVueInit = function () {
        equipmentVue = new Vue({
            el : '#equipment',
            data : {
                columns :[
                    {
                        title : '型号',
                        key : 'type'
                    },{
                        title : '参数',
                        key : 'parameter'
                    },{
                        title : '单价',
                        key : 'price'
                    },{
                        title : '库存',
                        key : 'number'
                    },{
                        title : '图片',
                        key : 'picture',
                        width: 150,
                        align: 'center',
                        render : (h,params) => {
                            //console.log(params.row,params.index,params.column);
                            return h('div',[
                                h('img',{
                                    attrs : {
                                        src : params.row.picture
                                    },
                                    style : {
                                        width : '100%'
                                    }
                                },'')
                            ])
                        }
                    }
                ],
                row : [
                    {
                        type : '钻头',
                        parameter : 'Z192',
                        price : '$10/H',
                        number : 100,
                        picture : '../img/equip.jpg'
                    }
                ]
            },
            methods : {
                dbclick : function () {
                    equipmentMapVue.open = true;
                }
            }
        })
    };

    let dispatchVueInit = function () {
        dispatchVue = new Vue({
            el : '#dispatch',
            data : {
                open : false,
                selectValue : '',
                drivers : [
                    {
                        value : '王师傅',
                        id : '1',
                        distance : '100m'
                    }
                ]
            },
            methods : {
                Ok : function () {
                    content.row[0].dispatched = '已分配';
                }
            }
        })
    };

    let equipmentMapVueInit = function () {
        equipmentMapVue = new Vue({
            el : '#equipment-map',
            data : {
                open : false
            },
            methods : {
                Ok : function () {

                }
            }
        })
    };

    let driversVueInit = function () {
        driversVue = new Vue({
            el : '#drivers',
            data : {
                columns : [
                    {
                        title : 'ID',
                        key : 'id'
                    },{
                        title : '姓名',
                        key : 'name'
                    },{
                        title : '状态',
                        key : 'state'
                    },{
                        title : '年龄',
                        key : 'age'
                    },{
                        title : '其他',
                        key : 'memo'
                    }
                ],
                row : [
                    {
                        id : 1,
                        name : '王师傅',
                        state : '空闲',
                        age : 30,
                        memo : '...'
                    }
                ]
            },
            methods : {
                dbclick : function () {
                    $('#drivers .ivu-table-body .ivu-table-cell span').attr('contenteditable','true');
                    $('#drivers .ivu-table-body .ivu-table-cell').attr('contenteditable','true');
                }
            }
        })
    };

    return {
        init : init
    }
})();