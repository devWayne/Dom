Dom [![Build Status](https://travis-ci.org/devWayne/Dom.svg?branch=master)](https://travis-ci.org/devWayne/Dom)
============
> Dom Handler 

##Usage

```
var Dom = require('cl-com').Dom;

var htmlMutiple = '<div class="confirm_alert"><div class="alert_content">测试弹窗</div><div class="alert_buttons"><a data-id="cancel">确定</a><a data-id="done">取消</a></div></div>'

var htmlSingle = '<a data-id="done" style="color: rgb(0, 136, 204); float: left; width: 50%; height: 100%; box-sizing: border-box; border-left-style: solid; border-left-width: 1px; border-left-color: rgb(239, 239, 239); text-decoration: none;">取消</a>'

var el1 = Dom.parse(htmlMutiple);
var el2 = Dom.parse(htmlSingle);
```

##API

#### Dom.parse(String)

