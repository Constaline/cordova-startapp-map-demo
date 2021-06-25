# cordova-startapp-map-demo


## 需要安装的插件
```
# 通过URI接口打开第三方APP并跳转到该uri
cordova plugin add com.lampa.startapp

# 检测是否安装第三方App
cordova plugin add cordova-plugin-appavailability

# 调用浏览器打开地址
cordova plugin add cordova-plugin-inappbrowser
```
## 通过APP包名检测地图APP是否安装
```
appAvailability.check("com.baidu.BaiduMap",function () {
  //success callback     
},function () {
  //error callback      
});
```
 

## 常见的地图APP使用的包名：
- 百度地图：`com.baidu.BaiduMap`
- 高德地图：`com.autonavi.minimap`
- 腾讯地图：`com.tencent.map`
- 谷歌地图：`com.google.android.apps.maps`

 

## 启动地图APP并导航显示路线
通过安装的com.lampa.startapp.git插件在打开app时设置启动参数，比如打开百度地图并导航：
```
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
```

```
定义的变量说明：(注意：坐标先纬度，后经度)

originName：起始地名称

origin[0]：起始纬度

origin[1]：起始经度

destinationName：终点名称

destination[0]：终点纬度

destination[1]：终点经度
```
 
 
## 常用地图的API：

百度地图 [URI API-百度地图API](https://lbsyun.baidu.com/index.php?title=uri/api/web)
```
uri接口：baidumap://map/direction
```

腾讯地图 [URI API | 腾讯位置服务](http://lbs.qq.com/uri_v1/guide-route.html)
```
uri接口：qqmap://map/routeplan
```

高德地图 [URI API | 高德地图API](http://lbs.amap.com/api/uri-api/guide/travel/route)
```
uri接口：amapuri://route/plan/
```

谷歌地图 [Google Maps API](https://developers.google.com/maps/documentation/ios-sdk/urlscheme)
```
uri接口：google.navigation:q=
 
 
或通过域名也可以调起地图APP：http://maps.google.com/maps
```


## 参考链接
- https://blog.csdn.net/github_34460372/article/details/79549330
- https://github.com/hesijie/mapDemo