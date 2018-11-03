class Kapuyt extends Base{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 25;
        
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
        return super.chooseCell(c);
    }
   /* chooseCell(c) {
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