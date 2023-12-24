const backgroundColor = "#030318";
const width = window.innerWidth;
const height = window.innerHeight;
const maxStarRadius = 1.5;
const minStarOpacity = 0.1;
const maxStarOpacity = 0.7;
const stars = createStars(width, height, 30);
const moon = {
  color: "#fea",
  x: (height / 3)+750,
  y: (width / 3)-380,
  r: 40
};
	
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

function keyDownHandler(e) {
	if(e.key == 37 || e.key == "ArrowRight") {
    console.log("right");
		rightPressed = true;
	}
	else if(e.key == 39 || e.key == "ArrowLeft") {
    console.log("left");
	  leftPressed = true;
  }
  else if(e.key == 38 || e.key == "ArrowUp") {
    console.log("up");
	  upPressed = true;
  }
  else if(e.key == 40 || e.key == "ArrowDown") {
    console.log("down");
	  downPressed = true;
  }
  moveSanta();
}
 
 
// 키보드가 안 눌렸을 때 일어나는 함수 (매개변수: e)
// 각 방향키의 keycode와 방향이 맞다면, 해당 변수들 false > 초기화
function keyUpHandler(e) {
	if(e.key == 37 || e.key == "ArrowRight") {
	  rightPressed = false;
  }
  else if(e.key == 39 || e.key == "ArrowLeft") {
	  leftPressed = false;
  }
  else if(e.key == 38 || e.key == "ArrowUp") {
	  upPressed = false;
  }
  else if(e.key == 40 || e.key == "ArrowDown") {
	  downPressed = false;
  }
}

function santaPos(x,y){
  for(var i=0;i<santas.length;i++){
    if(santas[i][0]==1){
      santas[i][2]+=x;
      santas[i][3]+=y;
    }
  }
}
function moveSanta(){
  if(rightPressed && santas[0][2]<1000){
    santaPos(3,0);
  }
  if(leftPressed && santas[0][2]>0){
    santaPos(-3,0);
  }
  if(upPressed && santas[0][3]>0){
    santaPos(0,-3);
  }
  if(downPressed && santas[0][3]<1000){
    santaPos(0,3);
  }
  
}

//santa
var santas=[];
var dx=300;
var dy=-300;
santas.push([1,'red',700+dx,900+dy,70, 0, Math.PI * 2])
santas.push([1,'hsl(33.87,40%,80%)',700+dx,800+dy,50, 0, Math.PI * 2])
santas.push([1,'black',700+dx,775+dy,50, Math.PI * 0.35, Math.PI * 0.65])
santas.push([1,'black',685+dx,785+dy,5, 0, Math.PI * 2])
santas.push([1,'black',715+dx,785+dy,5, 0, Math.PI * 2])
santas.push([1,'black',700+dx,890+dy,5, 0, Math.PI * 2])
santas.push([1,'black',700+dx,920+dy,5, 0, Math.PI * 2])
santas.push([1,'black',700+dx,860+dy,5, 0, Math.PI * 2])
santas.push([1,'orange',700+dx,798+dy,5, 0, Math.PI * 2])
santas.push([1,'pink',670+dx,803+dy,5, 0, Math.PI * 2])
santas.push([1,'pink',730+dx,803+dy,5, 0, Math.PI * 2])
santas.push([1,'white',700+dx,850+dy,10, 0, Math.PI * 2])
santas.push([1,'white',690+dx,850+dy,10, 0, Math.PI * 2])
santas.push([1,'white',680+dx,850+dy,10, 0, Math.PI * 2])
santas.push([1,'white',670+dx,840+dy,10, 0, Math.PI * 2])

santas.push([1,'white',710+dx,850+dy,10, 0, Math.PI * 2])
santas.push([1,'white',720+dx,850+dy,10, 0, Math.PI * 2])
santas.push([1,'white',730+dx,840+dy,10, 0, Math.PI * 2])

santas.push([1,'white',700+dx,860+dy,10, 0, Math.PI * 2])
santas.push([1,'white',690+dx,860+dy,10, 0, Math.PI * 2])
santas.push([1,'white',710+dx,860+dy,10, 0, Math.PI * 2])
santas.push([1,'white',700+dx,870+dy,10, 0, Math.PI * 2])

santas.push([1,'red',700+dx,760+dy,10, 0, Math.PI * 2])
santas.push([1,'red',690+dx,760+dy,10, 0, Math.PI * 2])
santas.push([1,'red',710+dx,760+dy,10, 0, Math.PI * 2])
santas.push([1,'red',680+dx,760+dy,10, 0, Math.PI * 2])
santas.push([1,'red',720+dx,760+dy,10, 0, Math.PI * 2])
santas.push([1,'red',670+dx,763+dy,10, 0, Math.PI * 2])
santas.push([1,'red',730+dx,763+dy,10, 0, Math.PI * 2])
santas.push([1,'red',700+dx,750+dy,10, 0, Math.PI * 2])
santas.push([1,'red',690+dx,750+dy,10, 0, Math.PI * 2])
santas.push([1,'red',680+dx,750+dy,10, 0, Math.PI * 2])
santas.push([1,'red',710+dx,750+dy,10, 0, Math.PI * 2])
santas.push([1,'red',720+dx,750+dy,10, 0, Math.PI * 2])
santas.push([1,'red',730+dx,750+dy,10, 0, Math.PI * 2])

santas.push([1,'red',700+dx,740+dy,10, 0, Math.PI * 2])
santas.push([1,'red',690+dx,740+dy,10, 0, Math.PI * 2])
santas.push([1,'red',710+dx,740+dy,10, 0, Math.PI * 2])
santas.push([1,'red',720+dx,740+dy,10, 0, Math.PI * 2])
santas.push([1,'red',730+dx,740+dy,10, 0, Math.PI * 2])

santas.push([1,'red',700+dx,730+dy,10, 0, Math.PI * 2])
santas.push([1,'red',710+dx,730+dy,10, 0, Math.PI * 2])
santas.push([1,'red',720+dx,730+dy,10, 0, Math.PI * 2])
santas.push([1,'red',730+dx,730+dy,10, 0, Math.PI * 2])

santas.push([1,'red',710+dx,720+dy,10, 0, Math.PI * 2])
santas.push([1,'red',720+dx,720+dy,10, 0, Math.PI * 2])
santas.push([1,'red',730+dx,720+dy,10, 0, Math.PI * 2])
santas.push([1,'white',720+dx,700+dy,10, 0, Math.PI * 2])


function drawSanta(){
for(var i=0;i<santas.length;i++){
  if(santas[i][0]==1){
    ctx.strokeStyle = santas[i][1];
    ctx.fillStyle = santas[i][1];
    ctx.beginPath();
    ctx.arc(santas[i][2], santas[i][3], santas[i][4], santas[i][5], santas[i][6]);
    ctx.stroke();
    ctx.fill();
  }
}
}

//santa

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

let counter = 0;
//set

///눈 날리기
var snows=[];
for(var i=0;i<100;i++){
  snows.push(createSnowflake());
}

function createSnowflake(){
  var x=getRandomInt(0,width),
      y=getRandomInt(0,height),
      r=getRandomInt(5,10),
      d=(getRandomInt(0,1)==0?-1:1),
      s=getRandomInt(1,2),
      v=getRandomInt(20,30);
    return {x:x,y:y,r:r,d:d,s:s,v:v};
}
function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max-min+1))+min;
}

function drawSnowflake(){
  ctx.fillStyle="#fff";

  for(var i=0;i<snows.length;i++){
    ctx.fillStyle='hsla(255,255%,255%,0.5)';
    var snow=snows[i];
    ctx.beginPath();
    ctx.arc(snow.x,snow.y,snow.r,0,Math.PI*2,true);
    ctx.fill();

    ctx.fillStyle='hsla(255,255%,255%,0.8)';
    var snow=snows[i];
    ctx.beginPath();
    ctx.arc(snow.x,snow.y,snow.r*0.5,0,Math.PI*2,true);
    ctx.fill();
  }
}
function moveSnowflake(){
  for(var i=0;i<snows.length;i++){
    var snow=snows[i];
    snow.y+=snow.v/100;
    if(snow.y>height){
      snows[i]=createSnowflake();
    }
  }   
}

///
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function createStars(width, height, spacing) {
  const stars = [];

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      const star = {
        x: x + randomInt(spacing),
        y: y + randomInt(spacing),
        r: Math.random() * maxStarRadius
      };
      stars.push(star);
    }
  }
  return stars;
}

function fillCircle(ctx, x, y, r, fillStyle) {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function renderMoon(ctx, blur) {
  fillCircle(ctx, moon.x, moon.y, moon.r, moon.color);
  fillCircle(
    ctx,
    moon.x - moon.r / 3,
    moon.y - moon.r / 3,
    moon.r,
    backgroundColor
  );
}

function getOpacity(factor) {
  const opacityIncrement =
    (maxStarOpacity - minStarOpacity) * Math.abs(Math.sin(factor));
  const opacity = minStarOpacity + opacityIncrement;
  return opacity;
}

function render() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
  stars.forEach(function(star, i) {
    const factor = counter * i;
    const x = star.x;
    const y = star.y;
    const opacity = getOpacity(factor);
    fillCircle(ctx, x, y, star.r, `rgba(255, 255, 255, ${opacity}`);
  });

  function drawTree(x, y, w, h) {
    for (var i = 0; i < h; i++) {
      for (var j = 0; j < i * w; j++) {
        fillCircle(ctx, x + j, y + i, 1, `rgba(6, 36, 2)`);
      }
    }
    for (var i = 0; i < h; i++) {
      for (var j = 0; j < i * w; j++) {
        fillCircle(ctx, x - j, y + i, 1, `rgba(6, 36, 2)`);
      }
    }
  }
  function drawTwinkle(x, y, w, h) {
    h=h/2
    for (var i = 0; i < h; i++){      //반짝이
      for (var j = 0; j < i * w; j++){
         var rand=Math.floor(Math.random() * 3)
          if (rand == 0) {
              fillCircle(ctx, x + (2 * j), y + (i * 2), 1.5, `rgba(255, 255, 255, ${getOpacity(counter)}`);
          }
              j += 3;
          }
          i += 3;
  }
    for (var i = 0; i < h; i++){      //반짝이
      for (var j = 0; j < i * w; j++){
         var rand=Math.floor(Math.random() * 3)
          if (rand == 0) {
              fillCircle(ctx, x - (2 * j), y + (i * 2), 1.5, `rgba(255, 255, 255, ${getOpacity(counter)}`);
          }
              j += 3;
          }
          i += 3;
      } 
  }


    var x_tree = 350;
    var y_tree = 100;
    var ratio = 0.35;
    var hei_tree = 150;
    drawTree(x_tree, y_tree, ratio, 400);
    drawTree(x_tree, y_tree, ratio, hei_tree);
    drawTree(x_tree - 30, y_tree +100, ratio+0.3, hei_tree);
    drawTree(x_tree + 30, y_tree +100, ratio+0.3, hei_tree);
    drawTree(x_tree - 50, y_tree +200, ratio+0.3, hei_tree);
    drawTree(x_tree + 50, y_tree +200, ratio+0.3, hei_tree);
    drawTwinkle(x_tree, y_tree, ratio, 400);
    drawTwinkle(x_tree, y_tree, ratio, hei_tree);
    drawTwinkle(x_tree - 30, y_tree +100, ratio+0.3, hei_tree);
    drawTwinkle(x_tree + 30, y_tree +100, ratio+0.3, hei_tree);
    drawTwinkle(x_tree - 50, y_tree +200, ratio+0.3, hei_tree);
    drawTwinkle(x_tree + 50, y_tree +200, ratio+0.3, hei_tree);
    //트리
    
    var hei_tree = 200;
    // for (var i = 0; i < hei_tree; i++){      //반짝이
    //     for (var j = 0; j < i * ratio; j++){
    //        var rand=Math.floor(Math.random() * 3)
    //         if (rand == 0) {
    //             fillCircle(ctx, x_tree + (2 * j), y_tree + (i * 2), 1.5, `rgba(255, 255, 255, ${getOpacity(counter)}`);
    //         }
    //             j += 3;
    //         }
    //         i += 3;
    // }
    //   for (var i = 0; i < hei_tree; i++){      //반짝이
    //     for (var j = 0; j < i * ratio; j++){
    //        var rand=Math.floor(Math.random() * 3)
    //         if (rand == 0) {
    //             fillCircle(ctx, x_tree - (2 * j), y_tree + (i * 2), 1.5, `rgba(255, 255, 255, ${getOpacity(counter)}`);
    //         }
    //             j += 3;
    //         }
    //         i += 3;
    //     } 
    //트리
    var red = `rgba(130, 24, 3)`
    var blue = 'rgba(4, 44, 179)'
    var size=5
    var yel='rgba(237, 231, 50)'
    {
                      fillCircle(ctx, x_tree+(20), y_tree+(70), size,red);
                      fillCircle(ctx, x_tree+(20), y_tree+(100), size, red);
                      fillCircle(ctx, x_tree+(30), y_tree+(150), size, red);
                      fillCircle(ctx, x_tree+(50), y_tree+(180), size, red);
                      fillCircle(ctx, x_tree+(10), y_tree+(210), size, red);
                      fillCircle(ctx, x_tree+(45), y_tree+(250), size, red);
                      fillCircle(ctx, x_tree+(20), y_tree+(280), size, red);
                      fillCircle(ctx, x_tree+(35), y_tree+(300), size, red);
                      fillCircle(ctx, x_tree+(65), y_tree+(330), size, red);
                      fillCircle(ctx, x_tree+(50), y_tree+(350), size, red);
                      fillCircle(ctx, x_tree+(30), y_tree+(370), size, red);
                      fillCircle(ctx, x_tree+(80), y_tree+(330), size, red);
                      fillCircle(ctx, x_tree+(70), y_tree+(370), size, red);

                      fillCircle(ctx, x_tree-(3), y_tree+(70), size, red);
                      fillCircle(ctx, x_tree-(25), y_tree+(100), size, red);
                      fillCircle(ctx, x_tree-(12), y_tree+(150), size, red);
                      fillCircle(ctx, x_tree-(51), y_tree+(180), size, red);
                      fillCircle(ctx, x_tree-(4), y_tree+(210), size, red);
                      fillCircle(ctx, x_tree-(40), y_tree+(250), size, red);
                      fillCircle(ctx, x_tree-(23), y_tree+(280), size, red);
                      fillCircle(ctx, x_tree-(30), y_tree+(300), size, red);
                      fillCircle(ctx, x_tree-(85), y_tree+(305), size, red);
                      fillCircle(ctx, x_tree-(35), y_tree+(350), size, red);
                      fillCircle(ctx, x_tree, y_tree+(370), size, red);
                      fillCircle(ctx, x_tree-(43), y_tree+(330), size, red);
                      fillCircle(ctx, x_tree-(40), y_tree+(370), size, red);


        
        
    }
    {
                      fillCircle(ctx, x_tree+(10), y_tree+(70+2), size, blue);
                      fillCircle(ctx, x_tree+(2), y_tree+(100+4), size, blue);
                      fillCircle(ctx, x_tree+(50), y_tree+(180+10), size, blue);
                      fillCircle(ctx, x_tree+(40), y_tree+(210+2), size, blue);
                      fillCircle(ctx, x_tree+(17), y_tree+(300+5), size, blue);
                      fillCircle(ctx, x_tree+(88), y_tree+(330-6), size, blue);
                      fillCircle(ctx, x_tree+(55), y_tree+(370+3), size, blue);
                      fillCircle(ctx, x_tree+(36), y_tree+(330+7), size, blue);
                      fillCircle(ctx, x_tree+(70+10), y_tree+(370+2), size, blue);

                      fillCircle(ctx, x_tree-(3+18), y_tree+(70+4), size, blue);
                      fillCircle(ctx, x_tree-(12+30), y_tree+(150+10), size, blue);
                      fillCircle(ctx, x_tree-(4+30), y_tree+(210+2), size, blue);
                      fillCircle(ctx, x_tree-(40+20), y_tree+(250+4), size, blue);
                      fillCircle(ctx, x_tree-(4), y_tree+(330+5), size, blue);
                      fillCircle(ctx, x_tree-(35+30), y_tree+(302), size, blue);
                      fillCircle(ctx, x_tree-(55), y_tree+(330+3), size, blue);
                      fillCircle(ctx, x_tree-(110), y_tree+(357), size, blue);

    }

        {
                      fillCircle(ctx, x_tree, y_tree, size+0.5, yel);
                      fillCircle(ctx, x_tree+(30), y_tree+(180+10), size, yel);
                                            fillCircle(ctx, x_tree+(60), y_tree+(270+5), size, yel);

                      fillCircle(ctx, x_tree+(17), y_tree+(300+5), size, yel);
                      fillCircle(ctx, x_tree+(70+30), y_tree+(370+2), size, yel);

                      fillCircle(ctx, x_tree-(12+5), y_tree+(150+10), size, yel);
                      fillCircle(ctx, x_tree-(40+20), y_tree+(250+4), size, yel);
                      fillCircle(ctx, x_tree-(35+30), y_tree+(350+10), size, yel);
                      fillCircle(ctx, x_tree-(100), y_tree+(370+9), size,yel);

    }

 
        ctx.fillStyle = "rgba(38, 19, 5)";

    ctx.fillRect(x_tree-25, y_tree+399, 50, 100);
    {//눈사람
        var a=30
        ctx.strokeStyle = 'white';

        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(700, 590-a, 70, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(700, 500-a, 50, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.strokeStyle = 'black';

        ctx.beginPath();
        ctx.arc(700, 475-a, 50, Math.PI * 0.35, Math.PI * 0.65);
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(685, 485-a, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(715, 485-a, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(700, 590-a, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(700, 620-a, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(700, 560-a, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.arc(700, 498-a, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'pink';
        ctx.beginPath();
        ctx.arc(670, 503-a, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'pink';
        ctx.beginPath();
        ctx.arc(730, 503-a, 5, 0, Math.PI * 2);
        ctx.fill();
    }



      //   {//산타
      //     var a=-400
      //     ctx.strokeStyle = 'red';
      //     ctx.fillStyle = 'red';

      //     ctx.beginPath();
      //     ctx.arc(700, 590-a, 70, 0, Math.PI * 2);
      //     ctx.stroke();
      //     ctx.fill();
          
      //     ctx.strokeStyle = 'hsl(33.87,40%,80%)';
      //     ctx.fillStyle = 'hsl(33.87,40%,80%)';
      //     ctx.beginPath();
      //     ctx.arc(700, 500-a, 50, 0, Math.PI * 2);
      //     ctx.stroke();
      //     ctx.fill();
      //     ctx.strokeStyle = 'black';
  
      //     ctx.beginPath();
      //     ctx.arc(700, 475-a, 50, Math.PI * 0.35, Math.PI * 0.65);
      //     ctx.stroke();
      //     ctx.fillStyle = 'black';
      //     ctx.beginPath();
      //     ctx.arc(685, 485-a, 5, 0, Math.PI * 2);
      //     ctx.fill();
      //     ctx.fillStyle = 'black';
      //     ctx.beginPath();
      //     ctx.arc(715, 485-a, 5, 0, Math.PI * 2);
      //     ctx.fill();
  
      //     ctx.fillStyle = 'black';
      //     ctx.beginPath();
      //     ctx.arc(700, 590-a, 5, 0, Math.PI * 2);
      //     ctx.fill();
      //     ctx.fillStyle = 'black';
      //     ctx.beginPath();
      //     ctx.arc(700, 620-a, 5, 0, Math.PI * 2);
      //     ctx.fill();
      //     ctx.fillStyle = 'black';
      //     ctx.beginPath();
      //     ctx.arc(700, 560-a, 5, 0, Math.PI * 2);
      //     ctx.fill();
      //     ctx.fillStyle = 'orange';
      //     ctx.beginPath();
      //     ctx.arc(700, 498-a, 5, 0, Math.PI * 2);
      //     ctx.fill();
  
      //     ctx.fillStyle = 'pink';
      //     ctx.beginPath();
      //     ctx.arc(670, 503-a, 5, 0, Math.PI * 2);
      //     ctx.fill();
      //     ctx.fillStyle = 'pink';
      //     ctx.beginPath();
      //     ctx.arc(730, 503-a, 5, 0, Math.PI * 2);
      //     ctx.fill();
      // }
    ctx.font = "italic bold 80px Arial, sans-serif"; //Arial서체 없을 경우, sans-serif 적용 
        ctx.fillStyle = 'red';
ctx.strokeStyle = 'white';
    ctx.fillText("Merry", 600, 200); // 3-4. 텍스트 색상 설정 
        ctx.strokeText("Merry", 600, 200); // 3-6. 텍스트+외곽선 그리기 
    ctx.fillText("Christmas", 700, 300); // 3-4. 텍스트 색상 설정 
        ctx.strokeText("Christmas", 700, 300); // 3-6. 텍스트+외곽선 그리기 
 

  //renderMoon(ctx);

  counter++;
  requestAnimationFrame(render);

  ///눈
  setInterval(function(){
    moveSnowflake();
    drawSnowflake();

   
    
    drawSanta();
  },10
  );
  // setInterval(function(){
  //   moveSanta();
  //   drawSanta();
  // },10
  // );
  drawSnowflake();
  drawSanta();

}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
render();
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
