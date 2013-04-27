#jQuery nBox
**nBox**はLightBoxやThickboxなどのように、（すごく）簡単なポップアップ表示するjQueryプラグインです。

#必要なファイル
`jquery.nBox.js` と `jquery.nBox.css` を読み込んでください  
（または圧縮された `jquery.nBox.min.js`　と `jquery.nBox.min.css` をお使いください）

```html
<link rel="stylesheet" href="/css/jquery.nBox.css">
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.nBox.js"></script>
```

#サンプル
ポップアップを表示するターゲットと、ポップアップコンテンツを指定する必要があります。

```html
<link rel="stylesheet" href="/css/jquery.nBox.css">
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.nBox.js"></script>
```

#使用できるメソッド
ポップアップの表示と非表示は `hide` と `show` のメソッドを使ってください

```js
    myButton.nBox('hide'); //表示されているポップアップを閉じる
    myButton.nBox('show'); //ポップアップを表示する
```

#オプション

```js
myButton.nBox({
    targetId:'my-box', // ポップアップのコンテンツID
    title:'MyBox', // ポップアップのタイトル
    width:400, // 幅のサイズ
    height:400, // 高さのサイズ
    fadeAnimeTime:150, // 表示・非表示アニメーションのスピード
});
</script>
```

#ライセンス
Licensed under the MIT and GPL licenses:  
[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php "MIT licenses")  
[http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html "GPL licenses")  


