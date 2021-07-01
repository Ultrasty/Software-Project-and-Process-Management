let user = (function () {
    let topVue;
    let contentVue;
    let init = function () {
        topVueInit();
        contentVueInit();
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

                }
            }
        });
    };

    let contentVueInit = function () {
        contentVue = new Vue({
            el : '#content',
            data : {
                columns:[
                    {
                        title : '调度员姓名',
                        key : 'name'
                    },{
                        title : '司机姓名',
                        ket : 'driver'
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
                        driver : '',
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
                        driver : '',
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
                        driver : '',
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
                        driver : '',
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
                        driver : '',
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
                        driver : '',
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
                        driver : '',
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
                        driver : '',
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
                        driver : '',
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
            },
            methods : {
                click : function () {
                    this.loading = false;
                },
                dbclick : function (val) {

                }
            }
        })
    };

    return {
        init : init
    }
})();