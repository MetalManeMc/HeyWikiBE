# HeyWikiBE

 A Bedrock Edition version of the Hey Wiki mod for Java.

## Planned features

- Due to current BE limitations, the game can not open links
- Will send wiki links to a UI popup where link can be copied on click
- Will contain the following custom commands:
  - `/wiki <pageName>` - Opens the Minecraft Wiki page of the specified page name.
        - Example: `/wiki creeper` -> `https://minecraft.wiki/w/?search=creeper`
        - Redirect: /whatis
    - `/whatbiome` - Opens the Minecraft Wiki page of the biome you're currently in.
    - `/whatcommand <command>` - Opens the Minecraft Wiki page of the specified command.
      - Example: `/whatcommand give` -> `https://minecraft.wiki/w/?search=%2Fgive`
        - Redirect: `/whatcmd`
    - `/whatisthis` - Opens the Minecraft Wiki page of the block/item/entity you're aiming at.
    - `/whatisthisitem` - Opens the Minecraft Wiki page of the item you're holding in you main hand.
- Will be customisable with preferred language
- Will have some sort of "what's that you're looking at ?"
