(function ($) {
    var timer = 1.2;
    $(function () {
        var name;
        var list = uniq(names);
        var length = list.length;
        console.log(length);
        setInterval(function () {
            name = list[Math.round(Math.random() * length)];
            if (name.length > 2) {
                $('#result').html(name);
            }
        }, timer * 1000);
    });

    // 去重
    function uniq(array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    }
})(jQuery);

