class Jrhexex{

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
        var emptyCells1 = this.chooseCell(3);
        var newCell1 = random(emptyCells1);

        if (newCell1) {
            var newX = newCell1[0];
            var newY = newCell1[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 2;
            for (var i in GishatichArr) {
                if (newX == GishatichArr[i].x && newY == gishatichArr[i].y) {
                    GishatichArr.splice(i, 1);
                    break;
                }
            }



            var newJrhexex = new Jrhexex(newX, newY, this.index);
            JrhexexArr.push(newJrhexex);

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
        var emptyCells1 = this.chooseCell(3);
        var newCell1 = random(emptyCells1);

        if (newCell1) {
            var newX = newCell1[0];
            var newY = newCell1[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;

            for (var i in GishatichArr) {
                if (newX == GishatichArr[i].x && newY == GishatichArr[i].y) {
                    GishatichArr.splice(i, 1);
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
        for (var i in JrhexexArr) {
            if (this.x == JrhexexArr[i].x && this.y == JrhexexArr[i].y) {
               JrhexexArr.splice(i, 1);
                break;
            }
        }

    }
}