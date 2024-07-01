var blogUrl=document.URL.match(/^http:\/\/[^\/]+\/rocksaying/).toString()+'/';
var m;

var myStyleRenderTimer=setInterval(
    function(){
    if ((document.all && /loaded|complete/.test(document.readyState))||(!document.all && document.getElementById('footer'))){
    clearInterval(myStyleRenderTimer);
    myStyleRender();
}},200);
//if(document.addEventListener && !document.all && !window.opera/*for Mozilla browsers*/){
//document.addEventListener("DOMContentLoaded", myStyleRender, false);}
var catalogSet = {
'cat_42836': {
'name': '電腦技術',
'iconUrl': blogUrl+'d6419aa1.png'
},
'cat_242545': {
'name': 'Programming',
'iconUrl': blogUrl+'933424bb.gif'
},
'cat_242667': {
'name': 'C/C++/C#/Java',
'iconUrl': blogUrl+'94e9c771.gif'
},
'cat_242543': {
'name': 'PHP',
'bgColor': '#ccccff',
'iconUrl': blogUrl+'92282a2a.gif'
},
'cat_242544': {
'name': 'JavaScript',
'iconUrl': blogUrl+'0ff25948.gif'
},
'cat_343491': {
'name': 'Ruby',
'bgColor': '#ffffdd',
'iconUrl': blogUrl+'1ca28cda.gif'
},
'cat_242547': {
'name': 'SQL/Database',
'bgColor': '#0099cc',
'iconUrl': blogUrl+'9153f0aa.gif'
},
'cat_242578': {
'name': 'Copyleft/Free Software',
'bgColor': '#ffffcc',
'iconUrl': blogUrl+'093a8135.gif'
},
'cat_42837': {
'name': '經濟學/奧地利經濟學派',
'bgColor': '#ffffcc'
},
/*'cat_242577': {
'name': '奧地利經濟學派',
'bgColor': '#ffffcc'
},*/
/*'cat_242555': {
'name': '哲學研究'
},*/
'cat_242558': {
'name': '老子與哲學',
'iconUrl': blogUrl+'87e7e7d4.gif'
},
'cat_43946': {
'name': '閱讀隨筆',
'bgColor': '#ffffcc',
'iconUrl': blogUrl+'bb3651b6.png'
},
'cat_42838': {
'name': '生活記事',
'bgColor': '#ffcc99',
/*'iconUrl': blogUrl+'a5e1b05d.png'*/
}
};

/*preload*/
var asideImg=newTag('img');
with(asideImg){src=blogUrl+'6b55c5a9.png';alt='';style.border='0';}
var outsideImg=newTag('img');
with(outsideImg){src='http://blog.roodo.com/rocksaying/e1b85375.png'/*'96e9ea34.gif'*/;alt='';style.border='0';}

var diggImg=newTag('img');
with(diggImg){src='http://blog.roodo.com/rocksaying/aab84445.gif';title=alt='[+]digg it!';border='0';}
var hemidemiImg=newTag('img');
with(hemidemiImg){src='http://blog.roodo.com/rocksaying/06dfdbf1.gif';title=alt='[+]HEMIDEMI';border='0';}
var plurkImg=newTag('img');
with(plurkImg){src='http://statics.plurk.com/b872d9e40dbce69e5cde4787ccb74e60.png';title=alt='[+]Plurk';border='0';}
//var funpImg=newTag('img');
//with(funpImg){src='http://funp.com/tools/images/funpAdd78x14.png';title=alt='[+]funP推推王';border='0';}
var twtrImg=newTag('img');
with(twtrImg){src='http://blog.roodo.com/rocksaying/de2c53c0.png';title=alt='[+]twitter';border='0';}
var facebookImg=newTag('img');
with(facebookImg){src='http://blog.roodo.com/rocksaying/d0030af7.png';title=alt='[+]Share on Facebook';border='0';}
var bookmarklets=[
[twtrImg,false,"'http://twitter.com/?status='+t+' '+u",false],
[hemidemiImg,false,"'http://www.hemidemi.com/user_bookmark/new?copy=1&url='+u+'&title='+t+'&description='",true],
[facebookImg,'',"'http://www.facebook.com/share.php?u='+u+'&t='+t",false],
[plurkImg,'',"'http://www.plurk.com/?qualifier=shares&status='+u+'+('+t+')'",false],
/*[funpImg,false,"'http://funp.com/pages/submit/add.php?url='+u+'&s='+t +'&via=tools'",false],*/
[diggImg,'',"'http://digg.com/submit?phase=2&url='+u+'&title='+t",false]
];

function getByTag(t) {return document.getElementsByTagName(t)}
function getById(id) {return document.getElementById(id)}
function getByClass(c,t,b) {
 var bb=(b?b:document),tt=(t?t:'*'),ts=bb.getElementsByTagName(tt),ds=[],ids=0;
 for(var i=0;i<ts.length;++i)
  if(ts[i].className==c) ds[ids++]=ts[i];
 return (ds.length? ds:false);
}
function newTag(t) {return document.createElement(t)}
function newText(t) {return document.createTextNode(t)}

function renderMyIndividualDateHeader(args) {
var dh=args.dateHeader;
var ds=dh.firstChild.nodeValue.match(/(\d+)[^\d]+(\d+)[^\d]+(\d+)/);
if (!ds) return;
var dYear=ds[1];
var monthText=['正','二','三','四','五','六','七','八','九','十','十一','十二'];
var dMonth=monthText[ds[2]-1]+'月';
var dDay=ds[3];

var dDayNode = newTag('span');
with(dDayNode){style.fontSize ='20px';appendChild(newText(dDay));}
dh.className='blog_date2';
with(dh){
 removeChild(dh.firstChild);appendChild(newText(dYear));
 appendChild(newTag('br'));appendChild(dDayNode);
 appendChild(newTag('br'));appendChild(newText(dMonth));
}}

function setOutsideAnchors(bb) {
 var as=bb.getElementsByTagName('a');
 if(as){
 var a;
 for(var i=0;i<as.length;i++) {
 a=as[i];
 if(a.href&&a.getElementsByTagName('img').length < 1 && a.className.toString().charAt(0) != 'a'){
 if(!RegExp('^'+blogUrl).test(a.href)) {a.className='outside';a.target='_blank';a.title='外部連結:'+a.href;a.appendChild(outsideImg.cloneNode(false));}
}}}}

function setImagesWithTitle(bb) {
var blogMainSet = getByClass('main', 'div', bb);
var imgs, div, imgTitle;
var blogMainSetIndex=blogMainSet.length-1;
if(getByClass('adbox', 'div', blogMainSet[blogMainSetIndex]))
 --blogMainSetIndex;
for(var i=blogMainSetIndex;i>=0;--i) {
 imgs = blogMainSet[i].getElementsByTagName('img');
 for (var j=0; j<imgs.length;++j) {
  imgs[j].noOfImg=j+1;
  (function(img){
   var myFunc=function(){
   if((img.alt && img.alt.length>0)
    ||(img.title && img.title.length>0))
   {
   imgTitle=newTag('span');
   with(imgTitle){style.color='#cc6600';appendChild(newText('圖'+img.noOfImg+': '+(img.title?img.title:img.alt)));}
   div=newTag('div');
   img.parentNode.insertBefore(div, img);
   with(div){
   className='img_frame '+img.className;
   style.width=img.width+'px';
   appendChild(img);
   appendChild(newTag('br'));
   appendChild(imgTitle);}
   if(!img.title) img.title=img.alt;
   img.className='';img.style.border='1px solid black';
   };}
   if(img.complete){myFunc();}else{img.onload=myFunc;}
  })(imgs[j]);
 }
}}/*end setImagesWithTitle*/

function setBlogCatalog(args) {
 var aposteds=getByClass('aposted','a',args.posted);
 var i,catalogId=false,catalogName=false;
 for(i=aposteds.length-1;i>=0;--i) {
 if((catalogId = aposteds[i].href.match(/(cat_\d+)\.\w+/))) {
 catalogId=catalogId[1];
 if(catalogSet[catalogId])
  catalogName=catalogSet[catalogId].name
 break;
 }}
 return {"aposteds":aposteds,"id":catalogId,"name":catalogName,"index":i};
}

function renderMyBlogBodies(args) {
    var bb=args.blogBody;
    var blogTitle=bb.getElementsByTagName('h3')[0];
    var blogMain=getByClass('main','div',bb)[0];
    var posted=getByClass('posted','div',bb)[0];

    setOutsideAnchors(bb);
    setImagesWithTitle(bb);

    if( !args.isIndividualBlog ) {
     blogMain.style.marginLeft = '120px';
    }
    bb.insertBefore(bb.removeChild(posted), blogMain);

    var rc = setBlogCatalog({"posted":posted});
    var permLink = rc.aposteds[1];
    var catalogId, catalogName;

    if(rc.name) {
    catalogId = rc.id;
    catalogName = rc.name;
    posted.removeChild(rc.aposteds[rc.index]);
    }
    else {
    catalogId=args.catalogId;
    if(catalogSet[catalogId])
     catalogName=catalogSet[catalogId].name;
    }

    //if(catalogSet[catalogId] && catalogSet[catalogId].bgColor) {blogTitle.style.backgroundColor=catalogSet[catalogId].bgColor;}
    //blogTitle.style.color = '#000';

    var myCatalogName;
    if(catalogSet[catalogId] && catalogSet[catalogId].iconUrl ) {
    myCatalogName=newTag('img');
    with(myCatalogName){src=catalogSet[catalogId].iconUrl;alt=title=catalogName;}
    }
    else{myCatalogName=newText(catalogName+'::');}
    blogTitle.insertBefore(myCatalogName, blogTitle.firstChild);

    permLink.replaceChild(newText('閱讀全文'), permLink.firstChild);

    with(posted){
    removeChild(firstChild); // Posted by who
    removeChild(firstChild); // Anchor to Radoo
    }
    for(var i = posted.firstChild; i != posted.lastChild; ) {
     if( i.href ) {
      i.className = 'aposted2';
      i = i.nextSibling;
      posted.insertBefore(newTag('br'),i);
     }
     else {
      var j = i.nextSibling;
      posted.removeChild(i); // A TextNode of '|'
      //posted.replaceChild(newTag('br'), i);
      i = j;
     }
    }
    if (!args.catalogId) {
     var tas=newTagAnchers(permLink.href,blogTitle,getInnerText(blogMain),'2');
     for(var i=0;i<tas.length;++i){posted.appendChild(tas[i]);posted.appendChild(newTag('br'));}
    }
    posted.className = 'posted2';
}

function getInnerText(node) {
 if (!node) return '';
 var t=[];
 for (var n = node.firstChild; n; n = n.nextSibling) {
  if (n.nodeType == 3) t.push(n.nodeValue);
  else t.push(getInnerText(n));
 }
 return t.join('');
}

function newTagAncherAddDescription() {
 var d;
 if (window.getSelection) d=window.getSelection();
 else if (document.getSelection) d=document.getSelection();
 else if (document.selection) d=document.selection.createRange().text;
 if (!d || d == '') {
  d = this.bookmarkDescription;
 }
this.href += encodeURIComponent(d);
}

function newTagAnchers(href, blogTitle, blogDescription, c) {
    var u=encodeURIComponent(href.match(/([^#]+)#?/)[1]);
    var t=(blogTitle.childNodes[1] ? blogTitle.childNodes[1].nodeValue : blogTitle.childNodes[0].nodeValue).replace(/[\t\n]/g,'');
    t=encodeURIComponent(t);
    var as=[];
    for(var i=0;i<bookmarklets.length;++i){
    as[i]=newTag('a');
    as[i].target='_blank';
    var ed, href = eval(bookmarklets[i][2]);
    if (bookmarklets[i][3])
      ed = encodeURIComponent(blogDescription.replace(/[\r\n\t]/g,'')).substring(0, /*4095*/2048-href.length);
    else
      ed ='';
    as[i].href=(href + ed);

    as[i].appendChild(bookmarklets[i][0].cloneNode(false));
    //as[i].appendChild(newTag('br'));
    if(bookmarklets[i][1]){
    as[i].appendChild(newText(bookmarklets[i][1]));
    as[i].className='aposted'+c;
    }
    else{
    as[i].className='bookmarklet'+c;
    }
    }
    return as;
}

var tagServices = [
{
    'title': '樂多標籤',
    'url': 'http://search.blog.roodo.com/index.php?blog=rocksaying&sort=c&q=',
    'icon': 'http://blogimage.roodo.com/rocksaying/9fcb5e66.gif'
}/*,
{
    'title': '黑米標籤',
    'url': 'http://www.hemidemi.com/bookmark/tag/',
    'icon': 'http://www.hemidemi.com/sticker/user/www.braverobbin.com.gif'
}
*/
];

for (var i = 0; i < tagServices.length; ++i) { //preload img
 tagService = tagServices[i];
 if (tagService.icon) {
  tagService.img = document.createElement('img');
  tagService.img.src = tagService.icon;
  tagService.img.title = '['+tagService.title+']';
 }
}

function getDivNamedTags() {
 var ds = getByClass('tags', 'div');
 return ds;
}

function getTagsFromMeta() {
 var ds = getByTag('meta');
 var mn;
 for (var i = 0; i < ds.length; ++i) {
  mn = ds[i].getAttribute('name');
  if (mn == 'description') break;
 }
 return ds[i];
}

function getTagsFromString(tagsValue) {
 var fixed = tagsValue.indexOf("\n");
 if (fixed != -1) tagsValue = tagsValue.substring(0, fixed);
 //第一個字如果是冒號(:)結尾，則不視為 tag
 if (tagsValue.match(/^\S+:/)) {
  var sepPos = tagsValue.indexOf(':')+1;
  if (tagsValue.charAt(sepPos) == ' ') sepPos++;
  tagsValue=tagsValue.substring(sepPos);
 }
 if (tagsValue.indexOf(',') > 0)
  tags = tagsValue.split(/,/); //split by ,
 else
  tags = tagsValue.split(/\s+/); //split by space
 for (var i = 0; i < tags.length; ++i) {tags[i] = tags[i].toLowerCase().replace(/[_-]/, ' ');}
 return tags;
}

function makeTagsSpan(tagsValue) {
 var span, tags;
 tags=getTagsFromString(tagsValue);

 span = newTag('span');
 var s='';
 for (var j = 0; j < tags.length; ++j) {
  s+='<button class="tagItem" onclick="location.href=\''
   +tagServices[0].url+encodeURIComponent(tags[j])
   +'\';">'+tags[j]+'</button>';
 }
 span.innerHTML=s;
 return span;
}

function makeTagsSpanFromPosted(br) {
 var span = newTag('span');
 var btn;
 for (var node = br.nextSibling; node; node = node.nextSibling) {
  if (node.nodeName == 'A' || node.nodeName == 'a') {
   btn = newTag('button');
   btn.className='tagItem';
   btn.onclick=(function(n){
    //var href = n.href; //href to http://blog.roodo.com/rocksaying/tag/100145/?
    var href = tagServices[0].url+encodeURIComponent(n.firstChild.nodeValue) //search
    return function(){location.href=href};
    })(node);
   btn.appendChild(newText(node.firstChild.nodeValue));
   span.appendChild(btn);
  }
 }
 return span;
}

function makeTagLinksOfIndividualBlog(tools) {
  var span;
  var tagElements, tagElement;

  tagElements = getDivNamedTags();
  for (var i = 0; i < tagElements.length; ++i) {
    tagElement = tagElements[i];
    if (tagElement.firstChild && tagElement.firstChild.nodeValue)
      if (span = makeTagsSpan(tagElement.firstChild.nodeValue)) {
        tagElement.replaceChild(span, tagElement.firstChild);
      }
  }
  //如果已經有 <div class="tags">，就不再處理 makeTagsSpanFromPosted 的標籤。
  if (tagElements) { //alert('tag from div');
    return;
  }
  if (!tools)
   return;

  var mb, divTag;
  var br = (tools.getElementsByTagName('br'))[0];
  if (br) { //有標籤
    if (span = makeTagsSpanFromPosted(br)) { //alert('tag from meta');
      divTag = newTag('div');
      divTag.className='tags';
      divTag.appendChild(span);
      mb = (getByClass('main','div'))[0];
      mb.insertBefore(divTag, mb.firstChild);
    }
  }
}

function makeTagLinksOfBlogs() {
  var tagElements;
  var tagService, tagElement, tags, tagLinks, span;

  tagElements = getDivNamedTags();
  for (var i = 0; i < tagElements.length; ++i) {
    tagElement = tagElements[i];
    if (tagElement.firstChild && tagElement.firstChild.nodeValue)
      if (span = makeTagsSpan(tagElement.firstChild.nodeValue))
        tagElement.replaceChild(span, tagElement.firstChild);
  }
}

function renderMyIndividualBlogBody(args) {
    var bb=args.blogBody;
    var blogTitle=bb.getElementsByTagName('h3')[0];

    var posted=getByClass('posted','div',bb)[0];
    if (!posted) return;
    var rc=setBlogCatalog({"posted":posted});
    var catalogId,catalogName;
    if(rc.name) {
    catalogId = rc.id;
    if(catalogSet[catalogId] && catalogSet[catalogId].iconUrl ) {
    catalogName = newTag('img');
    with(catalogName){
    className='blogbody_title_img';
    src=catalogSet[catalogId].iconUrl;
    alt=title=catalogSet[catalogId].name;
    }}
    else {catalogName = newText(rc.name+'::');}
    blogTitle.insertBefore(catalogName, blogTitle.firstChild);
    }

    blogTitle.className='blogbogy_title2';
    var aPosted=getByClass('comments-post', 'div');

    var aID=document.URL.match(/\/archives\/(\d+)\.html/)[1];
    //aID=aID[1];

    var cIDs=(function(){
      var as=document.getElementsByTagName('a');
      var cIDs=[];
      for(var i=0, n=as.length;i<n;++i){
       var p;
       if((p=/^comment-(\d+)$/.exec(as[i].name))){
        cIDs.push(p[1]);
       }
      }
      return cIDs;
    })();

    var aCBs=getByClass('comments-body', 'div');
    var cPLImg = newTag('img');
    cPLImg.src='http://blog.roodo.com/rocksaying/7b6b4f4e.gif';
    cPLImg.alt=' 說';
    var cPL;
    for(var i=aPosted.length-1, j=cIDs.length-1;i>=0;--i, --j){
     posterText=aPosted[i].lastChild;
     if(posterText){
      posterDiv=newTag('div');
      posterDiv.className='comments-postName';
      // Posted by ???
      // or
      // Posted by <a href="xxx">???</a>
      posterTextParts=posterText.nodeValue.match(/Posted by (.+)[\b\s]+at/m);
      if (posterTextParts)
       posterDiv.appendChild(newText(posterTextParts[1]));
      else if (posterText.previousSibling)
       posterDiv.appendChild(posterText.previousSibling.cloneNode(true));
      else
       posterDiv.appendChild(newText('私密回應'));
     }
     cPL = newTag('a');
     cPL.appendChild(cPLImg.cloneNode(false));
     cPL.href=blogUrl+'archives/'+aID+'.html#comment-' + cIDs[j];
     cPL.title='Permlink: '+ cPL.href;
     posterDiv.appendChild(cPL);
     aCB=aCBs.pop();
     aCB.parentNode.insertBefore(posterDiv, aCB);
    }

    var blogMainSet=getByClass('main','div',bb);
    with(blogMainSet[0].style){
     clear='both';
     paddingBottom = '0';
     paddingTop = '0';
     marginBottom='0';
    }
    for(var i=blogMainSet.length-1,bm=blogMainSet[i];i>=0;bm=blogMainSet[--i]){
      for(var l=bm.lastChild, m=l.previousSibling;l && l.childNodes.length == 0; l=m,m=m.previousSibling){
       if(!l.attributes || l.attributes==0 || l.attributes.clear)
        bm.removeChild(l); // remove empty
       if(!m)
        break;
      }
    }
    var aMore=document.getElementsByName('more');
    for(var i=aMore.length-1;i>=0;--i)
     aMore[i].parentNode.removeChild(aMore[i]);

    var tools=getByClass('tools', 'div', bb)[0];

    makeTagLinksOfIndividualBlog(tools);

    var toolNode, nextNode;
    toolNode=tools.firstChild;
    var roodoCategory=false;
    var roodoTopic=false;
    for (toolNode = tools.firstChild; toolNode != tools.lastChild; toolNode = nextNode) {
     /*
     if (/樂多分類：$/.test(toolNode.nodeValue)) {
      roodoCategory=toolNode.nextSibling;
      roodoCategory.title='樂多分類';
     }
     if (/共同主題：$/.test(toolNode.nodeValue)) {
      roodoTopic=toolNode.nextSibling;
      roodoTopic.title='共同主題';
     }
     */
     if (/工具：$/.test(toolNode.nodeValue)) {
      break;
     }
     nextNode=toolNode.nextSibling;
     tools.removeChild(toolNode);
    }

    for (var n = toolNode, m = toolNode.nextSibling; n; n=m, m=m.nextSibling) {
     tools.removeChild(n);
     if (!m || !m.nextSibling)
       break;
    }
    posted.insertBefore(tools, posted.firstChild);

     var pagetop_line=getByClass('pagetop', 'div', bb)[0];
     var a=newTag('a');
     a.href='http://adm.blog.roodo.com/article/edit&aID='+aID;
     a.target='_blank';
     a.appendChild(newText('[edit]'));
     pagetop_line.appendChild(newText(' / 工具:'));
     pagetop_line.appendChild(a);
    var dirDiv=getByClass('dir', 'div')[0];
    posted.appendChild(dirDiv.cloneNode(true)).className='dirBottom';
    var dirMenu=getByClass('amenu', 'a', dirDiv);
    var prevPost=(dirMenu[0].href==blogUrl ? false : dirMenu[0]);
    if(prevPost){
     prevPost.title=prevPost.firstChild.nodeValue;
     prevPost.replaceChild(newText('<<<'),prevPost.firstChild);
    }
    var nextPost=(dirMenu[dirMenu.length-1].href==blogUrl ? false : dirMenu[dirMenu.length-1]);
    if(nextPost){
     nextPost.title=nextPost.firstChild.nodeValue;
     nextPost.replaceChild(newText('>>>'),nextPost.firstChild);
    }
    var homeLink=dirMenu[(prevPost? 1:0)];
    homeLink.title=homeLink.firstChild.nodeValue;
    homeLink.replaceChild(newText('首頁'),homeLink.firstChild);
    if(dirDiv&&(roodoCategory||roodoTopic)){
     var span=newTag('span');
     if(roodoCategory){
      span.appendChild(roodoCategory);
      if(roodoTopic)
       span.appendChild(newText('::'));
     }
     if(roodoTopic){
      span.appendChild(roodoTopic);
     }
     span.appendChild(newTag('br'));
     dirDiv.insertBefore(span, dirDiv.firstChild);
    }

    var englishTrans=newTag('div');
    englishTrans.className='englishTrans';
    englishTrans.innerHTML='&lt;<a title="Translate this page by Google language tool" target="_blank" href="http://translate.google.com/translate?hl=en&langpair=zh%7Cen&ie=UTF-8&u='+document.URL+'">Translate to English</a>&gt;';
    dirDiv.parentNode.insertBefore(englishTrans, dirDiv);

    var trackback=document.getElementsByName('trackback')[0];
    if(trackback)
    for(var i=trackback.nextSibling; i; i=i.nextSibling)
    if(i.className){bb.removeChild(i);break;}

    var tbUrl=getByClass('trackback-url', 'div', bb)[0];
    if(tbUrl){
    var refNode=tbUrl.firstChild;
    var trUrlLabel=newTag('label');
    trUrlLabel.appendChild(newText('引用: '));
    var trUrlTxtBox=newTag('input');
    with(trUrlTxtBox){
    setAttribute('type','text');setAttribute('size','50');
    setAttribute('readOnly','true');value=refNode.nodeValue;
    }
    trUrlLabel.appendChild(trUrlTxtBox);
    tbUrl.replaceChild(trUrlLabel, refNode);
    }

    var Onotes=getByClass('Onote', 'span', bb);
    if(Onotes) {
    var n, m1, m2;
    for(var i=0;i<Onotes.length;++i){
    n=Onotes[i];n.className='Onote_float';
    m1=newTag('span');
    with(m1){style.color='red';style.verticalAlign='top';style.fontSize='0.8em';appendChild(newText('*'+(i+1)));}
    n.parentNode.insertBefore(m1,n);
    m2=newTag('span');
    with(m2){style.color='red';appendChild(newText('*'+(i+1)+' '));}
    n.insertBefore(m2, n.firstChild);
    }}

    setImagesWithTitle(bb);
    setOutsideAnchors(bb);

    var tas=newTagAnchers(document.URL,blogTitle,getInnerText(blogMainSet[0]),'');
    with(posted){
    insertBefore(newTag('br'),firstChild);
    for(var i=tas.length-1;i>=0;--i){
    insertBefore(newText(' '),firstChild);
    insertBefore(tas[i],firstChild);}
    }
    //makeTagLinksOfIndividualBlog();
}

function renderMyFooter() {
  //return;//TEST
  var footer = getById('footer');
  var d_=document.referrer, r_;
  if (self != top){try {r_=''+escape(parent.document.referrer);}catch(e_r) {r_=''+escape(d_);}}
  else {r_=''+escape(d_);}
  footer.innerHTML=
  '<div class="footer_license"><a href="'+blogUrl+'archives/258097.html"><img src="'+blogUrl+'bb398c64.png" border="0" alt="Licensed by GNU FDL" title="Licensed by GNU FDL"/></a> '+
  'Copyleft &copy; <a href="mailto: shirock@educities.edu.tw">遊手好閒的石頭成</a>. ' + 
  '採用《<a href="'+blogUrl+'archives/258097.html">GNU 自由文件許可證</a>》授權予著作利用人.</div>'+
  '<div id="shinyDiv"><a href="http://s4.shinystat.com/cgi-bin/shinystatv.cgi?USER=rocksaying&NH=1" target="_blank"><img src="http://s4.shinystat.com/cgi-bin/shinystat.cgi?USER=rocksaying&REFER='
  +r_+'" border="0" alt="[ShinyStat]"/></a></div>';
//  '<br/>Copyleft &copy; <a href="mailto: shirock@educities.edu.tw">Shih Yuncheng</a>. ' + 
//  'Contents is available under <a href="'+blogUrl+'archives/258097.html">GNU Free Documentation License</a>.'+
}

function renderMyCatalogies() {
    var description = getByClass('description')[0];
    if(!getById('links')) {description.style.margin='0';}
    var cl=['<ul class="categories">'];
    for(var i in catalogSet){cl.push('<li><a href="',blogUrl,'archives/',i,'.html">',catalogSet[i].name,'</a></li>\n');}

    var clickCode="var q=this.nextSibling;if(/[^\s]+/.test(q.value)) return true; q.focus(); return false;";
    var ieStyleCode='';
    if(document.all) ieStyleCode='height:15px;';
    cl.push('<li><form style="display:inline;" action="http://search.blog.roodo.com/index.php" method="get">'+
     '<button type="submit" value="搜尋" style="border:0;font-size:9pt;font-style:normal;margin:0;padding:0;cursor:pointer;'+ieStyleCode+'" onclick="'+clickCode+'">搜尋&gt;</button>'+
     '<input type="text" name="q" size="8" style="border:1px solid black;background-color:#ffffcc;font-size:9pt;'+ieStyleCode+'"/>'+
     '<input type="hidden" name="blog" value="rocksaying"/><input type="hidden" name="sort" value="c"/>'+
     '</form></li>'
    );
    cl.push('</ul>');
    description.innerHTML+=cl.join('');
}

function renderBlogDescription(){
    var bd=getByClass('description')[0].getElementsByTagName('div')[0];
    var fl=newTag('a');
    fl.href=blogUrl+'archives/258097.html';
    var fi=newTag('img');
    var t;
    for(t=bd.firstChild;t.hasChildNodes();t=t.firstChild);
    fi.alt=t.nodeValue;fi.src=blogUrl+'0db352d5.png';
    fl.appendChild(fi);bd.replaceChild(fl, bd.firstChild);
}

function setSideBodyLink(){
    var sidebodies=getByClass('sidebody','div',getById('links'));
    if(sidebodies){
    var ai;
    for(var i=0;i<sidebodies.length;++i){
    if(sidebodies[i].firstChild.href){
    ai=asideImg.cloneNode(false);
    with(sidebodies[i]){
    insertBefore(ai,firstChild);
    style.marginLeft=ai.width+'px';
    style.textIndent=-ai.width+'px';
}}}}}

function myStyleRender() {
    var content = getById('content');
    if( !content ) {content = getById('container');}
    renderBlogDescription();

    function setMyCodeHighlight() {
     //return;//TEST
     SyntaxHighlighter.all();
     dp.SyntaxHighlighter.HighlightAll('code');
     return;
    }

    function getFirstTagFromPosted(br, tl) {
     var t;
     for (var node = br.nextSibling; node; node = node.nextSibling) {
      if (node.nodeName == 'A' || node.nodeName == 'a') {
       t = node.firstChild.nodeValue;
       if (tl.tags[t]) continue;
       tl.tags[t] = node.cloneNode(true);
       tl.count++;
       break;
      }
     }
    }

    /*
      var mb, divTag;
      var br = (tools.getElementsByTagName('br'))[0];
      if (br) { //有標籤
        if (span = makeTagsSpanFromPosted(br)) { //alert('tag from meta');
          divTag = newTag('div');
          divTag.className='tags';
          divTag.appendChild(span);
          mb = (getByClass('main','div'))[0];
          mb.insertBefore(divTag, mb.firstChild);
        }
      }
    */

    function addRecentTagsToCat(bb) {
     var posted, br, tl, divTag, mb;
     var tagLinks = {count: 0, tags: {}};
     for (var i = 0; i < bb.length; ++i) {
      posted = (getByClass('posted', 'div', bb[i]))[0];
      br = (posted.getElementsByTagName('br'))[0];
      if (br) {//有標籤
       if (tagLinks.count < 3) {
        getFirstTagFromPosted(br, tagLinks);
       }

       if (span = makeTagsSpanFromPosted(br)) { //alert('tag from meta');
        divTag = newTag('div');
        divTag.className='tags';
        divTag.appendChild(span);
        mb = (getByClass('main','div', bb[i]))[0];
        mb.insertBefore(divTag, mb.firstChild);
       }
      }
     }

     var cl = (getByClass('categories', 'ul'))[0];
     var li, a;
     for (a in tagLinks.tags) {
      li = newTag('li');
      li.appendChild(tagLinks.tags[a]);
      cl.insertBefore(newText(' '), cl.lastChild);
      cl.insertBefore(li, cl.lastChild);
     }
    }

    var sidelink = getById('links');
    if(sidelink)
     setSideBodyLink();

    var dateHeaders=content.getElementsByTagName('h2');
    var blogBodies=getByClass('blogbody', 'div', content);

    var catalogId=false;
    var docUrlCat=document.URL.match(/(cat_\d+)\.\w+/)
    if( docUrlCat&&docUrlCat.length>1){catalogId=docUrlCat[1];}

    var isIndividualBlog=((catalogId||blogBodies.length>1)?false:true);

    renderMyCatalogies();

    if(isIndividualBlog) {
     renderMyIndividualDateHeader({'dateHeader':dateHeaders[0]});
     renderMyIndividualBlogBody({'blogBody':blogBodies[0]});
    }
    else {
     addRecentTagsToCat(blogBodies);
     makeTagLinksOfBlogs();
     for(var i=0;i<blogBodies.length;++i){renderMyBlogBodies({'blogBody':blogBodies[i],'index':i,'isIndividualBlog': isIndividualBlog,'catalogId':catalogId});}
    }
    if (document.all && !window.opera) {
      getById('banner').style.height='100px';
    }
    renderMyFooter();

    setMyCodeHighlight();

}

/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
//shCore.js
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('K M;I(M)1S 2U("2a\'t 4k M 4K 2g 3l 4G 4H");(6(){6 r(f,e){I(!M.1R(f))1S 3m("3s 15 4R");K a=f.1w;f=M(f.1m,t(f)+(e||""));I(a)f.1w={1m:a.1m,19:a.19?a.19.1a(0):N};H f}6 t(f){H(f.1J?"g":"")+(f.4s?"i":"")+(f.4p?"m":"")+(f.4v?"x":"")+(f.3n?"y":"")}6 B(f,e,a,b){K c=u.L,d,h,g;v=R;5K{O(;c--;){g=u[c];I(a&g.3r&&(!g.2p||g.2p.W(b))){g.2q.12=e;I((h=g.2q.X(f))&&h.P===e){d={3k:g.2b.W(b,h,a),1C:h};1N}}}}5v(i){1S i}5q{v=11}H d}6 p(f,e,a){I(3b.Z.1i)H f.1i(e,a);O(a=a||0;a<f.L;a++)I(f[a]===e)H a;H-1}M=6(f,e){K a=[],b=M.1B,c=0,d,h;I(M.1R(f)){I(e!==1d)1S 3m("2a\'t 5r 5I 5F 5B 5C 15 5E 5p");H r(f)}I(v)1S 2U("2a\'t W 3l M 59 5m 5g 5x 5i");e=e||"";O(d={2N:11,19:[],2K:6(g){H e.1i(g)>-1},3d:6(g){e+=g}};c<f.L;)I(h=B(f,c,b,d)){a.U(h.3k);c+=h.1C[0].L||1}Y I(h=n.X.W(z[b],f.1a(c))){a.U(h[0]);c+=h[0].L}Y{h=f.3a(c);I(h==="[")b=M.2I;Y I(h==="]")b=M.1B;a.U(h);c++}a=15(a.1K(""),n.Q.W(e,w,""));a.1w={1m:f,19:d.2N?d.19:N};H a};M.3v="1.5.0";M.2I=1;M.1B=2;K C=/\\$(?:(\\d\\d?|[$&`\'])|{([$\\w]+)})/g,w=/[^5h]+|([\\s\\S])(?=[\\s\\S]*\\1)/g,A=/^(?:[?*+]|{\\d+(?:,\\d*)?})\\??/,v=11,u=[],n={X:15.Z.X,1A:15.Z.1A,1C:1r.Z.1C,Q:1r.Z.Q,1e:1r.Z.1e},x=n.X.W(/()??/,"")[1]===1d,D=6(){K f=/^/g;n.1A.W(f,"");H!f.12}(),y=6(){K f=/x/g;n.Q.W("x",f,"");H!f.12}(),E=15.Z.3n!==1d,z={};z[M.2I]=/^(?:\\\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S]))/;z[M.1B]=/^(?:\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\\d*|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S])|\\(\\?[:=!]|[?*+]\\?|{\\d+(?:,\\d*)?}\\??)/;M.1h=6(f,e,a,b){u.U({2q:r(f,"g"+(E?"y":"")),2b:e,3r:a||M.1B,2p:b||N})};M.2n=6(f,e){K a=f+"/"+(e||"");H M.2n[a]||(M.2n[a]=M(f,e))};M.3c=6(f){H r(f,"g")};M.5l=6(f){H f.Q(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&")};M.5e=6(f,e,a,b){e=r(e,"g"+(b&&E?"y":""));e.12=a=a||0;f=e.X(f);H b?f&&f.P===a?f:N:f};M.3q=6(){M.1h=6(){1S 2U("2a\'t 55 1h 54 3q")}};M.1R=6(f){H 53.Z.1q.W(f)==="[2m 15]"};M.3p=6(f,e,a,b){O(K c=r(e,"g"),d=-1,h;h=c.X(f);){a.W(b,h,++d,f,c);c.12===h.P&&c.12++}I(e.1J)e.12=0};M.57=6(f,e){H 6 a(b,c){K d=e[c].1I?e[c]:{1I:e[c]},h=r(d.1I,"g"),g=[],i;O(i=0;i<b.L;i++)M.3p(b[i],h,6(k){g.U(d.3j?k[d.3j]||"":k[0])});H c===e.L-1||!g.L?g:a(g,c+1)}([f],0)};15.Z.1p=6(f,e){H J.X(e[0])};15.Z.W=6(f,e){H J.X(e)};15.Z.X=6(f){K e=n.X.1p(J,14),a;I(e){I(!x&&e.L>1&&p(e,"")>-1){a=15(J.1m,n.Q.W(t(J),"g",""));n.Q.W(f.1a(e.P),a,6(){O(K c=1;c<14.L-2;c++)I(14[c]===1d)e[c]=1d})}I(J.1w&&J.1w.19)O(K b=1;b<e.L;b++)I(a=J.1w.19[b-1])e[a]=e[b];!D&&J.1J&&!e[0].L&&J.12>e.P&&J.12--}H e};I(!D)15.Z.1A=6(f){(f=n.X.W(J,f))&&J.1J&&!f[0].L&&J.12>f.P&&J.12--;H!!f};1r.Z.1C=6(f){M.1R(f)||(f=15(f));I(f.1J){K e=n.1C.1p(J,14);f.12=0;H e}H f.X(J)};1r.Z.Q=6(f,e){K a=M.1R(f),b,c;I(a&&1j e.58()==="3f"&&e.1i("${")===-1&&y)H n.Q.1p(J,14);I(a){I(f.1w)b=f.1w.19}Y f+="";I(1j e==="6")c=n.Q.W(J,f,6(){I(b){14[0]=1f 1r(14[0]);O(K d=0;d<b.L;d++)I(b[d])14[0][b[d]]=14[d+1]}I(a&&f.1J)f.12=14[14.L-2]+14[0].L;H e.1p(N,14)});Y{c=J+"";c=n.Q.W(c,f,6(){K d=14;H n.Q.W(e,C,6(h,g,i){I(g)5b(g){24"$":H"$";24"&":H d[0];24"`":H d[d.L-1].1a(0,d[d.L-2]);24"\'":H d[d.L-1].1a(d[d.L-2]+d[0].L);5a:i="";g=+g;I(!g)H h;O(;g>d.L-3;){i=1r.Z.1a.W(g,-1)+i;g=1Q.3i(g/10)}H(g?d[g]||"":"$")+i}Y{g=+i;I(g<=d.L-3)H d[g];g=b?p(b,i):-1;H g>-1?d[g+1]:h}})})}I(a&&f.1J)f.12=0;H c};1r.Z.1e=6(f,e){I(!M.1R(f))H n.1e.1p(J,14);K a=J+"",b=[],c=0,d,h;I(e===1d||+e<0)e=5D;Y{e=1Q.3i(+e);I(!e)H[]}O(f=M.3c(f);d=f.X(a);){I(f.12>c){b.U(a.1a(c,d.P));d.L>1&&d.P<a.L&&3b.Z.U.1p(b,d.1a(1));h=d[0].L;c=f.12;I(b.L>=e)1N}f.12===d.P&&f.12++}I(c===a.L){I(!n.1A.W(f,"")||h)b.U("")}Y b.U(a.1a(c));H b.L>e?b.1a(0,e):b};M.1h(/\\(\\?#[^)]*\\)/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"});M.1h(/\\((?!\\?)/,6(){J.19.U(N);H"("});M.1h(/\\(\\?<([$\\w]+)>/,6(f){J.19.U(f[1]);J.2N=R;H"("});M.1h(/\\\\k<([\\w$]+)>/,6(f){K e=p(J.19,f[1]);H e>-1?"\\\\"+(e+1)+(3R(f.2S.3a(f.P+f[0].L))?"":"(?:)"):f[0]});M.1h(/\\[\\^?]/,6(f){H f[0]==="[]"?"\\\\b\\\\B":"[\\\\s\\\\S]"});M.1h(/^\\(\\?([5A]+)\\)/,6(f){J.3d(f[1]);H""});M.1h(/(?:\\s+|#.*)+/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"},M.1B,6(){H J.2K("x")});M.1h(/\\./,6(){H"[\\\\s\\\\S]"},M.1B,6(){H J.2K("s")})})();1j 2e!="1d"&&(2e.M=M);K 1v=6(){6 r(a,b){a.1l.1i(b)!=-1||(a.1l+=" "+b)}6 t(a){H a.1i("3e")==0?a:"3e"+a}6 B(a){H e.1Y.2A[t(a)]}6 p(a,b,c){I(a==N)H N;K d=c!=R?a.3G:[a.2G],h={"#":"1c",".":"1l"}[b.1o(0,1)]||"3h",g,i;g=h!="3h"?b.1o(1):b.5u();I((a[h]||"").1i(g)!=-1)H a;O(a=0;d&&a<d.L&&i==N;a++)i=p(d[a],b,c);H i}6 C(a,b){K c={},d;O(d 2g a)c[d]=a[d];O(d 2g b)c[d]=b[d];H c}6 w(a,b,c,d){6 h(g){g=g||1P.5y;I(!g.1F){g.1F=g.52;g.3N=6(){J.5w=11}}c.W(d||1P,g)}a.3g?a.3g("4U"+b,h):a.4y(b,h,11)}6 A(a,b){K c=e.1Y.2j,d=N;I(c==N){c={};O(K h 2g e.1U){K g=e.1U[h];d=g.4x;I(d!=N){g.1V=h.4w();O(g=0;g<d.L;g++)c[d[g]]=h}}e.1Y.2j=c}d=e.1U[c[a]];d==N&&b!=11&&1P.1X(e.13.1x.1X+(e.13.1x.3E+a));H d}6 v(a,b){O(K c=a.1e("\\n"),d=0;d<c.L;d++)c[d]=b(c[d],d);H c.1K("\\n")}6 u(a,b){I(a==N||a.L==0||a=="\\n")H a;a=a.Q(/</g,"&1y;");a=a.Q(/ {2,}/g,6(c){O(K d="",h=0;h<c.L-1;h++)d+=e.13.1W;H d+" "});I(b!=N)a=v(a,6(c){I(c.L==0)H"";K d="";c=c.Q(/^(&2s;| )+/,6(h){d=h;H""});I(c.L==0)H d;H d+\'<17 1g="\'+b+\'">\'+c+"</17>"});H a}6 n(a,b){a.1e("\\n");O(K c="",d=0;d<50;d++)c+="                    ";H a=v(a,6(h){I(h.1i("\\t")==-1)H h;O(K g=0;(g=h.1i("\\t"))!=-1;)h=h.1o(0,g)+c.1o(0,b-g%b)+h.1o(g+1,h.L);H h})}6 x(a){H a.Q(/^\\s+|\\s+$/g,"")}6 D(a,b){I(a.P<b.P)H-1;Y I(a.P>b.P)H 1;Y I(a.L<b.L)H-1;Y I(a.L>b.L)H 1;H 0}6 y(a,b){6 c(k){H k[0]}O(K d=N,h=[],g=b.2D?b.2D:c;(d=b.1I.X(a))!=N;){K i=g(d,b);I(1j i=="3f")i=[1f e.2L(i,d.P,b.23)];h=h.1O(i)}H h}6 E(a){K b=/(.*)((&1G;|&1y;).*)/;H a.Q(e.3A.3M,6(c){K d="",h=N;I(h=b.X(c)){c=h[1];d=h[2]}H\'<a 2h="\'+c+\'">\'+c+"</a>"+d})}6 z(){O(K a=1E.36("1k"),b=[],c=0;c<a.L;c++)a[c].3s=="20"&&b.U(a[c]);H b}6 f(a){a=a.1F;K b=p(a,".20",R);a=p(a,".3O",R);K c=1E.4i("3t");I(!(!a||!b||p(a,"3t"))){B(b.1c);r(b,"1m");O(K d=a.3G,h=[],g=0;g<d.L;g++)h.U(d[g].4z||d[g].4A);h=h.1K("\\r");c.39(1E.4D(h));a.39(c);c.2C();c.4C();w(c,"4u",6(){c.2G.4E(c);b.1l=b.1l.Q("1m","")})}}I(1j 3F!="1d"&&1j M=="1d")M=3F("M").M;K e={2v:{"1g-27":"","2i-1s":1,"2z-1s-2t":11,1M:N,1t:N,"42-45":R,"43-22":4,1u:R,16:R,"3V-17":R,2l:11,"41-40":R,2k:11,"1z-1k":11},13:{1W:"&2s;",2M:R,46:11,44:11,34:"4n",1x:{21:"4o 1m",2P:"?",1X:"1v\\n\\n",3E:"4r\'t 4t 1D O: ",4g:"4m 4B\'t 51 O 1z-1k 4F: ",37:\'<!4T 1z 4S "-//4V//3H 4W 1.0 4Z//4Y" "1Z://2y.3L.3K/4X/3I/3H/3I-4P.4J"><1z 4I="1Z://2y.3L.3K/4L/5L"><3J><4N 1Z-4M="5G-5M" 6K="2O/1z; 6J=6I-8" /><1t>6L 1v</1t></3J><3B 1L="25-6M:6Q,6P,6O,6N-6F;6y-2f:#6x;2f:#6w;25-22:6v;2O-3D:3C;"><T 1L="2O-3D:3C;3w-32:1.6z;"><T 1L="25-22:6A-6E;">1v</T><T 1L="25-22:.6C;3w-6B:6R;"><T>3v 3.0.76 (72 73 3x)</T><T><a 2h="1Z://3u.2w/1v" 1F="38" 1L="2f:#3y">1Z://3u.2w/1v</a></T><T>70 17 6U 71.</T><T>6T 6X-3x 6Y 6D.</T></T><T>6t 61 60 J 1k, 5Z <a 2h="6u://2y.62.2w/63-66/65?64=5X-5W&5P=5O" 1L="2f:#3y">5R</a> 5V <2R/>5U 5T 5S!</T></T></3B></1z>\'}},1Y:{2j:N,2A:{}},1U:{},3A:{6n:/\\/\\*[\\s\\S]*?\\*\\//2c,6m:/\\/\\/.*$/2c,6l:/#.*$/2c,6k:/"([^\\\\"\\n]|\\\\.)*"/g,6o:/\'([^\\\\\'\\n]|\\\\.)*\'/g,6p:1f M(\'"([^\\\\\\\\"]|\\\\\\\\.)*"\',"3z"),6s:1f M("\'([^\\\\\\\\\']|\\\\\\\\.)*\'","3z"),6q:/(&1y;|<)!--[\\s\\S]*?--(&1G;|>)/2c,3M:/\\w+:\\/\\/[\\w-.\\/?%&=:@;]*/g,6a:{18:/(&1y;|<)\\?=?/g,1b:/\\?(&1G;|>)/g},69:{18:/(&1y;|<)%=?/g,1b:/%(&1G;|>)/g},6d:{18:/(&1y;|<)\\s*1k.*?(&1G;|>)/2T,1b:/(&1y;|<)\\/\\s*1k\\s*(&1G;|>)/2T}},16:{1H:6(a){6 b(i,k){H e.16.2o(i,k,e.13.1x[k])}O(K c=\'<T 1g="16">\',d=e.16.2x,h=d.2X,g=0;g<h.L;g++)c+=(d[h[g]].1H||b)(a,h[g]);c+="</T>";H c},2o:6(a,b,c){H\'<2W><a 2h="#" 1g="6e 6h\'+b+" "+b+\'">\'+c+"</a></2W>"},2b:6(a){K b=a.1F,c=b.1l||"";b=B(p(b,".20",R).1c);K d=6(h){H(h=15(h+"6f(\\\\w+)").X(c))?h[1]:N}("6g");b&&d&&e.16.2x[d].2B(b);a.3N()},2x:{2X:["21","2P"],21:{1H:6(a){I(a.V("2l")!=R)H"";K b=a.V("1t");H e.16.2o(a,"21",b?b:e.13.1x.21)},2B:6(a){a=1E.6j(t(a.1c));a.1l=a.1l.Q("47","")}},2P:{2B:6(){K a="68=0";a+=", 18="+(31.30-33)/2+", 32="+(31.2Z-2Y)/2+", 30=33, 2Z=2Y";a=a.Q(/^,/,"");a=1P.6Z("","38",a);a.2C();K b=a.1E;b.6W(e.13.1x.37);b.6V();a.2C()}}}},35:6(a,b){K c;I(b)c=[b];Y{c=1E.36(e.13.34);O(K d=[],h=0;h<c.L;h++)d.U(c[h]);c=d}c=c;d=[];I(e.13.2M)c=c.1O(z());I(c.L===0)H d;O(h=0;h<c.L;h++){O(K g=c[h],i=a,k=c[h].1l,j=3W 0,l={},m=1f M("^\\\\[(?<2V>(.*?))\\\\]$"),s=1f M("(?<27>[\\\\w-]+)\\\\s*:\\\\s*(?<1T>[\\\\w-%#]+|\\\\[.*?\\\\]|\\".*?\\"|\'.*?\')\\\\s*;?","g");(j=s.X(k))!=N;){K o=j.1T.Q(/^[\'"]|[\'"]$/g,"");I(o!=N&&m.1A(o)){o=m.X(o);o=o.2V.L>0?o.2V.1e(/\\s*,\\s*/):[]}l[j.27]=o}g={1F:g,1n:C(i,l)};g.1n.1D!=N&&d.U(g)}H d},1M:6(a,b){K c=J.35(a,b),d=N,h=e.13;I(c.L!==0)O(K g=0;g<c.L;g++){b=c[g];K i=b.1F,k=b.1n,j=k.1D,l;I(j!=N){I(k["1z-1k"]=="R"||e.2v["1z-1k"]==R){d=1f e.4l(j);j="4O"}Y I(d=A(j))d=1f d;Y 6H;l=i.3X;I(h.2M){l=l;K m=x(l),s=11;I(m.1i("<![6G[")==0){m=m.4h(9);s=R}K o=m.L;I(m.1i("]]\\>")==o-3){m=m.4h(0,o-3);s=R}l=s?m:l}I((i.1t||"")!="")k.1t=i.1t;k.1D=j;d.2Q(k);b=d.2F(l);I((i.1c||"")!="")b.1c=i.1c;i.2G.74(b,i)}}},2E:6(a){w(1P,"4k",6(){e.1M(a)})}};e.2E=e.2E;e.1M=e.1M;e.2L=6(a,b,c){J.1T=a;J.P=b;J.L=a.L;J.23=c;J.1V=N};e.2L.Z.1q=6(){H J.1T};e.4l=6(a){6 b(j,l){O(K m=0;m<j.L;m++)j[m].P+=l}K c=A(a),d,h=1f e.1U.5Y,g=J,i="2F 1H 2Q".1e(" ");I(c!=N){d=1f c;O(K k=0;k<i.L;k++)(6(){K j=i[k];g[j]=6(){H h[j].1p(h,14)}})();d.28==N?1P.1X(e.13.1x.1X+(e.13.1x.4g+a)):h.2J.U({1I:d.28.17,2D:6(j){O(K l=j.17,m=[],s=d.2J,o=j.P+j.18.L,F=d.28,q,G=0;G<s.L;G++){q=y(l,s[G]);b(q,o);m=m.1O(q)}I(F.18!=N&&j.18!=N){q=y(j.18,F.18);b(q,j.P);m=m.1O(q)}I(F.1b!=N&&j.1b!=N){q=y(j.1b,F.1b);b(q,j.P+j[0].5Q(j.1b));m=m.1O(q)}O(j=0;j<m.L;j++)m[j].1V=c.1V;H m}})}};e.4j=6(){};e.4j.Z={V:6(a,b){K c=J.1n[a];c=c==N?b:c;K d={"R":R,"11":11}[c];H d==N?c:d},3Y:6(a){H 1E.4i(a)},4c:6(a,b){K c=[];I(a!=N)O(K d=0;d<a.L;d++)I(1j a[d]=="2m")c=c.1O(y(b,a[d]));H J.4e(c.6b(D))},4e:6(a){O(K b=0;b<a.L;b++)I(a[b]!==N)O(K c=a[b],d=c.P+c.L,h=b+1;h<a.L&&a[b]!==N;h++){K g=a[h];I(g!==N)I(g.P>d)1N;Y I(g.P==c.P&&g.L>c.L)a[b]=N;Y I(g.P>=c.P&&g.P<d)a[h]=N}H a},4d:6(a){K b=[],c=2u(J.V("2i-1s"));v(a,6(d,h){b.U(h+c)});H b},3U:6(a){K b=J.V("1M",[]);I(1j b!="2m"&&b.U==N)b=[b];a:{a=a.1q();K c=3W 0;O(c=c=1Q.6c(c||0,0);c<b.L;c++)I(b[c]==a){b=c;1N a}b=-1}H b!=-1},2r:6(a,b,c){a=["1s","6i"+b,"P"+a,"6r"+(b%2==0?1:2).1q()];J.3U(b)&&a.U("67");b==0&&a.U("1N");H\'<T 1g="\'+a.1K(" ")+\'">\'+c+"</T>"},3Q:6(a,b){K c="",d=a.1e("\\n").L,h=2u(J.V("2i-1s")),g=J.V("2z-1s-2t");I(g==R)g=(h+d-1).1q().L;Y I(3R(g)==R)g=0;O(K i=0;i<d;i++){K k=b?b[i]:h+i,j;I(k==0)j=e.13.1W;Y{j=g;O(K l=k.1q();l.L<j;)l="0"+l;j=l}a=j;c+=J.2r(i,k,a)}H c},49:6(a,b){a=x(a);K c=a.1e("\\n");J.V("2z-1s-2t");K d=2u(J.V("2i-1s"));a="";O(K h=J.V("1D"),g=0;g<c.L;g++){K i=c[g],k=/^(&2s;|\\s)+/.X(i),j=N,l=b?b[g]:d+g;I(k!=N){j=k[0].1q();i=i.1o(j.L);j=j.Q(" ",e.13.1W)}i=x(i);I(i.L==0)i=e.13.1W;a+=J.2r(g,l,(j!=N?\'<17 1g="\'+h+\' 5N">\'+j+"</17>":"")+i)}H a},4f:6(a){H a?"<4a>"+a+"</4a>":""},4b:6(a,b){6 c(l){H(l=l?l.1V||g:g)?l+" ":""}O(K d=0,h="",g=J.V("1D",""),i=0;i<b.L;i++){K k=b[i],j;I(!(k===N||k.L===0)){j=c(k);h+=u(a.1o(d,k.P-d),j+"48")+u(k.1T,j+k.23);d=k.P+k.L+(k.75||0)}}h+=u(a.1o(d),c()+"48");H h},1H:6(a){K b="",c=["20"],d;I(J.V("2k")==R)J.1n.16=J.1n.1u=11;1l="20";J.V("2l")==R&&c.U("47");I((1u=J.V("1u"))==11)c.U("6S");c.U(J.V("1g-27"));c.U(J.V("1D"));a=a.Q(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"").Q(/\\r/g," ");b=J.V("43-22");I(J.V("42-45")==R)a=n(a,b);Y{O(K h="",g=0;g<b;g++)h+=" ";a=a.Q(/\\t/g,h)}a=a;a:{b=a=a;h=/<2R\\s*\\/?>|&1y;2R\\s*\\/?&1G;/2T;I(e.13.46==R)b=b.Q(h,"\\n");I(e.13.44==R)b=b.Q(h,"");b=b.1e("\\n");h=/^\\s*/;g=4Q;O(K i=0;i<b.L&&g>0;i++){K k=b[i];I(x(k).L!=0){k=h.X(k);I(k==N){a=a;1N a}g=1Q.4q(k[0].L,g)}}I(g>0)O(i=0;i<b.L;i++)b[i]=b[i].1o(g);a=b.1K("\\n")}I(1u)d=J.4d(a);b=J.4c(J.2J,a);b=J.4b(a,b);b=J.49(b,d);I(J.V("41-40"))b=E(b);1j 2H!="1d"&&2H.3S&&2H.3S.1C(/5s/)&&c.U("5t");H b=\'<T 1c="\'+t(J.1c)+\'" 1g="\'+c.1K(" ")+\'">\'+(J.V("16")?e.16.1H(J):"")+\'<3Z 5z="0" 5H="0" 5J="0">\'+J.4f(J.V("1t"))+"<3T><3P>"+(1u?\'<2d 1g="1u">\'+J.3Q(a)+"</2d>":"")+\'<2d 1g="17"><T 1g="3O">\'+b+"</T></2d></3P></3T></3Z></T>"},2F:6(a){I(a===N)a="";J.17=a;K b=J.3Y("T");b.3X=J.1H(a);J.V("16")&&w(p(b,".16"),"5c",e.16.2b);J.V("3V-17")&&w(p(b,".17"),"56",f);H b},2Q:6(a){J.1c=""+1Q.5d(1Q.5n()*5k).1q();e.1Y.2A[t(J.1c)]=J;J.1n=C(e.2v,a||{});I(J.V("2k")==R)J.1n.16=J.1n.1u=11},5j:6(a){a=a.Q(/^\\s+|\\s+$/g,"").Q(/\\s+/g,"|");H"\\\\b(?:"+a+")\\\\b"},5f:6(a){J.28={18:{1I:a.18,23:"1k"},1b:{1I:a.1b,23:"1k"},17:1f M("(?<18>"+a.18.1m+")(?<17>.*?)(?<1b>"+a.1b.1m+")","5o")}}};H e}();1j 2e!="1d"&&(2e.1v=1v);',62,441,'||||||function|||||||||||||||||||||||||||||||||||||return|if|this|var|length|XRegExp|null|for|index|replace|true||div|push|getParam|call|exec|else|prototype||false|lastIndex|config|arguments|RegExp|toolbar|code|left|captureNames|slice|right|id|undefined|split|new|class|addToken|indexOf|typeof|script|className|source|params|substr|apply|toString|String|line|title|gutter|SyntaxHighlighter|_xregexp|strings|lt|html|test|OUTSIDE_CLASS|match|brush|document|target|gt|getHtml|regex|global|join|style|highlight|break|concat|window|Math|isRegExp|throw|value|brushes|brushName|space|alert|vars|http|syntaxhighlighter|expandSource|size|css|case|font|Fa|name|htmlScript|dA|can|handler|gm|td|exports|color|in|href|first|discoveredBrushes|light|collapse|object|cache|getButtonHtml|trigger|pattern|getLineHtml|nbsp|numbers|parseInt|defaults|com|items|www|pad|highlighters|execute|focus|func|all|getDiv|parentNode|navigator|INSIDE_CLASS|regexList|hasFlag|Match|useScriptTags|hasNamedCapture|text|help|init|br|input|gi|Error|values|span|list|250|height|width|screen|top|500|tagName|findElements|getElementsByTagName|aboutDialog|_blank|appendChild|charAt|Array|copyAsGlobal|setFlag|highlighter_|string|attachEvent|nodeName|floor|backref|output|the|TypeError|sticky|Za|iterate|freezeTokens|scope|type|textarea|alexgorbatchev|version|margin|2010|005896|gs|regexLib|body|center|align|noBrush|require|childNodes|DTD|xhtml1|head|org|w3|url|preventDefault|container|tr|getLineNumbersHtml|isNaN|userAgent|tbody|isLineHighlighted|quick|void|innerHTML|create|table|links|auto|smart|tab|stripBrs|tabs|bloggerMode|collapsed|plain|getCodeLinesHtml|caption|getMatchesHtml|findMatches|figureOutLineNumbers|removeNestedMatches|getTitleHtml|brushNotHtmlScript|substring|createElement|Highlighter|load|HtmlScript|Brush|pre|expand|multiline|min|Can|ignoreCase|find|blur|extended|toLowerCase|aliases|addEventListener|innerText|textContent|wasn|select|createTextNode|removeChild|option|same|frame|xmlns|dtd|twice|1999|equiv|meta|htmlscript|transitional|1E3|expected|PUBLIC|DOCTYPE|on|W3C|XHTML|TR|EN|Transitional||configured|srcElement|Object|after|run|dblclick|matchChain|valueOf|constructor|default|switch|click|round|execAt|forHtmlScript|token|gimy|functions|getKeywords|1E6|escape|within|random|sgi|another|finally|supply|MSIE|ie|toUpperCase|catch|returnValue|definition|event|border|imsx|constructing|one|Infinity|from|when|Content|cellpadding|flags|cellspacing|try|xhtml|Type|spaces|2930402|hosted_button_id|lastIndexOf|donate|active|development|keep|to|xclick|_s|Xml|please|like|you|paypal|cgi|cmd|webscr|bin|highlighted|scrollbars|aspScriptTags|phpScriptTags|sort|max|scriptScriptTags|toolbar_item|_|command|command_|number|getElementById|doubleQuotedString|singleLinePerlComments|singleLineCComments|multiLineCComments|singleQuotedString|multiLineDoubleQuotedString|xmlComments|alt|multiLineSingleQuotedString|If|https|1em|000|fff|background|5em|xx|bottom|75em|Gorbatchev|large|serif|CDATA|continue|utf|charset|content|About|family|sans|Helvetica|Arial|Geneva|3em|nogutter|Copyright|syntax|close|write|2004|Alex|open|JavaScript|highlighter|July|02|replaceChild|offset|83'.split('|'),0,{}))
//shLegacy.js
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3 u={8:{}};u.8={A:4(c,k,l,m,n,o){4 d(a,b){2 a!=1?a:b}4 f(a){2 a!=1?a.E():1}c=c.I(":");3 g=c[0],e={};t={"r":K};M=1;5=8.5;9(3 j R c)e[c[j]]="r";k=f(d(k,5.C));l=f(d(l,5.D));m=f(d(m,5.s));o=f(d(o,5.Q));n=f(d(n,5["x-y"]));2{P:g,C:d(t[e.O],k),D:d(t[e.N],l),s:d({"r":r}[e.s],m),"x-y":d(4(a,b){9(3 h=T S("^"+b+"\\\\[(?<q>\\\\w+)\\\\]$","U"),i=1,p=0;p<a.7;p++)6((i=h.J(a[p]))!=1)2 i.q;2 1}(c,"G"),n)}},F:4(c,k,l,m,n,o){4 d(){9(3 a=H,b=0;b<a.7;b++)6(a[b]!==1){6(z a[b]=="L"&&a[b]!="")2 a[b]+"";6(z a[b]=="X"&&a[b].q!="")2 a[b].q+""}2 1}4 f(a,b,h){h=12.13(h);9(3 i=0;i<h.7;i++)h[i].V("15")==b&&a.Y(h[i])}3 g=[];f(g,c,"Z");f(g,c,"W");6(g.7!==0)9(c=0;c<g.7;c++){3 e=g[c],j=d(e.B["14"],e.10,e.B.v,e.v);6(j!==1){j=u.8.A(j,k,l,m,n,o);8.11(j,e)}}}};',62,68,'|null|return|var|function|defaults|if|length|SyntaxHighlighter|for|||||||||||||||||value|true|collapse|reverse|dp|language||first|line|typeof|parseParams|attributes|gutter|toolbar|toString|HighlightAll|firstline|arguments|split|exec|false|string|result|nocontrols|nogutter|brush|ruler|in|XRegExp|new|gi|getAttribute|textarea|object|push|pre|className|highlight|document|getElementsByTagName|class|name'.split('|'),0,{}))

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'if fi then elif else for do done until while break continue case function return in eq ne ge le';
		var commands =  'alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chroot' +
						'cksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df ' +
						'diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval ' +
						'exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format ' +
						'free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig ' +
						'import install join kill less let ln local locate logname logout look lpc lpr lprint ' +
						'lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools ' +
						'mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap ' +
						'printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice ' +
						'remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown ' +
						'sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time ' +
						'times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias ' +
						'uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir ' +
						'vi watch wc whereis which who whoami Wget xargs yes'
						;

		this.regexList = [
			{ regex: /^#!.*$/gm,											css: 'preprocessor' },
			{ regex: /\/[\w-\/]+/gm,										css: 'plain' },
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,		css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,			css: 'string' },		// single quoted strings
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),			css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(commands), 'gm'),			css: 'functions' }		// commands
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['bash', 'shell'];

	SyntaxHighlighter.brushes.Bash = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Copyright 2006 Shin, YoungJin
	
		var datatypes =	'ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR ' +
						'DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH ' +
						'HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP ' +
						'HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY ' +
						'HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT ' +
						'HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE ' +
						'LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF ' +
						'LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR ' +
						'LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR ' +
						'PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT ' +
						'PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 ' +
						'POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR ' +
						'PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 ' +
						'PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT ' +
						'SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ' +
						'ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM ' +
						'char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t ' +
						'clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS ' +
						'FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t ' +
						'__wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t ' +
						'jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler ' +
						'sig_atomic_t size_t _stat __stat64 _stati64 terminate_function ' +
						'time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf ' +
						'va_list wchar_t wctrans_t wctype_t wint_t signed';

		var keywords =	'break case catch class const __finally __exception __try ' +
						'const_cast continue private public protected __declspec ' +
						'default delete deprecated dllexport dllimport do dynamic_cast ' +
						'else enum explicit extern if for friend goto inline ' +
						'mutable naked namespace new noinline noreturn nothrow ' +
						'register reinterpret_cast return selectany ' +
						'sizeof static static_cast struct switch template this ' +
						'thread throw true false try typedef typeid typename union ' +
						'using uuid virtual void volatile whcar_t while';
					
		var functions =	'assert isalnum isalpha iscntrl isdigit isgraph islower isprint' +
						'ispunct isspace isupper isxdigit tolower toupper errno localeconv ' +
						'setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod ' +
						'frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf ' +
						'longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start ' +
						'clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen ' +
						'fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell ' +
						'fwrite getc getchar gets perror printf putc putchar puts remove ' +
						'rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ' +
						'ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol ' +
						'bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs ' +
						'mbtowc qsort rand realloc srand strtod strtol strtoul system ' +
						'wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr ' +
						'strcmp strcoll strcpy strcspn strerror strlen strncat strncmp ' +
						'strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime ' +
						'clock ctime difftime gmtime localtime mktime strftime time';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
			{ regex: /^ *#.*/gm,										css: 'preprocessor' },
			{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'color1' },
			{ regex: new RegExp(this.getKeywords(functions), 'gm'),		css: 'functions' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['cpp', 'c', 'c++'];

	SyntaxHighlighter.brushes.Cpp = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'abstract as base bool break byte case catch char checked class const ' +
						'continue decimal default delegate do double else enum event explicit ' +
						'extern false finally fixed float for foreach get goto if implicit in int ' +
						'interface internal is lock long namespace new null object operator out ' +
						'override params private protected public readonly ref return sbyte sealed set ' +
						'short sizeof stackalloc static string struct switch this throw true try ' +
						'typeof uint ulong unchecked unsafe ushort using virtual void while';

		function fixComments(match, regexInfo)
		{
			var css = (match[0].indexOf("///") == 0)
				? 'color1'
				: 'comments'
				;
			
			return [new SyntaxHighlighter.Match(match[0], match.index, css)];
		}

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	func : fixComments },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: /@"(?:[^"]|"")*"/g,								css: 'string' },			// @-quoted strings
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
			{ regex: /^\s*#.*/gm,										css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },			// c# keyword
			{ regex: /\bpartial(?=\s+(?:class|interface|struct)\b)/g,	css: 'keyword' },			// contextual keyword: 'partial'
			{ regex: /\byield(?=\s+(?:return|break)\b)/g,				css: 'keyword' }			// contextual keyword: 'yield'
			];
		
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['c#', 'c-sharp', 'csharp'];

	SyntaxHighlighter.brushes.CSharp = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		function getKeywordsCSS(str)
		{
			return '\\b([a-z_]|)' + str.replace(/ /g, '(?=:)\\b|\\b([a-z_\\*]|\\*|)') + '(?=:)\\b';
		};
	
		function getValuesCSS(str)
		{
			return '\\b' + str.replace(/ /g, '(?!-)(?!:)\\b|\\b()') + '\:\\b';
		};

		var keywords =	'ascent azimuth background-attachment background-color background-image background-position ' +
						'background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top ' +
						'border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color ' +
						'border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width ' +
						'border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color ' +
						'content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display ' +
						'elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font ' +
						'height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top ' +
						'margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans ' +
						'outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page ' +
						'page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position ' +
						'quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress ' +
						'table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em ' +
						'vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index';

		var values =	'above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder '+
						'both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed '+
						'continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double '+
						'embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia '+
						'gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic '+
						'justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha '+
						'lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower '+
						'navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset '+
						'outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side '+
						'rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow '+
						'small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize '+
						'table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal '+
						'text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin '+
						'upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow';

		var fonts =		'[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif';
	
		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },	// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },	// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },	// single quoted strings
			{ regex: /\#[a-fA-F0-9]{3,6}/g,								css: 'value' },		// html colors
			{ regex: /(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,				css: 'value' },		// sizes
			{ regex: /!important/g,										css: 'color3' },	// !important
			{ regex: new RegExp(getKeywordsCSS(keywords), 'gm'),		css: 'keyword' },	// keywords
			{ regex: new RegExp(getValuesCSS(values), 'g'),				css: 'value' },		// values
			{ regex: new RegExp(this.getKeywords(fonts), 'g'),			css: 'color1' }		// fonts
			];

		this.forHtmlScript({ 
			left: /(&lt;|<)\s*style.*?(&gt;|>)/gi, 
			right: /(&lt;|<)\/\s*style\s*(&gt;|>)/gi 
			});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['css'];

	SyntaxHighlighter.brushes.CSS = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		this.regexList = [
			{ regex: /^\+\+\+.*$/gm,		css: 'color2' },
			{ regex: /^\-\-\-.*$/gm,		css: 'color2' },
			{ regex: /^\s.*$/gm,			css: 'color1' },
			{ regex: /^@@.*@@$/gm,			css: 'variable' },
			{ regex: /^\+[^\+]{1}.*$/gm,	css: 'string' },
			{ regex: /^\-[^\-]{1}.*$/gm,	css: 'comments' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['diff', 'patch'];

	SyntaxHighlighter.brushes.Diff = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Contributed by Jean-Lou Dupont
		// http://jldupont.blogspot.com/2009/06/erlang-syntax-highlighter.html  

		// According to: http://erlang.org/doc/reference_manual/introduction.html#1.5
		var keywords = 'after and andalso band begin bnot bor bsl bsr bxor '+
			'case catch cond div end fun if let not of or orelse '+
			'query receive rem try when xor'+
			// additional
			' module export import define';

		this.regexList = [
			{ regex: new RegExp("[A-Z][A-Za-z0-9_]+", 'g'), 			css: 'constants' },
			{ regex: new RegExp("\\%.+", 'gm'), 						css: 'comments' },
			{ regex: new RegExp("\\?[A-Za-z0-9_]+", 'g'), 				css: 'preprocessor' },
			{ regex: new RegExp("[a-z0-9_]+:[a-z0-9_]+", 'g'), 			css: 'functions' },
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },
			{ regex: new RegExp(this.getKeywords(keywords),	'gm'),		css: 'keyword' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['erl', 'erlang'];

	SyntaxHighlighter.brushes.Erland = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'abstract assert boolean break byte case catch char class const ' +
						'continue default do double else enum extends ' +
						'false final finally float for goto if implements import ' +
						'instanceof int interface long native new null ' +
						'package private protected public return ' +
						'short static strictfp super switch synchronized this throw throws true ' +
						'transient try void volatile while';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },		// one line comments
			{ regex: /\/\*([^\*][\s\S]*)?\*\//gm,						css: 'comments' },	 	// multiline comments
			{ regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm,					css: 'preprocessor' },	// documentation comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// strings
			{ regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,				css: 'value' },			// numbers
			{ regex: /(?!\@interface\b)\@[\$\w]+\b/g,					css: 'color1' },		// annotation @anno
			{ regex: /\@interface\b/g,									css: 'color2' },		// @interface keyword
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }		// java keyword
			];

		this.forHtmlScript({
			left	: /(&lt;|<)%[@!=]?/g, 
			right	: /%(&gt;|>)/g 
		});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['java'];

	SyntaxHighlighter.brushes.Java = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'break case catch continue ' +
						'default delete do else false  ' +
						'for function if in instanceof ' +
						'new null return super switch ' +
						'this throw true try typeof var while with'
						;

		var r = SyntaxHighlighter.regexLib;
		
		this.regexList = [
			{ regex: r.multiLineDoubleQuotedString,					css: 'string' },			// double quoted strings
			{ regex: r.multiLineSingleQuotedString,					css: 'string' },			// single quoted strings
			{ regex: r.singleLineCComments,							css: 'comments' },			// one line comments
			{ regex: r.multiLineCComments,							css: 'comments' },			// multiline comments
			{ regex: /\s*#.*/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }			// keywords
			];
	
		this.forHtmlScript(r.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['js', 'jscript', 'javascript'];

	SyntaxHighlighter.brushes.JScript = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var funcs	=	'abs acos acosh addcslashes addslashes ' +
						'array_change_key_case array_chunk array_combine array_count_values array_diff '+
						'array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill '+
						'array_filter array_flip array_intersect array_intersect_assoc array_intersect_key '+
						'array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map '+
						'array_merge array_merge_recursive array_multisort array_pad array_pop array_product '+
						'array_push array_rand array_reduce array_reverse array_search array_shift '+
						'array_slice array_splice array_sum array_udiff array_udiff_assoc '+
						'array_udiff_uassoc array_uintersect array_uintersect_assoc '+
						'array_uintersect_uassoc array_unique array_unshift array_values array_walk '+
						'array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert '+
						'basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress '+
						'bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir '+
						'checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists '+
						'closedir closelog copy cos cosh count count_chars date decbin dechex decoct '+
						'deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log '+
						'error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded '+
						'feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents '+
						'fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype '+
						'floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf '+
						'fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname '+
						'gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt '+
						'getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext '+
						'gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set '+
						'interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double '+
						'is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long '+
						'is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault '+
						'is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br '+
						'parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir '+
						'round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split '+
						'str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes '+
						'stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk '+
						'strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime '+
						'strtoupper strtr strval substr substr_compare';

		var keywords =	'abstract and array as break case catch cfunction class clone const continue declare default die do ' +
						'else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach ' +
						'function include include_once global goto if implements interface instanceof namespace new ' +
						'old_function or private protected public return require require_once static switch ' +
						'throw try use var while xor ';
		
		var constants	= '__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// single quoted strings
			{ regex: /\$\w+/g,											css: 'variable' },			// variables
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' },			// common functions
			{ regex: new RegExp(this.getKeywords(constants), 'gmi'),	css: 'constants' },			// constants
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }			// keyword
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['php'];

	SyntaxHighlighter.brushes.Php = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Contributed by David Simmons-Duffin and Marty Kube
	
		var funcs = 
			'abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr ' + 
			'chroot close closedir connect cos crypt defined delete each endgrent ' + 
			'endhostent endnetent endprotoent endpwent endservent eof exec exists ' + 
			'exp fcntl fileno flock fork format formline getc getgrent getgrgid ' + 
			'getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr ' + 
			'getnetbyname getnetent getpeername getpgrp getppid getpriority ' + 
			'getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid ' + 
			'getservbyname getservbyport getservent getsockname getsockopt glob ' + 
			'gmtime grep hex index int ioctl join keys kill lc lcfirst length link ' + 
			'listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd ' + 
			'oct open opendir ord pack pipe pop pos print printf prototype push ' + 
			'quotemeta rand read readdir readline readlink readpipe recv rename ' + 
			'reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl ' + 
			'semget semop send setgrent sethostent setnetent setpgrp setpriority ' + 
			'setprotoent setpwent setservent setsockopt shift shmctl shmget shmread ' + 
			'shmwrite shutdown sin sleep socket socketpair sort splice split sprintf ' + 
			'sqrt srand stat study substr symlink syscall sysopen sysread sysseek ' + 
			'system syswrite tell telldir time times tr truncate uc ucfirst umask ' + 
			'undef unlink unpack unshift utime values vec wait waitpid warn write';
    
		var keywords =  
			'bless caller continue dbmclose dbmopen die do dump else elsif eval exit ' +
			'for foreach goto if import last local my next no our package redo ref ' + 
			'require return sub tie tied unless untie until use wantarray while';
    
		this.regexList = [
			{ regex: new RegExp('#[^!].*$', 'gm'),					css: 'comments' },
			{ regex: new RegExp('^\\s*#!.*$', 'gm'),				css: 'preprocessor' }, // shebang
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,	css: 'string' },
			{ regex: new RegExp('(\\$|@|%)\\w+', 'g'),				css: 'variable' },
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),	css: 'functions' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }
		    ];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases		= ['perl', 'Perl', 'pl'];

	SyntaxHighlighter.brushes.Perl = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['text', 'plain'];

	SyntaxHighlighter.brushes.Plain = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Contributed by Gheorghe Milas and Ahmad Sherif
	
		var keywords =  'and assert break class continue def del elif else ' +
						'except exec finally for from global if import in is ' +
						'lambda not or pass print raise return try yield while';

		var funcs = '__import__ abs all any apply basestring bin bool buffer callable ' +
					'chr classmethod cmp coerce compile complex delattr dict dir ' +
					'divmod enumerate eval execfile file filter float format frozenset ' +
					'getattr globals hasattr hash help hex id input int intern ' +
					'isinstance issubclass iter len list locals long map max min next ' +
					'object oct open ord pow print property range raw_input reduce ' +
					'reload repr reversed round set setattr slice sorted staticmethod ' +
					'str sum super tuple type type unichr unicode vars xrange zip';

		var special =  'None True False self cls class_';

		this.regexList = [
				{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
				{ regex: /^\s*@\w+/gm, 										css: 'decorator' },
				{ regex: /(['\"]{3})([^\1])*?\1/gm, 						css: 'comments' },
				{ regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm, 					css: 'string' },
				{ regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm, 				css: 'string' },
				{ regex: /\+|\-|\*|\/|\%|=|==/gm, 							css: 'keyword' },
				{ regex: /\b\d+\.?\w*/g, 									css: 'value' },
				{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' },
				{ regex: new RegExp(this.getKeywords(keywords), 'gm'), 		css: 'keyword' },
				{ regex: new RegExp(this.getKeywords(special), 'gm'), 		css: 'color1' }
				];
			
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['py', 'python'];

	SyntaxHighlighter.brushes.Python = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Contributed by Erik Peterson.
	
		var keywords =	'alias and BEGIN begin break case class def define_method defined do each else elsif ' +
						'END end ensure false for if in module new next nil not or raise redo rescue retry return ' +
						'self super then throw true undef unless until when while yield';

		var builtins =	'Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload ' +
						'Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ' +
						'ThreadGroup Thread Time TrueClass';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
			{ regex: /\b[A-Z0-9_]+\b/g,									css: 'constants' },		// constants
			{ regex: /:[a-z][A-Za-z0-9_]*/g,							css: 'color2' },		// symbols
			{ regex: /(\$|@@|@)\w+/g,									css: 'variable' },	// $global, @instance, and @@class variables
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(builtins), 'gm'),		css: 'color1' }			// builtins
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['ruby', 'rails', 'ror', 'rb'];

	SyntaxHighlighter.brushes.Ruby = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var funcs	=	'abs avg case cast coalesce convert count current_timestamp ' +
						'current_user day isnull left lower month nullif replace right ' +
						'session_user space substring sum system_user upper user year';

		var keywords =	'absolute action add after alter as asc at authorization begin bigint ' +
						'binary bit by cascade char character check checkpoint close collate ' +
						'column commit committed connect connection constraint contains continue ' +
						'create cube current current_date current_time cursor database date ' +
						'deallocate dec decimal declare default delete desc distinct double drop ' +
						'dynamic else end end-exec escape except exec execute false fetch first ' +
						'float for force foreign forward free from full function global goto grant ' +
						'group grouping having hour ignore index inner insensitive insert instead ' +
						'int integer intersect into is isolation key last level load local max min ' +
						'minute modify move name national nchar next no numeric of off on only ' +
						'open option order out output partial password precision prepare primary ' +
						'prior privileges procedure public read real references relative repeatable ' +
						'restrict return returns revoke rollback rollup rows rule schema scroll ' +
						'second section select sequence serializable set size smallint static ' +
						'statistics table temp temporary then time timestamp to top transaction ' +
						'translation trigger true truncate uncommitted union unique update values ' +
						'varchar varying view when where with work';

		var operators =	'all and any between cross in join like not null or outer some';

		this.regexList = [
			{ regex: /--(.*)$/gm,												css: 'comments' },			// one line and multiline comments
			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,	css: 'string' },			// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,	css: 'string' },			// single quoted strings
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),				css: 'color2' },			// functions
			{ regex: new RegExp(this.getKeywords(operators), 'gmi'),			css: 'color1' },			// operators and such
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),				css: 'keyword' }			// keyword
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['sql'];

	SyntaxHighlighter.brushes.Sql = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		function process(match, regexInfo)
		{
			var constructor = SyntaxHighlighter.Match,
				code = match[0],
				tag = new XRegExp('(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)', 'xg').exec(code),
				result = []
				;
		
			if (match.attributes != null) 
			{
				var attributes,
					regex = new XRegExp('(?<name> [\\w:\\-\\.]+)' +
										'\\s*=\\s*' +
										'(?<value> ".*?"|\'.*?\'|\\w+)',
										'xg');

				while ((attributes = regex.exec(code)) != null) 
				{
					result.push(new constructor(attributes.name, match.index + attributes.index, 'color1'));
					result.push(new constructor(attributes.value, match.index + attributes.index + attributes[0].indexOf(attributes.value), 'string'));
				}
			}

			if (tag != null)
				result.push(
					new constructor(tag.name, match.index + tag[0].indexOf(tag.name), 'keyword')
				);

			return result;
		}
	
		this.regexList = [
			{ regex: new XRegExp('(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)', 'gm'),			css: 'color2' },	// <![ ... [ ... ]]>
			{ regex: SyntaxHighlighter.regexLib.xmlComments,												css: 'comments' },	// <!-- ... -->
			{ regex: new XRegExp('(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)', 'sg'), func: process }
		];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['xml', 'xhtml', 'xslt', 'html'];

	SyntaxHighlighter.brushes.Xml = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
SyntaxHighlighter.defaults['toolbar'] = false;
