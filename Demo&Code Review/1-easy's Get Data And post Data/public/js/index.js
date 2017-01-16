$(function () {
    // 保存按钮的请求
    $('#btnSave').click(function () {
        var name1 = $('#name').val();
        var age1 = $('#age').val();
        $.ajax({
            url: "/api/save_data",
            method: "post",
            data: { name: name1, age: age1 },
            success: function (res) {
                console.log('数据发送成功');
                console.log(res);
                 name1 = $('#name').val('');
                 age1 = $('#age').val('');
            },
            error: function (err) {
                console.log(err);
            }

        });
    });

    $('#btnGet').click(function () { 
        $.ajax({
            type: "get",
            url: "/api/get_data",
            success: function (response) {
                $('#showData').html('')
                response.data.reverse().forEach(function (item) {
                    var p = $('<p></p>')
                     p.html('我的名字是：' + item.name + '年龄：' + item.age + '岁')
                     $('#showData').append(p);
                  })
                
            },
            error: function (err) {
                console.log(err);
              }

        });
     })


})

