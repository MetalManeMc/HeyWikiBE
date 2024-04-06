import { world } from "@minecraft/server"

world.beforeEvents.chatSend.subscribe((eventitem) => {
    const {message, sender} = eventitem
})