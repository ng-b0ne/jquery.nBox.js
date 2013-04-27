#jQuery nBox
**nBox**はLightBoxやThickboxなどのように、（すごく）簡単なポップアップ表示するjQueryプラグインです。

#必要なファイル
`jquery.nBox.js` と `jquery.nBox.css` を読み込んでください  
（または圧縮された `jquery.nBox.min.js`　と `jquery.nBox.min.css` をお使いください）

```
<link rel="stylesheet" href="/css/jquery.nBox.css">
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.nBox.js"></script>
```

#サンプル
ポップアップを表示するターゲットと、ポップアップコンテンツを指定する必要があります。

```
<link rel="stylesheet" href="/css/jquery.nBox.css">
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.nBox.js"></script>
```

#使用できるメソッド
ポップアップの表示と非表示は `hide` と `show` のメソッドを使ってください

```
    myButton.nBox('hide'); //表示されているポップアップを閉じる
    myButton.nBox('show'); //ポップアップを表示する
```

#オプション

```
<input type="button" value="show!" id="my-button-1" />
<div id="my-box-1" style="padding:10px">
    <div>コンテンツ</div>
    <div><button class="my-box-close"> 閉じる </button></div>
</div>
<script type="text/javascript">
$(function(){
    var myButton = $('#my-button-1');
    myButton.nBox({
        targetId:'my-box-1',
        title:'MyBox'
    });
});
</script>
```

#ライセンス
Licensed under the MIT and GPL licenses:  
[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php "MIT licenses")  
[http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html "GPL licenses")  


