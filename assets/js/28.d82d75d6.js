(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{501:function(t,e,s){t.exports=s.p+"assets/img/setup-search-system1.a6eb8475.png"},502:function(t,e,s){t.exports=s.p+"assets/img/setup-search-system2.35a58b1d.png"},503:function(t,e,s){t.exports=s.p+"assets/img/setup-search-system3.81b222e8.png"},751:function(t,e,s){"use strict";s.r(e);var a=s(48),r=Object(a.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"全文検索機能のセットアップと管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全文検索機能のセットアップと管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 全文検索機能のセットアップと管理")]),t._v(" "),a("p",[t._v("Elasticsearch による全文検索機能を利用するための設定方法を紹介します。")]),t._v(" "),a("h2",{attrs:{id:"各環境における-elasticsearch-の起動と接続"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各環境における-elasticsearch-の起動と接続","aria-hidden":"true"}},[t._v("#")]),t._v(" 各環境における Elasticsearch の起動と接続")]),t._v(" "),a("p",[t._v("Elasticsearch サーバーの起動と接続に関しては、システム管理者のページを参考にしてください。")]),t._v(" "),a("ul",[a("li",[t._v("docker-compose\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[t._v("weseek/growi-docker-compose"),a("OutboundLink")],1),t._v(" を利用している場合はデフォルトで Elasticsearch が起動されるので、追加で設定する必要はありません。")])])]),t._v(" "),a("li",[t._v("ubuntu\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ja/admin-guide/getting-started/ubuntu-server.html#elasticsearch"}},[t._v("こちら")]),t._v("を参考にインストールおよび起動してください。")],1),t._v(" "),a("li",[t._v("起動した Elasticsearch の URI を GROWI の環境変数 "),a("code",[t._v("ELASTICSEARCH_URI")]),t._v(" に設定してください。")])])]),t._v(" "),a("li",[t._v("centOS\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ja/admin-guide/getting-started/centos.html#elasticsearch"}},[t._v("こちら")]),t._v("を参考にインストールおよび起動してください。")],1),t._v(" "),a("li",[t._v("起動した Elasticsearch の URI を GROWI の環境変数 "),a("code",[t._v("ELASTICSEARCH_URI")]),t._v(" に設定してください。")])])]),t._v(" "),a("li",[t._v("Heroku\n"),a("ul",[a("li",[t._v("(TBD)")])])])]),t._v(" "),a("h2",{attrs:{id:"アプリ上で接続確認"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アプリ上で接続確認","aria-hidden":"true"}},[t._v("#")]),t._v(" アプリ上で接続確認")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("環境変数 "),a("code",[t._v("ELASTICSEARCH_URI")]),t._v(" によって Elasticsearch の URI が指定され、正常に接続されている場合、GROWI 画面のトップバーに検索窓が表示され、管理画面の全文検索管理ページにて接続および Elasticsearch インデックスの状態を確認することができます。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(501),alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("Elasticsearch の URI が指定されているにもかかわらず以下のような接続が確認できない旨のエラーが表示される場合は Elasticsearch の状態と URI の設定を見直してください。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(502),alt:""}})])])]),t._v(" "),a("h2",{attrs:{id:"インデックスのリビルト"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#インデックスのリビルト","aria-hidden":"true"}},[t._v("#")]),t._v(" インデックスのリビルト")]),t._v(" "),a("p",[t._v("Elasticsearch による検索機能は、検索用 DB のデータと Mongo DB に存在するデータの整合が取れていることを前提として正常な検索機能を実現します。そのため DB を直接操作するなどの行為によりこれらの DB 間で不整合が起きた場合、検索機能が正常に動作しません。")]),t._v(" "),a("p",[t._v("そのような場合に、管理画面の全文検索管理ページにてインデックスのリビルドを行うことで、検索機能を復旧することができます。")]),t._v(" "),a("p",[t._v("全文検索管理ページの[インデックスのリビルド]ボタンにてインデックスのリビルドを実行することができます。この作業は完了までに数秒かかります。")]),t._v(" "),a("h2",{attrs:{id:"インデックスの正規化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#インデックスの正規化","aria-hidden":"true"}},[t._v("#")]),t._v(" インデックスの正規化")]),t._v(" "),a("p",[t._v("インデックスの処理が中断された場合はインデックスは以下のように破損状態と表示されます。（リビルドが継続している場合も同様の表示になりますので継続中の場合は処理が完了するまで待ってください。）")]),t._v(" "),a("p",[a("img",{attrs:{src:s(503),alt:""}})]),t._v(" "),a("p",[t._v("破損したインデックスに対して、インデックスの正規化を行うことで以前のリビルド結果のインデックスで検索機能を利用可能にできます。")])])},[],!1,null,null,null);e.default=r.exports}}]);