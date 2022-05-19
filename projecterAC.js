function preload()
{
    img = loadImage('IMG_20220512_151323.jpg');
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw()
{
    image(img,0,0,250,420);
}