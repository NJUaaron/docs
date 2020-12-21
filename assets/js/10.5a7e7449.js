(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{402:function(t,n,s){"use strict";s.r(n);var a=s(46),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"主题相关知识集锦"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题相关知识集锦"}},[t._v("#")]),t._v(" 主题相关知识集锦")]),t._v(" "),s("h2",{attrs:{id:"主题相关文件目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题相关文件目录"}},[t._v("#")]),t._v(" 主题相关文件目录")]),t._v(" "),s("p",[t._v("系统图标目录 "),s("code",[t._v("/usr/share/icons")]),t._v(" "),s("code",[t._v("DTK")]),t._v(" 主题文件 "),s("code",[t._v("/usr/lib/x86_64-linux-gnu/qt5/plugins/styles")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"内嵌图标-builtin-icon-相关说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内嵌图标-builtin-icon-相关说明"}},[t._v("#")]),t._v(" 内嵌图标(builtin icon)相关说明")]),t._v(" "),s("p",[t._v("一般Qt中设置图标最简单的就是 "),s("code",[t._v("setIcon")]),t._v("，如 "),s("code",[t._v("~QAction::setIcon(const QIcon &icon);")]),t._v(" ~ 通常开发中只需要知道"),s("code",[t._v("iconName")]),t._v(" 就可以使用, 如 "),s("code",[t._v('QIcon::fromTheme("dialog-ok")；')]),t._v("//dialog-ok是 iconName，图标引擎会自动去存放图标主题的目录下查找。一般主题目录下存放的够用， 如果还是无法满足需求， 可以使用内嵌资源， 使用qt的资源系统， 内嵌资源也可以像使用主题中的图标一样，路径为："),s("code",[t._v('"qrc:/icons/deepin/builtin/[light/dark]"')]),t._v("，其中，light和dark子目录为可选，它们分别为应用程序提供亮色和暗色图标的存储，如果图标本身为通用型（在任何主题下都可使用），则图标文件直接放置到 "),s("code",[t._v('"qrc:/icons/deepin/builtin"')]),t._v(" 目录即可。")]),t._v(" "),s("br"),t._v(" "),s("p",[s("strong",[t._v("图标分为三种类型：")])]),t._v(" "),s("p",[s("code",[t._v("TextType")]),t._v(" 纯文本性图标，其颜色会跟随画笔的前景色变化（和文字颜色保持一致）。文件放置路径："),s("code",[t._v('"qrc:/icons/deepin/builtin/[light/dark]/texts"')])]),t._v(" "),s("p",[s("code",[t._v("ActionType")]),t._v(" 动作型图标，其颜色会在其 Mode 改变时跟随画笔前景色（Normal 模式图标颜色不会发生变化）。文件放置路径："),s("code",[t._v('"qrc:/icons/deepin/builtin/[light/dark]/actions"')])]),t._v(" "),s("p",[s("code",[t._v("IconType")]),t._v(" 图标型图标，其颜色在任何模式下都不会变化。文件放置路径："),s("code",[t._v('"qrc:/icons/deepin/builtin/[light/dark]/icons"')])]),t._v(" "),s("p",[t._v('图标名称规范： 名称前面需要添加能标示当前程序的前缀，例如控制中心的图标文件 dcc_xxx_32px.svg（设计大小为32）每一个都会有 "dcc_" 的前缀，其后跟图标名称（图标名称单词间使用 "_" 符号链接，且全部使用小写字母），再接着，"_32px" 为图标大小标识，标识此图标默认大小，最后的 ".svg" 为图标文件后缀名。 后记： qrc 表示是一个 Qt 资源文件，此文件需要应用程序中自行创建。"/icons/deepin/builtin" 为路径的固定前缀，随后的目录则为三种类型主题对应的目录。"actions" 为图标的类型目录，目前支持 "texts"、"actions" 和 "icons" 三种类型，"texts" 和 "actions" 目录用于放置一些工具性图标（一般都比较小，且颜色单一），"icons" 则用于放置一些颜色丰富的图标。 添加图标文件后，在程序中只需要使用 QIcon::fromTheme("dcc_xxx") 即可获取当前主题对应的图标对象，"dcc_xxx" 为图标文件名称，不包含图标大小标识和文件后缀名！')]),t._v(" "),s("p",[t._v('如果对图标的状态有要求，可以在路径下创建一个目录， 如 "qrc:/icon/deepin/builtin/[light/dark]/icons/dcc_icon_test_24px.svg", 这个 dcc_icon_test_24px.svg 是个目录名， 然后在目录下可以有： normal_on/normal_off, // QIcon::Normal 时 QIcon::On or QIcon::Off 的图标 disabled_on/disabled_off, // QIcon::Disabled 时 QIcon::On or QIcon::Off 的图标 active_on/active_off, // QIcon::Active 时 QIcon::On or QIcon::Off 的图标 selected_on/selected_off, // QIcon::Selected 时 QIcon::On or QIcon::Off 的图标')]),t._v(" "),s("br"),t._v(" "),s("p",[s("em",[t._v("参考："),s("a",{attrs:{href:"https://xmuli.tech/posts/525116e/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DTK 基础教程：自定义控件规范"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("注意要支持通过iconname查找内嵌图标的功能需要安装 "),s("strong",[t._v("dde-qt5integration")]),t._v(" 包")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"qicon-fromtheme是怎么找到应用图标的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qicon-fromtheme是怎么找到应用图标的"}},[t._v("#")]),t._v(" QIcon::FromTheme是怎么找到应用图标的")]),t._v(" "),s("p",[t._v('开发qt应用的代码中少不了用到各种图标，标题栏应用图标，图标按钮(iconButton)或者菜单icon等， 在代码中使用起来很简单， 如： QIcon::fromTheme("computer"); 就可以得到「我的电脑」这个图片的icon，根据函数名是和主题相关。 那么 QIcon::fromTheme 是怎么找到对应的图标的呢？ 直接上源码')]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("QIcon "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QIcon")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromTheme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" QString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    QIcon icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("qtIconCache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查找图标缓存")]),t._v("\n        icon "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("qtIconCache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QDir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAbsolutePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("QIcon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绝对路径会调用 QIcon::addFile 构造一个QIcon")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        QPlatformTheme "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" platformTheme "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QGuiApplicationPrivate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("platformTheme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" hasUserTheme "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QIconLoader")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasUserTheme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        QIconEngine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" engine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("platformTheme "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("hasUserTheme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" platformTheme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createIconEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据加载的 iconloader 插件创建 iconengin")]),t._v("\n                                                   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("QIconLoaderEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认的 iconloaderEngin")]),t._v("\n        QIcon "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cachedIcon  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("QIcon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       icon "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cachedIcon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("qtIconCache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cachedIcon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加入缓存")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("代码中加载的 iconloader 插件， 一般在 qt5 的 目录下， 如笔者本机的路径是 "),s("code",[t._v("/usr/lib/x86_64-linux-gnu/qt5/plugins/iconengines")]),t._v(" 其中 "),s("code",[t._v("libdtkbuiltin.so")]),t._v(" 用到内嵌资源图标时会用到， "),s("code",[t._v("libQt5XdgIconPlugin.so")]),t._v(" 查找系统主题图标时会用到。")]),t._v(" "),s("p",[t._v("p.s. 有同事反馈 "),s("strong",[t._v("qt5ct")]),t._v(" 这个包会导致无法找到图标.")]),t._v(" "),s("p",[s("em",[t._v("有同事反馈，使用 qtxdg-iconfinder会失败, QIconLoader::instance()->themeName(); 读取主题，实际读出的永远是 hicolor, 最后定位时，用 libtdkgui5-bin 中的 deepin-gui-settings 返回 Settings is invalid, platform plugin is: xcb。 系 "),s("strong",[t._v("deepin-qt5dxcb-plugin")]),t._v(" 的问题。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);