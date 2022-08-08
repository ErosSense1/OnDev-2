/**@type {HTMLCanvasElement} */

const canvas = document.getElementById( 'screen' );
const c = canvas.getContext( '2d' );

const CANVAS_WIDTH = canvas.width = 1000
const CANVAS_HEIGHT = canvas.height = 500

//player
let player = new Player();

//cursor
const cursor = document.getElementById( 'cursor' )
const body = document.querySelectorAll( 'body' )

let x; let y;

canvas.addEventListener( 'mousemove', e =>
{
    x = e.pageX;
    y = e.pageY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    cursor.style.display = 'block'

} )
cursor.addEventListener( 'mousemove', e =>
{
    cursor.style.display = 'block'
    cursor.style.cursor = 'none'
} )

canvas.addEventListener( 'mouseout', e =>
{
    cursor.style.display = 'none'
} )
//cursor ( end )

//game

let room = 0
let roomX = 0
let action = false
function game ()
{
    requestAnimationFrame( game )
    if ( action )
    {
        if ( player.x < 600 && player.x > 500 )
        {
            setTimeout( () =>
            {
                action = false
            }, 100 )
            setTimeout( () =>
            {
                alert( "it was my b-day" )
            }, 10 / 60 )
        } else action = false
    }
    c.fillStyle = "#295";
    c.fillRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT )

    c.fillStyle = "#000"
    //window
    //sides-left/right
    c.fillRect( 300, 100, 10, 200 )
    c.fillRect( 100, 100, 10, 200 )
    //sides-up/down
    c.fillRect( 100, 100, 200, 10 )
    c.fillRect( 100, 300, 210, 10 )
    //inside-x
    c.fillRect( 100, 200, 200, 10 )
    //inside-y
    c.fillRect( 200, 100, 10, 200 )
    //cristals
    c.fillStyle = '#39e'
    c.fillRect( 110, 110, 90, 90 )
    c.fillRect( 210, 110, 90, 90 )
    c.fillRect( 110, 210, 90, 90 )
    c.fillRect( 210, 210, 90, 90 )
    //table
    c.fillStyle = 'brown'
    c.fillRect( 500, CANVAS_HEIGHT - 150, 15, 100 )
    c.fillRect( 650, CANVAS_HEIGHT - 150, 15, 100 )
    c.fillRect( 450, CANVAS_HEIGHT - 150, 250, 15 )
    //table-content
    c.fillStyle = '#fff'
    c.fillRect( 529, CANVAS_HEIGHT - 165 - 50, 10, 30 )
    c.fillStyle = '#f09'
    c.fillRect( 512.5, CANVAS_HEIGHT - 165 - 30, 43.5, 30 )
    c.fillRect( 500, CANVAS_HEIGHT - 180, 70, 30 )



    //floor
    c.fillStyle = '#000'
    c.fillRect( 0, 450, CANVAS_WIDTH, 50 )

    //out-background
    player.draw( c )

}

window.onload = game
//game ( end )