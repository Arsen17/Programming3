

var matrix = [
    [5, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 2, 0],
    [2, 0, 1, 0, 0],
    [1, 1, 0, 0, 4],
    [1, 1, 0, 3, 0],
    [1, 1, 0, 0, 7]
];

var side = 25;
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var korcanichArr = [];
var sevArr = [];
var kapuytArr = [];
var jrhexexArr = [];

var n = 30;
/*
var canvasX = 1000;
var canvasY = 1000;

var side = canvasX / n;
var matrix = [];*/



function setup() {

    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {
            matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5,7,7]);
        }

    }


    createCanvas(matrix[0].length * side, matrix.length * side); //createCanvas(canvasX + 1, canvasY + 1);
    background('#acacac');




    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));

            }
            else if (matrix[y][x] == 2) {
                grassEaterArr.push(new GrassEater(x, y, 2));
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y, 3));
            }
            else if (matrix[y][x] == 4) {
                korcanichArr.push(new Korcanich(x, y, 4));
            }
            else if (matrix[y][x] == 6) {
                sevArr.push(new Sev(x, y, 6));
            }
            else if (matrix[y][x] == 5) {
                kapuytArr.push(new Kapuyt(x, y, 5));

            }
            else if (matrix[y][x] == 7) {
                jrhexexArr.push(new Jrhexex(x, y, 7));


            }




        }





    }



}




function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 6) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("lightblue");
                rect(x * side, y * side, side, side);
            }



        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {

        grassEaterArr[i].eat();
    }

    for (var i in gishatichArr) {

        gishatichArr[i].eat();
    }
    for (var i in korcanichArr) {

        korcanichArr[i].eat();

    }
    for (var i in sevArr) {

        sevArr[i].eat();

    }
    for (var i in kapuytArr) {

        kapuytArr[i].eat();

    }
    for (var i in jrhexexArr) {

        jrhexexArr[i].eat();

    }

    var a = "winter";


    function a() {
        setTimeout(function () { fill("lightblue") }, 10000)
    }

    if (a) {
        fill("lightblue")
    }
    /*for (var i in JrhexexArr) {
       if(click){

       }
       JrhexexArr[i].eat();

   }*/
    function click(evt) {
        console.log(evt.pageX, evt.pageY);


        
        /*var x = evt.pageX;
        var y = evt.pageY;
        matrix[y][x] == 7;*/
    }



    window.onclick = click;


}