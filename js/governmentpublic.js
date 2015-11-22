/**
 * Created by CYA on 2015/11/18.
 */
window.onload = function () {
    //获取相应的DIV的点击事件，然后放到数组中，注意数组是从下表为0开始的。
    var click_1=document.getElementById("center_1_manue_top_1 ");
    var click_2=document.getElementById("center_1_manue_top_2 ");
    var click_3=document.getElementById("center_1_manue_top_3 ");
    var click_4=document.getElementById("center_1_manue_top_4 ");
    var click_5=document.getElementById("center_1_manue_top_5 ");
    var arr=[click_1,click_2,click_3,click_4,click_5];

    //获取相应的center_1_manue_bottom_1 展示出来
    var divshow_1=document.getElementById("center_1_manue_bottom_1");
    var divshow_2=document.getElementById("center_1_manue_bottom_2");
    var divshow_3=document.getElementById("center_1_manue_bottom_3");
    var divshow_4=document.getElementById("center_1_manue_bottom_4");
    var divshow_5=document.getElementById("center_1_manue_bottom_5");

    var arrdivshow=[divshow_1,divshow_2,divshow_3,divshow_4,divshow_5];

    click_1.addEventListener("mouseover",function(){
        click_1.className="changebackgroundcolor center_1_manue_top_1 float common";
        arrdivshow[0].className="center_1_manue_bottom displayok";
        for(var i=1;i<=4;i++){
            arr[i].className="writebackgroundcolor center_1_manue_top_1 float common";
            arrdivshow[i].className="displaynone";
        }
    })
    click_2.addEventListener("mouseover",function(){
        click_2.className="changebackgroundcolor center_1_manue_top_1 float common";//改变该DIV的颜色
        arrdivshow[1].className="center_1_manue_bottom displayok";
        for(var i=0;i<=4;i++){
            if(i==1){
                arr[1].className="changebackgroundcolor center_1_manue_top_1 float common";
            }
            else{
                arr[i].className="writebackgroundcolor center_1_manue_top_1 float common";
                arrdivshow[i].className="center_1_manue_bottom displaynone";
            }
        }
    })
    click_3.addEventListener("mouseover",function(){
        click_2.className="changebackgroundcolor center_1_manue_top_1 float common";
        arrdivshow[2].className="center_1_manue_bottom displayok";
        for(var i=0;i<=4;i++){
            if(i==2){
                arr[2].className="changebackgroundcolor center_1_manue_top_1 float common";
            }
            else{
                arr[i].className="writebackgroundcolor center_1_manue_top_1 float common";
                arrdivshow[i].className="center_1_manue_bottom displaynone";
            }
        }
    })
    click_4.addEventListener("mouseover",function(){
        click_4.className="changebackgroundcolor center_1_manue_top_1 float common";
        arrdivshow[3].className="center_1_manue_bottom displayok";
        for(var i=0;i<=4;i++){
            if(i==3){
                arr[3].className="changebackgroundcolor center_1_manue_top_1 float common";
            }
            else{
                arr[i].className="writebackgroundcolor center_1_manue_top_1 float common";
                arrdivshow[i].className="center_1_manue_bottom displaynone";
            }
        }
    })
    click_5.addEventListener("mouseover",function(){
        click_5.className="changebackgroundcolor center_1_manue_top_1 float common";
        arrdivshow[4].className="center_1_manue_bottom displayok";
        for(var i=0;i<=4;i++){
            if(i==4){
                arr[4].className="changebackgroundcolor center_1_manue_top_1 float common";
            }
            else{
                arr[i].className="writebackgroundcolor center_1_manue_top_1 float common";
                arrdivshow[i].className="center_1_manue_bottom displaynone";
            }
        }
    })
    //上面的manue
    var  center_1=document.getElementById("center_3_right_manue_list_1");
    var  center_2=document.getElementById("center_3_right_manue_list_2");
    var  center_3=document.getElementById("center_3_right_manue_list_3");
    var  center_4=document.getElementById("center_3_right_manue_list_4");
    var  center_5=document.getElementById("center_3_right_manue_list_5");

    var  center=[center_1,center_2,center_3,center_4,center_5];
    //下面的显示列表
    var center_list_1=document.getElementById("center_3_right_list_list_1");
    var center_list_2=document.getElementById("center_3_right_list_list_2");
    var center_list_3=document.getElementById("center_3_right_list_list_3");
    var center_list_4=document.getElementById("center_3_right_list_list_4");
    var center_list_5=document.getElementById("center_3_right_list_list_5");
    var ceter_list=[center_list_1,center_list_2,center_list_3,center_list_4,center_list_5];//将列表放入数组中
    center_1.addEventListener("mouseover",function(){//触发鼠标经过事件
        center_1.className="center_3_right_manue_list_1 float center_3_right_manue_list_common blue";
        center_list_1.className="center_3_right_list_list float displayok";
        for(var i=1;i<=4;i++){
            center[i].className="center_3_right_manue_list_2 float center_3_right_manue_list_common";
            ceter_list[i].className="center_3_right_list_list float displaynone";
        }
    })
    center_2.addEventListener("mouseover",function(){//触发鼠标经过事件
        center_list_2.className="center_3_right_list_list float displayok";
        for(var i=0;i<=4;i++){
            if(i==1){
                center_2.className="center_3_right_manue_list_1 float center_3_right_manue_list_common blue";
            }else{
                center[i].className="center_3_right_manue_list_2 float center_3_right_manue_list_common";
                ceter_list[i].className="center_3_right_list_list float displaynone";
            }
        }
    })
    center_3.addEventListener("mouseover",function(){//触发鼠标经过事件
        center_list_3.className="center_3_right_list_list float displayok";
        for(var i=0;i<=4;i++){
            if(i==2){
                center_3.className="center_3_right_manue_list_1 float center_3_right_manue_list_common blue";
            }else{
                center[i].className="center_3_right_manue_list_2 float center_3_right_manue_list_common";
                ceter_list[i].className="center_3_right_list_list float displaynone";
            }
            //ceter_list[i].className="displaynone";
        }
    })
    center_4.addEventListener("mouseover",function(){//触发鼠标经过事件
        center_list_4.className="center_3_right_list_list float displayok";
        for(var i=0;i<=4;i++){
            if(i==3){
                center_4.className="center_3_right_manue_list_1 float center_3_right_manue_list_common blue";
            }else{
                center[i].className="center_3_right_manue_list_2 float center_3_right_manue_list_common";
                ceter_list[i].className="center_3_right_list_list float displaynone";
            }
            //ceter_list[i].className="displaynone";
        }
    })
    center_5.addEventListener("mouseover",function(){//触发鼠标经过事件
        center_list_5.className="center_3_right_list_list float displayok";
        for(var i=0;i<=4;i++){
            if(i==4){
                center_5.className="center_3_right_manue_list_1 float center_3_right_manue_list_common blue";
            }else{
                center[i].className="center_3_right_manue_list_2 float center_3_right_manue_list_common";
                ceter_list[i].className="center_3_right_list_list float displaynone";
            }

        }
    })
};