var informationString = "yourinfomation";
var data = null;
function setContent(all) {
    console.log(all);
    document.getElementById("gys_name_content").innerHTML = all.Supplier.name;
    document.getElementById("gys_type_content").innerHTML = all.Supplier.additional.type;
    document.getElementById("gys_num_content").innerHTML = all.Supplier.additional.num;
    document.getElementById("gys_person_content").innerHTML = all.Supplier.additional.person;
    document.getElementById("dd_num_content").innerHTML = all.number;
    document.getElementById("dd_money_content").innerHTML = all.money;
    document.getElementById("begintime").innerHTML = all.createTime.substring(0,10);
    document.getElementById("endtime").innerHTML = all.endTime.substring(0,10);
}
function showDetail(){
    document.getElementById("bg").style.display = "block";
    setContent(data.order[0]);
}
function hideDetail(){
    document.getElementById("bg").style.display = "none";
}
// window.onload = function () {
//     $(document).ready(function () {
//         $.ajax({
//             url: '../../json/listtest_dd.json',
//             async: true,
//             success: function (e) {
//                 data = e;
//             }
//         });
//     });
//     document.getElementById("bg").style.display = "none";
// };