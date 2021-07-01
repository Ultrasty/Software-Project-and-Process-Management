let manager = (function () {
    let topVue;
    let sideVue;
    let contentVue;
    let init = function () {
        topVueInit();
        sideVueInit();
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
                    contentVue.showing = (name === 'statistic');
                }
            }
        });
    };

    let sideVueInit = function () {
        sideVue = new Vue({
            el : '#side-navigation',
            data : {
                theme : 'light',
                active : '1',
                inputVal : ''
            },
            methods:{
                click : function (name) {

                },
                enter : function () {
                    console.log(this.active+this.inputVal);
                    this.active = this.inputVal;
                }
            }
        });
    };

    let contentVueInit = function () {
        contentVue = new Vue({
            el : '#content',
            data : {
                showing : true
            },
            methods : {

            }
        })
    };

    return {
        init : init
    }
})();