var _globalAjaxLoadingLayer;

$.ajaxSetup({
    beforeSend: function () {
        console.log('全局里面配置请求前的处理操作');
        _globalAjaxLoadingLayer = layer.open({
            type: 2,
            content: '加载中',
            shadeClose: false // 设置加载层不能点击关闭
        });
    },
    complete: function () {
        console.log('全局里面配置请求完成的操作');
        layer.close(_globalAjaxLoadingLayer);
    }
});