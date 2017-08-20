/*
 * @Author: Marte
 * @Date:   2017-08-20 17:21:11
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-20 17:41:17
 */

require.config({
    baseUrl: './',
    paths: {
        'avalon': 'lib/avalon/avalon.shim',
        'underscore': 'lib/underscore/underscore-min'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

require(['avalon', 'underscore'], function(avalon, _) {

    var vm = avalon.define({
        $id: 'mainContorller',
        msg: '哈哈',
        init: function() {

        }
    });

    avalon.scan(document.body);
    vm.init();
});