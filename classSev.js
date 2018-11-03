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