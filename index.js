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
  // render a smaller circle above the moon to give it that well-known moon-shape
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
    var x_tree = 350;
    var y_tree = 100;
    var ratio = 0.35;
    var hei_tree = 200;
    //트리 
    for (var i = 0; i < hei_tree; i++){
        for (var j = 0; j < i*ratio; j++){
                fillCircle(ctx, x_tree+(2*j), y_tree+(i*2), 1, `rgba(6, 36, 2)`);
        }
    }
    for (var i = 0; i < hei_tree; i++){
        for (var j = 0; j < i*ratio; j++){
                fillCircle(ctx, x_tree-(2*j), y_tree+(i*2), 1, `rgba(6, 36, 2)`);
        }
    }
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
for (var i = 0; i < hei_tree; i++){      //반짝이
    for (var j = 0; j < i * ratio; j++){
       var rand=Math.floor(Math.random() * 3)
        if (rand == 0) {
            fillCircle(ctx, x_tree + (2 * j), y_tree + (i * 2), 1.5, `rgba(255, 255, 255, ${getOpacity(counter)}`);
        }
            j += 3;
        }
        i += 3;
}
  for (var i = 0; i < hei_tree; i++){      //반짝이
    for (var j = 0; j < i * ratio; j++){
       var rand=Math.floor(Math.random() * 3)
        if (rand == 0) {
            fillCircle(ctx, x_tree - (2 * j), y_tree + (i * 2), 1.5, `rgba(255, 255, 255, ${getOpacity(counter)}`);
        }
            j += 3;
        }
        i += 3;
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
    ctx.font = "italic bold 80px Arial, sans-serif"; //Arial서체 없을 경우, sans-serif 적용 
        ctx.fillStyle = 'red';
ctx.strokeStyle = 'white';
    ctx.fillText("Merry", 600, 200); // 3-4. 텍스트 색상 설정 
        ctx.strokeText("Merry", 600, 200); // 3-6. 텍스트+외곽선 그리기 
    ctx.fillText("Christmas", 700, 300); // 3-4. 텍스트 색상 설정 
        ctx.strokeText("Christmas", 700, 300); // 3-6. 텍스트+외곽선 그리기 
 

  renderMoon(ctx);

  counter++;
  requestAnimationFrame(render);
}

const backgroundColor = "#030318";
const width = window.innerWidth;
const height = window.innerHeight;
const maxStarRadius = 1.5;
const minStarOpacity = 0.1;
const maxStarOpacity = 0.7;
const stars = createStars(width, height, 30);
const moon = {
  color: "#fea",
  x: (height / 3)+950,
  y: (width / 3),
  r: 40
};

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

let counter = 0;

render();
