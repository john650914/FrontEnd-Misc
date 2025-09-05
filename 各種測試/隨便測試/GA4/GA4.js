(function () {
    if (window.haveDuplicatedScripts === undefined) {
        window.haveDuplicatedScripts = "頁面中如果有重覆的GA_CodeNew.js就不執行囉";

        /******************************* 如果是IE瀏覽器就轉導到下載其它瀏覽器的頁面 *******************************/
        if (!!document.documentMode) {
            location.href = "https://tw.hicdn.beanfun.com/beanfun/GamaWWW/allProducts/images/IE/index.html";
        }

        /******************************* GA4和GTM程式 *******************************/
        let Prod = "",
            GA4id = "",
            GTMid = "",
            LocationHref = location.href.toUpperCase();
        let script_list = scriptList();

        document.addEventListener("DOMContentLoaded", () => {
            let $has_jssdk = script_list.some((a) => a.indexOf("SDK/BEANFUN.MIN.JS") != -1);
            let $has_web_tracing_sdk = script_list.some((a) => a.indexOf("WEB-TRACING-JSSDK/WEB_TRACING_SDK") != -1);
            let $has_jst_beanfuntrace = script_list.some((a) => a.indexOf("PROD-BEANFUNTRACE_MAIN.JS") != -1);
            let opid_cookie = getCookie("opid");
            let trackid_cookie = getCookie("web_tracing_id");

            //取得產品列表
            let getProductList = () => {
                return new Promise((resolve, reject) => {
                    fetch("https://tw-event.beanfun.com/communication/api/ga4/GetProductList", {
                        method: "GET",
                    })
                        .then((res) => res.json())
                        .then((res) => {
                            if (res.Code == 1) {
                                resolve(res.Data.ProductList);
                            } else {
                                console.log("SD-GetProductList " + res.Message);
                                reject("ErrorOccurred: SD-GetProductList " + res.Message);
                            }
                        })
                        .catch((err) => {
                            reject("ErrorOccurred: SD-GetProductList connection error");
                        });
                });
            };

            //取得Openid
            let getBGO_OpenId = () => {
                return new Promise((resolve, reject) => {
                    if (!$has_jssdk) {
                        appendScript(
                            "https://chat-content.beanfun.com/beango-static-prod/sdk/beanfun.min.js",
                            () => {
                                getBGO_OpenIdFN(resolve, reject);
                            },
                            () => {
                                console.log("BGO-beanfun.min.js connection error");
                                reject("ErrorOccurred: BGO-beanfun.min.js connection error");
                            }
                        );
                    } else if ($has_jssdk && !opid_cookie) {
                        getBGO_OpenIdFN(resolve, reject);
                    } else if ($has_jssdk && opid_cookie) {
                        resolve(opid_cookie);
                    }
                });
            };
            function getBGO_OpenIdFN(rs, rj) {
                console.log('getBGO_OpenIdFN');
                try {
                    BGO.check_app_exist((rp) => {
                        if (rp.result !== null && rp.result !== undefined && rp.result === "ok") {
                            console.log('check_app_exist');
                            fetch("https://gamesync.beanfun.com/V1.1/BeanGo/GetToken", {
                                method: "GET",
                            })
                                .then((res) => res.json())
                                .then((res) => {
                                    if (res.Result == 1) {
                                        console.log(res);
                                        try {
                                            BGO.init(
                                                {
                                                    token: res.ResultData.BGO_Token,
                                                    official_account_id: res.ResultData.BGO_OfficialAccountID,
                                                },
                                                (res) => {
                                                    //{status: 'success'} or {status: 'error'}
                                                    if (res.status == "success") {
                                                        console.log(res);
                                                        try {
                                                            BGO.get_me_openid_access_token("FFAE33DE-9CF3-4A3C-BB6E-663B914B94BA", "", function (res) {
                                                                //取得openid_access_token（帶client_id），如果失敗：{error:{num}, message:{str}}
                                                                //console.log('get_me_openid_access_token：'+res.access_token);
                                                                fetch("https://tw-event.beanfun.com/communication/api/ga4/H5AccountVerification/" + res.access_token, {
                                                                    method: "GET",
                                                                })
                                                                    .then((res) => res.json())
                                                                    .then((res) => {
                                                                        console.log(res);
                                                                        if (res.Code == 1) {
                                                                            rs(res.Data.open_id);
                                                                        } else {
                                                                            console.log("SD-H5AccountVerification " + res.Message);
                                                                            rj("ErrorOccurred: SD-H5AccountVerification " + res.Message);
                                                                        }
                                                                    })
                                                                    .catch((err) => {
                                                                        console.log("SD-H5AccountVerification connection error");
                                                                        rj("ErrorOccurred: SD-H5AccountVerification connection error");
                                                                    });
                                                            });
                                                        } catch (e) {
                                                            console.log(e);
                                                            rj("ErrorOccurred: BGO.get_me_openid_access_token() execution error");
                                                        }
                                                    } else {
                                                        console.log(res.status);
                                                        rj("ErrorOccurred: BGO-" + res.status);
                                                    }
                                                }
                                            );
                                        } catch (e) {
                                            console.log(e);
                                            rj("ErrorOccurred: BGO.init() execution error");
                                        }
                                    } else {
                                        console.log(res.ResultMessage + "," + res.ResultMessageCode);
                                        rj("ErrorOccurred: PD-" + res.ResultMessage + "(" + res.ResultMessageCode + ")");
                                    }
                                })
                                .catch((err) => {
                                    console.log("PD-https://gamesync.beanfun.com/V1.1/BeanGo/GetToken connection failed");
                                    rj("ErrorOccurred: PD-https://gamesync.beanfun.com/V1.1/BeanGo/GetToken connection failed");
                                });
                        } else {
                            rs("openid_not_supported_in_none_h5_environment");
                        }
                    });
                } catch (e) {
                    console.log(e);
                    rj("ErrorOccurred: BGO-BGO.check_app_exist() execution error");
                }
            }

            //取得Trackid
            let getTrackId = () => {
                return new Promise((resolve, reject) => {
                    if (!$has_web_tracing_sdk && !$has_jst_beanfuntrace) {
                        appendScript(
                            "https://chat-content.beanfun.com/beango-static-prod/web-tracing-jssdk/web_tracing_sdk.prod.js",
                            () => {
                                getTrackIdFN(resolve, reject);
                            },
                            () => {
                                console.log("Data_Center-web_tracing_sdk.prod.js connection error");
                                reject("ErrorOccurred: Data_Center-web_tracing_sdk.prod.js connection error");
                            }
                        );
                    } else if (($has_web_tracing_sdk || $has_jst_beanfuntrace) && !trackid_cookie) {
                        getTrackIdFN(resolve, reject);
                    } else if (($has_web_tracing_sdk || $has_jst_beanfuntrace) && trackid_cookie) {
                        resolve(trackid_cookie);
                    }
                });
            };
            function getTrackIdFN(rs, rj) {
                try {
                    beanfunWebTraceSDK.status.getTrackId().then((res) => {
                        //沒有失敗訊息所以用try catch
                        rs(res);
                    });
                } catch (e) {
                    console.log("BGO-beanfun.min.js load error");
                    rj("ErrorOccurred: BGO-getTrackId() execution error\n" + e);
                }
            }

            const promises = [
                getProductList()
                    .then((val) => val)
                    .catch((res) => res),
                getBGO_OpenId()
                    .then((val) => val)
                    .catch((res) => res),
                getTrackId()
                    .then((val) => val)
                    .catch((res) => res),
            ];
            Promise.all(promises).then((values) => {
                let productList = values[0];
                let openId = values[1];
                let trackId = values[2];
                console.log(values);

                for (var v of productList) {
                    if (v.Urls.some((j) => LocationHref.indexOf(j.toUpperCase()) != -1)) {
                        if (GA4id == "") GA4id = v.GA4;
                        if (GTMid == "") GTMid = v.GTM;
                    }
                }
                if (GA4id == "") GA4id = "G-SST23BLT4E";

                // *** GA4程式
                appendScript("//www.googletagmanager.com/gtag/js?id=" + GA4id, () => {
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag("js", new Date());

                    console.log({ user_id: '"WEB_OID":"' + openId + '","WEB_Track_ID":"' + trackId + '"', test_key: "my_test_key", });

                    gtag("config", GA4id, {
                        user_id: '"WEB_OID":"' + openId + '","WEB_Track_ID":"' + trackId + '"',
                        test_key: "my_test_key",
                    });
                });

                // *** GTM程式
                if (GTMid != "") {
                    (function (w, d, s, l, i) {
                        w[l] = w[l] || [];
                        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                        var f = d.getElementsByTagName(s)[0],
                            j = d.createElement(s),
                            dl = l != "dataLayer" ? "&l=" + l : "";
                        j.async = true;
                        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                        f.parentNode.insertBefore(j, f);
                    })(window, document, "script", "dataLayer", GTMid);
                }
            });
        });
    }

    /******************************* 共用function *******************************/
    //取得頁面中全部有src的<script>元素
    function scriptList() {
        return Array.apply(null, document.querySelectorAll("script"))
            .filter((v) => v.src !== "")
            .map((j) => j.src.toUpperCase());
    }
    //取cookie的值
    function getCookie(cookie_name) {
        var name = cookie_name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    //插入<script>
    function appendScript(src, loadedFn, errorFn, id, async = false) {
        let script = document.createElement("script");
        script.type = "text/javascript";
        if (id) script.id = id;
        if (async) script.async = true;
        script.src = src;
        document.getElementsByTagName("head")[0].appendChild(script);
        script.onload = loadedFn;
        script.onerror = errorFn;
    }
})();




