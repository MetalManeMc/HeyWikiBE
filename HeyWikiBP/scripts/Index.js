// In-game debug command: /script debugger connect localhost 19144

import { world } from "@minecraft/server"

function getLanguageName(code) {
    return { rawtext: [{ translate: `language.name.${code}` }] }
}

world.beforeEvents.chatSend.subscribe((eventitem) => {
    const { message, sender } = eventitem
    if (message.startsWith("!wiki") && message.substr(5) == "") {
        eventitem.cancel = true
        var langcode = (typeof (sender.getDynamicProperty("wiki_language")) === 'undefined') ? "" : sender.getDynamicProperty("wiki_language") + "/"
        sender.sendMessage(`https://minecraft.wiki/${langcode}w/`)
    } else if (message.startsWith("!wiki ")) {
        eventitem.cancel = true
        var langcode = (typeof (sender.getDynamicProperty("wiki_language")) === 'undefined') ? "" : sender.getDynamicProperty("wiki_language") + "/"
        sender.sendMessage(`https://minecraft.wiki/${langcode}w/?search=${message.substr(6)}`)
    } else if (message.startsWith("!wikilang") && message.substr(9) == "") {
        eventitem.cancel = true
        var language = (typeof (sender.getDynamicProperty("wiki_language")) === 'undefined') ? "en" : sender.getDynamicProperty("wiki_language")
        sender.sendMessage({ translate: "wiki.language.current", with: getLanguageName(language) })
    } else if (message.startsWith("!wikilang ")) {
        eventitem.cancel = true
        if (["de", "german", "deutsch"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("de") })
            sender.setDynamicProperty("wiki_language", "de")
        } else if (["clear", "reset", "en", "english"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("en") })
            sender.setDynamicProperty("wiki_language", undefined)
        } else if (["es", "spanish", "español"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("es") })
            sender.setDynamicProperty("wiki_language", "es")
        } else if (["fr", "french", "français"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("fr") })
            sender.setDynamicProperty("wiki_language", "fr")
        } else if (["ja", "japanese", "日本語"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("ja") })
            sender.setDynamicProperty("wiki_language", "ja")
        } else if (["ko", "korean", "한국어"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("ko") })
            sender.setDynamicProperty("wiki_language", "ko")
        } else if (["lzh", "traditional chinese", "traditional", "chinese (traditional)", "文言"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("lzh") })
            sender.setDynamicProperty("wiki_language", "lzh")
        } else if (["pt", "potuguese", "português"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("pt") })
            sender.setDynamicProperty("wiki_language", "pt")
        } else if (["ru", "russian", "pусский"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("ru") })
            sender.setDynamicProperty("wiki_language", "ru")
        } else if (["th", "thai", "ไทย"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("th") })
            sender.setDynamicProperty("wiki_language", "th")
        } else if (["uk", "ukrainian", "українська"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("uk") })
            sender.setDynamicProperty("wiki_language", "uk")
        } else if (["zh", "chinese", "中文"].includes(message.substr(10).toLowerCase())) {
            sender.sendMessage({ translate: "wiki.language.set", with: getLanguageName("zh") })
            sender.setDynamicProperty("wiki_language", "zh")
        }
    }
})