controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e 2 8 2 e e . . . . . 
        . . . . . e 2 8 2 8 e e . . . . 
        . . . . . e 2 8 2 8 2 e . . . . 
        . . . . . e 2 8 2 8 2 e . . . . 
        . . . . . e e 8 2 8 e e . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    asteroide.destroy()
    otherSprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
})
let asteroide: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("Benvinguts a l'espai ", "Apreta A per començar i B per disparar")
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f f f f . 
    . . . . f 9 f 9 f 9 f 9 f 9 f . 
    . f f f f f f f f f f f f f f . 
    . f 9 9 f 2 8 2 8 2 8 2 8 2 f . 
    . f 9 9 f 8 2 8 2 f f f f f f . 
    . f 9 9 f 2 8 2 8 f 9 9 9 9 f . 
    . f f f f 8 2 8 2 f 9 9 9 9 f . 
    . . . f f 2 8 2 8 f 9 9 9 9 f . 
    . . . f f 8 2 8 2 f 9 9 9 9 f . 
    . . . f f 2 8 2 8 f f f f f f . 
    . . . f f f f f f f f f f f f . 
    . . . . . . f f . . . f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(89, 106)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    asteroide = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . . e e 1 1 e e e . . . . . 
        . . . . e 1 1 1 1 1 e . . . . . 
        . . . . e 1 1 1 1 1 e e . . . . 
        . . . . e 1 1 1 1 1 1 e e . . . 
        . . . e e 1 1 1 1 1 1 1 e . . . 
        . . . . e e 1 1 1 1 1 1 e . . . 
        . . . . e e e 1 1 1 1 1 e . . . 
        . . . . . e e e e e e e e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 50)
    asteroide.x += randint(0, 100)
    asteroide.setKind(SpriteKind.Enemy)
})
