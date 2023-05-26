let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
canvas.style.background = 'darkkhaki'

let but_fire = document.querySelector('#but_fire')
but_fire.addEventListener('click',init) //teste

class ball {
    constructor(sx, sy, rad, stylestring) {
        this.sx = sx
        this.sy = sy
        this.rad = rad
        this.draw = drawball
        this.moveit = moveball
        this.fillStyle = stylestring
    }
}

function init(){
    ctx.fillStyle = "rgb(255,0,0)"
    ctx.save()
    ctx.translate(50,50)
    ctx.rotate(-Math.PI/6)
    ctx.translate(-50,-50)
    ctx.fillRect(50,50,50,50)
    ctx.restore()
    ctx.fillStyle = "rgb(0,0,255)"
    ctx.fillRect(50,50,5,5)
}