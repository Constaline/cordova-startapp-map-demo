document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
    var vConsole = new window.VConsole();
}

var originName='我的当前位置';//北四环东路 望和路
var origin = new Array(39.98871,116.43234);//origin[0]为纬度,origin[1]为经度
var destinationName = '故宫博物馆';
var destination=new Array(39.9168,116.3908);//目的地纬度、经度。先纬度后经度
function haveInstalledApp(){//通过包名判断app是否安装
    var mapList=document.getElementsByClassName('mapLi');
    var baiduPackageName = "com.baidu.BaiduMap";
    var gaodePackageName = "com.autonavi.minimap";
    var tengxunPackageName = "com.tencent.map";
    var gugePackageName = "com.google.android.apps.maps";
    appAvailability.check(baiduPackageName,function () {//success callback
        mapList.item(0).style.display = 'block';
    },function () {//
        mapList.item(0).style.display = 'none';
    });
    appAvailability.check(gaodePackageName,function () {//success callback
        mapList.item(1).style.display = 'block';
    },function () {//
        mapList.item(1).style.display = 'none';
    });
    appAvailability.check(tengxunPackageName,function () {//success callback
        mapList.item(2).style.display = 'block';
    },function () {//
        mapList.item(2).style.display = 'none';

    });
    appAvailability.check(gugePackageName,function () {//success callback
        mapList.item(3).style.display = 'block';
        // mapList.item(4).style.display = 'block';
    },function () {
        mapList.item(3).style.display = 'none';
        // mapList.item(4).style.display = 'none';
    });
}

document.addEventListener('deviceready', function(){
    haveInstalledApp();
}, false);

function checkBaidu(){ 
    var sApp = startApp.set({ /* params */
        "action":"ACTION_VIEW",
        "category":"CATEGORY_DEFAULT",
        "type":"text/css",
        "package":"com.baidu.BaiduMap",
        "uri":"baidumap://map/direction?origin=name:"+originName+"|latlng:"+origin[0]+","+origin[1]+"&destination=name:"+destinationName+"|latlng:"+destination[0]+","+destination[1]+"&mode=driving",
        "flags":["FLAG_ACTIVITY_CLEAR_TOP","FLAG_ACTIVITY_CLEAR_TASK"],
        "intentstart":"startActivity"
    });
    sApp.start(function() { /* success */
        //alert("OK");
    }, function(error) { /* fail */
        alert(error);
    });
}

function goBaiduBrowser(){
    var mapUrl = "http://api.map.baidu.com/direction?origin=name:"+originName+"|latlng:"+origin[0]+","+origin[1]+"&destination=name:"+destinationName+"|latlng:"+destination[0]+","+destination[1]+"&mode=driving&region=北京&output=html&src=webapp.baidu.openAPIdemo";

    window.open(mapUrl);
}

function checkGaode(){
    var sApp = startApp.set({ /* params */
        "action":"ACTION_VIEW",
        "category":"CATEGORY_DEFAULT",
        "type":"text/css",
        "package":"com.autonavi.minimap",
        "uri":"amapuri://route/plan/?slat="+origin[0]+"&slon="+origin[1]+"&sname="+originName+"&dlat="+destination[0]+"&dlon="+destination[1]+"&dname="+destinationName+"&dev=0&t=0",
        "flags":["FLAG_ACTIVITY_CLEAR_TOP","FLAG_ACTIVITY_CLEAR_TASK"],
        "intentstart":"startActivity"
    });
    sApp.start(function() { /* success */
        //alert("OK");
    }, function(error) { /* fail */
        alert(error);
    });
}
function goGaodeBrowser(){
    var mapUrl = "http://uri.amap.com/navigation?from="+origin[1]+","+origin[0]+","+originName+"&to="+destination[1]+","+destination[0]+","+destinationName+"&mode=car&src=mypage&coordinate=gaode&callnative=1";

    window.open(mapUrl);
}
function checkTengxun(){
    var sApp = startApp.set({ /* params */
        "action":"ACTION_VIEW",
        "category":"CATEGORY_DEFAULT",
        "type":"text/css",
        "package":"com.tencent.map",
        "uri":"qqmap://map/routeplan?type=drive&from="+originName+"&fromcoord="+origin[0]+","+origin[1]+"&to="+destinationName+"&tocoord="+destination[0]+","+destination[1]+"&coord_type=1&policy=0",
        "flags":["FLAG_ACTIVITY_CLEAR_TOP","FLAG_ACTIVITY_CLEAR_TASK"],
        "intentstart":"startActivity"
    });
    sApp.start(function() { /* success */
        //alert("OK");
    }, function(error) { /* fail */
        alert(error);
    });
}

function goTengxunBrowser(){
    var mapUrl = "http://apis.map.qq.com/uri/v1/routeplan?type=drive&from="+originName+"&fromcoord="+origin[0]+","+origin[1]+"&to="+destinationName+"&tocoord="+destination[0]+","+destination[1]+"&policy=1&referer=mapAPP";

    window.open(mapUrl);
}
function checkGuge(){//指定终点经纬度，默认当前位置
    var sApp = startApp.set({ /* params */
        "action":"ACTION_VIEW",
        "category":"CATEGORY_DEFAULT",
        "type":"text/css",
        "package":"com.google.android.apps.maps",
        "uri":"google.navigation:q="+destination[0]+","+destination[1],
        "flags":["FLAG_ACTIVITY_CLEAR_TOP","FLAG_ACTIVITY_CLEAR_TASK"],
        "intentstart":"startActivity"
    });
    sApp.start(function() { /* success */
        //alert("OK");
    }, function(error) { /* fail */
        alert(error);
    });
}

function checkGuge1(){//指定起点、终点经纬度
    var sApp = startApp.set({
        "action":"ACTION_VIEW",
        "category":"CATEGORY_DEFAULT",
        "type":"text/css",
        "package":"com.google.android.apps.maps",
        "uri":"https://www.google.com/maps/dir/?api=1&destination="+destination[0]+","+destination[1]+"&travelmode=driving",
        "flags":["FLAG_ACTIVITY_CLEAR_TOP","FLAG_ACTIVITY_CLEAR_TASK"],
        "intentstart":"startActivity"
    });
    sApp.start(function() {

    }, function(error) { /* fail */
        alert(error);
    });
}

function goGugeBrowser(){//指定起点、终点经纬度
    //window.location.href="https://www.google.com/maps/dir/?api=1&origin=Space+Needle+Seattle+WA&destination=Pike+Place+Market+Seattle+WA&travelmode=bicycling";

    // window.location.href="https://www.google.com/maps/dir/?api=1&destination=39.9761,116.3282&travelmode=driving";

    var mapUrl = "https://www.google.com/maps/dir/?api=1&origin="+origin[0]+","+origin[1]+"&destination="+destination[0]+","+destination[1]+"&travelmode=driving";

    window.open(mapUrl);
}
