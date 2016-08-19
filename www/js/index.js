/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
//圓
(function ($){

    $.fn.bekeyProgressbar = function(options){

        options = $.extend({
        	animate     : true,
          animateText : true
        }, options);

        var $this = $(this);
      
        var $progressBar = $this;
        var $progressCount = $progressBar.find('.ProgressBar-percentage--count');
        var $circle = $progressBar.find('.ProgressBar-circle');
        // var percentageProgress = $progressBar.attr('data-progress');
        var percentageProgress = $progressBar.attr('value');
        
        var percentageRemaining = (100 - percentageProgress);
        // var percentageText = $progressCount.parent().attr('data-progress');
        var percentageText = $progressCount.parent().attr('value');
        
      
        //Calcule la circonférence du cercle
        var radius = $circle.attr('r');
        var diameter = radius * 2;
        var circumference = Math.round(Math.PI * diameter);

        //Calcule le pourcentage d'avancement
        var percentage =  circumference * percentageRemaining / 100;

        $circle.css({
          'stroke-dasharray' : circumference,
          'stroke-dashoffset' : percentage
        })
        
        //Animation de la barre de progression
        if(options.animate === true){
          $circle.css({
            'stroke-dashoffset' : circumference
          }).animate({
            'stroke-dashoffset' : percentage
          }, 3000 )
        }
        
        //Animation du texte (pourcentage)
        if(options.animateText == true){
 
          $({ Counter: 0 }).animate(
            { Counter: percentageText },
            { duration: 3000,
             step: function () {
               $progressCount.text( Math.ceil(this.Counter) + '');
             }
            });

        }else{
          $progressCount.text( percentageText + '');
        }
      
    };

})(jQuery);

$(document).ready(function(){
  
  $('.ProgressBar--animateNone').bekeyProgressbar({
    animate : false,
    animateText : false
  });
  
  $('.ProgressBar--animateCircle').bekeyProgressbar({
    animate : true,
    animateText : false
  });
  
  $('.ProgressBar--animateText').bekeyProgressbar({
    animate : false,
    animateText : true
  });
  
  $('.ProgressBar--animateAll').bekeyProgressbar();
  
})
//時間
var timer ={
    ShowTime:function(){
    　var NowDate=new Date();
    　var h=NowDate.getHours();
    　var m=NowDate.getMinutes();
    　var s=NowDate.getSeconds();　
    　document.getElementById('showbox').innerHTML = h+'點'+m+'分'+s+'秒';
    　setTimeout('ShowTime()',1000);
    }
}
//查詢資料
var sent_data = {
    
    all_data: function(str) {
        var xhttp;
        if (str.length == 0) {
            document.getElementById("txtHint").innerHTML = "";
            return;
        }
        xhttp = new XMLHttpRequest();
        //xmlhttp.overrideMimeType("text/html;charset=UTF-8");
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("txtHint").innerHTML = xhttp.responseText;
            }
        };
        //測站陣列
        var sitename_to_number = [
        '基隆',
        '嘉義',
        '美濃','大寮','橋頭','仁武','鳳山','林園','楠梓','左營','前金','前鎮','小港','復興',
        '汐止','萬里','新店','土城','板橋','新莊','菜寮','林口','淡水','三重','永和',
        '士林','中山','萬華','古亭','松山','大同','陽明',
        '桃園','大園','觀音','平鎮','龍潭','中壢',
        '湖口','竹東',
        '新竹',
        '頭份','苗栗','三義',
        '豐原','沙鹿','大里','忠明','西屯',
        '彰化','線西','二林',
        '南投','竹山','埔里',
        '斗六','崙背','臺西','麥寮',
        '新港','朴子',
        '新營','善化','安南','臺南',
        '屏東','潮州','恆春',
        '臺東','關山',
        '宜蘭','冬山',
        '花蓮',
        '馬公',
        '馬祖',
        '金門',
        ];
        for (var i = 0; i < sitename_to_number.length; i++) {
            if(sitename_to_number[i] == str)
            {
            //alert(str);
            //alert(i);
            str=i;
            }
            
        }
        xhttp.open("GET", "http://140.130.35.62/csie40243142/app_php/sitename.php?q="+str, true);
        //xhttp.open("GET", "http://localhost:8888/php/sitename.php?q="+str, true);
        xhttp.send();
    },
    pm25_data: function(str) {
            var xhttp;
            // if (str.length == 0) {
            //     document.getElementById("txtHint").innerHTML = "";
            //     return;
            // }
            xhttp = new XMLHttpRequest();
            //xmlhttp.overrideMimeType("text/html;charset=UTF-8");
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                   var str = document.getElementById("circle_number");
                   str.value = "12";
                  

                  
                  var circle_color=document.getElementById("circle_color");
                    if (xhttp.responseText<12) 
                    {
                      circle_color.style="#99ff66";
                    }else if(xhttp.responseText>=12 && xhttp.responseText<24)
                    {
                      circle_color.style="#1aff1a";
                    }else if(xhttp.responseText>=24 && xhttp.responseText<36)
                    {
                      circle_color.style="#009900";
                    }else if(xhttp.responseText>=36 && xhttp.responseText<42)
                    {
                      circle_color.style="#ffff1a";
                    }else if(xhttp.responseText>=42 && xhttp.responseText<48)
                    {
                      circle_color.style="#ffcc00";
                    }else if(xhttp.responseText>=48 && xhttp.responseText<54)
                    {
                      circle_color.style="#ff9900";
                    }else if(xhttp.responseText>=54 && xhttp.responseText<59)
                    {
                      circle_color.style="#ff5050";
                    }else if(xhttp.responseText>=59 && xhttp.responseText<65)
                    {
                      circle_color.style="#cc0000";
                    }else if(xhttp.responseText>=65)
                    {
                      circle_color.style="#9900cc";
                    }
                    // str.innerHTML=xhttp.responseText;
                   
              }
            };
            var sitename_to_number = [
            '基隆',
            '嘉義',
            '美濃','大寮','橋頭','仁武','鳳山','林園','楠梓','左營','前金','前鎮','小港','復興',
            '汐止','萬里','新店','土城','板橋','新莊','菜寮','林口','淡水','三重','永和',
            '士林','中山','萬華','古亭','松山','大同','陽明',
            '桃園','大園','觀音','平鎮','龍潭','中壢',
            '湖口','竹東',
            '新竹',
            '頭份','苗栗','三義',
            '豐原','沙鹿','大里','忠明','西屯',
            '彰化','線西','二林',
            '南投','竹山','埔里',
            '斗六','崙背','臺西','麥寮',
            '新港','朴子',
            '新營','善化','安南','臺南',
            '屏東','潮州','恆春',
            '臺東','關山',
            '宜蘭','冬山',
            '花蓮',
            '馬公',
            '馬祖',
            '金門',
            ];
            for (var i = 0; i < sitename_to_number.length; i++) {
              if(sitename_to_number[i] == str)
              {
              //alert(str);
              //alert(i);
              str=i;
              }           
            }
        xhttp.open("GET", "http://140.130.35.62/csie40243142/app_php/pm25_data.php?q="+str, true);
        //xhttp.open("GET", "http://localhost:8888/php/sitename.php?q="+str, true);
        xhttp.send();
      }
    
};
var gps={
    
    Array2DVar:function(x,y) {  // 定義二維陣列原型
        this.length = x;
        this.x = x;  // x 維度長度
        this.y = y;  // y 維度長度
        for(var i = 0; i < this.length; i++)  // 初始各元素值為 null
        this[i] = new Array(y);  // this 代表物件本身
    },

    onDeviceReady: function() {},
    getCurrentPosition: function(){
     
    //var obj = JSON.parse("../sitename_gps.json");    
    var a2dv = new this.Array2DVar(100, 10);  // 建立新的 10*10 的二維陣列
  var i=0;
    a2dv[i][0]='臺東';
      a2dv[i][1]='Taitung';
      a2dv[i][2]='花東空品區';
      a2dv[i][3]='臺東縣';
      a2dv[i][4]='臺東市';
      a2dv[i][5]='臺東市中山路276號';
      a2dv[i][6]=121.1504500000;
      a2dv[i][7]=22.7553580000;
  i++;
    a2dv[i][0]='臺南';
      a2dv[i][1]='Tainan';
      a2dv[i][2]='雲嘉南空品區';
      a2dv[i][3]='臺南市';
      a2dv[i][4]='中西區';
      a2dv[i][5]='臺南市中西區南寧街45號';
      a2dv[i][6]=120.2026170000;
      a2dv[i][7]=22.9845810000;
  i++;
    a2dv[i][0]='臺西';
      a2dv[i][1]='Taixi';
      a2dv[i][2]='雲嘉南空品區';
      a2dv[i][3]='雲林縣';
      a2dv[i][4]='臺西鄉';
      a2dv[i][5]='雲林縣臺西鄉五港路505號';
      a2dv[i][6]=120.2028420000;
      a2dv[i][7]=23.7175330000;
  i++;
    a2dv[i][0]='觀音';
      a2dv[i][1]='Guanyin';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='桃園市';
      a2dv[i][4]='觀音區';
      a2dv[i][5]='桃園市觀音區文化路2號';
      a2dv[i][6]=121.0827610000;
      a2dv[i][7]=25.0355030000;
  i++;
    a2dv[i][0]='關山';
      a2dv[i][1]='Guanshan';
      a2dv[i][2]='花東空品區';
      a2dv[i][3]='臺東縣';
      a2dv[i][4]='關山鎮';
      a2dv[i][5]='臺東縣關山鎮自強路66號';
      a2dv[i][6]=121.1619330000;
      a2dv[i][7]=23.0450830000;
  i++;
    a2dv[i][0]='豐原';
      a2dv[i][1]='Fengyuan';
      a2dv[i][2]='中部空品區';
      a2dv[i][3]='臺中市';
      a2dv[i][4]='豐原區';
      a2dv[i][5]='臺中市豐原區水源路150號';
      a2dv[i][6]=120.7417110000;
      a2dv[i][7]=24.2565860000;
  i++;
    a2dv[i][0]='龍潭';
      a2dv[i][1]='Longtan';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='桃園市';
      a2dv[i][4]='龍潭區';
      a2dv[i][5]='桃園市龍潭區中正路210號';
      a2dv[i][6]=121.2163500000;
      a2dv[i][7]=24.8638690000;
  i++;
    a2dv[i][0]='頭份';
      a2dv[i][1]='Toufen';
      a2dv[i][2]='竹苗空品區';
      a2dv[i][3]='苗栗縣';
      a2dv[i][4]='頭份鎮';
      a2dv[i][5]='苗栗縣頭份鎮文化街20號';
      a2dv[i][6]=120.8985720000;
      a2dv[i][7]=24.6969690000;
  i++;
    a2dv[i][0]='橋頭';
      a2dv[i][1]='Qiaotou';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='橋頭區';
      a2dv[i][5]='高雄市橋頭區隆豐北路1號';
      a2dv[i][6]=120.3056890000;
      a2dv[i][7]=22.7575060000;
  i++;
    a2dv[i][0]='線西';
      a2dv[i][1]='Xianxi';
      a2dv[i][2]='中部空品區';
      a2dv[i][3]='彰化縣';
      a2dv[i][4]='線西鄉';
      a2dv[i][5]='彰化縣線西鄉寓埔村中央路二段145號';
      a2dv[i][6]=120.4690610000;
      a2dv[i][7]=24.1316720000;
  i++;
    a2dv[i][0]='潮州';
      a2dv[i][1]='Chaozhou';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='屏東縣';
      a2dv[i][4]='潮州鎮';
      a2dv[i][5]='屏東縣潮州鎮九塊里復興路66號';
      a2dv[i][6]=120.5611750000;
      a2dv[i][7]=22.5231080000;
  i++;
    a2dv[i][0]='鳳山';
      a2dv[i][1]='Fengshan';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='鳳山區';
      a2dv[i][5]='高雄市鳳山區曹公路6號';
      a2dv[i][6]=120.3580830000;
      a2dv[i][7]=22.6273920000;
  i++;
    a2dv[i][0]='彰化';
      a2dv[i][1]='Changhua';
      a2dv[i][2]='中部空品區';
      a2dv[i][3]='彰化縣';
      a2dv[i][4]='彰化市';
      a2dv[i][5]='彰化縣彰化市文心街55號';
      a2dv[i][6]=120.5415190000;
      a2dv[i][7]=24.0660000000;
  i++;
    a2dv[i][0]='嘉義';
      a2dv[i][1]='Chiayi';
      a2dv[i][2]='雲嘉南空品區';
      a2dv[i][3]='嘉義市';
      a2dv[i][4]='西區';
      a2dv[i][5]='嘉義市西區新民路580號';
      a2dv[i][6]=120.4408330000;
      a2dv[i][7]=23.4627780000;
  i++;
    a2dv[i][0]='萬華';
      a2dv[i][1]='Wanhua';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='臺北市';
      a2dv[i][4]='萬華區';
      a2dv[i][5]='臺北市萬華區中華路1段66號';
      a2dv[i][6]=121.5079720000;
      a2dv[i][7]=25.0465030000;
  i++;
    a2dv[i][0]='萬里';
      a2dv[i][1]='Wanli';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='新北市';
      a2dv[i][4]='萬里區';
      a2dv[i][5]='新北市萬里區瑪鋉路221號';
      a2dv[i][6]=121.6898810000;
      a2dv[i][7]=25.1796670000;
  i++;
    a2dv[i][0]='楠梓';
      a2dv[i][1]='Nanzi';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='楠梓區';
      a2dv[i][5]='高雄市楠梓區楠梓路262號';
      a2dv[i][6]=120.3282890000;
      a2dv[i][7]=22.7336670000;
  i++;
    a2dv[i][0]='新營';
      a2dv[i][1]='Xinying';
      a2dv[i][2]='雲嘉南空品區';
      a2dv[i][3]='臺南市';
      a2dv[i][4]='新營區';
      a2dv[i][5]='臺南市新營區中正路4號';
      a2dv[i][6]=120.3172500000;
      a2dv[i][7]=23.3056330000;
  i++;
    a2dv[i][0]='新港';
      a2dv[i][1]='Xingang';
      a2dv[i][2]='雲嘉南空品區';
      a2dv[i][3]='嘉義縣';
      a2dv[i][4]='新港鄉';
      a2dv[i][5]='嘉義縣新港鄉登雲路105號';
      a2dv[i][6]=120.3455310000;
      a2dv[i][7]=23.5548390000;
  i++;
    a2dv[i][0]='新莊';
      a2dv[i][1]='Xinzhuang';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='新北市';
      a2dv[i][4]='新莊區';
      a2dv[i][5]='新北市新莊區中正路510號';
      a2dv[i][6]=121.4325000000;
      a2dv[i][7]=25.0379720000;
  i++;
    a2dv[i][0]='新店';
      a2dv[i][1]='Xindian';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='新北市';
      a2dv[i][4]='新店區';
      a2dv[i][5]='新北市新店區民族路108號';
      a2dv[i][6]=121.5377780000;
      a2dv[i][7]=24.9772220000;
  i++;
    a2dv[i][0]='新竹';
      a2dv[i][1]='Hsinchu';
      a2dv[i][2]='竹苗空品區';
      a2dv[i][3]='新竹市';
      a2dv[i][4]='東區';
      a2dv[i][5]='新竹市民族路33號';
      a2dv[i][6]=120.9720750000;
      a2dv[i][7]=24.8056190000;
  i++;
    a2dv[i][0]='陽明';
      a2dv[i][1]='Yangming';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='臺北市';
      a2dv[i][4]='北投區';
      a2dv[i][5]='臺北市北投區竹子湖路111號';
      a2dv[i][6]=121.5295830000;
      a2dv[i][7]=25.1827220000;
  i++;
    a2dv[i][0]='菜寮';
      a2dv[i][1]='Cailiao';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='新北市';
      a2dv[i][4]='三重區';
      a2dv[i][5]='新北市三重區中正北路163號';
      a2dv[i][6]=121.4810280000;
      a2dv[i][7]=25.0689500000;
  i++;
    a2dv[i][0]='善化';
      a2dv[i][1]='Shanhua';
      a2dv[i][2]='雲嘉南空品區';
      a2dv[i][3]='臺南市';
      a2dv[i][4]='善化區';
      a2dv[i][5]='臺南市善化區益名寮60號';
      a2dv[i][6]=120.2971420000;
      a2dv[i][7]=23.1150970000;
  i++;
    a2dv[i][0]='湖口';
      a2dv[i][1]='Hukou';
      a2dv[i][2]='竹苗空品區';
      a2dv[i][3]='新竹縣';
      a2dv[i][4]='湖口鄉';
      a2dv[i][5]='新竹縣湖口鄉成功路360號';
      a2dv[i][6]=121.0386530000;
      a2dv[i][7]=24.9001420000;
  i++;
    a2dv[i][0]='復興';
      a2dv[i][1]='Fuxing';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='前鎮區';
      a2dv[i][5]='高雄市前鎮區民權二路331號';
      a2dv[i][6]=120.3120170000;
      a2dv[i][7]=22.6087110000;
  i++;
    a2dv[i][0]='麥寮';
      a2dv[i][1]='Mailiao';
      a2dv[i][2]='雲嘉南空品區';
      a2dv[i][3]='雲林縣';
      a2dv[i][4]='麥寮鄉';
      a2dv[i][5]='雲林縣麥寮鄉中興路115號';
      a2dv[i][6]=120.2518250000;
      a2dv[i][7]=23.7535060000;
  i++;
    a2dv[i][0]='淡水';
      a2dv[i][1]='Tamsui';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='新北市';
      a2dv[i][4]='淡水區';
      a2dv[i][5]='新北市淡水區中正東路42巷6號';
      a2dv[i][6]=121.4492390000;
      a2dv[i][7]=25.1645000000;
  i++;
    a2dv[i][0]='崙背';
      a2dv[i][1]='Lunbei';
      a2dv[i][2]='雲嘉南空品區';
      a2dv[i][3]='雲林縣';
      a2dv[i][4]='崙背鄉';
      a2dv[i][5]='雲林縣崙背鄉南陽村大成路91號';
      a2dv[i][6]=120.3487420000;
      a2dv[i][7]=23.7575470000;
  i++;
    a2dv[i][0]='基隆';
      a2dv[i][1]='Keelung';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='基隆市';
      a2dv[i][4]='信義區';
      a2dv[i][5]='基隆市東信路324號';
      a2dv[i][6]=121.7600560000;
      a2dv[i][7]=25.1291670000;
  i++;
    a2dv[i][0]='馬祖';
      a2dv[i][1]='Matsu';
      a2dv[i][2]='其他';
      a2dv[i][3]='連江縣';
      a2dv[i][4]='南竿鄉';
      a2dv[i][5]='連江縣南竿鄉介壽村13號';
      a2dv[i][6]=119.9498750000;
      a2dv[i][7]=26.1604690000;
  i++;
    a2dv[i][0]='馬公';
      a2dv[i][1]='Magong';
      a2dv[i][2]='其他';
      a2dv[i][3]='澎湖縣';
      a2dv[i][4]='馬公市';
      a2dv[i][5]='澎湖縣馬公市中正路115號';
      a2dv[i][6]=119.5661580000;
      a2dv[i][7]=23.5690310000;
  i++;
    a2dv[i][0]='桃園';
      a2dv[i][1]='Taoyuan';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='桃園市';
      a2dv[i][4]='桃園區';
      a2dv[i][5]='桃園市桃園區成功路二段144號';
      a2dv[i][6]=121.3199640000;
      a2dv[i][7]=24.9947890000;
  i++;
    a2dv[i][0]='埔里';
      a2dv[i][1]='Puli';
      a2dv[i][2]='中部空品區';
      a2dv[i][3]='南投縣';
      a2dv[i][4]='埔里鎮';
      a2dv[i][5]='南投縣埔里鎮西安路一段193號';
      a2dv[i][6]=120.9679030000;
      a2dv[i][7]=23.9688420000;
  i++;
    a2dv[i][0]='苗栗';
      a2dv[i][1]='Miaoli';
      a2dv[i][2]='竹苗空品區';
      a2dv[i][3]='苗栗縣';
      a2dv[i][4]='苗栗市';
      a2dv[i][5]='苗栗市縣府路100號';
      a2dv[i][6]=120.8202000000;
      a2dv[i][7]=24.5652690000;
  i++;
    a2dv[i][0]='美濃';
      a2dv[i][1]='Meinong';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='美濃區';
      a2dv[i][5]='高雄市美濃區中壇里忠孝路19號';
      a2dv[i][6]=120.5305420000;
      a2dv[i][7]=22.8835830000;
  i++;
    a2dv[i][0]='恆春';
      a2dv[i][1]='Hengchun';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='屏東縣';
      a2dv[i][4]='恆春鎮';
      a2dv[i][5]='屏東縣恆春鎮公園路44號';
      a2dv[i][6]=120.7889280000;
      a2dv[i][7]=21.9580690000;
  i++;
    a2dv[i][0]='屏東';
      a2dv[i][1]='Pingtung';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='屏東縣';
      a2dv[i][4]='屏東市';
      a2dv[i][5]='屏東市蘇州街75號';
      a2dv[i][6]=120.4880330000;
      a2dv[i][7]=22.6730810000;
  i++;
    a2dv[i][0]='南投';
      a2dv[i][1]='Nantou';
      a2dv[i][2]='中部空品區';
      a2dv[i][3]='南投縣';
      a2dv[i][4]='南投市';
      a2dv[i][5]='南投市南陽路269號';
      a2dv[i][6]=120.6853060000;
      a2dv[i][7]=23.9130000000;
  i++;
    a2dv[i][0]='前鎮';
      a2dv[i][1]='Qianzhen';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='前鎮區';
      a2dv[i][5]='高雄市前鎮區中山三路43號';
      a2dv[i][6]=120.3075640000;
      a2dv[i][7]=22.6053860000;
  i++;
    a2dv[i][0]='前金';
      a2dv[i][1]='Qianjin';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='前金區';
      a2dv[i][5]='高雄市前金區河南二路196號';
      a2dv[i][6]=120.2880860000;
      a2dv[i][7]=22.6325670000;
  i++;
    a2dv[i][0]='金門';
      a2dv[i][1]='Kinmen';
      a2dv[i][2]='其他';
      a2dv[i][3]='金門縣';
      a2dv[i][4]='金城鎮';
      a2dv[i][5]='金門縣金城鎮民權路32號';
      a2dv[i][6]=118.3122560000;
      a2dv[i][7]=24.4321330000;
  i++;
    a2dv[i][0]='花蓮';
      a2dv[i][1]='Hualien';
      a2dv[i][2]='花東空品區';
      a2dv[i][3]='花蓮縣';
      a2dv[i][4]='花蓮市';
      a2dv[i][5]='花蓮市中正路210號';
      a2dv[i][6]=121.5997690000;
      a2dv[i][7]=23.9713060000;
  i++;
    a2dv[i][0]='松山';
      a2dv[i][1]='Songshan';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='臺北市';
      a2dv[i][4]='松山區';
      a2dv[i][5]='臺北市松山區八德路四段746號';
      a2dv[i][6]=121.5786110000;
      a2dv[i][7]=25.0500000000;
  i++;
    a2dv[i][0]='板橋';
      a2dv[i][1]='Banqiao';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='新北市';
      a2dv[i][4]='板橋區';
      a2dv[i][5]='新北市板橋區文化路一段25號';
      a2dv[i][6]=121.4586670000;
      a2dv[i][7]=25.0129720000;
  i++;
    a2dv[i][0]='林園';
      a2dv[i][1]='Linyuan';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='林園區';
      a2dv[i][5]='高雄市林園區北汕路58巷2號';
      a2dv[i][6]=120.4117500000;
      a2dv[i][7]=22.4795000000;
  i++;
    a2dv[i][0]='林口';
      a2dv[i][1]='Linkou';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='新北市';
      a2dv[i][4]='林口區';
      a2dv[i][5]='新北市林口區民治路25號';
      a2dv[i][6]=121.3768690000;
      a2dv[i][7]=25.0771970000;
  i++;
    a2dv[i][0]='忠明';
      a2dv[i][1]='Zhongming';
      a2dv[i][2]='中部空品區';
      a2dv[i][3]='臺中市';
      a2dv[i][4]='南屯區';
      a2dv[i][5]='臺中市南屯區公益路二段296號';
      a2dv[i][6]=120.6410920000;
      a2dv[i][7]=24.1519580000;
  i++;
    a2dv[i][0]='宜蘭';
      a2dv[i][1]='Yilan';
      a2dv[i][2]='宜蘭空品區';
      a2dv[i][3]='宜蘭縣';
      a2dv[i][4]='宜蘭市';
      a2dv[i][5]='宜蘭縣宜蘭市復興路二段77號';
      a2dv[i][6]=121.7463940000;
      a2dv[i][7]=24.7479170000;
  i++;
    a2dv[i][0]='沙鹿';
      a2dv[i][1]='Shalu';
      a2dv[i][2]='中部空品區';
      a2dv[i][3]='臺中市';
      a2dv[i][4]='沙鹿區';
      a2dv[i][5]='臺中市沙鹿區英才路150號';
      a2dv[i][6]=120.5687940000;
      a2dv[i][7]=24.2256280000;
  i++;
    a2dv[i][0]='西屯';
      a2dv[i][1]='Xitun';
      a2dv[i][2]='中部空品區';
      a2dv[i][3]='臺中市';
      a2dv[i][4]='西屯區';
      a2dv[i][5]='臺中市西屯區安和路1號';
      a2dv[i][6]=120.6169170000;
      a2dv[i][7]=24.1621970000;
  i++;
    a2dv[i][0]='竹東';
      a2dv[i][1]='Zhudong';
      a2dv[i][2]='竹苗空品區';
      a2dv[i][3]='新竹縣';
      a2dv[i][4]='竹東鎮';
      a2dv[i][5]='新竹縣竹東鎮榮樂里三民街70號';
      a2dv[i][6]=121.0889030000;
      a2dv[i][7]=24.7406440000;
  i++;
    a2dv[i][0]='竹山';
      a2dv[i][1]='Zhushan';
      a2dv[i][2]='中部空品區';
      a2dv[i][3]='南投縣';
      a2dv[i][4]='竹山鎮';
      a2dv[i][5]='南投縣竹山鎮大明路666號';
      a2dv[i][6]=120.6773060000;
      a2dv[i][7]=23.7563890000;
  i++;
    a2dv[i][0]='汐止';
      a2dv[i][1]='Xizhi';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='新北市';
      a2dv[i][4]='汐止區';
      a2dv[i][5]='新北市汐止區樟樹一路141巷2號';
      a2dv[i][6]=121.6423000000;
      a2dv[i][7]=25.0671310000;
  i++;
    a2dv[i][0]='朴子';
      a2dv[i][1]='Puzi';
      a2dv[i][2]='雲嘉南空品區';
      a2dv[i][3]='嘉義縣';
      a2dv[i][4]='朴子市';
      a2dv[i][5]='嘉義縣朴子市光復路34號';
      a2dv[i][6]=120.2473500000;
      a2dv[i][7]=23.4653080000;
  i++;
    a2dv[i][0]='安南';
      a2dv[i][1]='Annan';
      a2dv[i][2]='雲嘉南空品區';
      a2dv[i][3]='臺南市';
      a2dv[i][4]='安南區';
      a2dv[i][5]='臺南市安南區安和路三段193號';
      a2dv[i][6]=120.2175000000;
      a2dv[i][7]=23.0481970000;
  i++;
    a2dv[i][0]='永和';
      a2dv[i][1]='Yonghe';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='新北市';
      a2dv[i][4]='永和區';
      a2dv[i][5]='新北市永和區永和路光復路交口';
      a2dv[i][6]=121.5163060000;
      a2dv[i][7]=25.0170000000;
  i++;
    a2dv[i][0]='平鎮';
      a2dv[i][1]='Pingzhen';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='桃園市';
      a2dv[i][4]='平鎮區';
      a2dv[i][5]='桃園市平鎮區文化街189號';
      a2dv[i][6]=121.2039860000;
      a2dv[i][7]=24.9527860000;
  i++;
    a2dv[i][0]='左營';
      a2dv[i][1]='Zuoying';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='左營區';
      a2dv[i][5]='高雄市左營區翠華路687號';
      a2dv[i][6]=120.2929170000;
      a2dv[i][7]=22.6748610000;
  i++;
    a2dv[i][0]='古亭';
      a2dv[i][1]='Guting';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='臺北市';
      a2dv[i][4]='大安區';
      a2dv[i][5]='臺北市大安區羅斯福路三段153號';
      a2dv[i][6]=121.5295560000;
      a2dv[i][7]=25.0206080000;
  i++;
    a2dv[i][0]='冬山';
      a2dv[i][1]='Dongshan';
      a2dv[i][2]='宜蘭空品區';
      a2dv[i][3]='宜蘭縣';
      a2dv[i][4]='冬山鄉';
      a2dv[i][5]='宜蘭縣冬山鄉南興村照安路26號';
      a2dv[i][6]=121.7929280000;
      a2dv[i][7]=24.6322030000;
  i++;
    a2dv[i][0]='斗六';
      a2dv[i][1]='Douliu';
      a2dv[i][2]='雲嘉南空品區';
      a2dv[i][3]='雲林縣';
      a2dv[i][4]='斗六市';
      a2dv[i][5]='雲林縣斗六市民生路224號';
      a2dv[i][6]=120.5449940000;
      a2dv[i][7]=23.7118530000;
  i++;
    a2dv[i][0]='仁武';
      a2dv[i][1]='Renwu';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='仁武區';
      a2dv[i][5]='高雄市仁武區八卦里永仁街555號';
      a2dv[i][6]=120.3326310000;
      a2dv[i][7]=22.6890560000;
  i++;
    a2dv[i][0]='中壢';
      a2dv[i][1]='Zhongli';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='桃園市';
      a2dv[i][4]='中壢區';
      a2dv[i][5]='桃園市中壢區延平路622號';
      a2dv[i][6]=121.2216670000;
      a2dv[i][7]=24.9532780000;
  i++;
    a2dv[i][0]='中山';
      a2dv[i][1]='Zhongshan';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='臺北市';
      a2dv[i][4]='中山區';
      a2dv[i][5]='臺北市中山區林森北路511號';
      a2dv[i][6]=121.5265280000;
      a2dv[i][7]=25.0623610000;
  i++;
    a2dv[i][0]='小港';
      a2dv[i][1]='Xiaogang';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='小港區';
      a2dv[i][5]='高雄市小港區平和南路185號';
      a2dv[i][6]=120.3377360000;
      a2dv[i][7]=22.5658330000;
  i++;
    a2dv[i][0]='大寮';
      a2dv[i][1]='Daliao';
      a2dv[i][2]='高屏空品區';
      a2dv[i][3]='高雄市';
      a2dv[i][4]='大寮區';
      a2dv[i][5]='高雄市大寮區潮寮路61號';
      a2dv[i][6]=120.4250810000;
      a2dv[i][7]=22.5657470000;
  i++;
    a2dv[i][0]='大園';
      a2dv[i][1]='Dayuan';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='桃園市';
      a2dv[i][4]='大園區';
      a2dv[i][5]='桃園市大園區中正東路160號';
      a2dv[i][6]=121.2018110000;
      a2dv[i][7]=25.0603440000;
  i++;
    a2dv[i][0]='大里';
      a2dv[i][1]='Dali';
      a2dv[i][2]='中部空品區';
      a2dv[i][3]='臺中市';
      a2dv[i][4]='大里區';
      a2dv[i][5]='臺中市大里區大新街36號';
      a2dv[i][6]=120.6776890000;
      a2dv[i][7]=24.0996110000;
  i++;
    a2dv[i][0]='大同';
      a2dv[i][1]='Datong';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='臺北市';
      a2dv[i][4]='大同區';
      a2dv[i][5]='臺北市大同區重慶北路三段2號';
      a2dv[i][6]=121.5133110000;
      a2dv[i][7]=25.0632000000;
  i++;
    a2dv[i][0]='士林';
      a2dv[i][1]='Shilin';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='臺北市';
      a2dv[i][4]='北投區';
      a2dv[i][5]='臺北市北投區文林北路155號';
      a2dv[i][6]=121.5153890000;
      a2dv[i][7]=25.1054170000;
  i++;
    a2dv[i][0]='土城';
      a2dv[i][1]='Tucheng';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='新北市';
      a2dv[i][4]='土城區';
      a2dv[i][5]='新北市土城區學府路一段241號';
      a2dv[i][6]=121.4518610000;
      a2dv[i][7]=24.9825280000;
  i++;
    a2dv[i][0]='三義';
      a2dv[i][1]='Sanyi';
      a2dv[i][2]='竹苗空品區';
      a2dv[i][3]='苗栗縣';
      a2dv[i][4]='三義鄉';
      a2dv[i][5]='苗栗縣三義鄉西湖村上湖61-1號';
      a2dv[i][6]=120.7588330000;
      a2dv[i][7]=24.3829420000;
  i++;
    a2dv[i][0]='三重';
      a2dv[i][1]='Sanchong';
      a2dv[i][2]='北部空品區';
      a2dv[i][3]='新北市';
      a2dv[i][4]='三重區';
      a2dv[i][5]='新北市三重區三和路重陽路交口';
      a2dv[i][6]=121.4938060000;
      a2dv[i][7]=25.0726110000;
  i++;
    a2dv[i][0]='二林';
    a2dv[i][1]='Erlin';
    a2dv[i][2]='中部空品區';
    a2dv[i][3]='彰化縣';
    a2dv[i][4]='二林鎮';
    a2dv[i][5]='彰化縣二林鎮萬合里江山巷1號';
    a2dv[i][6]=120.4096530000;
    a2dv[i][7]=23.9251750000;





        //定位数据获取成功响应
        var onSuccess = function(position) {
            
            /*
            alert('緯度: '          + position.coords.latitude          + '\n' +
                    '經度: '         + position.coords.longitude         + '\n' +
                    '海拔: '          + position.coords.altitude          + '\n' +
                    '水平精度: '          + position.coords.accuracy          + '\n' +
                    '垂直精度: ' + position.coords.altitudeAccuracy  + '\n' +
                    '方向: '           + position.coords.heading           + '\n' +
                    '速度: '             + position.coords.speed             + '\n' +
                    '时间戳: '         + position.timestamp                + '\n' 
                    );
            */
            var dis=999999,disx=0,disy=0,min_dis=76;
            for (var index = 0; index < 76; index++) {
                disx = position.coords.longitude - a2dv[index][6];
                disy = position.coords.latitude - a2dv[index][7];
                if (Math.pow(Math.pow(disx,2)+Math.pow(disy,2),0.5)<dis)
                {
                    dis=Math.pow(Math.pow(disx,2)+Math.pow(disy,2),0.5);
                    min_dis=index;
                }
                
            }
            //alert(a2dv[min_dis][0]);
            //$("#txt1").value(a2dv[min_dis][0]);
            var sent=document.getElementById("txt1");
            sent.value=a2dv[min_dis][0];
            sent.innerHTML =a2dv[min_dis][0];
            sent_data.all_data(a2dv[min_dis][0]);
           
            sent_data.pm25_data(a2dv[min_dis][0]);
        };

        //定位数据获取失败响应
        function onError(error) {
            var sent=document.getElementById("txt1");
            sent.value='定位失敗，請開請定位功能';
            sent.innerHTML="定位失敗，請開請定位功能";
        }

        //开始获取定位数据
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }


};