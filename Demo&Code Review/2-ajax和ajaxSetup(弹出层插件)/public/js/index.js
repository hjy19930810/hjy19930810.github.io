
$(function () {
    $('#btnGet').bind('click', function () {
        // var loadingLayer;
        $.ajax({
            method: "get",
            url: "/api/get_data",
            timeout: 5000,
            data: "",
            dataType: "json",
            // beforeSend: function () {
            //     console.log('请求发送前');
            //     loadingLayer = layer.open({
            //         type: 2,
            //         content: '数据加载中',
            //         shadeClose: false
            //     })
            // },
            success: function (response) {
                console.log('全局里面配置请求成功的处理操作');
                console.dir(response);
                var div = $('<div></div>')
                div.html('响应的数据的值：' + response.result)
                $('#content').append(div)

            },
            error: function (error) {
                console.log('req faile');
                console.dir(error);
            },
            // complete: function () {
            //     console.log('请求完成,并且关闭弹窗');
            //     layer.close(loadingLayer);
            // }
        })
    })

});