// Generated by CoffeeScript 1.8.0
var GoGame;

GoGame = (function() {

  /*
  Constants
   */
  GoGame.prototype.BOARD_SIZE = 9;

  GoGame.prototype.PIECE = {
    EMPTY: null,
    BLACK: false,
    WHITE: true
  };


  /*
  Properties
   */

  GoGame.prototype.board = [];

  GoGame.prototype.turn = null;


  /*
  Constructor
   */

  function GoGame() {
    var x, y, _i, _j, _ref, _ref1;
    for (x = _i = 0, _ref = this.BOARD_SIZE; 0 <= _ref ? _i <= _ref : _i >= _ref; x = 0 <= _ref ? ++_i : --_i) {
      this.board.push([]);
      for (y = _j = 0, _ref1 = this.BOARD_SIZE; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; y = 0 <= _ref1 ? ++_j : --_j) {
        this.board[x].push(this.createCell(this, x, y));
      }
    }
    this.turn = this.PIECE.BLACK;
  }


  /*
  Game methods
   */

  GoGame.prototype.alternateTurn = function() {
    return this.turn = !this.turn;
  };

  GoGame.prototype.play = function(x, y) {
    this.board[x][y].value = this.turn;
    return this.alternateTurn();
  };

  GoGame.prototype.pass = function() {
    return this.alternateTurn();
  };


  /*
  Util methods
   */

  GoGame.prototype.createCell = function(game, x, y) {
    return {
      game: game,
      x: x,
      y: y,
      value: this.PIECE.EMPTY,
      up: function() {
        if (this.game.board[this.x][this.y - 1] != null) {
          return this.game.board[this.x][this.y - 1];
        }
        return null;
      },
      down: function() {
        if (this.game.board[this.x][this.y + 1] != null) {
          return this.game.board[this.x][this.y + 1];
        }
        return null;
      },
      left: function() {
        if (this.game.board[this.x - 1][this.y] != null) {
          return this.game.board[this.x - 1][this.y];
        }
        return null;
      },
      right: function() {
        if (this.game.board[this.x + 1][this.y] != null) {
          return this.game.board[this.x + 1][this.y];
        }
        return null;
      }
    };
  };

  GoGame.prototype.toString = function() {
    var string, x, y, _i, _j, _ref, _ref1;
    string = '';
    for (y = _i = 0, _ref = this.BOARD_SIZE; 0 <= _ref ? _i <= _ref : _i >= _ref; y = 0 <= _ref ? ++_i : --_i) {
      for (x = _j = 0, _ref1 = this.BOARD_SIZE; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
        string += (function() {
          switch (this.board[x][y].value) {
            case this.PIECE.EMPTY:
              return '-';
            case this.PIECE.BLACK:
              return 'b';
            case this.PIECE.WHITE:
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
