namespace SpriteKind {
    export const 發射物 = SpriteKind.create()
    export const 主角技能 = SpriteKind.create()
    export const 提示 = SpriteKind.create()
    export const 陷阱 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.陷阱, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.powerDown.play()
    pause(1000)
})
function 關卡1 () {
    mySprite = sprites.create(img`
        . . . . 5 . 5 . 5 . . . . . . . 
        . f f f 5 5 5 5 5 f f f . . . . 
        . f f f f f f f f f f f f f . . 
        . . d d d d d d d d f f f f . . 
        . . d d d d d d d d 2 d d . . . 
        . d d d d f d d f d 2 2 d d . . 
        . d d d d d d d d d d 2 2 2 . . 
        . d d d d d d d d d d 2 2 2 . . 
        . d d d d 3 3 3 3 d d 2 d d . . 
        . d d d d d d d d d d 2 d d . . 
        . . d d d d d d d d d d d d . . 
        . . . . d d d d d d d d d d . . 
        . . . . . d d d d d 4 4 4 4 4 8 
        . . . . . . . . 4 4 4 4 4 4 8 8 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(7, 63)
    mySprite.setVelocity(50, 0)
    mySprite.setStayInScreen(true)
    敵人 = sprites.create(img`
        ..............................
        ............ccccc.............
        ...........cbbbbbc............
        ........ccccccccccccc.........
        .......cccbbbbcbbbbccc........
        .......cbcbbbbcbbbbcbc........
        .......cbcdddddddddcbc........
        .......ccdddddddddddcc........
        .........ddd2ddd2ddd..........
        .........ddddd2ddddd..........
        .........dddd2d2dddd..........
        f......ccccccccccccccc......f.
        f......cbcbbbbcbbbbcbc......f.
        .ff...cbbcbbbbcbbbbcbbc...ff..
        f..ff.cbbcbbbbcbbbbcbbc.ff..f.
        f....fcbbbcbbbcbbbcbbbcf....f.
        .......cbbcbbbcbbbcbbc........
        .......cbbcbbbcbbbcbbc........
        .......cbbcbbbcbbbcbbc........
        ........cbbcbbcbbcbbc.........
        ........cbbcbbcbbcbbc.........
        ........cbbcbbcbbcbbc.........
        .........cbbcbcbcbbc..........
        ..........ccccccccc...........
        ..........f.......f...........
        .......ffff.......ffff........
        ......fffff.......fffff.......
        ......fffff.......fffff.......
        ..............................
        ..............................
        `, SpriteKind.Enemy)
    敵人.setPosition(132, 56)
    敵人.setStayInScreen(true)
    pause(1000)
    mySprite.vx = 0
    mySprite.sayText("投降吧垃圾怪，我來清理你了", 3000, false)
    controller.moveSprite(mySprite)
    info.setLife(3)
    info.setScore(0)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.發射物, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.powerDown.play()
    pause(1000)
})
function 敵人攻擊3 () {
    projectile5 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f b b f f f . . . . 
        . . . e e e e f f f f f f . . . 
        . . f e e e e c c c e e f f . . 
        . . e e e e e c c c e e b f . . 
        . f e e e e c c c c c b b f f . 
        . f e e e c c c f f f f b f f . 
        . f f e e c c f f f f f f f f . 
        . f c e e c c f f f f f f f f . 
        . . f c e e c f f f f f c f . . 
        . . f c c e c c f f f c f f . . 
        . . . f c c c c c c c c f . . . 
        . . . . f f c c c c f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -50, randint(-100, 100))
    projectile5.setKind(SpriteKind.發射物)
    pause(1000)
}
function _2 () {
    scene.setBackgroundColor(1)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999991111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999911111111111111999999111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999991111111111111111111111111111111111119999999999999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999999999999
        9999911111111111111111111111111111111111111111111999999999999999999999999999999999999999999999991111111119999999999999999999999999999999999999999999999999999999
        9991111111111111111111111111111111111111111111111119999999999999999999999999999999999999911111111111111111111111111119999999999999999999999999999999999999999999
        9991111111111111111111111111111111111111111111111111999999999999999999999999999999999991111111111111111111111111111111111999999999999999999999999999999999999999
        9991111111111111111111111111111111111111111111111111199999999999999999999999999991111111111111111111111111111111111111111999999999999999999999999999999999999999
        9991111111111111111111111111111111111111111111111111119999999999999999999999999911111111111111111111111111111111111111111199999999999999999999999999999999999999
        9991111111111111111111111111111111111111111111111111111999999999999999999999999911111111111111111111111111111111111111111199999999999999999999999999999999999999
        9991111111111111111111111111111111111111111111111111111199999999999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999999999
        9991111111111111111111111111111111111111111111111111111199999999999999999999911111111111111111111111111111111111111111111111999999999999999999999999999999999999
        9111111111111111111111111111111111111111111111111111111199999999999999999999111111111111111111111111111111111111111111111111111119999999999999999999999999999999
        9111111111111111111111111111111111111111111111111111111199999999999999999991111111111111111111111111111111111111111111111111111111999999999999999999999999999999
        9111111111111111111111111111111111111111111111111111111999999999999999999991111111111111111111111111111111111111111111111111111111999999999999999999999999999999
        9111111111111111111111111111111111111111111111111111111999999999999999999999111111111111111111111111111111111111111111111111111111999999999999999999999999999999
        9991111111111111111111111111111111111111111111111111119999999999999999999999111111111111111111111111111111111111111111111111111199999999999999999999999999999999
        9999111111111111111111111111111111111111111111111111119999999999999999999999111111111111111111111111111111111111111111111111111199999999999999999999999999999999
        9999911111111111111111111111111111111111111111111111119999999999999999999999111111111111111111111111111111111111111111111111111119999999999999999999999999999999
        9999911111111111111111111111111111111111111111111111199999999999999999999999111111111111111111111111111111111111111111111111111919999999999999999999999999999999
        9999991111111111111111111111111111111111111111111111999999999999999999999999111111111111111111111111111111111111111111111111111919999999999999999999999999999999
        9999991111111111111111111111111111111111111119999999999999999999999999999999111111111111111111111111111111111111111111111111111999999999999999999999999999999999
        9999999111111111111111111111111111111111111999999999999999999999999999999999911111111111111111111111111111111111111111111111111999999999999999999999999999999999
        9999999911111111999111111111111111111111119999999999999999999999999999999999991111111111111111111111111111111111111111111111119999999999999999999999999999999999
        9999999999999999999911111111999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111199999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111199999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111119999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999fffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999fffffffffffffcccffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999ffffffffffffffcccffffffffcffffffffff999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffcccffffffff99999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999fffffffffcccfffffcfffccfffffcccffffcffff9999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999ffffffccccccfcfffffffccfccffffffccffffcfff99999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999ffffffffcccffffffffffffffcccffffffccfffffffff9999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999ffffffcccfffffffffeeeeeeeeffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999fffffffcccffffffeeeeeeeeeeeeeeeeefffffffffffcccffff999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999ffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeffccfffcccffff99999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999ffffffccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffcfffff9999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999fffffffccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffff999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999fffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffcffff999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999ffffffccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffcffff99999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999fffffffccffeeeeeeeeeeeeeccccccccccccceeeeeeeeeeeeefcfffffff99999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999fffffccffffeeeeeeeeeeceeeccccccccccccccceeeeeeeeeeeffffffffff9999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999fffffccffffeeeeeeeeeecccccccccccccccccccceeeeeeeeeeffffffcfff9999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999fffffffffffeeeeeeeeeeeccccccccccccccccccccceeeeeeeeeffffffffff9999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999fffffffffffeeeeeeeeeeecccccccccccccccccccccceeeeeeeeeeffffffffff999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999fffffcccccceeeeeeeeeeccccccccccccccccccccccccceeeeeeeefffffcfffff99999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999ffffffcccccceeeeeeeeeccccccccccccccccccccccccccceeeeeeeefcfffffffff9999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999ffffccffffffeeeeeeeeeecccccccccccccccccccccccccccceeeeeeefffffccfffff999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999fffffcccffffeeeeeeeeeecccccccccccccccccccccccccccccceeeeeefffffccfffff999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999fffffccccfffeeeeeeeeeeeccccccccccccccccccccccccccccccceeeeeefffffffccfff99999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999fffffcccffffeeeeeeeeeeeccccccccccccccccccccccccccccccceeeeeefcccffcfffff99999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999ffffffffffffeeeeeeeeeeeccccccccccccccccccccccccccccccccceeeeeecccfffffffff9999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999fffffffffffffeeeeeeeeeecccccccccccccccccccccccccccccccccceeeeeeffffffffccfff999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999ffffccffffffeeeeeeeeeeeecccccccccccccccccccccccccccccccccceeeeeefffcccffccfff999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999fffffcccfffffeeeeeeeeeecccccccccccccccccccccccccccccccccccceeeeeeffcfcccffffff999999999999999999999999999999999999999999
        999999999999999999999999999999999999999fffffffccfffeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccceeeeeeffffccffffccff9999999999999999999999999999999999999999
        99999999999999999999999999999999999999ffffcccffffffeeeeeeeeeeccccccccccccccccccccccccccccccccccccccceeeeeefffffffffcccff9999999999999999999999999999999999999999
        9999999999999999999999999999999999999fffffcccfffffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccceeeeeeefffffffcfffff9999999999999999999999999999999999999999
        99999999999999999999999999999999999ffffffffccffffeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccceeeeeeefffffffffffff9999999999999999999999999999999999999999
        99999999999999999999999999999999999ffffffccccfffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccceeeeeeeefffffffccfcff999999999999999999999999999999999999999
        9999999999999999999999999999999999fffffffccfffffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccceeeeeeeeffcffffccffff999999999999999999999999999999999999999
        9999999999999999999999999999999999fffffffffffffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccceeeeeeefffcfffffffff999999999999999999999999999999999999999
        999999999999999999999999999999999ffffffffffffffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccceeeeeeeefffcccffffff999999999999999999999999999999999999999
        999999999999999999999999999999999fffffffffffffeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeffcccfcffff999999999999999999999999999999999999999
        99999999999999999999999999999999fffffffccffffeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccceeeeeeeefffffffcffff99999999999999999999999999999999999999
        99999999999999999999999999999999fffffccccfffeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeffccfffffff99999999999999999999999999999999999999
        99999999999999999999999999999999ffffcccfffffeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeffccfffffcf99999999999999999999999999999999999999
        9999999999999999999999999999999fffffccfffffeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeffffffffcff9999999999999999999999999999999999999
        9999999999999999999999999999999fffccffcccffeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeffcccfffcfff999999999999999999999999999999999999
        9999999999999999999999999999999fffccffcccfeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeefcccfffffff999999999999999999999999999999999999
        9999999999999999999999999999999ffffffffffeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeefffffffffff99999999999999999999999999999999999
        999999999999999999999999999999fffffffffffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeefffffffffff9999999999999999999999999999999999
        99999999999999999999999999999ffffffffffffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeefccffffffff9999999999999999999999999999999999
        99999999999999999999999999999ffffffccfffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeffcfffcccff9999999999999999999999999999999999
        9999999999999999999999999999fffffffccffeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeffcfcfcccfff999999999999999999999999999999999
        9999999999999999999999999999fffffffffffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeffcffffffff999999999999999999999999999999999
        999999999999999999999999999fffffffffffeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeefffffffffff99999999999999999999999999999999
        999999999999999999999999999ffffffffccceeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeffffffffffff9999999999999999999999999999999
        99999999999999999999999999ffffffcccccceeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeffffcffffff9999999999999999999999999999999
        999999999999999999999999999fffffcccffeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeffffffffcff9999999999999999999999999999999
        999999999999999999999999999ffffffffffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeffffffffffff999999999999999999999999999999
        999999999999999999999999999ffccfffffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeffcffffffffff99999999999999999999999999999
        999999999999999999999999999ffccfffffeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeefccffffffffff9999999999999999999999999999
        99999999999999999999999999fffffffffeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeefffffffffffff9999999999999999999999999999
        99999999999999999999999999fffffffffeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeffffffcffffcff999999999999999999999999999
        9999999999999999999999999fffccfcccfeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeecffffffffcfff999999999999999999999999999
        9999999999999999999999999fffcccccceeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeefffffffffccff999999999999999999999999999
        999999999999999999999999fffffccfffeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeefffccffffcccf99999999999999999999999999
        999999999999999999999999fffffffffeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeffffccfffffff99999999999999999999999999
        999999999999999999999999fffffffffeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeffcfccffffffff9999999999999999999999999
        999999999999999999999999fffffffffeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeefffffffffffff9999999999999999999999999
        999999999999999999999999fffcffffeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeffffffffcfffff999999999999999999999999
        99999999999999999999999fffffffffeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeffccfffcfffcc999999999999999999999999
        9999999999999999999999ffffffffffeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeffccfffccfffff99999999999999999999999
        9999999999999999999999fffffffffeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeefffcffccffffff9999999999999999999999
        9999999999999999999999ffffcffffeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeffffccffffffff999999999999999999999
        999999999999999999999fffffccfffeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeffffffcffcfffff99999999999999999999
        99999999999999999999fffffffcffeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeefcfccfffffffcffff999999999999999999
        99999999999999999999fffcfcfffeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeffcfccfffffffffcff99999999999999999
        99999999999999999999ffffffffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeefcfccfffccccffffff9999999999999999
        9999999999999999999fffcffcffeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeecccffffffcccfffcfff999999999999999
        `)
    關卡1()
}
info.onCountdownEnd(function () {
    music.jumpUp.play()
    mySprite.startEffect(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.主角技能, SpriteKind.發射物, function (sprite, otherSprite) {
    projectile2.destroy()
})
function 敵人攻擊45 () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.提示)
    mySprite2.setPosition(67, 85)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    pause(3000)
    projectile6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.陷阱)
    projectile6.setPosition(67, 85)
    pause(6000)
}
sprites.onOverlap(SpriteKind.主角技能, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    pause(1000)
})
function 敵人攻擊42 () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.提示)
    mySprite2.setPosition(42, 72)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    pause(3000)
    projectile6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.陷阱)
    projectile6.setPosition(42, 72)
    pause(6000)
}
function 敵人攻擊2 () {
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c b a c . . . . . . 
        . . . . c c b c f a c . . . . . 
        . . . . a f b b b a c . . . . . 
        . . . . a f f b a f c c . . . . 
        . . . . c b b a f f c . . . . . 
        . . . . . b b a f a . . . . . . 
        . . . . . . c b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 敵人, -50, -25)
    projectile4 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c b a c . . . . . . 
        . . . . c c b c f a c . . . . . 
        . . . . a f b b b a c . . . . . 
        . . . . a f f b a f c c . . . . 
        . . . . c b b a f f c . . . . . 
        . . . . . b b a f a . . . . . . 
        . . . . . . c b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 敵人, -50, 25)
    projectile3.setKind(SpriteKind.發射物)
    projectile4.setKind(SpriteKind.發射物)
    pause(1000)
}
function 敵人攻擊41 () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.提示)
    mySprite2.setPosition(61, 41)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    pause(3000)
    projectile6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.陷阱)
    projectile6.setPosition(61, 41)
    pause(6000)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile6 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b c . . . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . d d 5 1 1 1 1 1 1 1 5 d d . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . . . c b d b c . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
    projectile6.setKind(SpriteKind.主角技能)
    info.startCountdown(10)
    pause(10000)
})
function 敵人攻擊43 () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.提示)
    mySprite2.setPosition(79, 45)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    pause(3000)
    projectile6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.陷阱)
    projectile6.setPosition(79, 45)
    pause(6000)
}
info.onLifeZero(function () {
    mySprite.destroy(effects.spray, 500)
    game.over(false)
})
function 關卡2 () {
    scene.setBackgroundColor(1)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999991111999999999999999999999999999999999999999999111111111111
        99999999999999999999999999999999999999999999999999991ddddddddd19999999999999999999999999991111199999991dd11999999999999999999999999999999999999999991dddddddddd1
        99999999999999999999999999999911111999999999999999991ddddddddd19999999999999999999999999991ddd199999991ddd1999999999999999999991111999999999999999991dddddddddd1
        9999999999999999999999999999911ddd1199999999999999991d11dddddd19999999999999999999999999111ddd111999911ddd1199999999999999999911dd1199999999999999991dd1d1ddddd1
        999999999999999999999999999911ddddd199999999999999991ddddddd1d199999999111999999111111191ddddddd199991ddddd19999999999999999111dddd199999999999999991dddddd11dd1
        99999911119999999999999999991dddddd199911199999999991ddddddddd1999999911d19999991ddddd191ddddddd199911ddddd119999999999999991dddddd199911119999999991dddddddddd1
        9999991dd19999999999999999991ddd1d119991d199999999991ddddddddd199999991dd19999991ddddd191ddddddd199911ddddd119999999999999991ddd1d119991dd19999999991dddd1ddddd1
        1111111dd19111111991111111111dddddd19111d111999999991ddddddd1d111111111dd19999991ddddd111d11dddd19111ddddddd11111991111111111dddddd19911dd11999999991ddddddd1dd1
        d11dddddd191d1dd1991ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd199999911dd1dd11ddddddd191dddddddddd1dd1991ddddddddddddd1d1111dddd1191111111dddddd11ddd
        dddd1dddd191dddd19911d1dd1ddddddddd111ddddd111dd1dd11ddddddddd11dddd1d1dd11111111dddddd11dd1dddd191ddddddddddddd1991dd1ddd1dddddddd1111dddd1191d11dd1ddddddddddd
        ddddddddd111dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11ddddddddddddddd191ddddddddddd1d1111dddddddddddddddd11dddddd111ddddddddddddddddd
        d11d1dddd1ddddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd1111ddddddd1ddd11dd1ddddddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddddddddd
        ddddddddd1ddddddd1dddddddddddddddddddd1dddddd11ddddddddddddddddddddddddddddd1ddd1ddddddddddddddd1d1ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddddddddddd
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc
        11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
        11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
        11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd111
        111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d111d1111d111dd11dd
        d11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11d
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
        11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
        ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbb
        bbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddb
        bbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111dd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        dbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
}
function 敵人攻擊1 () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e . . . . . . . e e . . 
        . . . c e e . . . . . f 7 e . . 
        . . . . 7 f . 7 . . . c e . . . 
        . . . . e e f e c c e c e . . . 
        . . . . e . f e e c 7 e e . . . 
        . . . . . e c c f f f 7 e . . . 
        . . . . . c e f e f f e e . . . 
        . . . . . c 7 7 c f 7 7 e e . . 
        . . . . . . c c 7 7 c 7 e . . . 
        . . . . . . e 7 7 c e e e . . . 
        . . . . . . e e e e e . e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 敵人, -50, 0)
    projectile2.setKind(SpriteKind.發射物)
    敵人.setVelocity(0, randint(-25, 25))
    pause(1000)
}
function 敵人攻擊44 () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.提示)
    mySprite2.setPosition(38, 93)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    pause(3000)
    projectile6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.陷阱)
    projectile6.setPosition(38, 93)
    pause(6000)
}
function 敵人攻擊4 () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.提示)
    mySprite2.setPosition(25, 26)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . . 7 . 
        . 7 7 . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . . 7 
        . 7 . . . . . 2 2 . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 . . . . 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 1 7 
        . 7 1 1 1 1 1 2 2 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . 7 1 1 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 7 7 7 7 7 1 1 1 1 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    pause(3000)
    projectile6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 2 2 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.陷阱)
    projectile6.setPosition(25, 26)
    pause(3000)
    sprites.destroyAllSpritesOfKind(SpriteKind.提示)
    sprites.destroyAllSpritesOfKind(SpriteKind.陷阱)
    pause(3000)
}
function 結局 () {
    scene.setBackgroundColor(15)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999991111999999999999999999999999999999999999999999111111111111
        99999999999999999999999999999999999999999999999999991ddddddddd19999999999999999999999999991111199999991dd11999999999999999999999999999999999999999991dddddddddd1
        99999999999999999999999999999911111999999999999999991ddddddddd19999999999999999999999999991ddd199999991ddd1999999999999999999991111999999999999999991dddddddddd1
        9999999999999999999999999999911ddd1199999999999999991d11dddddd19999999999999999999999999111ddd111999911ddd1199999999999999999911dd1199999999999999991dd1d1ddddd1
        999999999999999999999999999911ddddd199999999999999991ddddddd1d199999999111999999111111191ddddddd199991ddddd19999999999999999111dddd199999999999999991dddddd11dd1
        99999911119999999999999999991dddddd199911199999999991ddddddddd1999999911d19999991ddddd191ddddddd199911ddddd119999999999999991dddddd199911119999999991dddddddddd1
        9999991dd19999999999999999991ddd1d119991d199999999991ddddddddd199999991dd19999991ddddd191ddddddd199911ddddd119999999999999991ddd1d119991dd19999999991dddd1ddddd1
        1111111dd19111111991111111111dddddd19111d111999999991ddddddd1d111111111dd19999991ddddd111d11dddd19111ddddddd11111991111111111dddddd19911dd11999999991ddddddd1dd1
        d11dddddd191d1dd1991ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd199999911dd1dd11ddddddd191dddddddddd1dd1991ddddddddddddd1d1111dddd1191111111dddddd11ddd
        dddd1dddd191dddd19911d1dd1ddddddddd111ddddd111dd1dd11ddddddddd11dddd1d1dd11111111dddddd11dd1dddd191ddddddddddddd1991dd1ddd1dddddddd1111dddd1191d11dd1ddddddddddd
        ddddddddd111dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11ddddddddddddddd191ddddddddddd1d1111dddddddddddddddd11dddddd111ddddddddddddddddd
        d11d1dddd1ddddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd1111ddddddd1ddd11dd1ddddddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddddddddd
        ddddddddd1ddddddd1dddddddddddddddddddd1dddddd11ddddddddddddddddddddddddddddd1ddd1ddddddddddddddd1d1ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddddddddddd
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc
        11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
        11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
        11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd111
        111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d111d1111d111dd11dd
        d11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11d
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
        11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
        ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbb
        bbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddb
        bbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111dd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        dbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    mySprite.setPosition(0, 50)
    mySprite.setVelocity(25, 0)
    pause(2000)
    mySprite.vx = 0
    pause(2000)
    game.splash("回過神來", "你發現自己身處在殘破的道路上")
    mySprite.sayText("原來這就是垃圾山下隱藏的景色嗎", 3000, false)
    pause(3000)
    game.splash("原本美麗的地球", "已變得殘破不堪")
    game.splash("雖然殺掉了垃圾怪", "但地球仍不會因此變回原樣")
    game.splash("只要人類不深刻反省", "地球就會一直如此")
    game.splash("垃圾怪依舊會源源不絕的出現")
    game.splash("你嘆了一口氣", "繼續朝前方前進")
    game.splash("完成屬於你的使命")
    mySprite.setStayInScreen(false)
    mySprite.setVelocity(50, 0)
    pause(5000)
    game.over(true)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pause(1000)
})
function _1 () {
    scene.setBackgroundColor(15)
    game.splash("很久很久以前", "地球還很乾淨美麗")
    game.splash("人類在這美麗的星球生活", "文明高速發展")
    game.splash("一切看似美好", "直到有一天...")
    game.splash("人類不懂得珍惜資源", "環境充滿著垃圾")
    _2()
}
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile6: Sprite = null
let mySprite2: Sprite = null
let projectile2: Sprite = null
let projectile5: Sprite = null
let projectile: Sprite = null
let 敵人: Sprite = null
let mySprite: Sprite = null
_1()
forever(function () {
    if (info.score() >= 0) {
        敵人攻擊1()
    }
    if (info.score() >= 30) {
        敵人攻擊2()
    }
    if (info.score() >= 50) {
        敵人攻擊3()
    }
    if (info.score() >= 100) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.disintegrate, 2000)
        sprites.destroyAllSpritesOfKind(SpriteKind.發射物, effects.bubbles, 2000)
        結局()
    }
})
forever(function () {
    if (info.score() >= 80) {
        敵人攻擊4()
    }
})
forever(function () {
    if (info.score() >= 80) {
        敵人攻擊44()
    }
})
forever(function () {
    if (info.score() >= 80) {
        敵人攻擊41()
    }
})
forever(function () {
    if (info.score() >= 80) {
        敵人攻擊45()
    }
})
forever(function () {
    if (info.score() >= 100) {
        sprites.destroyAllSpritesOfKind(SpriteKind.提示)
        sprites.destroyAllSpritesOfKind(SpriteKind.陷阱)
    }
})
forever(function () {
    if (info.score() >= 80) {
        敵人攻擊42()
    }
})
forever(function () {
    if (info.score() >= 80) {
        敵人攻擊43()
    }
})
