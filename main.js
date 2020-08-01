
// start
refresh();
document.getElementById("refresh").addEventListener("click", refresh);

function refresh(){
    // variables
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var maxX = document.getElementById("maxX").value;
    var minX = document.getElementById("minX").value;
    var maxY = document.getElementById("maxY").value;
    var minY = document.getElementById("minY").value;
    var totalX = Math.abs(maxX) + Math.abs(minX);
    var totalY = Math.abs(maxY) + Math.abs(minY);

    axies();



    function axies(){
        
        pxPerPointX = 800 / totalX;
        pxPerPointY = 800 / totalY;

        var i;

        if(maxX > 0 && minX < 0 && maxY > 0 && minY <0){
            
            ctx.beginPath();


            // keep in mind offset of 5

            ctx.moveTo(5, pxPerPointY * maxY + 5);
            ctx.lineTo(5, pxPerPointY * maxY + 2 + 5);
            ctx.lineTo(5, pxPerPointY * maxY - 2 + 5);
            ctx.moveTo(5, pxPerPointY * maxY + 5);
            

            var currentX = pxPerPointX + 5;
            var currentY = pxPerPointY * maxY + 5;


            for(i = 0; i < totalX; i++){
                
                ctx.lineTo(currentX, currentY);
                ctx.moveTo(currentX, currentY);
                ctx.lineTo(currentX, currentY + 2);
                ctx.lineTo(currentX, currentY - 2);
                ctx.moveTo(currentX, currentY);
                
                currentX += pxPerPointX;
            }


            ctx.moveTo(pxPerPointX * Math.abs(minX) + 5, 5);
            ctx.lineTo(pxPerPointX * Math.abs(minX) + 5 + 2, 5);
            ctx.lineTo(pxPerPointX * Math.abs(minX) + 5 - 2, 5);
            ctx.moveTo(pxPerPointX * Math.abs(minX) + 5, 5);

            currentX = pxPerPointX * Math.abs(minX) + 5;
            currentY = pxPerPointY + 5;


            for(i = 0; i < totalY; i++){
                
                ctx.lineTo(currentX, currentY);
                ctx.moveTo(currentX, currentY);
                ctx.lineTo(currentX + 2, currentY);
                ctx.lineTo(currentX - 2, currentY);
                ctx.moveTo(currentX, currentY);
                
                currentY += pxPerPointY;
            }


            ctx.stroke();
        }


        

    }
}



