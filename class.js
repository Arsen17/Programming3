class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(c) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

}


class GrassEater {

    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.index = index;
        this.direction = [];

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[1].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        var emptyCells1 = this.chooseCell(1);
        var newCell1 = random(emptyCells1);

        if (newCell1) {
            var newX = newCell1[0];
            var newY = newCell1[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }



            var newGrassEater = new GrassEater(newX, newY, this.index);
            grassEaterArr.push(newGrassEater);

        }
    }


    move() {

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        frameRate(3);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;

            this.y = newY;
            this.x = newX;
        }
        this.energy--;
        if (this.energy <= 0) {
            this.die();
        }


    }




    eat() {
        var emptyCells1 = this.chooseCell(1);
        var newCell1 = random(emptyCells1);

        if (newCell1) {
            var newX = newCell1[0];
            var newY = newCell1[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.y = newY;
            this.x = newX;
            if (this.energy++) {
                this.mul();
            }
        }
        else {
            this.move();

        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }

    }
}




class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.direction = [];

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[1].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            var newgishatich = new Gishatich(newX, newY, this.index);
            gishatichArr.push(newgishatich);
        }

    }


    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        frameRate(3);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;

            this.y = newY;
            this.x = newX;
        }
        this.energy--;
        if (this.energy <= 0) {
            this.die();
        }

    }

    eat() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;

            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            if (this.energy++) {
                this.mul();
            }
        }
        else {
            this.move();
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.y == gishatichArr[i].x && this.x == gishatichArr[i].y) {
                gishatichArr.splice(i+3, 1);
                break;
            }
        }

    }

}



class Korcanich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.index = index;
        this.direction = [];

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[1].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var emptyCells = this.chooseCell(3);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            for (var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }

            var newkorcanich = new Korcanich(newX, newY, this.index);
            korcanichArr.push(newkorcanich);
        }

    }

    kanachstexcox() {

        var emptyCells = this.chooseCell(0);

        for (var i in emptyCells) {
            var newX = emptyCells[i][0];
            var newY = emptyCells[i][1];

            matrix[newY][newX] = 1;//stexcir objecty xoti
            matrix[this.y][this.x] = 1;
        }
        var newGrass = new Grass(newX, newY, 1);
        grassArr.push(newGrass);

    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        frameRate(3);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;

            this.y = newY;
            this.x = newX;
        }
        this.energy--;
        if (this.energy <= 0) {

            this.die();
        }

    }

    eat() {



        var emptyCells = this.chooseCell(3);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 6;
            this.kanachstexcox();



            for (var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            if (this.energy++) {
                this.mul();

            }


        }
        else {

            this.move();
        }

    }





    die() {

        matrix[this.y][this.x] = 0;
        for (var i in korcanichArr) {
            if (this.y == korcanichArr[i].x && this.x == korcanichArr[i].y) {
                korcanichArr.splice(i, 1);
                break;
            }
        }

    }


}

class Sev {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;

        this.directions = [

            [this.x, this.y],

        ];

    }
    chooseCell(c) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    eat() {
        var emptyCells = this.chooseCell(6);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 1;



            for (var i in sevArr) {
                if (newX == sevArr[i].x && newY == sevArr[i].y) {
                    sevArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;


        }

    }
}

class Kapuyt {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 25;
        this.index = index;
        this.direction = [];

    }
    getNewCoordinates() {
        this.directions = [
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y + 1]
            
            
        ];

    }
    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[1].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);
    
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            for (var i in korcanichArr) {
                if (newX == korcanichArr[i].x && newY == korcanichArr[i].y) {
                    korcanichArr.splice(i, 1);
                    break;
                }
            }

            var newkapuyt = new Kapuyt(newX, newY, this.index);
            kapuytArr.push(newkapuyt);
        }

    }


    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
  
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 1;

            this.y = newY;
            this.x = newX;
        }
        this.energy--;
        if (this.energy <= 0) {
            this.die();
        }
        var newGrass = new Grass(newX, newY, 1);
        grassArr.push(newGrass);

    }

    eat() {
        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;

            for (var i in korcanichArr) {
                if (newX == korcanichArr[i].x && newY == korcanichArr[i].y) {
                    korcanichArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            if (this.energy++) {
                this.mul();
            }
        }
        else {
            this.move();
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in kapuytArr) {
            if (this.y == kapuytArr[i].x && this.x == kapuytArr[i].y) {
                kapuytArr.splice(i, 1);
                break;
            }
        }

    }

}