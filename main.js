
// start


refresh();
document.getElementById("refresh").addEventListener("click", refresh);
document.getElementById("1").addEventListener("click", function(){presets1()});
document.getElementById("2").addEventListener("click", function(){presets2()});
document.getElementById("3").addEventListener("click", function(){presets3()});
document.getElementById("4").addEventListener("click", function(){presets4()});
document.getElementById("5").addEventListener("click", function(){presets5()});
document.getElementById("6").addEventListener("click", function(){presets6()});
document.getElementById("7").addEventListener("click", function(){presets7()});
document.getElementById("8").addEventListener("click", function(){presets8()});
document.getElementById("9").addEventListener("click", function(){presets9()});
document.getElementById("10").addEventListener("click", function(){presets10()});
document.getElementById("11").addEventListener("click", function(){presets11()});
document.getElementById("integrate").addEventListener("click", function(){integration()});
document.getElementById("integrate").addEventListener("click", function(){integration()});
document.getElementById("x-inter").addEventListener("click", function(){xFinder()});

function presets1(){
    document.getElementById("maxX").value = 10;
    document.getElementById("minX").value = -10;
    document.getElementById("maxY").value = 10;
    document.getElementById("minY").value = -10;
    document.getElementById("func").value = "y = x";
    refresh();
}

function presets2(){
    document.getElementById("maxX").value = 10;
    document.getElementById("minX").value = -10;
    document.getElementById("maxY").value = 10;
    document.getElementById("minY").value = -10;
    document.getElementById("func").value = "y = x^2";
    refresh();
}

function presets3(){
    document.getElementById("maxX").value = 10;
    document.getElementById("minX").value = -10;
    document.getElementById("maxY").value = 10;
    document.getElementById("minY").value = -10;
    document.getElementById("func").value = "y = x^3";
    refresh();
}

function presets4(){
    document.getElementById("maxX").value = 10;
    document.getElementById("minX").value = -10;
    document.getElementById("maxY").value = 10;
    document.getElementById("minY").value = -10;
    document.getElementById("func").value = "y = sqrt(x)";
    refresh();
}

function presets5(){
    document.getElementById("maxX").value = 10;
    document.getElementById("minX").value = -10;
    document.getElementById("maxY").value = 10;
    document.getElementById("minY").value = -10;
    document.getElementById("func").value = "y = abs(x)";
    refresh();
}

function presets6(){
    document.getElementById("maxX").value = 10;
    document.getElementById("minX").value = -10;
    document.getElementById("maxY").value = 10;
    document.getElementById("minY").value = -10;
    document.getElementById("func").value = "y = 1/x";
    refresh();
}

function presets7(){
    document.getElementById("maxX").value = 10;
    document.getElementById("minX").value = -10;
    document.getElementById("maxY").value = 10;
    document.getElementById("minY").value = -10;
    document.getElementById("func").value = "y = log(x)";
    refresh();
}

function presets8(){
    document.getElementById("maxX").value = 10;
    document.getElementById("minX").value = -10;
    document.getElementById("maxY").value = 10;
    document.getElementById("minY").value = -10;
    document.getElementById("func").value = "y = e^x";
    refresh();
}

function presets9(){
    document.getElementById("maxX").value = 10;
    document.getElementById("minX").value = -10;
    document.getElementById("maxY").value = 10;
    document.getElementById("minY").value = -10;
    document.getElementById("func").value = "y = sin(x)";
    refresh();
}

function presets10(){
    document.getElementById("maxX").value = 10;
    document.getElementById("minX").value = -10;
    document.getElementById("maxY").value = 10;
    document.getElementById("minY").value = -10;
    document.getElementById("func").value = "y = cos(x)";
    refresh();
}

function presets11(){
    document.getElementById("maxX").value = 10;
    document.getElementById("minX").value = -10;
    document.getElementById("maxY").value = 10;
    document.getElementById("minY").value = -10;
    document.getElementById("func").value = "y = tan(x)";
    refresh();
}


function refresh(){


    // variables
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var maxX = parseInt(document.getElementById("maxX").value, 10);
    var minX = parseInt(document.getElementById("minX").value, 10);
    var maxY = parseInt(document.getElementById("maxY").value, 10);
    var minY = parseInt(document.getElementById("minY").value, 10);
    var totalX = Math.abs(maxX) + Math.abs(minX);
    var totalY = Math.abs(maxY) + Math.abs(minY);

    var func = document.getElementById("func").value;

    
    
    var pxPerPointX = 800 / totalX;
    var pxPerPointY = 800 / totalY;


    axies();

    equ();


    function axies(){
        
        

        var i;

        if(maxX >= 0 && minX <= 0 && maxY >= 0 && minY <= 0){
            
            ctx.beginPath();


            // keep in mind offset of 5

            ctx.moveTo(5, pxPerPointY * maxY + 5);
            ctx.lineTo(5, pxPerPointY * maxY + 3 + 5);
            ctx.lineTo(5, pxPerPointY * maxY - 3 + 5);
            ctx.moveTo(5, pxPerPointY * maxY + 5);
            

            var currentX = pxPerPointX + 5;
            var currentY = pxPerPointY * maxY + 5;


            for(i = 0; i < totalX; i++){
                
                ctx.lineTo(currentX, currentY);
                ctx.moveTo(currentX, currentY);
                ctx.lineTo(currentX, currentY + 3);
                ctx.lineTo(currentX, currentY - 3);
                ctx.moveTo(currentX, currentY);
                
                currentX += pxPerPointX;
            }


            ctx.moveTo(pxPerPointX * Math.abs(minX) + 5, 5);
            ctx.lineTo(pxPerPointX * Math.abs(minX) + 5 + 3, 5);
            ctx.lineTo(pxPerPointX * Math.abs(minX) + 5 - 3, 5);
            ctx.moveTo(pxPerPointX * Math.abs(minX) + 5, 5);

            currentX = pxPerPointX * Math.abs(minX) + 5;
            currentY = pxPerPointY + 5;


            for(i = 0; i < totalY; i++){
                
                ctx.lineTo(currentX, currentY);
                ctx.moveTo(currentX, currentY);
                ctx.lineTo(currentX + 3, currentY);
                ctx.lineTo(currentX - 3, currentY);
                ctx.moveTo(currentX, currentY);
                
                currentY += pxPerPointY;
            }

            ctx.stroke();

        }else if((maxX < 0 && minX < 0) || (maxX > 0 && minX > 0)){

            totalX = maxX - minX;

            pxPerPointX = 800 / totalX;
            
            ctx.beginPath();

            ctx.moveTo(5, pxPerPointY * maxY + 5);
            ctx.lineTo(5, pxPerPointY * maxY + 3 + 5);
            ctx.lineTo(5, pxPerPointY * maxY - 3 + 5);
            ctx.moveTo(5, pxPerPointY * maxY + 5);
            

            var currentX = pxPerPointX + 5;
            var currentY = pxPerPointY * maxY + 5;


            for(i = 0; i < totalX; i++){
                
                ctx.lineTo(currentX, currentY);
                ctx.moveTo(currentX, currentY);
                ctx.lineTo(currentX, currentY + 3);
                ctx.lineTo(currentX, currentY - 3);
                ctx.moveTo(currentX, currentY);
                
                currentX += pxPerPointX;
            }

            ctx.stroke();

        }else if((maxY < 0 && minY < 0) || (maxY > 0 && minY > 0)){

            totalY = maxY - minY;

            pxPerPointY = 800 / totalY;

            ctx.beginPath();

            ctx.moveTo(pxPerPointX * Math.abs(minX) + 5, 5);
            ctx.lineTo(pxPerPointX * Math.abs(minX) + 5 + 3, 5);
            ctx.lineTo(pxPerPointX * Math.abs(minX) + 5 - 3, 5);
            ctx.moveTo(pxPerPointX * Math.abs(minX) + 5, 5);

            currentX = pxPerPointX * Math.abs(minX) + 5;
            currentY = pxPerPointY + 5;


            for(i = 0; i < totalY; i++){
                
                ctx.lineTo(currentX, currentY);
                ctx.moveTo(currentX, currentY);
                ctx.lineTo(currentX + 3, currentY);
                ctx.lineTo(currentX - 3, currentY);
                ctx.moveTo(currentX, currentY);
                
                currentY += pxPerPointY;
            }

            ctx.stroke();

        }
    }


    function equ(){

        func = func.replace(/\s+/g, '');

        func = func.replace("y", '');
        func = func.replace("Y", '');
        func = func.replace("=", '');

        var math = mathjs();
        var express = func;

        var i;

        var currentXValue = minX;
        var currentYValue = maxY;

        var currentXPx = 5;
        var currentYPx = 5;

        var valuePerPxY = 1 / pxPerPointY;
        var valuePerPxX = 1/ pxPerPointX;


        ctx.beginPath();

        // calculate first position
        var scope = { x: currentXValue };
        var tree = math.parse(express, scope);
        var valueY = tree.eval();
        // console.log(typeof valueY);
        var k;

        if(valueY > maxY){
            currentYPx = -1000;
        }else if(valueY < minY){
            currentYPx = 1000;
        }else{
            for(k = 0; k < totalY; k++){
                if(valueY < currentYValue){
                    currentYPx += pxPerPointY;
                }else{
                    break;
                }
                currentYValue--;
            }
    
        }
        
        

        ctx.moveTo(currentXPx, currentYPx);
        // console.log(currentXPx);
        // console.log(currentYPx);

        for(i = 0; i < 800; i++){

            currentXPx++;
            currentXValue += valuePerPxX;

            scope = { x: currentXValue };
            tree = math.parse(express, scope);
            valueY = tree.eval();

            currentYValue = maxY;
            currentYPx = 5;

            if(valueY > maxY){
                currentYPx = -1000;
            }else if(valueY < minY){
                currentYPx = 1000;
            }else{
                for(k = 0; k < 800; k++){
                    if(valueY < currentYValue){
                        currentYPx++;
                    }else{
                        break;
                    }
                    currentYValue -= valuePerPxY;
                }
        
            }
            ctx.lineTo(currentXPx, currentYPx);


            // console.log('new');
            // console.log(currentXPx);
            // console.log(currentYPx);
        }

        ctx.stroke();

    }
    
}

function integration(){

    var upper = parseInt(document.getElementById("top").value, 10);
    var lower = parseInt(document.getElementById("low").value, 10);

    var func = document.getElementById("func").value;

    func = func.replace(/\s+/g, '');

    func = func.replace("y", '');
    func = func.replace("Y", '');
    func = func.replace("=", '');

    var inte = nerdamer('defint(' + func + ', '+ lower + ', ' + upper + ')');

    document.getElementById("ans").value = inte.text();

}

function xFinder(){

    var func = document.getElementById("func").value;

    func = func.replace(/\s+/g, '');

    func = func.replace("y", '');
    func = func.replace("Y", '');
    func = func.replace("=", '');

    var Xs = nerdamer.solve('0 = ' + func, 'x');
    var ans = Xs.toString();
    ans = ans.slice(1, -1);

    document.getElementById("xfind").value = ans;

}



