scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . 3 3 3 3 3 3 b . . . . 
    . . . . . 3 3 5 5 5 5 5 b . . . 
    . 3 3 3 3 3 5 5 5 5 5 5 5 b . . 
    . 3 d 3 b 5 5 5 5 5 5 5 5 b . . 
    . 3 3 5 5 b 5 d 1 f 5 d 4 f . . 
    . 3 3 d 5 5 b 1 f f 5 4 4 c . . 
    3 3 3 b 5 5 5 d f b 4 4 4 4 4 b 
    3 3 3 c d 5 5 b 5 4 4 4 4 4 3 . 
    3 3 3 3 3 3 b 5 5 5 5 5 5 5 3 . 
    3 3 3 3 3 3 d 5 5 5 5 5 5 5 3 . 
    3 3 3 3 3 3 3 d 5 5 5 5 5 d 3 . 
    . 3 3 3 3 3 3 3 3 5 5 5 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 90, 90)
