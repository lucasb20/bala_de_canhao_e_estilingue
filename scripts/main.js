let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
canvas.style.background = 'darkkhaki'

let but_fire = document.querySelector('#but_fire')
but_fire.addEventListener('click',fire)

let ballrad=5
let ballx=1+ballrad,bally=149-ballrad

let theta, numv

let v_x,v_y

const gravity = 1

function init(){
    ctx.beginPath()
    ctx.fillStyle = "#ff0000"
    ctx.arc(ballx,bally,ballrad,0,Math.PI*2,false)
    ctx.fill()
}

function fire(){
    numv = Number((document.getElementById('numv')).value)
    theta = (Number((document.getElementById('theta')).value))*Math.PI/180

    v_x = numv*Math.cos(theta)
    v_y = numv*Math.sin(theta)

    setInterval(gravidade,150)
    setInterval(move_ball,50)
}

function move_ball(){
    ctx.clearRect(0,0,300,150)
    move_and_check()
    ctx.beginPath()
    ctx.arc(ballx,bally,ballrad,0,Math.PI*2,false)
    ctx.fill()
}

function move_and_check(){
    let not_ballx = ballx+v_x
    let not_bally = bally-v_y

    ballx = not_ballx
    bally = not_bally
}

function gravidade(){
    v_y-=gravity
    console.log('v_y: '+v_y)
}

/* 
ctx.fillStyle = "rgb(255,0,0)"
    ctx.save()
    ctx.translate(50,50)
    ctx.rotate(-Math.PI/6)
    ctx.translate(-50,-50)
    ctx.fillRect(50,50,50,50)
    ctx.restore()
    ctx.fillStyle = "rgb(0,0,255)"
    ctx.fillRect(50,50,5,5) */
