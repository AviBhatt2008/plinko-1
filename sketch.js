const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground
var Division1
var particle
var grounds = [];
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;

function setup()
{
  createCanvas(490,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-10, width, 20);
  lWall = new Division(5, height/2, 10, height);
  rWall = new Division(485, height/2, 10, height);

  for(var i = 85; i <= width-5; i += 80)
  {
    if(i != width-5)
    {
      divisions.push(new Division(i, height - divisionHeight/2, 10, divisionHeight));
    }
    grounds.push(new Ground(i - 85/2 + 2.5, height - 10, 80, 20));
  }
  for(var j = 45; j <= width; j += 50)
  {
    plinkos.push(new Plinko(j, 75, 10));
  }
  for(var j = 20; j <= width; j += 50)
  {
    plinkos.push(new Plinko(j, 175, 10));
  }
  for(var j = 45; j <= width; j += 50)
  {
    plinkos.push(new Plinko(j, 275, 10));
  }
  for(var j = 20; j <= width; j += 50)
  {
    plinkos.push(new Plinko(j, 375, 10));
  }

  Engine.run(engine);
}

function draw()
{
  background(55);

  if(frameCount % 60 === 0)
  {
    particles.push(new Particle(width/2 + random(-200, 200), 40, 10));
  }

  ground.display(rgb(23, 236, 236));
  lWall.display(rgb(23, 236, 236));
  rWall.display(rgb(23, 236, 236));
  for(var i = 0; i < divisions.length; i++)
  {
    divisions[i].display(rgb(23, 236, 236));
  }
  for(var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }
  for(var k = 0; k < particles.length; k++)
  {
    particles[k].display();
  }
  for(var l = 0; l < grounds.length; l++)
  {
    if (l === 1 || l === grounds.length - 2)
    grounds[l].display(rgb(255, 173, 47));

    if (l === 2 || l === grounds.length - 3)
    grounds[l].display(rgb(255, 255, 0));
    else
    {
      if(l === 0 || l === grounds.length - 1)
      {
        grounds[l].display(rgb(160, 255, 47));
      }
    }
  }
}


