window.addEventListener( 'keydown', e =>
{
    if ( e.key === 'a' ) player.left = true

    if ( e.key === 'd' ) player.right = true

    if ( e.key === 'ArrowLeft' ) player.left = true

    if ( e.key === 'ArrowRight' ) player.right = true
} )
window.addEventListener( 'keyup', e =>
{
    if ( e.key === 'a' ) player.left = false

    if ( e.key === 'd' ) player.right = false

    if ( e.key === 'ArrowLeft' ) player.left = false

    if ( e.key === 'ArrowRight' ) player.right = false

    if ( e.key === ' ' ) action = true; player.right = player.left = false
} )