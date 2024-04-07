// In-game debug command: /script debugger connect localhost 19144

import { world } from "@minecraft/server"

world.beforeEvents.chatSend.subscribe((eventitem) => {
    const { message, sender } = eventitem
    if (message.startsWith("!wiki ")) {
        eventitem.cancel = true
        sender.sendMessage("https://minecraft.wiki/w/?search=" + message.substr(6))
    }
})