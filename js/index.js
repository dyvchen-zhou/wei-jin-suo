$(function() {
    /*1. 初始化tab成一个区域滚动效果*/
    /*2. 条件：父容器套着自容器*/
    /*3. 自容器的尺寸大于父容器才能滑动  让UL足够宽正好放下7LI*/
    var $parent = $('.parent');
    var $ul = $parent.find('ul');
    var width = 0;
    $parent.find('li').each(function(i, ele) {
        width += $(ele).outerWidth(true);
    });
    /*5. 宽度累加的不够  需要包含外边距*/
    /*width() 获取的是元素内容的宽度*/
    /*outerWidth(true) 获取的是包含 外边距 边框 内边距 内容 宽度*/
    /*6. 初始化区域滚动组件*/
    $ul.width(width);
    $parent.css({ overflow: 'hidden' });

    new IScroll($parent[0], {
        scrollX: true,
        screenY: false
    });


    //初始化提示框
    $('[data-toggle="tooltip"]').tooltip()
})