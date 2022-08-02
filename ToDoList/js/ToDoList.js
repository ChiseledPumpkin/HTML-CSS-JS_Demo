$(function() {
    // 打开或刷新页面时加载并渲染一次
    loadData();
    $('#title').on('keydown', function(event) {
        // 键盘事件检测是否输入回车 以及输入不能为空
        if (event.keyCode === 13 && $(this).val() != '') {
            var local = getData();
            local.push({ title: $(this).val(), done: false }); // 将输入框的内容添加进数组
            saveData(local);
            $(this).val(''); // 保存完成后，清空输入框
            loadData();
        }
    })

    // 删除
    $('ol, ul').on('click', 'a', function() { // 事件委托
        var data = getData();
        var index = $(this).attr('id'); // 获取a的id属性作为索引
        data.splice(index, 1); // 移除索引对应的数据
        saveData(data);
        loadData();
    })

    // todolist 正在进行和已完成之间的选项操作
    $('ol, ul').on('click', 'input', function() { // 事件委托
        var data = getData();
        var index = $(this).siblings('a').attr('id');
        data[index].done = $(this).prop('checked');
        saveData(data);
        loadData();
    })

    // 读取本地存储数据
    function getData() {
        var data = localStorage.getItem('CPTodolist');
        if (data) {
            return JSON.parse(data); // 将本地字符串数据解析成原数据类型
        } else {
            return [];
        }
    }

    // 数据保存到本地
    function saveData(data) {
        localStorage.setItem('CPTodolist', JSON.stringify(data)); // 将数组转换成字符串保存，本地数据只能保存字符串形式
    }

    // 刷新加载数据
    function loadData() {
        // 获取本地数据
        var data = getData();
        // 遍历之前清空列表里的内容
        $('ol, ul').empty();
        var todocount = 0; // 正在进行的清单个数
        var donecount = 0;
        // 遍历数组
        $.each(data, function(i, n) {
            if (n.done) {
                $('ul').prepend('<li><input type="checkbox" checked="true"><p>' + n.title + '</p><a href="javascript:;" id=' + i + '></a></li>');
                donecount++;
            } else {
                $('ol').prepend('<li><input type="checkbox"><p>' + n.title + '</p><a href="javascript:;" id=' + i + '></a></li>');
                todocount++
            }
        })
        $('#todocount').text(todocount);
        $('#donecount').text(donecount);
    }
})