class Player
{
    width = 50
    height = 150
    x = 100
    y = CANVAS_HEIGHT - this.height - 50
    constructor ()
    {
        this.left = false
        this.right = false
    }
    draw ( c )
    {
        c.fillStyle = '#3ed'
        c.fillRect( this.x, this.y, this.width, this.height )//body
        c.fillStyle = '#c77'
        c.fillRect( this.x - 10, this.y, 70, 70 )//head

        if( this.left ) this.x -= 2
        
        if( this.right ) this.x += 2 
    }
}