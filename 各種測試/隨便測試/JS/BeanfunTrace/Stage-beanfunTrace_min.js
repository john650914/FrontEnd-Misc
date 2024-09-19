/*
 使用方法
 請在頁面上自行加入stage or production js

 step1:將beanfunTrace_main引用
 step2:呼叫beanfunTraceStart(obj);
       ex:beanfunTraceStart({
            BUID: '',
            property: '',
            sourceProperty: '',
            isH5: true,
            findchild:true,
            //未傳入則直接抓取相對路徑url
            traceSettingUrl:''
          });
 setp3:設定 TraceParams.InitModel裡的所有資訊
 setp4:頁面的PageView在TraceCodeSetting就叫做PageView不要更改，如果是popup請傳入data-trace的name以便抓取
 setp5:在點擊Html Tag加入data-trace="" & data-traceevent=""
       ex：data-trace="EventToHome" ==>  TraceCodeSetting所設定的key
           data-traceevent="click" ==> 分辨試click還是search
           data-traceevent="linkclick" && data-traceevent="poplinkclick" => 分辨是否轉跳url
 setp6:如有浮動名稱請使用clickinfo-{key}="value" or pageinfo-{key}="value"
 setp7:若沒有TraceCodeSetting.js請自行建立必放置在資料夾底下，要有基本的Global物件
       ex:var TraceCodes = {
                "Global":{},
                //頁面url
                //ex:/Home/Index
                "/Home/Index": {
                //遊戲橘子嘉年華活動頁面出現(1-1)
                    "PageView": {
                        eventId: 4000,
                        event: '',
                        pageInfo: { page: "" }
                    },
                }
            }
setp8:如果你是引用其他站台大數據JS則不須理會
      若沒有TraceCodeSetting_Globa1.js請自行建立必放置在資料夾底下，要有基本的CrossDomainGlobal物件
      ex:var CrossDomainGlobal = {}

 */


var mainInfo = {
    PackageUrl: {
        babelPolyfillUrl: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js?1',
        babelStandaloneUrl: 'https://unpkg.com/@babel/standalone@7.5.5/babel.min.js?1',
        //BGO JS URL
        BGOTraceJSUrl: 'https://stg-chat-content.beanfun.com/beango-static-stg/web-tracing-jssdk/web_tracing_sdk.stg.js',
        TraceUrl: 'JS/BeanfunTrace/min/Stage-beanfunTrace.min.js',
        TraceCodeSettingUrl: 'JS/BeanfunTrace/TraceCodeSetting.js',
        TraceCodeSetting_GUrl: 'JS/BeanfunTrace/TraceCodeSetting_Global.js'
    },
    BGOTraceInfo: {
        //Tracking API access token 編碼使用
        BUID: '',
        //SDK使用者回傳資料事業體
        property: '',
        //內容營運商
        sourceProperty: '',
        //是否beanfun app
        isH5: false,
        findchild: true,
        //未傳入則直接抓取相對路徑url
        traceSettingUrl: '',
        //父層找尋次數預設4次
        ParentFindCount: 4
    },
    //是否IE
    IsIE: false,
    //是否跨網域
    IsCrossDomain: false
}

//obj : 使用BGOTraceInfo
function beanfunTraceStart(obj) {
    //合併 object 
    Object.assign(mainInfo.BGOTraceInfo, obj);
    //取得當前url
    GetCurrentPath();
    //1.載入 beanfun Trace SDK JS
    ScriptLoad(mainInfo.PackageUrl.BGOTraceJSUrl, function () {
        InitbeanfunTrace();
    });
    //2.判斷是否使用IE瀏覽器
    IsIEBrowser();
    //3..載入Gamania包裝後的Script
    ScriptLoad(mainInfo.PackageUrl.TraceUrl, null, mainInfo.IsIE);
    //4.載入設定檔Script
    ScriptLoad(mainInfo.PackageUrl.TraceCodeSettingUrl, function () {
        //引用跨域共用設定檔js
        ScriptLoad(mainInfo.PackageUrl.TraceCodeSetting_GUrl, function () {
            if (typeof (CrossDomainGlobal) != 'undefined') {
                TraceCodes.Global = Object.assign([], TraceCodes.Global, CrossDomainGlobal);
            }
        }, false);
    }, false);

    if (mainInfo.IsIE) {
        //5.載入相容套件
        ScriptLoad(mainInfo.PackageUrl.babelPolyfillUrl);
        ScriptLoad(mainInfo.PackageUrl.babelStandaloneUrl, function () {
            //相容套件轉譯
            if (typeof (Babel) != 'undefined') {
                Babel.transformScriptTags();
                setTimeout(function () { Main(); }, 500);
            }
        });
    }
};

//取得js domain
function GetCurrentPath() {
    var scripts = document.getElementsByTagName("script");
    for (i = 0; i <= scripts.length; i++) {
        var el = scripts[i];
        if (!el) continue;
        var sctiptsrc = el.getAttribute("src");
        if (!sctiptsrc) continue;

        if (sctiptsrc.indexOf('Stage-beanfunTrace_main.js') > -1) {
            var location = sctiptsrc.split('Stage-beanfunTrace_main.js')[0];
            mainInfo.PackageUrl.TraceUrl = location + mainInfo.PackageUrl.TraceUrl;
            //跨域共用設定檔，需抓取被引用時的domain
            mainInfo.PackageUrl.TraceCodeSetting_GUrl = location + mainInfo.PackageUrl.TraceCodeSetting_GUrl;
            //比對引用domain跟當下domain是否一致，不一致則使用當下domain引用setting.js
            var currentDomain = window.location.origin;
            if (location.startsWith('http')) {
                mainInfo.IsCrossDomain = location == currentDomain;
                location = mainInfo.IsCrossDomain ? location : currentDomain + '/';
            }
            if (mainInfo.BGOTraceInfo.traceSettingUrl) {
                mainInfo.PackageUrl.TraceCodeSettingUrl = mainInfo.BGOTraceInfo.traceSettingUrl;
            }
            else {
                mainInfo.PackageUrl.TraceCodeSettingUrl = location + mainInfo.PackageUrl.TraceCodeSettingUrl;
            }
            return;
        };
    }
};

//判斷瀏覽器是否IE
function IsIEBrowser() {
    mainInfo.IsIE = false;
    var browser = navigator.userAgent.toLowerCase();
    if (browser.search('msie') > -1) {
        mainInfo.IsIE = true;
    }
    if (browser.search('gecko') > -1 && browser.search('rv') > -1 && browser.search('firefox') == -1) {
        mainInfo.IsIE = true;
    }
};

//script載入
function ScriptLoad(url, callback, isIECompatible) {
    var script = document.createElement("script");
    script.setAttribute("src", url);
    script.async = false;
    if (callback) {
        script.onload = callback;
    }
    if (isIECompatible) {
        script.type = 'text/babel';
        script.setAttribute('data-presets', 'es2015,es2016,es2017');
    }
    document.head.appendChild(script);
};

//Trace Init
function InitbeanfunTrace() {
    try {
        console.log('traceinit_start');
        if (mainInfo.BGOTraceInfo.BUID || mainInfo.BGOTraceInfo.property || mainInfo.BGOTraceInfo.sourceProperty) {
            sender = beanfunWebTraceSDK.init(mainInfo.BGOTraceInfo);
            console.log('traceinit_End');
        }
        else {
            const errormsg = 'InitbeanfunTrace：參數未設定。';
            console.log(errormsg);
            //ErrorWrite(errormsg, mainInfo.BGOTraceInfo);
        }
    }
    catch (e) {
        console.log(e);
        //ErrorWrite(e, mainInfo.BGOTraceInfo);
    }
    //console.log('traceinit_end');
};