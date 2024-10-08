﻿/* var sender, beanfunInfo = { Url: { GameSyncUrl: "https://alpha-gamesync.beanfun.com" }, UserDeviceinformation: {}, TrackingSessiondata: {}, CookieKey: "beafnunTraceInfo", SendTraceName: "", InitParam: { token: "", official_account_id: "" } }; function Main() { const lowercaseKeys = obj => Object.keys(obj).reduce((acc, key) => (acc[key.toLowerCase()] = obj[key], acc), {}); TraceCodes = lowercaseKeys(TraceCodes), Promise.all([GetMemberProfile_Trace, GetTrackingSessionData, Get_Encrypted_Open_Id]).then(success => BaseProess()).then(success => SendPageView("PageView")).catch((function (error) { ErrorWrite(error) })); var parent = document.getElementsByTagName("body")[0], capture = { capture: !0 }; parent.addEventListener("click", (function (e) { EventListenerHandle_Click(e) }), capture), parent.addEventListener("DOMNodeInserted", (function (event) { EventListenerHandle_NodeInserted(event) })) } window.onload = function () { Main() }; var TraceParams = { LoginStatusModel: { isLoggedIn: !1, openId: "" }, SwitchSlotModel: { experimentationInfo: [] }, BfH5networkInfo: { network: "" }, BfH5DeviceInfo: { deviceId: "", deviceModel: "", osName: "", osVersion: "" }, BfH5APPVersion: { appVersion: "", appBuild: "" }, BfH5PageUrl: { pageUri: "" } }, TraceEventParams = { PageViewEventModel: { eventId: "", event: "", pageInfo: {}, isAdditiveView: !0 }, ClickEventModel: { eventId: "", event: "", pageInfo: {}, clickInfo: {} }, ImpressionEventModel: { eventId: "", event: "", pageInfo: {}, impressionInfo: [], isAdditiveView: !0 }, SearchEventModel: { eventId: "", event: "", pageInfo: {}, pageSearchTerm: "" } }; function BaseProess() { SwitchSlot(), mainInfo.BGOTraceInfo.isH5 && SetLoginStatus(); var uri = window.location.href.replace(window.location.search, "") } function SetLoginStatus() { try { if (TraceParams.LoginStatusModel.openId) beanfunWebTraceSDK.status.setLoginStatus(TraceParams.LoginStatusModel); else { const errormsg = "SetLoginStatus：參數未設定。"; console.log(errormsg), ErrorWrite(errormsg, TraceParams.LoginStatusModel) } } catch (e) { ErrorWrite(e, TraceParams.LoginStatusModel) } } function SwitchSlot() { try { if (TraceParams.SwitchSlotModel.experimentationInfo) beanfunWebTraceSDK.status.switchSlot(TraceParams.SwitchSlotModel); else { const errormsg = "SwitchSlot：參數未設定。"; console.log(errormsg), ErrorWrite(errormsg, TraceParams.SwitchSlotModel) } } catch (e) { ErrorWrite(e, TraceParams.SwitchSlotModel) } } function SetBfH5network() { if (TraceParams.BfH5networkInfo.network) beanfunWebTraceSDK.status.setBfH5network(TraceParams.BfH5networkInfo); else { const errormsg = "BfH5network：參數未設定。"; console.log(errormsg), ErrorWrite(errormsg, TraceParams.BfH5networkInfo) } } function SetBfH5DeviceInfo() { try { if (TraceParams.BfH5DeviceInfo.deviceId || TraceParams.BfH5DeviceInfo.deviceModel || TraceParams.BfH5DeviceInfo.carrier || TraceParams.BfH5DeviceInfo.osName || TraceParams.BfH5DeviceInfo.osVersion) beanfunWebTraceSDK.status.setBfH5DeviceInfo(TraceParams.BfH5DeviceInfo); else { const errormsg = "SetBfH5DeviceInfo：參數未設定。"; console.log(errormsg), ErrorWrite(errormsg, TraceParams.BfH5DeviceInfo) } } catch (e) { ErrorWrite(e, TraceParams.BfH5DeviceInfo) } } function SetChangeBfH5APPVersion() { try { if (TraceParams.BfH5APPVersion.appVersion || TraceParams.BfH5APPVersion.appBuild) beanfunWebTraceSDK.status.changeBfH5APPVersion(TraceParams.BfH5APPVersion); else { const errormsg = "SetChangeBfH5APPVersion：參數未設定。"; console.log(errormsg), ErrorWrite(errormsg, TraceParams.BfH5APPVersion) } } catch (e) { ErrorWrite(e, TraceParams.BfH5APPVersion) } } function SetChangePageUrl(url) { try { if (url) TraceParams.BfH5PageUrl.pageUri = url, beanfunWebTraceSDK.status.changePageUrl(TraceParams.BfH5PageUrl); else { const errormsg = "SetChangePageUrl：參數未設定。"; console.log(errormsg), ErrorWrite(errormsg, url) } } catch (e) { ErrorWrite(e, url) } } var GetMemberProfile_Trace = new Promise((resolve, reject) => { try { if (BGO) if (void 0 !== BGO.init && void 0 !== BGO.get_me_profile) { var url = beanfunInfo.Url.GameSyncUrl + "/V1.1/BeanGo/GetToken"; mainInfo.IsIE ? HttpRequest("GET", url, null, 1, (function (info) { console.log("Trace_BeanGo_GetToken_HttpRequest：" + JSON.stringify(info)), beanfunInfo.InitParam.token = info.ResultData.BGO_Token, beanfunInfo.InitParam.official_account_id = info.ResultData.BGO_OfficialAccountID, BGO_Initialization((function (data) { BGO_GetMeProfile(data, (function (rep) { 1 === rep.resultCore ? resolve() : (console.log("GetMemberProfile_Trace_HttpRequest：" + JSON.stringify(rep)), reject()) })) })) })) : Httpfetch("GET", url, null, (function (info) { console.log("Trace_BeanGo_GetToken_fetch：" + JSON.stringify(info)), beanfunInfo.InitParam.token = info.ResultData.BGO_Token, beanfunInfo.InitParam.official_account_id = info.ResultData.BGO_OfficialAccountID, BGO_Initialization((function (data) { BGO_GetMeProfile(data, (function (rep) { 1 === rep.resultCore ? resolve() : (console.log("GetMemberProfile_Trace_Httpfetch：" + JSON.stringify(rep)), reject()) })) })) })) } else resolve(); else reject() } catch (e) { console.log("GetMemberProfile_Trace：未載入BGO SDK"), console.log(e.message), resolve() } }), Get_Encrypted_Open_Id = new Promise((resolve, reject) => { try { BGO ? void 0 !== BGO.get_me_openid ? BGO.get_me_openid((function (rep) { TraceParams.LoginStatusModel.isLoggedIn = "" != rep, TraceParams.LoginStatusModel.openId = rep.open_id, beanfunInfo.TrackingSessiondata = rep, resolve() })) : resolve() : reject() } catch (e) { console.log("Get_Encrypted_Open_Id：未載入BGO SDK"), console.log(e.message), resolve() } }), GetTrackingSessionData = new Promise((resolve, reject) => { try { BGO ? void 0 !== BGO.get_tracking_session_data ? BGO.get_tracking_session_data((function (rep) { TraceParams.BfH5networkInfo.network = rep.network_type, TraceParams.BfH5DeviceInfo.deviceId = rep.device_id, TraceParams.BfH5DeviceInfo.deviceModel = rep.device_model, TraceParams.BfH5APPVersion.appBuild = rep.app_build, resolve() })) : resolve() : reject() } catch (e) { console.log("GetTrackingSessionData SDK"), console.log(e.message), resolve() } }); function SenderEvent(param, e) { try { console.log("SenderEvent:" + JSON.stringify(param)), mainInfo.IsIE && InitbeanfunTrace(); var senderResult = sender.passEvent(param); setTimeout(() => CheckedResponseStatus(senderResult, param, e), 300) } catch (e) { ErrorWrite(e, param) } } function SenderEvents(params, e) { try { var senderResult = sender.passEvent(params); setTimeout(() => CheckedResponseStatus(senderResult, param, e), 300) } catch (e) { ErrorWrite(e, params) } } function CheckedResponseStatus(data, sendparams, e) { if (!e) return; const action = e.getAttribute("data-traceevent") ? e.getAttribute("data-traceevent") : e.parentNode.getAttribute("data-traceevent") ? e.parentNode.getAttribute("data-traceevent") : e.parentNode.parentNode.getAttribute("data-traceevent"), ages = ["poplinkclick", "linkclick"]; var islinkAction = ages.filter(param => param == action).length > 0; e && islinkAction && (e.setAttribute("data-sendtracecode", !0), e.click()) } function SetCookie(name, value, days) { var expires = ""; if (days) { var date = new Date; date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3), expires = "; expires=" + date.toUTCString() } document.cookie = name + "=" + (value || "") + expires + "; path=/" } function GetCookie(name) { for (var nameEQ = name + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) { for (var c = ca[i]; " " == c.charAt(0);)c = c.substring(1, c.length); if (0 == c.indexOf(nameEQ)) return c.substring(nameEQ.length, c.length) } return null } function EventListenerHandle_Click(e) { try { var target = e.target; if (!target) return; if (!target.getAttribute("data-trace") && !target.getAttribute("data-traceevent")) { let tempEl = FindParents(target); if (tempEl == target && mainInfo.BGOTraceInfo.findchild) { var childrenELList = tempEl.children; for (i = 0; i < childrenELList.length; i++)if (childrenELList[i].getAttribute("data-trace") && childrenELList[i].getAttribute("data-traceevent")) { target = childrenELList[i]; break } } else target = tempEl } var getAttributeInfo = target.getAttribute("data-trace"); if (getAttributeInfo) { var action = target.getAttribute("data-traceevent"); if ("poplinkclick" == (action = action.toLowerCase()) || "linkclick" == action) { if ("true" === target.getAttribute("data-sendtracecode")) return; e.preventDefault() } if (action) { var traceCodeInfo = TraceCodes.global[getAttributeInfo]; if (!traceCodeInfo) { var currentPageName = window.location.pathname.toLowerCase(); currentPageName = "/" == currentPageName ? "/home/index" : currentPageName, traceCodeInfo = TraceCodes[currentPageName][getAttributeInfo] } if (traceCodeInfo) { var beanfuneventModel = {}; switch (traceCodeInfo = addObjectPropertys(target, traceCodeInfo), action) { case "click": case "linkclick": case "poplinkclick": beanfuneventModel = new beanfunWebTraceSDK.events.ClickEvent(traceCodeInfo); break; case "search": beanfuneventModel = new beanfunWebTraceSDK.events.SearchEvent(traceCodeInfo) }SenderEvent(beanfuneventModel, target) } } } } catch (e) { } } function EventListenerHandle_NodeInserted(e) { try { var target = e.target; if (!target) return; if (!target.getAttribute("data-trace") && !target.getAttribute("data-traceevent")) { let tempEl = FindParents(target); if (tempEl == target) { var childrenELList = tempEl.children; for (i = 0; i < childrenELList.length; i++)if (childrenELList[i].getAttribute("data-trace") && childrenELList[i].getAttribute("data-traceevent")) { target = childrenELList[i]; break } } else target = tempEl } var getAttributeInfo = target.getAttribute("data-trace"); if (getAttributeInfo && !target.getAttribute("data-traceevent")) { var traceCodeInfo = TraceCodes.global[getAttributeInfo]; if (!traceCodeInfo) { var currentPageName = window.location.pathname.toLowerCase(); currentPageName = "/" == currentPageName ? "/home/index" : currentPageName, traceCodeInfo = TraceCodes[currentPageName][getAttributeInfo] } traceCodeInfo && (traceCodeInfo = addObjectPropertys(target, traceCodeInfo), SenderEvent(new beanfunWebTraceSDK.events.PageViewEvent(traceCodeInfo))) } } catch (e) { } } function SendPageView(traceName) { console.log("SendPageView:" + traceName); var currentPageName = window.location.pathname.toLowerCase(); currentPageName = "/" == currentPageName ? "/home/index" : currentPageName; var traceCodeInfo = {}; if (traceName) { if ("undefined" == typeof TraceCodes) return void console.log("TraceCodes is not defined"); traceCodeInfo = TraceCodes[currentPageName], console.log("SendPageView:1." + JSON.stringify(traceCodeInfo)), traceCodeInfo && (traceCodeInfo = traceCodeInfo[traceName], console.log("SendPageView:2." + JSON.stringify(traceCodeInfo)), traceCodeInfo && SenderEvent(new beanfunWebTraceSDK.events.PageViewEvent(traceCodeInfo))) } } function addObjectPropertys(target, traceCodeInfo) { var attributeslist = target.attributes, listlength; if (attributeslist.length > 0) for (i = 0; i <= attributeslist.length; i++) { var attr = attributeslist[i]; if (attr) { var attrname = attr.name.toLowerCase(); if (attrname.indexOf("clickinfo-") > -1 || attrname.indexOf("pageinfo-") > -1) { var property = attrname.split("-"); if (property.length > 1) { var propertyname = ""; switch (property[0]) { case "clickinfo": propertyname = "clickInfo"; break; case "pageinfo": propertyname = "pageInfo" }traceCodeInfo[propertyname] || (traceCodeInfo[propertyname] = {}), traceCodeInfo[propertyname][property[1]] = attr.value } } } } return traceCodeInfo } function ErrorWrite(errorMsg, sendparams) { const location = window.location, url = beanfunInfo.Url.GameSyncUrl + "/V1/Log/Tyrannosaurus007"; var params, params; mainInfo.IsIE ? HttpRequest("POST", url, params = "Domain=" + location.host + "&Page=" + location.pathname + "&ErrorMsg=" + errorMsg + "&SendParams=" + JSON.stringify(sendparams), 0) : ((params = new URLSearchParams).append("Domain", location.host), params.append("Page", location.pathname), params.append("ErrorMsg", errorMsg), params.append("SendParams", JSON.stringify(sendparams)), Httpfetch("POST", url, params)) } function HttpRequest(method, url, params, contenttype, callback) { var isSuccess = !0, result = {}, xhr = new XMLHttpRequest; xhr.open(method, url); var param = null; switch (params && (param = params), contenttype) { case 0: xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); break; default: xhr.setRequestHeader("Content-Type", "application/json") }return "get" == method.toLowerCase() && (xhr.onload = function () { 200 === xhr.status ? (result = JSON.parse(this.response), callback && callback(result)) : isSuccess = !1 }, isSuccess || ErrorWrite("HttpRequest：" + url, params)), xhr.send(param), xhr } function Httpfetch(method, url, params, callback) { var request = {}; switch (method.toLowerCase()) { case "get": request = { method: method }; break; case "post": request = { method: method, body: params } }fetch(url, request).then(rep => { callback && rep.json().then(callback) }).catch(error => console.error("Error:", error)) } function BGO_Initialization(callback) { BGO.init({ token: beanfunInfo.InitParam.token, official_account_id: beanfunInfo.InitParam.official_account_id }, callback) } function BGO_GetMeProfile(data, callback) { if (console.log("TraceJS＿BGO_GetMeProfile：" + JSON.stringify(data)), "success" === data.status) BGO.get_me_profile((function (rep) { let responseInfo; TraceParams.BfH5DeviceInfo.osName = rep.platform, TraceParams.BfH5DeviceInfo.osVersion = rep.os_version, TraceParams.BfH5APPVersion.appVersion = rep.app_version, callback({ resultCore: 1, resultMsg: "Pass" }) })); else { let responseInfo; ErrorWrite("大數據取得BGO_GetMeProfile：", data), callback({ resultCore: 0, resultMsg: "Fail" }) } } function FindParents(target, findCount) { if ((findCount = findCount || 0) < mainInfo.BGOTraceInfo.ParentFindCount) { let parentEL = target.parentElement; return parentEL.getAttribute("data-trace") || parentEL.getAttribute("data-traceevent") ? parentEL : FindParents(parentEL, findCount += 1) } return target } */



var sender;
var beanfunInfo = {
    Url: {
        GameSyncUrl: 'https://alpha-gamesync.beanfun.com'
    },
    //玩家設備資訊
    UserDeviceinformation: {},
    //追蹤碼資訊
    TrackingSessiondata: {},
    //Cookie Key Name
    CookieKey: 'beafnunTraceInfo',
    //其他視窗是否有傳過pageView 的名稱
    SendTraceName: '',
    InitParam: {
        token: '',
        official_account_id: ''
    }
};

//beanfun trace js
window.onload = function () {
    Main();
};

//進入點
function Main() {
    const lowercaseKeys = obj =>
        Object.keys(obj).reduce((acc, key) => {
            acc[key.toLowerCase()] = obj[key];
            return acc;
        }, {});
    TraceCodes = lowercaseKeys(TraceCodes);


    Promise.all([GetMemberProfile_Trace, GetTrackingSessionData, Get_Encrypted_Open_Id])
        .then(success => BaseProess())
        .then(success => SendPageView('PageView'))
        .catch(function (error) {
            ErrorWrite(error);
        });

    var parent = document.getElementsByTagName('body')[0];
    //指示這種類型的事件listener在被分派到EventTargetDOM 樹中它下面的任何事件之前 將被分派給註冊的。
    var capture = {
        capture: true
    };
    //Click事件
    parent.addEventListener('click', function (e) { EventListenerHandle_Click(e); }, capture);
    //add html
    //parent.addEventListener("DOMNodeInserted", function (event) { EventListenerHandle_NodeInserted(event); });

    const observer = new MutationObserver(function(records, observer) {
        EventListenerHandle_NodeInserted(records);
    });
    
    observer.observe(parent, {
        childList: true,
        subtree: true,
        characterData: true
    });
};

//大數據一般設定參數
var TraceParams = {
    //玩家登入狀態 Model
    LoginStatusModel: {
        //用戶是否登入
        isLoggedIn: false,
        //用戶登入後的帳號 ( 登入後再登出無需清除此欄位，登入其他帳號時須更新此id )
        openId: '',
    },
    //版位切換時狀態更新 Model
    SwitchSlotModel: {
        //為自定義json object(營運提供)
        experimentationInfo: []
    },
    //使用APP 玩家網路資訊
    BfH5networkInfo: {
        //使用網路類型變更時應重新送(wifi / 4G /5G /others)
        network: ''
    },
    //玩家裝置資訊
    BfH5DeviceInfo: {
        //裝置碼，iOS/Android使用IDFA
        deviceId: '',
        //裝置型號(iPhone裝置只會顯示iPhone)
        deviceModel: '',
        //作業系統類型(ios/android)
        osName: '',
        //作業系統版本
        osVersion: ''
    },
    //
    BfH5APPVersion: {
        //beanfun app版本號碼
        appVersion: '',
        //beanfun app建置號碼
        appBuild: ''
    },
    BfH5PageUrl: {
        pageUri: ''
    }
};
//事件類參數
var TraceEventParams = {
    //頁面檢視事件 Model
    PageViewEventModel: {
        //事件ID
        eventId: '',
        //事件名稱
        event: '',
        //頁面資訊
        pageInfo: {},
        //第二次觸發同個page view event時為true
        isAdditiveView: true
    },
    //點擊事件 Model
    ClickEventModel: {
        //事件ID
        eventId: '',
        //事件名稱
        event: '',
        //頁面資訊
        pageInfo: {},
        //點擊事件資訊
        clickInfo: {}
    },
    //印象事件 Model
    ImpressionEventModel: {
        //事件ID
        eventId: '',
        //事件名稱
        event: '',
        //頁面資訊
        pageInfo: {},
        //點擊事件資訊
        impressionInfo: [],
        //impression為頁面上附加的內容更新，故is_additive_view為true
        isAdditiveView: true
    },
    //搜尋事件 Model
    SearchEventModel: {
        //事件ID
        eventId: '',
        //事件名稱
        event: '',
        //頁面資訊
        pageInfo: {},
        //搜尋關鍵字
        pageSearchTerm: ''
    }
};
//基本流程
function BaseProess() {
    //init Trace
    // InitbeanfunTrace();
    //2.版位切換時狀態更新
    SwitchSlot();
    //有使用beanfun SDK才需要呼叫
    if (mainInfo.BGOTraceInfo.isH5) {
        //1.使用者登入登出狀態更新
        SetLoginStatus();
        //3.使用beanfun H5網頁，網路資訊變更
        //SetBfH5network();
        //4.使用beanfun H5網頁，裝置資訊
        //SetBfH5DeviceInfo();
        //5.使用beanfun H5網頁，APP版本變
        //SetChangeBfH5APPVersion();
    }
    var uri = window.location.href.replace(window.location.search, '');
    //6.網頁網址變更
    //SetChangePageUrl(uri);
};


//Trace Init
// function InitbeanfunTrace() {
//     try {
//         //console.log('traceinit_start');
//         if (mainInfo.BGOTraceInfo.BUID || mainInfo.BGOTraceInfo.property || mainInfo.BGOTraceInfo.sourceProperty) {
//             sender = beanfunWebTraceSDK.init(mainInfo.BGOTraceInfo);
//         }
//         else {
//             const errormsg = 'InitbeanfunTrace：參數未設定。';
//             console.log(errormsg);
//             ErrorWrite(errormsg, mainInfo.BGOTraceInfo);
//         }
//     }
//     catch (e) {
//         ErrorWrite(e, mainInfo.BGOTraceInfo);
//     }
//     //console.log('traceinit_end');
// };
//使用者登入登出狀態更新
function SetLoginStatus() {
    try {

        if (TraceParams.LoginStatusModel.openId) {
            //InitbeanfunTrace();
            beanfunWebTraceSDK.status.setLoginStatus(TraceParams.LoginStatusModel);
        }
        else {
            const errormsg = 'SetLoginStatus：參數未設定。';
            console.log(errormsg);
            ErrorWrite(errormsg, TraceParams.LoginStatusModel);

        }
    }
    catch (e) {
        ErrorWrite(e, TraceParams.LoginStatusModel);
    }
};
//版位切換時狀態更新
function SwitchSlot() {
    try {
        if (TraceParams.SwitchSlotModel.experimentationInfo) {
            //InitbeanfunTrace();
            beanfunWebTraceSDK.status.switchSlot(TraceParams.SwitchSlotModel);
        }
        else {
            const errormsg = 'SwitchSlot：參數未設定。';
            console.log(errormsg);
            ErrorWrite(errormsg, TraceParams.SwitchSlotModel);
        }
    }

    catch (e) {
        ErrorWrite(e, TraceParams.SwitchSlotModel);
    }
};
//使用beanfun H5網頁，網路資訊變更
function SetBfH5network() {
    if (TraceParams.BfH5networkInfo.network) {
        //InitbeanfunTrace();
        beanfunWebTraceSDK.status.setBfH5network(TraceParams.BfH5networkInfo);
    }
    else {
        const errormsg = 'BfH5network：參數未設定。';
        console.log(errormsg);
        ErrorWrite(errormsg, TraceParams.BfH5networkInfo);
    }
};
//使用beanfun H5網頁，裝置資訊
function SetBfH5DeviceInfo() {
    try {
        if (TraceParams.BfH5DeviceInfo.deviceId || TraceParams.BfH5DeviceInfo.deviceModel || TraceParams.BfH5DeviceInfo.carrier || TraceParams.BfH5DeviceInfo.osName || TraceParams.BfH5DeviceInfo.osVersion) {
            //InitbeanfunTrace();
            beanfunWebTraceSDK.status.setBfH5DeviceInfo(TraceParams.BfH5DeviceInfo)
        }
        else {
            const errormsg = 'SetBfH5DeviceInfo：參數未設定。';
            console.log(errormsg);
            ErrorWrite(errormsg, TraceParams.BfH5DeviceInfo);
        }
    }

    catch (e) {
        ErrorWrite(e, TraceParams.BfH5DeviceInfo);
    }
};
//使用beanfun H5網頁，APP版本變
function SetChangeBfH5APPVersion() {
    try {
        if (TraceParams.BfH5APPVersion.appVersion || TraceParams.BfH5APPVersion.appBuild) {
            //InitbeanfunTrace();
            beanfunWebTraceSDK.status.changeBfH5APPVersion(TraceParams.BfH5APPVersion)
        }
        else {
            const errormsg = 'SetChangeBfH5APPVersion：參數未設定。';
            console.log(errormsg);
            ErrorWrite(errormsg, TraceParams.BfH5APPVersion);
        }
    }
    catch (e) {
        ErrorWrite(e, TraceParams.BfH5APPVersion);
    }
};
//網頁網址變更
//url:當頁網址
function SetChangePageUrl(url) {
    try {
        if (url) {
            TraceParams.BfH5PageUrl.pageUri = url;
            //InitbeanfunTrace();
            beanfunWebTraceSDK.status.changePageUrl(TraceParams.BfH5PageUrl)
        }
        else {
            const errormsg = 'SetChangePageUrl：參數未設定。';
            console.log(errormsg);
            ErrorWrite(errormsg, url);
        }
    }
    catch (e) {
        ErrorWrite(e, url);
    }

};
//取得玩家資訊
var GetMemberProfile_Trace = new Promise((resolve, reject) => {
    try {
        if (BGO) {
            if (typeof (BGO.init) != 'undefined' && typeof (BGO.get_me_profile) != 'undefined') {
                var url = beanfunInfo.Url.GameSyncUrl + '/V1.1/BeanGo/GetToken';
                if (!mainInfo.IsIE) {
                    Httpfetch('GET', url, null, function (info) {
                        console.log('Trace_BeanGo_GetToken_fetch：' + JSON.stringify(info));
                        beanfunInfo.InitParam.token = info.ResultData.BGO_Token;
                        beanfunInfo.InitParam.official_account_id = info.ResultData.BGO_OfficialAccountID;

                        BGO_Initialization(function (data) {
                            BGO_GetMeProfile(data, function (rep) {
                                if (rep.resultCore === 1) {
                                    resolve();
                                }
                                else {
                                    console.log('GetMemberProfile_Trace_Httpfetch：' + JSON.stringify(rep))
                                    reject();
                                }
                            })

                        });
                    });
                }
                else {
                    HttpRequest('GET', url, null, 1, function (info) {
                        console.log('Trace_BeanGo_GetToken_HttpRequest：' + JSON.stringify(info));
                        beanfunInfo.InitParam.token = info.ResultData.BGO_Token;
                        beanfunInfo.InitParam.official_account_id = info.ResultData.BGO_OfficialAccountID;

                        BGO_Initialization(function (data) {
                            BGO_GetMeProfile(data, function (rep) {
                                if (rep.resultCore === 1) {
                                    resolve();
                                }
                                else {
                                    console.log('GetMemberProfile_Trace_HttpRequest：' + JSON.stringify(rep))
                                    reject();
                                }
                            })
                        });
                    });
                }
            }
            else {
                resolve();
            }
        }
        else {
            reject();
        }
    }
    catch (e) {
        console.log('GetMemberProfile_Trace：未載入BGO SDK');
        console.log(e.message);
        resolve();
    }
});

//取得加密後openid
var Get_Encrypted_Open_Id = new Promise((resolve, reject) => {
    try {
        if (BGO) {
            if (typeof (BGO.get_me_openid) != 'undefined') {
                BGO.get_me_openid(function (rep) {
                    if (rep != '') {
                        TraceParams.LoginStatusModel.isLoggedIn = true;
                    }
                    else {
                        TraceParams.LoginStatusModel.isLoggedIn = false;
                    }
                    TraceParams.LoginStatusModel.openId = rep
                    beanfunInfo.TrackingSessiondata = rep;

                    //alert('Get_Encrypted_Open_Id:' + JSON.stringify(rep));
                    resolve();
                });
            }
            else {
                resolve();
            }
        }
        else {
            reject();
        };
    }
    catch (e) {
        console.log('Get_Encrypted_Open_Id：未載入BGO SDK');
        console.log(e.message);
        resolve();
    }
});
//取得追蹤碼需要的資料
var GetTrackingSessionData = new Promise((resolve, reject) => {
    try {
        if (BGO) {
            if (typeof (BGO.get_tracking_session_data) != 'undefined') {
                BGO.get_tracking_session_data(function (rep) {
                    TraceParams.BfH5networkInfo.network = rep.network_type;
                    TraceParams.BfH5DeviceInfo.deviceId = rep.device_id;
                    TraceParams.BfH5DeviceInfo.deviceModel = rep.device_model;
                    TraceParams.BfH5APPVersion.appBuild = rep.app_build;
                    //alert('GetTrackingSessionData:' + JSON.stringify(rep));
                    resolve();
                });
            }
            else {
                resolve();
            }
        }
        else {
            reject();

        }
    }
    catch (e) {
        console.log('GetTrackingSessionData SDK');
        console.log(e.message);
        resolve();
    }
});
//單筆Event發送
//param:單筆資料
function SenderEvent(param, e) {
    try {
        console.log('SenderEvent:' + JSON.stringify(param));
        if (mainInfo.IsIE) {
            InitbeanfunTrace();
        }
        var senderResult = sender.passEvent(param);
        setTimeout(() => CheckedResponseStatus(senderResult, param, e), 300);
        //CheckedResponseStatus(senderResult, param, e);
    }
    catch (e) {
        ErrorWrite(e, param);
    }
};
//多筆Event發送
//params:多筆資料 array
//ex:[PageViewEventModel,SearchEventModel]
function SenderEvents(params, e) {
    try {
        var senderResult = sender.passEvent(params);
        setTimeout(() => CheckedResponseStatus(senderResult, param, e), 300);
    }
    catch (e) {
        ErrorWrite(e, params);
    }
};

function CheckedResponseStatus(data, sendparams, e) {
    // if (data) {
    //     switch (data.status) {
    //         //sucess不做任何事
    //         case 201:
    //             break;
    //         default:
    //             ErrorWrite(data, sendparams);
    //             break;
    //     }
    // }
    if (!e) return;
    const action = e.getAttribute("data-traceevent") ? e.getAttribute("data-traceevent") : e.parentNode.getAttribute("data-traceevent") ? e.parentNode.getAttribute("data-traceevent") : e.parentNode.parentNode.getAttribute("data-traceevent");
    const ages = ['poplinkclick', 'linkclick'];
    var islinkAction = ages.filter(param => param == action).length > 0;
    if (e && islinkAction) {
        e.setAttribute('data-sendtracecode', true);
        e.click();
    }
};
//設定cookie
//name： cookie name
//value： cookie value
//days：存放天數
function SetCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
//取得cookie
//name： cookie name
function GetCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};
// //基本資訊寫入cookie
// var BaseInfoSetCookie = new Promise((resolve, reject) => {
//     SetCookie(beanfunInfo.CookieKey, TraceParams, 1);
//     resolve();
// });
//監控事件處理
function EventListenerHandle_Click(e) {
    try {
        var target = e.target;
        if (!target) return;
        //alert('EventListenerHandle_Click_1:' + target);
        if (!target.getAttribute("data-trace") && !target.getAttribute("data-traceevent")) {
            //找尋父層設定資訊
            let tempEl = FindParents(target);
            //未找到&設定找子層資訊
            if ((tempEl == target) && mainInfo.BGOTraceInfo.findchild) {
                var childrenELList = tempEl.children;
                for (i = 0; i < childrenELList.length; i++) {
                    if (childrenELList[i].getAttribute("data-trace") && childrenELList[i].getAttribute("data-traceevent")) {
                        target = childrenELList[i];
                        break;
                    }
                }
            }
            //有找到設定大數據標籤將物件重新指向target
            else {
                target = tempEl;
            }
        }
        //alert('EventListenerHandle_Click_2:' + target);
        var getAttributeInfo = target.getAttribute("data-trace");
        if (getAttributeInfo) {
            //alert('EventListenerHandle_Click_3:' + getAttributeInfo);
            //取得Event是Click還是Search
            var action = target.getAttribute("data-traceevent");
            action = action.toLowerCase();
            //if (beanfunInfo.SendTraceName != getAttributeInfo) {
            //    beanfunInfo.SendTraceName = getAttributeInfo;
            if (action == 'poplinkclick' || action == 'linkclick') {
                if (target.getAttribute("data-sendtracecode") === 'true') {
                    return;
                }
                e.preventDefault();
            }
            if (action) {
                //1.先取Global的設定
                var traceCodeInfo = TraceCodes['global'][getAttributeInfo];

                //alert('EventListenerHandle_Click_4:' + getAttributeInfo);
                //2.取得當頁page
                if (!traceCodeInfo) {
                    var currentPageName = window.location.pathname.toLowerCase();
                    currentPageName = currentPageName == '/' ? '/home/index' : currentPageName;
                    //取得追蹤設定code
                    traceCodeInfo = TraceCodes[currentPageName][getAttributeInfo];
                }

                //3.送Event到大數據中心
                if (traceCodeInfo) {
                    var beanfuneventModel = {};
                    //InitbeanfunTrace();
                    traceCodeInfo = addObjectPropertys(target, traceCodeInfo);
                    switch (action) {
                        case 'click':
                        case 'linkclick':
                        case 'poplinkclick':
                            beanfuneventModel = new beanfunWebTraceSDK.events.ClickEvent(traceCodeInfo);
                            break;
                        case 'search':
                            beanfuneventModel = new beanfunWebTraceSDK.events.SearchEvent(traceCodeInfo);
                            break;
                    }
                    SenderEvent(beanfuneventModel, target);
                }
            }
            // }
            // else {
            //     beanfunInfo.SendTraceName = '';
            // }
        }
    } catch (e) { }
};
//監控插入Html
function EventListenerHandle_NodeInserted(e) {
    try {
        var target = e.target;
        if (!target) return;

        if (!target.getAttribute("data-trace") && !target.getAttribute("data-traceevent")) {
            //找尋父層設定資訊
            let tempEl = FindParents(target);
            //未找到&設定找子層資訊
            if (tempEl == target) {
                var childrenELList = tempEl.children;
                for (i = 0; i < childrenELList.length; i++) {
                    if (childrenELList[i].getAttribute("data-trace") && childrenELList[i].getAttribute("data-traceevent")) {
                        target = childrenELList[i];
                        break;
                    }
                }
            }
            //有找到設定大數據標籤將物件重新指向target
            else {
                target = tempEl;
            }
        }

        var getAttributeInfo = target.getAttribute("data-trace");

        if (getAttributeInfo && !target.getAttribute("data-traceevent")) {
            //if (beanfunInfo.SendTraceName != getAttributeInfo) {
            //    beanfunInfo.SendTraceName = getAttributeInfo;

            //1.先取Global的設定
            var traceCodeInfo = TraceCodes['global'][getAttributeInfo];

            //2.取得當頁page
            if (!traceCodeInfo) {
                var currentPageName = window.location.pathname.toLowerCase();
                currentPageName = currentPageName == '/' ? '/home/index' : currentPageName;
                //取得追蹤設定code
                traceCodeInfo = TraceCodes[currentPageName][getAttributeInfo];
            }

            //3.送Event到大數據中心
            if (traceCodeInfo) {
                //InitbeanfunTrace();
                traceCodeInfo = addObjectPropertys(target, traceCodeInfo);
                SenderEvent(new beanfunWebTraceSDK.events.PageViewEvent(traceCodeInfo));
            }
            // }
            // else {
            //     beanfunInfo.SendTraceName = '';
            // }
        }
    } catch (e) { }
}
//傳送pageView
//traceName傳入為當頁不傳入為popup
function SendPageView(traceName) {
    console.log('SendPageView:' + traceName);
    //取得當頁page
    var currentPageName = window.location.pathname.toLowerCase();
    currentPageName = currentPageName == '/' ? '/home/index' : currentPageName;
    //取得追蹤設定code
    var traceCodeInfo = {};
    if (traceName) {
        if (typeof (TraceCodes) === 'undefined') {
            console.log('TraceCodes is not defined');
            return;
        }
        traceCodeInfo = TraceCodes[currentPageName];

        console.log('SendPageView:1.' + JSON.stringify(traceCodeInfo));
        if (traceCodeInfo) {
            traceCodeInfo = traceCodeInfo[traceName];
            console.log('SendPageView:2.' + JSON.stringify(traceCodeInfo));
            if (traceCodeInfo) {
                //InitbeanfunTrace();
                SenderEvent(new beanfunWebTraceSDK.events.PageViewEvent(traceCodeInfo));
            }
        }
    }
};

//加入obj Property
function addObjectPropertys(target, traceCodeInfo) {
    var attributeslist = target.attributes;
    var listlength = attributeslist.length;
    if (listlength > 0) {
        for (i = 0; i <= attributeslist.length; i++) {
            var attr = attributeslist[i];
            if (attr) {
                var attrname = attr.name.toLowerCase();
                if (attrname.indexOf('clickinfo-') > -1 || attrname.indexOf('pageinfo-') > -1) {
                    var property = attrname.split('-');
                    if (property.length > 1) {
                        var propertyname = '';
                        switch (property[0]) {
                            case 'clickinfo':
                                propertyname = 'clickInfo';
                                break;
                            case 'pageinfo':
                                propertyname = 'pageInfo';
                                break;
                        }

                        if (!traceCodeInfo[propertyname]) {
                            traceCodeInfo[propertyname] = {};
                        }
                        traceCodeInfo[propertyname][property[1]] = attr.value;
                    }
                }
            }
        }
    }
    return traceCodeInfo;
};

//錯誤寫入
//errorMsg：錯誤訊息
//sendparams：傳送參數資訊
function ErrorWrite(errorMsg, sendparams) {
    const location = window.location;
    const url = beanfunInfo.Url.GameSyncUrl + '/V1/Log/Tyrannosaurus007';

    if (!mainInfo.IsIE) {
        var params = new URLSearchParams();
        params.append('Domain', location.host);
        params.append('Page', location.pathname);
        params.append('ErrorMsg', errorMsg);
        params.append('SendParams', JSON.stringify(sendparams));
        Httpfetch('POST', url, params);
    }
    else {
        var params = 'Domain=' + location.host + '&Page=' + location.pathname + '&ErrorMsg=' + errorMsg + '&SendParams=' + JSON.stringify(sendparams);
        HttpRequest('POST', url, params, 0);
    }

};

//IE 使用 post只能傳送log因為會有跨網域的問題
//method：GET | POST
//url：API URI
//params：使用URLSearchParams()
//        ex:l et data = new URLSearchParams();
//        data.append({Key}, {values});
//contenttype : 0.x-www-form-urlencoded 
//              1.json
//callback：回傳API結果
function HttpRequest(method, url, params, contenttype, callback) {
    var isSuccess = true;
    var result = {};
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);

    var param = null;
    if (params) {
        param = params;
    }

    switch (contenttype) {
        case 0:
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            break;
        default:
            xhr.setRequestHeader("Content-Type", "application/json");
            break;
    }

    if (method.toLowerCase() == 'get') {
        xhr.onload = function () {
            if (xhr.status === 200) {
                result = JSON.parse(this.response);
                if (callback) {
                    callback(result);
                }
            }
            else {
                isSuccess = false;
            }
        }

        if (!isSuccess) {
            ErrorWrite('HttpRequest：' + url, params);
        }
    }

    xhr.send(param);
    return xhr;
};

//IE不可使用
//method：GET | POST
//url：API URI
//params：使用URLSearchParams()
//        ex:l et data = new URLSearchParams();
//        data.append({Key}, {values});
function Httpfetch(method, url, params, callback) {
    var request = {};
    switch (method.toLowerCase()) {
        case 'get':
            request = {
                method: method
            }
            break;
        case 'post':
            request = {
                method: method,
                body: params
            }
            break;
    }

    fetch(url, request).then((rep) => {
        if (callback) {
            rep.json().then(callback);;
        }
    }).catch(
        error => console.error('Error:', error)
    );
};

//BGO 初始化
//callback：callback
function BGO_Initialization(callback) {
    BGO.init({
        token: beanfunInfo.InitParam.token,
        official_account_id: beanfunInfo.InitParam.official_account_id
    }, callback);
}

//BGO 取得個人資訊
//Data：BOG init respose
//callback：callback
function BGO_GetMeProfile(data, callback) {
    console.log('TraceJS＿BGO_GetMeProfile：' + JSON.stringify(data))
    if (data.status === 'success') {
        BGO.get_me_profile(function (rep) {
            TraceParams.BfH5DeviceInfo.osName = rep.platform;
            TraceParams.BfH5DeviceInfo.osVersion = rep.os_version;
            TraceParams.BfH5APPVersion.appVersion = rep.app_version;
            //alert('GetMemberProfile_Trace:' + JSON.stringify(rep));
            let responseInfo = {
                resultCore: 1,
                resultMsg: 'Pass'
            }
            callback(responseInfo);
        });
    }
    else {
        ErrorWrite('大數據取得BGO_GetMeProfile：', data);
        let responseInfo = {
            resultCore: 0,
            resultMsg: 'Fail'
        }
        callback(responseInfo);
    }
}


//向上4層抓取有無data-trace&&data-traceevent設定
//target：元素目標
//findCount：找尋次數
//return: parentEL = 有找到trace設定
//        target = 未找到trace設定
function FindParents(target, findCount) {
    findCount = !findCount ? 0 : findCount;
    if (findCount < mainInfo.BGOTraceInfo.ParentFindCount) {
        let parentEL = target.parentElement;
        if (!parentEL.getAttribute("data-trace") && !parentEL.getAttribute("data-traceevent")) {
            findCount = findCount + 1;
            return FindParents(parentEL, findCount);
        }
        else {
            return parentEL;
        }
    }
    else {
        return target;
    }
}

