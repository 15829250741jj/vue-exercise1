// 后端提供的数据
var datas = [
  { pName: '飞鸽牌自行车', pCount: 2, price: 200 },
  { pName: 'iPhoneX', pCount: 1, price: 8000 },
  { pName: '飞鸽牌自行车', pCount: 2, price: 200 },
  { pName: '三陵老粗布', pCount: 4, price: 100 },
  { pName: '荣耀8', pCount: 2, price: 1600 },
  { pName: '荣耀9', pCount: 1, price: 2100 },
  { pName: '水杯', pCount: 10, price: 5 },
  { pName: '奶粉', pCount: 30, price: 6 }
];
//[动态生成表格]
$('#btn').click(function () {
  for (var i = 0; i < datas.length; i++) {
    var obj = datas[i];
    // 创建tr
    var $tr = $('<tr></tr>');
    $('tbody').append($tr);
    //创建第一个td
    $('<td><input type="checkbox"></td>').appendTo($tr);
    //创建第二个td
    $('<td></td>').text(obj.pName).appendTo($tr);
    //创建第三个td
    $td = $('<td></td>');
    $td.appendTo($tr);
    //给第三个td中加入第一个Input
    $('<button class="reduce">-</button>').appendTo($td);
    $('<input type="text" readonly/>').val(obj.pCount).appendTo($td);
    $('<button class="add">+</button>').appendTo($td);
    // /创建第四个td
    $('<td></td>').text(obj.price).appendTo($tr);
    //创建第五个td
    $('<td></td>').text(obj.price * obj.pCount).appendTo($tr);
    //创建第6个td
    $('<td><a href="#" class="del">删除</a></td>').appendTo($tr);
  }
  fn2();
  f4();
  f5()

});
//功能1：点击表头控制全选
$('#all').click(function () {
  var isC = $(this).prop('checked');
  $('tbody input[type=checkbox]').prop('checked', isC);
  totalPrice();
});
//功能2：点击tbody控制thead
function fn2() {
  $('tbody input[type="checkbox"]').click(function () {
    var len1 = $('tbody input[type=checkbox]').length;
    var len2 = $('tbody input[type=checkbox]:checked').length;
    if (len1 == len2) {
      $('thead input[type="checkbox"]').prop('checked', true);
    } else {
      $('thead input[type="checkbox"]').prop('checked', false);
    }
    totalPrice();
  });
}
//功能3：计算总价格
function totalPrice() {
  var sum = 0;
  var $cks = $('tbody input[type="checkbox"]:checked');
  for (var i = 0; i < $cks.length; i++) {
    var total = $cks.eq(i)
      .parent()
      .parent()
      .children()
      .eq(4)
      .text();
    sum += Number(total);
  }
  $('.total').text(sum);
}
//功能4：点击加减按钮实现购物车操作
function f4() {
  //点击加操作
  $('.add').click(function () {
    var count = $(this).prev().val();
    count = Number(count) + 1;
    $(this).prev().val(count);
    //更改复选框的选择状态
    $(this).parent().prev().prev().find('input').prop('checked', true);
    //更改小计
    var price = $(this).parent().next().text();
    $(this).parent().next().next().text(count * price);
    totalPrice();
  });
  //点击减操作
  $('.reduce').click(function () {
    var count = $(this).next().val();
    count = Number(count) - 1;
    if (count < 1) {
      count=1;
    } 
    $(this).next().val(count);
    var price = $(this).parent().next().text();
    $(this).parent().prev().prev().find('input').prop('ckecked', true);
    $(this).parent().next().next().text(count * price);
    totalPrice();
  })
}
//功能5：点击删除按钮实现删除功能
function f5() {
  $('.del').click(function () {
    var isOk = confirm('您真的要删除吗？');
    if (isOk) {
      $(this).parent().parent().remove();
      totalPrice();
    }
  });
}
//功能6：清空购物车
$('#clear').click(function(){
  var isOk=confirm('确定要清空吗？');
  if(isOk){
    $('tbody').remove();
    $('thead input[type=checkbox]').prop('checked',false);
    totalPrice();
  }
});
