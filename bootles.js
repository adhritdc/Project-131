function preload()
{
    img = loadImage('IMG_20220512_151244.jpg');
}

function setup()
{
    canvas = createCanvas(250,420);
    canvas.center();
}

function draw()
{
    image(img,0,0,250,420);
}