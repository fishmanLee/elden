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
info.onCountdownEnd(function () {
    mySprite.vx = 0
    mySprite.sayText("投降吧垃圾怪，我來清理你了", 3000, false)
})
info.onLifeZero(function () {
    mySprite.destroy(effects.spray, 500)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
scene.setBackgroundImage(img`
    ......................................................................................................7777......................................................
    ..................................................................................777...............77....77....................................................
    .............................................................................77777...7............77........7...................................................
    .........................................................77777...........7777.........7........777...........77.................................................
    .......................................................77.....77777777777..............77777777................77...............................................
    .....................................................77..........................................................77.............................................
    ...................................................77..............................................................77...........................................
    .................................................77..................................................................7..........................................
    ...............................................77....................................................................7..........................................
    ..............................................7......................................................................7..........................................
    ..............................................7......................................................................7..........................................
    .............................................7.......................................................................7..........................................
    .............................................7......................................................................7...........................................
    ............................................7.......................................................................7...........................................
    ............................................7.......................................................................7...........................................
    ...........................................7.......................................................................7............................................
    ...........................................7.......................................................................7............................................
    ...........................................7.......................................................................7............................................
    ...........................................7........................................................................7...........................................
    ...........................................7.........................................................................77.........................................
    ...........................................7...........................................................................77.......................................
    ............................................7............................................................................777....................................
    ............................................7...............................................................................77..................................
    ............................................7.................................................................................77................................
    ............................................7..................................................................................7................................
    .............................................7.................................................................................7................................
    .............................................7.................................................................................7................................
    ..............................................777...............5..............................................................7................................
    .................................................77............55..............................................................7................................
    ...................................................77...........5.............................5................................7................................
    ....................................................7...........5.............................5................................7................................
    ....................................................7...........55............................5................................7................................
    ....................................................7............5............................5...............................7.................................
    ....................................................7............5............................5...............................7.................................
    ...................................................7.............55...........................5..............................7..................................
    ...................................................7..............5...........................5..............................7..................................
    ...................................................7..............5...........................5..............................7..................................
    ..................................................7................5..........................5.............................7...................................
    ..................................................7................5..........................5.............................7...................................
    ..................................................7................5..........................5............................7....................................
    ..................................................7................5..........................5............................7....................................
    ..................................................7................5..........................5...........................7.....................................
    ..................................................7................5..........................5...........................7.....................................
    ..................................................7................5..........................5...........................7.....................................
    ...................................................7...............5..........................5...........................7.........5555555555555555............
    ...................................................777.............5..........................5...........................7.........................5...........
    ......................................................77...........5..........................5...........................7.........................5...........
    ........................................................77.........5.........................5...........................7..........................5...........
    ..........................................................77.......5.........................5...........................7...........................5..........
    ............................................................77...7.5.........................5..........................7.............................55........
    ..............................................................777.5..........................5..........................7...............................55......
    ....................................................55555.........5..........................5..........................7.................................55....
    ..................................................55..............5..........................5.........................7....................................5...
    ................................................55................5..........................5.........................7.....................................55.
    .............................................555..................5..........................5........................77........................................
    ...........................................55.....................5..........................5...................77777..........................................
    .........................................55.......................5..........................77777777777777777777...............................................
    .......................................55.........................5..........................7..................................................................
    .....................................55...........................5..........................5..................................................................
    ...................................55.............................5..........................5..................................................................
    ..................................5...............................5..........................5..................................................................
    ................................55................................5..........................5................................55555555555.......................
    ...............................5......................5...........5..........................5..............55555.......................5.......................
    ............................555......................5............5..........................5...................5.......................5......................
    ...........................5........................5.............5..........................5....................5......................5......................
    ...........................5......................55..............5..........................5....................55......................5.....................
    ..........................5.....................55................5..........................5.....................5.......................5....................
    .........................5.....................5..................5..........................5......................5.......................5...................
    .......................55....................55...................5..........................5......................5........................5..................
    .......................5...................55.....................5..........................5.......................5.......................5..................
    .......................5..................5.......................5..........................5........................5.......................5..............5..
    ......................5..................5........................5..........................5........................5........................5.............5..
    ......................5................55.........................5..........................5.........................5........................5...........5...
    ......................5...............5...........................5..........................5..........................5........................5........55....
    ......................5...55.........5...................5........5..........................5..........................5.........................5.....55......
    ......................5555..........5...................5........5...........................5...........................5.........................55555........
    ..................................55...................5.........5...........................5............................5.....................................
    ..................................5...................5..........5...........................5.............................5....................................
    .................................5....................5..........5...........................5.............................5....................................
    ................................5.....................5..........5...........................5..............................5...................................
    ................................5....................5...........5...........................5...............................5..................................
    ...............................5.....................5...........5...........................5...............................5..................................
    ..............................5.....................5............5...........................5................................5.................................
    ..............................5....................5.............5...........................5................................5.................................
    .............................5.....................5.............5...........................55................................5................................
    ...........................55.....................5..............5............................5.................................5...............................
    .........................55......................5...............5............................5.................................5...............................
    ........................5.......................5................5.............................5.................................5..............................
    ...................55555.......................5.................5..............................5.................................5.............................
    ..............55555..........................55...................5.............................5.................................5.............................
    ............55.............................55.....................5.............................5..................................5............................
    ............5............................55.......................5.............................5...................................5...........................
    ............5...........................5..........................5.............................5..................................5...........................
    ............5.........................55...........................5.............................5...................................5..........................
    ............5........................5.............................5..............................5...................................5.........................
    ...........5.........................5.............................5...............................5...................................5........................
    ...........5........................5..............................5................................5..................................5........................
    ..................................55...............................5.................................5..................................5.......................
    ..................................5................................5.................................5..................................5.......................
    .................................5.................................5..................................5..................................5......................
    .................................5.................................5...................................5..................................5.....................
    .................................5.................................5...................................5...................................5....................
    ................................5..................................5...................................5....................................5...................
    ................................5..................................5...................................5.....................................5..................
    ................................5...................................5..................................5......................................5.................
    ................................5...................................5..................................5.......................................55...............
    ................................5...................................5..................................5.........................................55...5.........
    ...............................5....................................5.................................5............................................55.5.........
    ...............................5....................................5.................................5..............................................55.........
    ...............................5....................................5.................................5.........................................................
    ..............................5.....................................5................................55.........................................................
    ..............................5.....................................5................................5..........................................................
    ..............................5.....................................5................................5..........................................................
    .............................5......................................5...............................55..........................................................
    .............................5......................................5...............................5.5.........................................................
    ............................5.......................................5...............................5.5.........................................................
    ...........................55.......................................5...............................5..5........................................................
    ...........................55.......................................5...............................5..5........................................................
    .............................5555...................................................................5...5.......................................................
    ....................................................................................................5...55......................................................
    `)
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
info.startCountdown(1)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
info.setLife(3)
let 敵人 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........dd55........
    ........5555........
    .........44.........
    ........dddd........
    ........dddd........
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......555555.......
    .......555555.......
    .......555555.......
    ........5555........
    ........4444........
    ....................
    `, SpriteKind.Enemy)
敵人.setPosition(132, 56)