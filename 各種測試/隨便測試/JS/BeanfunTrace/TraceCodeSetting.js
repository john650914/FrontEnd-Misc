var TraceCodes = {
    //自己站台全域(所有頁面都會出現的區塊)
    "Global": {},
    //首頁
    "/index.aspx": {
        //17-13 登入後進站提示頁 出現
        "PageView": {
            eventId: 4541,
            event: 'gtw_web_merge_page_view',
            pageInfo: { page: "popup", name: "您的帳號尚未整併" }
        },
        //7-14 整併條款頁 出現
        "MergerServicePopupPageView": {
            eventId: 4541,
            event: 'gtw_web_merge_page_view',
            pageInfo: { page: "terms_of_service" }            
        },
       
    },
    //點帳整併頁
    "/AccountImportlist.aspx": {
        //7-15 點帳整併頁 出現
        "PageView": {
            eventId: 4541,
            event: 'gtw_web_merge_page_view',
            pageInfo: { page: "merge" }
        },
        //7-16 再次確認彈窗 出現
        "ConfirmMergerPopupView": {
            eventId: 4541,
            event: 'gtw_web_merge_page_view',
            pageInfo: { page: "confirm_merge" }
        },
        //7-20 點擊 再次確認彈窗 [確認]
        "ConfirmMergerPopupClick": {
            eventId: 4542,
            event: 'gtw_web_merge_page_item_click',
            pageInfo: { page: "terms_of_service" }
        },
    },

   
 
   
   
  
  

    }
  
    
