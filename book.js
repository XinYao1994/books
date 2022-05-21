module.exports = {
    "title": "百科全书的奇妙冒险",
    "links": {
        "sidebar": {
            "Home": "https://xinyao1994.github.io"
        }
    },
    "author": "Xin YAO",
    "language": "zh-hans",
    "styles": {
        "website": "./styles/website.css"
    },
    "structure": {
        "readme": "README.md"
    },
    "plugins": [
	"theme-official@2.1.1",
        "-sharing",
        "splitter",
        "expandable-chapters-small",
        "anchors",
        "github",
        "github-buttons",
        "sharing-plus",
        "comment",
        "expandable-chapters",
		    "copy-code-button",
		    "page-footer-ex",
		    "anchor-navigation-ex",
		    "-highlight",
		    "-lunr", 
		    "-search", 
		    "search-pro",
        "katex-ng",
        "advanced-emoji"
    ],
    "pluginsConfig": {
        "github": {
            "url": "https://github.com/xinyao1994"
        },
        "github-buttons": {
            "buttons": [{
                "user": "xinyao1994",
                "repo": "books",
                "type": "star",
                "size": "large",
                "count": true
                }
            ]
        },
        "sharing": {
            "douban": false,
            "facebook": false,
            "google": false,
            "hatenaBookmark": false,
            "instapaper": false,
            "line": false,
            "linkedin": false,
            "messenger": false,
            "pocket": false,
            "qq": false,
            "qzone": false,
            "stumbleupon": false,
            "twitter": false,
            "viber": false,
            "vk": false,
            "weibo": false,
            "whatsapp": false,
            "all": [
                "google", "facebook", "weibo", "twitter",
                "qq", "qzone", "linkedin", "pocket"
            ]
        },
        "anchor-navigation-ex": {
            "showLevel": false
        },
        "page-footer-ex": {
            "copyright": "使用[知识共享 署名-相同方式共享 4.0协议](https://creativecommons.org/licenses/by-sa/4.0/)发布",
            "markdown": true,
            "update_label": "<i>updated</i>",
            "update_format": "YYYY-MM-DD HH:mm:ss"
        },
    }
}
