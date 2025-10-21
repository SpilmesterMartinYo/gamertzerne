namespace SpriteKind {
    export const Prinsesse = SpriteKind.create()
}
function Spg_3 () {
    lærer = game.askForString("Hvad er trin 3 i waterfall-modellen?")
    if (lærer == "design") {
        game.splash("Korrekt - hurra for dig!")
        tiles.setCurrentTilemap(tilemap`level4`)
    } else {
        if (lærer == "Design") {
            game.splash("Korrekt - hurra for dig!")
            tiles.setCurrentTilemap(tilemap`level4`)
        } else {
            game.splash("Forkert - prøv igen")
            info.changeLifeBy(-1)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function () {
    Spg_5()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Prinsesse, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
function Spg_4 () {
    lærer = game.askForString("I hvilken by kan man læse GBT på DTU?")
    if (lærer == "Ballerup") {
        game.splash("Korrekt - hurra for dig!")
        tiles.setCurrentTilemap(tilemap`level5`)
    } else {
        if (lærer == "ballerup") {
            game.splash("Korrekt - hurra for dig!")
            tiles.setCurrentTilemap(tilemap`level5`)
        } else {
            if (lærer == "Lyngby") {
                game.splash("Nej - det er DTU's anden afdeling")
                info.changeLifeBy(-1)
            } else {
                if (lærer == "lyngby") {
                    game.splash("Nej - det er DTU's anden afdeling")
                    info.changeLifeBy(-1)
                } else {
                    game.splash("Forkert - prøv igen")
                    info.changeLifeBy(-1)
                }
            }
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function () {
    Spg_2()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function () {
    Spg_1()
})
function Spg_2 () {
    lærer = game.askForString("Hvor mange bits er der i én byte?")
    if (lærer == "8") {
        game.splash("Korrekt - hurra for dig!")
        tiles.setCurrentTilemap(tilemap`level3`)
    } else {
        game.splash("Forkert - prøv igen")
        info.changeLifeBy(-1)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function () {
    Spg_3()
})
function Spg_1 () {
    lærer = game.askForString("Hvad hedder din EBS-lærer?")
    if (lærer == "Henrik") {
        game.splash("Korrekt - hurra for dig!")
        tiles.setCurrentTilemap(tilemap`level2`)
    } else {
        if (lærer == "henrik") {
            game.splash("Korrekt - hurra for dig!")
            tiles.setCurrentTilemap(tilemap`level2`)
        } else {
            game.splash("Forkert - prøv igen")
            info.changeLifeBy(-1)
        }
    }
}
info.onLifeZero(function () {
    game.gameOver(false)
    game.splash("Taber!")
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function () {
    Spg_4()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function () {
    spawnPrinsesse()
})
function spawnPrinsesse () {
    mySprite2 = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Prinsesse)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.chestClosed)
}
function Spg_5 () {
    lærer = game.askForString("Hvilken karakter ville dette spil få? (12-trinsskalaen)")
    if (lærer == "12") {
        game.splash("Uhh tak")
        tiles.setCurrentTilemap(tilemap`level0`)
    } else {
        game.splash("Forkert - prøv igen")
        info.changeLifeBy(-1)
    }
}
let mySprite2: Sprite = null
let lærer = ""
let mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mySprite.setPosition(12, 57)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
info.setLife(3)
