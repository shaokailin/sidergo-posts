(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{576:function(e,s,n){"use strict";n.r(s);var i=n(16),r=Object(i.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("blockquote",[n("p",[e._v("本篇重点关注以下 1 点：")]),e._v(" "),n("ol",[n("li",[e._v("sidergo 整体结构设计")])])]),e._v(" "),n("p",[e._v("终于，我们开始 sidergo 开发了，但是不要急着吭哧吭哧写代码，这种工程量比较大的项目一开始还是需要耐心设计整体结构，这样才能走得长久。那么，在项目开始的整体结构设计，我们具体应该做些什么？大概可以有这些：")]),e._v(" "),n("ol",[n("li",[e._v("一些抽象接口设计和确定性的结构体设计")]),e._v(" "),n("li",[e._v("清晰明了的包划分")])]),e._v(" "),n("p",[e._v("有了具体的思路，下面就可以开始尝试对 sidergo 搭建一个整体的框架了。")]),e._v(" "),n("ol",[n("li",[e._v("我们可以有一个 interface 目录，来保存所有的 interface")]),e._v(" "),n("li",[e._v("我们需要解析 redis.conf 内容，所以新建一个 config 目录来存放解析配置的逻辑")]),e._v(" "),n("li",[e._v("我们需要解析 redis 的通信协议，所以新建一个 parse 目录来存放解析 redis 通信协议的逻辑")]),e._v(" "),n("li",[e._v("sidergo 会依赖一些 library，比如 sortedSet，这些 library 我们会自己实现，所以需要新建一个 lib 的目录")]),e._v(" "),n("li",[e._v("开发过程中，我们会需要一些辅助函数，所以我们可以新建一个 helper 目录来存放这些辅助函数")]),e._v(" "),n("li",[e._v("需要一个 redis 目录来保存 redis 逻辑，比如 redis 各种命令的实现")])]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("sidergo\n    - interface\n    - helper\n    - config\n    - parse\n    - lib\n    - redis\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("p",[e._v("现在我们有了一个大概的目录结构，本着自顶向下的原则，我们现在可以尝试设计一些 interface。")]),e._v(" "),n("ol",[n("li",[e._v("在第二篇中，我们提到 redis 通信协议中设计了 5 个返回类型，那么我们可以设计一个 response 的抽象接口。")]),e._v(" "),n("li",[e._v("redis-cli 发送的命令，比如："),n("code",[e._v("set key value")]),e._v("，我们会封装成一个结构体，所以也设计一个 request 的 interface，然后由结构体来实现 request interface。")]),e._v(" "),n("li",[e._v("在 Golang 中，通常使用 "),n("code",[e._v("net.Conn")]),e._v(" 表示一个连接，不过 "),n("code",[e._v("net.Conn")]),e._v(" 不满足我们的需求，所以我们会自行封装一个 conn 结构体，和 2 的想法一样，我们也设计一个 conn 的 interface。")]),e._v(" "),n("li",[e._v("在 redis 中，会有很多 db，db 中保存各种数据，所以我们会有一个 RedisDB 的结构体。同样，我们也创建一个 DB 的 interface。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);