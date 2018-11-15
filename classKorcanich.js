class Korcanich extends Base{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 15;
 

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

    chooseCell(c){
        this.getNewCoordinates()
        return super.chooseCell(c);
    }
    /*getNewCoordinates() {
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
    }*/
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

