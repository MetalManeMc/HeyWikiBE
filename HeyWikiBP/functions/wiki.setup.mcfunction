scoreboard objectives add heywiki.initialised dummy
scoreboard players add wiki_initialiser heywiki.initialised 0

execute if score wiki_initialiser heywiki.initialised matches 0 run tickingarea add 0 -63 0 0 -62 0 "Wiki NPC"
execute if score wiki_initialiser heywiki.initialised matches 0 run summon npc "wiki.copylink" 0 -63 0

scoreboard players set wiki_initialiser heywiki.initialised 1