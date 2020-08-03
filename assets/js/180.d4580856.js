(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{776:function(t,s,a){"use strict";a.r(s);var n=a(48),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"旧版-開発環境の構築"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旧版-開発環境の構築","aria-hidden":"true"}},[t._v("#")]),t._v(" (旧版) 開発環境の構築")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("このページで紹介している開発スタートアップは"),a("strong",[t._v("旧版")]),t._v("です。"),a("br"),t._v("\nホストOSで node をセットアップし、実行します。")]),t._v(" "),a("p",[t._v("より快適な開発を行うには、Dev in Container を採用した "),a("RouterLink",{attrs:{to:"/ja/dev/startup-v2/dev-env.html"}},[t._v("開発スタートアップ v2")]),t._v(" を利用してください。")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("以下は WESEEK, Inc. での統一開発環境の紹介です。\nそのため、開発にあたって必須ではない設定やツールの指定が含まれています。")])]),t._v(" "),a("h2",{attrs:{id:"マージツールの準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#マージツールの準備","aria-hidden":"true"}},[t._v("#")]),t._v(" マージツールの準備")]),t._v(" "),a("ol",[a("li",[t._v("P4Merge (Helix Visual Client (P4V)) インストール\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.perforce.com/downloads/helix-visual-client-p4v",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.perforce.com/downloads/helix-visual-client-p4v"),a("OutboundLink")],1),t._v(" からDLしてインストールする")]),t._v(" "),a("li",[t._v("ユーザ登録は適宜実施する")])])]),t._v(" "),a("li",[t._v("P4Merge 設定\n"),a("ul",[a("li",[t._v("Diff タブで適当にファイルを2つ選択して OK")]),t._v(" "),a("li",[t._v("Edit -> Preferences...\n"),a("ul",[a("li",[t._v("「Character encoding」で「Unicode (UTF-8, no BOM)」または BOM 表記のない「Unicode(UTF-8)」を選択")]),t._v(" "),a("li",[t._v("「Line ending type」で「UNIX (LF)」を選択")])])])])])]),t._v(" "),a("h2",{attrs:{id:"gitクライアントの準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitクライアントの準備","aria-hidden":"true"}},[t._v("#")]),t._v(" Gitクライアントの準備")]),t._v(" "),a("ol",[a("li",[t._v("SourceTreeインストール\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://ja.atlassian.com/software/sourcetree",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ja.atlassian.com/software/sourcetree"),a("OutboundLink")],1),t._v(" からDLしてインストールする")]),t._v(" "),a("li",[t._v("「Git が見つかりませんでした」というダイアログが表示された場合は、「システム全体でなく、SourceTree 単独で使うためだけの内蔵用の Git をダウンロードする。」を選択")])])]),t._v(" "),a("li",[t._v("SourceTree設定\n"),a("ol",[a("li",[t._v("SourceTree からターミナルを開く")]),t._v(" "),a("li",[t._v("autoCRLF を無効化する\n"),a("ul",[a("li",[t._v("以下をコピペして実行 "),a("code",[t._v("git config --global core.autoCRLF false")])])])]),t._v(" "),a("li",[t._v("自身のアカウント情報を設定\n"),a("ul",[a("li",[t._v("「ツール > オプション > 全般」...")]),t._v(" "),a("li",[t._v("「デフォルトのユーザ情報」を適宜設定")])])]),t._v(" "),a("li",[t._v("P4Merge を設定\n"),a("ul",[a("li",[t._v("「ツール > オプション > Diff」...")]),t._v(" "),a("li",[t._v("「外部Diffツール」「マージツール」で「P4Merge」を選択")])])]),t._v(" "),a("li",[t._v("デフォルトの文字コード設定\n"),a("ul",[a("li",[t._v("「ツール > オプション > 全般」...")]),t._v(" "),a("li",[t._v("「デフォルトの文字コード」で「utf-8」を選択")])])])])])]),t._v(" "),a("h2",{attrs:{id:"node-js-実行環境のインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-実行環境のインストール","aria-hidden":"true"}},[t._v("#")]),t._v(" Node.js 実行環境のインストール")]),t._v(" "),a("p",[t._v("Node.js, npm, Yarn 共に、CI 環境で利用する "),a("code",[t._v("node:12")]),t._v(" のバージョンに合わせる")]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"Windows"}},[a("ol",[a("li",[a("p",[t._v("Node.js, npm のバージョン管理ツール "),a("code",[t._v("nvm-windows")]),t._v(" をインストール")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/coreybutler/nvm-windows/releases"),a("OutboundLink")],1),t._v(" から "),a("code",[t._v("nvm-setup.zip")]),t._v(" をダウンロードして実行")])])]),t._v(" "),a("li",[a("p",[t._v("Node.js, npm インストール (12.x の最新バージョンは "),a("a",{attrs:{href:"https://nodejs.org/ja/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nodejs.org/ja/download/releases/"),a("OutboundLink")],1),t._v(" から探してください)")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nvm install 12.x.x\nnvm use 12.x.x\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Yarn インストール")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://yarnpkg.com/ja/docs/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://yarnpkg.com/ja/docs/install"),a("OutboundLink")],1),t._v(" から DL してインストール")])])])])]),t._v(" "),a("tab",{attrs:{name:"Mac"}},[a("ol",[a("li",[a("p",[t._v("nvm インストール")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/nvm-sh/nvm"),a("OutboundLink")],1),t._v(" からインストールする。")])])]),t._v(" "),a("li",[a("p",[t._v("Node.js, npm インストール")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" 12.x.x\nnvm use 12.x.x\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Yarn インストール")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://classic.yarnpkg.com/ja/docs/install/#mac-stable",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://classic.yarnpkg.com/ja/docs/install/#mac-stable"),a("OutboundLink")],1),t._v(" からマニュアルに従ってインストール")])])])])])],1),t._v(" "),a("h3",{attrs:{id:"バージョンの確認"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#バージョンの確認","aria-hidden":"true"}},[t._v("#")]),t._v(" バージョンの確認")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ node -v\nv12.14.0\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" -v\n6.13.4\n$ yarn -v\n1.19.1\n")])])]),a("h2",{attrs:{id:"エディタの準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#エディタの準備","aria-hidden":"true"}},[t._v("#")]),t._v(" エディタの準備")]),t._v(" "),a("ol",[a("li",[t._v("Visual Studio Code インストール")]),t._v(" "),a("li",[t._v("拡張機能をインストール\n"),a("ul",[a("li",[t._v("インストール方法\n"),a("ul",[a("li",[a("code",[t._v("Ctrl + Shift + P")]),t._v(" -> 「Extensions: Show Recommended Extensions」を選択して全てインストール")])])])])])]),t._v(" "),a("h2",{attrs:{id:"開発環境の依存インフラの準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#開発環境の依存インフラの準備","aria-hidden":"true"}},[t._v("#")]),t._v(" 開発環境の依存インフラの準備")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Docker 環境をネイティブで準備できない場合のみ、以下の手順が必要")])]),t._v(" "),a("ol",[a("li",[t._v("VirtualBox インストール\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.virtualbox.org/wiki/Downloads"),a("OutboundLink")],1),t._v(" から DL してインストールする\n"),a("ul",[a("li",[t._v("バージョンは "),a("code",[t._v("6.0.8")]),t._v(" とする。")])])]),t._v(" "),a("li",[t._v("Extension Pack の中で利用する機能はないのでインストール不要")])])]),t._v(" "),a("li",[t._v("Vagrant インストール\n"),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.vagrantup.com/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.vagrantup.com/downloads.html"),a("OutboundLink")],1),t._v(" からDLしてインストールする")])]),t._v(" "),a("li",[a("p",[t._v("Vagrantfile を作成")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Vagrant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("box "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chaifeng/ubuntu-18.04-docker-19.03"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### provision")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### change mirror to Japanese location")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shell"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n    sed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bak "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s%http://archive.ubuntu.com/ubuntu/%http://ftp.iij.ad.jp/pub/linux/ubuntu/archive/%g"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#SHELL")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### install apt packages")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shell"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" preserve_order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n    apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("get update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("get install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y tmux git nano less\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### install docker-compose")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shell"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" preserve_order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n    curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sL "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compose\n    chmod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compose\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### clone git repos")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shell"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" privileged"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n    git "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" growi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compose pull "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" git clone https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("weseek"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("growi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compose\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## port forwarding")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Proxy")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# App")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# App2")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MongoDB")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Redis")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ElasticSearch")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# elasticsearch-head")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MariaDB")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# phpMyAdmin")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Provider Options")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provider "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"virtualbox"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("vb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    vb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customize "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"modifyvm"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--memory"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4096"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])])])])])],1)},[],!1,null,null,null);s.default=r.exports}}]);