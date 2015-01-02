// Generated by CoffeeScript 1.8.0
var GoGame;

GoGame = (function() {

  /*
  Constants
   */
  GoGame.PIECE = {
    EMPTY: null,
    BLACK: false,
    WHITE: true
  };


  /*
  Constructor
   */

  function GoGame(size) {
    var x, y, _i, _j, _ref, _ref1;
    if (size == null) {
      size = 9;
    }
    this.size = size;
    this.board = [];
    this.turn = null;
    for (y = _i = 0, _ref = this.size; 0 <= _ref ? _i < _ref : _i > _ref; y = 0 <= _ref ? ++_i : --_i) {
      for (x = _j = 0, _ref1 = this.size; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
        this._createCell(x, y);
      }
    }
    this.turn = GoGame.PIECE.BLACK;
  }


  /*
  Game methods
   */

  GoGame.prototype.play = function(x, y) {
    var cell;
    cell = this.board[x][y];
    cell.value = this.turn;
    this._mergeClusters(cell);
    this._alternateTurn();
    return cell;
  };

  GoGame.prototype.pass = function() {
    return this._alternateTurn();
  };


  /*
  Util methods
   */

  GoGame.prototype._createCell = function(x, y) {
    var cell, down, left, right, up;
    if (this.board[x] == null) {
      this.board[x] = [];
    }
    cell = this._cellTemplate();
    cell.cluster.push(cell);
    this.board[x][y] = cell;
    if (y - 1 >= 0) {
      up = this.board[x][y - 1];
      if (up != null) {
        cell.up = up;
        up.down = cell;
      }
    }
    if (y + 1 < this.size) {
      if (this.board[x][y + 1] == null) {
        this.board[x][y + 1] = [];
      }
      down = this.board[x][y + 1];
      if (down != null) {
        cell.down = down;
        down.up = cell;
      }
    }
    if (x - 1 >= 0) {
      left = this.board[x - 1][y];
      if (left != null) {
        cell.left = left;
        left.right = cell;
      }
    }
    if (x + 1 < this.size) {
      if (this.board[x + 1] == null) {
        this.board[x + 1] = [];
      }
      right = this.board[x + 1][y];
      if (right != null) {
        cell.right = right;
        right.left = cell;
      }
    }
    return cell;
  };

  GoGame.prototype._cellTemplate = function() {
    return {
      value: GoGame.PIECE.EMPTY,
      up: null,
      down: null,
      left: null,
      right: null,
      cluster: []
    };
  };

  GoGame.prototype._alternateTurn = function() {
    return this.turn = !this.turn;
  };

  GoGame.prototype._getSurrounding = function(cell) {
    var surrounding, _ref, _ref1, _ref2, _ref3;
    surrounding = [];
    if (((_ref = cell.up) != null ? _ref.value : void 0) === cell.value) {
      surrounding.push(cell.up);
    }
    if (((_ref1 = cell.down) != null ? _ref1.value : void 0) === cell.value) {
      surrounding.push(cell.down);
    }
    if (((_ref2 = cell.left) != null ? _ref2.value : void 0) === cell.value) {
      surrounding.push(cell.left);
    }
    if (((_ref3 = cell.right) != null ? _ref3.value : void 0) === cell.value) {
      surrounding.push(cell.right);
    }
    return surrounding;
  };

  GoGame.prototype._mergeClusters = function(cell) {
    var c, _i, _len, _ref, _results;
    _ref = this._getSurrounding(cell);
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      c = _ref[_i];
      if (c.cluster !== cell.cluster) {
        c.cluster = cell.cluster;
        c.cluster.push(c);
        _results.push(this._mergeClusters(c));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  GoGame.prototype.toString = function() {
    var string, x, y, _i, _j, _ref, _ref1;
    string = '';
    for (y = _i = 0, _ref = this.size; 0 <= _ref ? _i < _ref : _i > _ref; y = 0 <= _ref ? ++_i : --_i) {
      for (x = _j = 0, _ref1 = this.size; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
        string += (function() {
          switch (this.board[x][y].value) {
            case GoGame.PIECE.EMPTY:
              return '-';
            case GoGame.PIECE.BLACK:
              return 'b';
            case GoGame.PIECE.WHITE:
              return 'w';
          }
        }).call(this);
      }
      string += '\n';
    }
    return string;
  };

  return GoGame;

})();
