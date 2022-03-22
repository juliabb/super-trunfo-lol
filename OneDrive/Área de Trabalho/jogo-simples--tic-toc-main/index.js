/* 
using timeouts with loops
http://stackoverflow.com/questions/25311892/cleartimeout-for-settimeout-in-for-loop
*/

var MYAPP = MYAPP || {
    gameInPlay: false,
    winCombos: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [7, 5, 3]
    ],
    playerOneScore: 0,
    playerTwoScore: 0,
    timeOuts: [],
    initializeVars: function() {
      this.numFilledIn = 0;
      this.currentBoard = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
      };
    },
    initializeGame: function() {
      MYAPP.initializeVars();
      MYAPP.display.drawBoard();
      $('.game-choice button').click(function() {
        MYAPP.secondPlayer = MYAPP.game.gameSelection(this);
        MYAPP.display.hideGameChoice();
        MYAPP.display.showGameStarter(MYAPP.secondPlayer);
        $('.game-starter .choose-x, .game-starter .choose-o').off().click(MYAPP.game.firstGame);
  
        $('.back-button').on('click', function() {
          MYAPP.display.hideGameStarter();
          MYAPP.display.showGameChoice();
        });
      });
      $('.hard-reset').on('click', MYAPP.game.resetGame);
    }
  };
  
    /*=========================
        Display functions
  ==========================*/
  MYAPP.display = {  
    hideGameStarter: function() {
    $('.game-starter').fadeOut();
  },
  
    showGameStarter: function(isTwoPlayer) {
    var message;
    if (isTwoPlayer) {
      message = "Player 1 : Would you like X or O?"
    }
    else {
      message = "Would you like to be X or O?";
    }
    MYAPP.timeOuts.push(
      setTimeout(function() {
        $('.game-starter').fadeIn(500).children('p').text(message);
    }, 700));
  },
  
    showGameChoice: function() {
    $('.game-choice').fadeIn(600);
  },
  
    hideGameChoice: function() {
    $('.game-choice').fadeOut(600);
  },
  
    showPlayerOnePrompt: function() {
    if (MYAPP.secondPlayer) {
      $('.player-one-turn p').text('Go Player 1!');
    }
    else {
      $('.player-one-turn p').text('Your turn!');
    }
    $('.player-one-turn').animate({'top': '-45px'}, 500);
  },
  
    hidePlayerOnePrompt: function() {
    $('.player-one-turn').animate({'top': '0'}, 500);
  },
  
    showPlayerTwoPrompt: function() {
    if (MYAPP.secondPlayer) {
      $('.jogador-dois-turn p').text('Go Player 2!');
    }
    else {
      $('.jogador-dois-turn p').text('Computer\'s turn');
    }
    $('.jogador-dois-turn').animate({'top': '-45px'}, 500);
  },
  
    hidePlayerTwoPrompt: function() {
    $('.jogador-dois-turn').animate({'top': '0'}, 500);
  },
  
    showDrawMessage: function() {
    MYAPP.timeOuts.push(
      setTimeout(function() {
      $('.desenhar-mensagem').fadeIn(500);
    }, 1500));
  },
  
    hideDrawMessage: function() {
    $('.desenhar-mensagem').fadeOut(1000);
  },
  
    showLoseMessage: function() {
      MYAPP.timeOuts.push(
        setTimeout(function() {
      $('.lose-message').fadeIn(500);
  }, 1500)
      );
  },
  
    hideLoseMessage: function() {
    $('.lose-message').fadeOut(1000);
  },
  
    showWinMessage: function() {
      MYAPP.timeOuts.push(
        setTimeout(function() {
      $('.win-message').fadeIn(500).children('p').text("Player " + MYAPP.turn + " wins!! :D ")
  }, 1500));
  },
  
    hideWinMessage: function() {
    $('.win-message').fadeOut(1000);
  },
  
    drawBoard: function() {
      MYAPP.timeOuts.push(setTimeout(function() {
      var c = document.getElementById("myCanvas");
      var canvas = c.getContext("2d");
      canvas.lineWidth = 1;
      canvas.strokeStyle = "#fff";
      //vertical lines
      canvas.beginPath();
      canvas.moveTo(100, 0);
      canvas.lineTo(100, 146.5);
      canvas.closePath();
      canvas.stroke();
      canvas.beginPath();
      canvas.moveTo(200, 0);
      canvas.lineTo(200, 146.5);
      canvas.closePath();
      canvas.stroke();
  
      // horizontal lines
      canvas.lineWidth = .5;
  
      canvas.beginPath();
      canvas.moveTo(4, 48.5);
      canvas.lineTo(296, 48.5);
      canvas.closePath();
      canvas.stroke();
        
      canvas.beginPath();
      canvas.moveTo(4, 98.5);
      canvas.lineTo(296, 98.5);
      canvas.closePath();
      canvas.stroke();  
    }, 1500));
  },
  
    resetSquares: function() {
    $('.boxes').html('');
    for (var i = 1; i <= 9; i++) {
      var box = '<li class="' + i + '"><i class="letter"><span></span></i></li>';
      $(box).appendTo($('.boxes'));
    }
  },
    
    showScore: function() {
      if (MYAPP.secondPlayer) {
        $('.score-1').children('.name').text('player 1'); 
        $('.score-2').children('.name').text('player 2'); 
      }
      else {
        $('.score-1').children('.name').text('player 1'); 
        $('.score-2').children('.name').text('computer'); 
      }
      $('.score-1, .score-2').children('.points').text('0');
      $('.score-1,.score-2, .points-divider').fadeIn();
    },
    updateScore: function(turn) {
      var currentScore = turn === 1 ? MYAPP.playerOneScore : MYAPP.playerTwoScore;
  
      $('.score-' + turn).children('.points').text(currentScore);
    }
  };
  
  /*=========================
        logica do jogo
  ==========================*/
  MYAPP.game = {
    whoStarts: function() {
      var random = Math.floor(Math.random() * 2 + 1);
      return random;
    },
    gameSelection: function(item) {
      if ($(item).text() === 'One Player') {
        // returns what secondPlayer value to set
        return false;
      }
      else {
        return true;
      } 
    },
    firstGame: function() {
      MYAPP.playerOneSymbol = $(this).text();
      MYAPP.playerTwoSymbol = MYAPP.playerOneSymbol == 'X' ? 'O' : 'X'; 
      MYAPP.turn = MYAPP.game.whoStarts();
      MYAPP.display.hideGameStarter();
      $('#myCanvas').animate({'opacity': '1'}, 1200);
      $('.hard-reset').fadeIn(600);
      MYAPP.display.showScore();
      MYAPP.display.resetSquares();
      MYAPP.game.play();
    },
    play: function() {
      
      MYAPP.gameInPlay = true;
      $('.boxes li').on('click', function() {
       MYAPP.game.playerTurn(this);
      });  
      
      MYAPP.timeOuts.push(
        setTimeout(function(){
        if (MYAPP.turn === 1) {
          MYAPP.display.showPlayerOnePrompt();
        }
        else if (MYAPP.turn === 2) {
          MYAPP.display.showPlayerTwoPrompt();
        }
      }, 1500),
      setTimeout(function() {
        if (MYAPP.turn === 2 && !MYAPP.secondPlayer) {
          MYAPP.game.computerPlay();
        }
      }, 1200));
    },
    playerTurn: function(square) {
      var symbol = MYAPP.turn === 1 ? MYAPP.playerOneSymbol : MYAPP.playerTwoSymbol;
      var box = $(square).children('i').children('span');
      if (box.text() === '' && MYAPP.gameInPlay && (MYAPP.turn === 1 || (MYAPP.turn === 2 && MYAPP.secondPlayer))) {
        box.text(symbol);
        var number = $(square).attr('class');
        MYAPP.game.updateSquare(number, symbol);
        MYAPP.game.endTurn(symbol);
      }
    },
    computerPlay: function() {
      var computer = MYAPP.computer;
      //teste computador
      var boxNumber;
      if (computer.computerWhichMove(MYAPP.game) && MYAPP.turn === 2) {
        boxNumber = computer.computerWhichMove(MYAPP.game);
        var currentBox = $('.' + boxNumber).children('i');
        
        var symbol = MYAPP.playerTwoSymbol;
  
        MYAPP.timeOuts.push(
          setTimeout(function() {
          currentBox.children('span').text(symbol);
          MYAPP.game.updateSquare(boxNumber, MYAPP.playerTwoSymbol);
          MYAPP.game.endTurn(symbol);
        }, 1000));
      } 
    },
    endTurn: function(symbol) {
      MYAPP.numFilledIn = MYAPP.numFilledIn + 1;
      if (MYAPP.gameInPlay) {
        if (MYAPP.game.checkWin(symbol)[0]) {
          MYAPP.game.updateScore(MYAPP.turn);
          if (MYAPP.secondPlayer) {
            MYAPP.display.showWinMessage();
          }
          else {
            MYAPP.turn === 1 ? MYAPP.display.showWinMessage() : MYAPP.display.showLoseMessage();
          }
          MYAPP.gameInPlay = false;
          MYAPP.game.showWinningCombination();
          MYAPP.display.hidePlayerOnePrompt();
          MYAPP.display.hidePlayerTwoPrompt();
          MYAPP.game.reset();
        }
        else if (MYAPP.numFilledIn >= 9) {
          MYAPP.gameInPlay = false;
          MYAPP.display.hidePlayerOnePrompt();
          MYAPP.display.hidePlayerTwoPrompt();
          MYAPP.display.showDrawMessage();
          MYAPP.turn = MYAPP.game.whoStarts();
          MYAPP.game.reset();
        } else {
          if (MYAPP.turn === 1) {
            MYAPP.display.hidePlayerOnePrompt();
            MYAPP.display.showPlayerTwoPrompt();
            MYAPP.turn = 2;
            
            if (!MYAPP.secondPlayer) {
              MYAPP.game.computerPlay();
            }
          } else if (MYAPP.turn === 2) {
            MYAPP.display.showPlayerOnePrompt();
            MYAPP.display.hidePlayerTwoPrompt();
            MYAPP.turn = 1;
          }
        }
      }
    },
    updateSquare: function(number, symbol) {
      MYAPP.currentBoard[number] = symbol;
    },
    checkWin: function(symbol) {
      var currentBoard = MYAPP.currentBoard;
      var wins = MYAPP.winCombos;
      var winningCombo = [];
      var winner = wins.some(function(combination) {
        var winning = true;
        for (var i = 0; i < combination.length; i++) {
          if (currentBoard[combination[i]] !== symbol) {
            winning = false;
          }
        }
        if (winning) {
          winningCombo = combination;
        }
        return winning;
      });
      return [winner, winningCombo];
    },
    showWinningCombination: function() {
      var symbol = MYAPP.turn === 1 ? MYAPP.playerOneSymbol : MYAPP.playerTwoSymbol;
      var combo = MYAPP.game.checkWin(symbol)[1];
      for (var i = 0; i < combo.length; i++) {
        var currentBox = '.' + combo[i]; 
          $(currentBox).children('i').addClass('win').children('span').addClass('rotate');
       }
    },
    updateScore: function(turn) {
      turn === 1 ? MYAPP.playerOneScore += 1 : MYAPP.playerTwoScore += 1; 
      
      MYAPP.display.updateScore(turn);
      
    },
    reset: function() {
      MYAPP.initializeVars();
      
      MYAPP.timeOuts.push(
        setTimeout(function() {
          MYAPP.display.hideDrawMessage();
          MYAPP.display.hideLoseMessage();
          MYAPP.display.hideWinMessage();
          $('.boxes li').fadeOut();
        }, 5000),
        setTimeout(function(){
          MYAPP.display.resetSquares();
          $('.boxes li').fadeIn();
          MYAPP.numFilledIn = 0;
        }, 6000),

        setTimeout(function() {
          MYAPP.gameInPlay = true;
          MYAPP.game.play();
        }, 6000)
        );
    },
    resetGame: function() {
      $('#myCanvas').css('opacity', '0');
      $('.hard-reset').fadeOut();
      $('.points-divider, .score-1, .score-2').fadeOut();
      MYAPP.playerOneScore = 0;
      MYAPP.playerTwoScore = 0;
      MYAPP.display.resetSquares();
      MYAPP.initializeVars();
      MYAPP.gameInPlay = false;
      MYAPP.playerOneSymbol = null;
      MYAPP.playerTwoSymbol = null;
      MYAPP.timeOuts.forEach(function(timer) {
        clearTimeout(timer);
      });
      $('.draw-message, .win-message, .lose-message').hide();
      MYAPP.display.hidePlayerOnePrompt();
      MYAPP.display.hidePlayerTwoPrompt();
      MYAPP.display.showGameChoice();
    }
  };
      
  
  MYAPP.computer = {
    computerWhichMove: function () {
      var move = this.winOrBlockChoice('win')[0];
      if (!move) {
        move = this.winOrBlockChoice('block')[0];
        console.log(this.winOrBlockChoice('block'));
      }
      if (!move) {
        move = this.doubleThreatChoice('win');
      }
      if (!move) {
        move = this.doubleThreatChoice('block');
      }
      if (!move) {
        move = this.firstPlay();
      }
      if (!move) {
        move = this.playCenter();
      }
      if (!move) {
        move = this.emptyCorner();
      }
      if (!move) {
        move = this.emptySide();
      }
      move = (move && MYAPP.currentBoard[move]) === '' ? move : false;
      return move;
    },
  
    winOrBlockChoice: function(choiceType, board) {
      var board = board || MYAPP.currentBoard;
      if (choiceType === 'win') {
        var currentSymbol = MYAPP.playerTwoSymbol;
        var opponentSymbol = MYAPP.playerOneSymbol;
      } else if (choiceType === 'block') {
        var currentSymbol = MYAPP.playerOneSymbol;
        var opponentSymbol = MYAPP.playerTwoSymbol;
      } else {
        return;
      }
      var moves = [];
      MYAPP.winCombos.forEach(function(combo) {
        var notFound = [];
        var notPlayer = true;
        for (var i = 0; i < combo.length; i++) {
          if (board[combo[i]] !== currentSymbol) {
            if (board[combo[i]] === opponentSymbol) {
              notPlayer = false;
            } else {
              notFound.push(combo[i]);
            }
          }
        }
        if (notFound.length === 1 && notPlayer) {
          var move = notFound[0];
          moves.push(move);
        }
      });
      return moves;
  },
  
    doubleThreatChoice: function(choiceType) {
    var board = MYAPP.currentBoard;
    var move;
  
    if (choiceType === 'win') {
      var currentSymbol = MYAPP.playerTwoSymbol;
      var opponentSymbol = MYAPP.playerOneSymbol;
    } else if (choiceType === 'block') {
      var currentSymbol = MYAPP.playerOneSymbol;
      var opponentSymbol = MYAPP.playerTwoSymbol;
    }
  
      if (board[5] === currentSymbol && MYAPP.numFilledIn === 3) {
        if ((board[1] === opponentSymbol && board[9] === opponentSymbol) || (board[3] === opponentSymbol && board[7] === opponentSymbol)) {
          move = this.emptySide();
        }
      }
    
      if (!move && board[5] === opponentSymbol && MYAPP.numFilledIn === 2) {
        move = this.diagonalSecondAttack();
      }
  
    if (!move) {
      // clone current board;
      var testBoard = $.extend({}, board);
      for (var i = 1; i <= 9; i++) {
  
        testBoard = $.extend({}, board);
        if (testBoard[i] === '') {
          testBoard[i] = currentSymbol;
          if (this.winOrBlockChoice(choiceType, testBoard).length >= 2) {
            move = i;
          }
        }
      }
    }
    return move || false;
  },
  
    diagonalSecondAttack: function() {
    var board = MYAPP.currentBoard;
    var comp = MYAPP.playerTwoSymbol;
    var corners = [1,3,7,9];
    for (var i = 0; i < corners.length; i++) {
      if (board[corners[i]] === comp) {
        return 10 - corners[i];
      }
    }
  },
  
    firstPlay: function() {
    var board = MYAPP.currentBoard;
    var corners = [1, 3, 7, 9];
    var move;
    if (MYAPP.numFilledIn === 1) {
      if (board[5] === MYAPP.playerOneSymbol) {
        var cornerNum = Math.floor(Math.random() * 4 + 1);
        move = [1, 3, 7, 9][cornerNum];
      }
      else {
        for (var i = 0; i < corners.length; i++) {
          if (MYAPP.currentBoard[corners[i]] === MYAPP.playerOneSymbol) {
            move = 5;
          }
        }
      }
    } else if (MYAPP.numFilledIn === 0) {
      var cornerNum = Math.floor(Math.random() * corners.length + 1);
      move = corners[cornerNum];
    }
    return move ? move : false;
  },
    
    playCenter: function() {
      if (MYAPP.currentBoard[5] === '') {
        return 5;
      }
    },
    emptyCorner: function() {
    var board = MYAPP.currentBoard;
    var corners = [1, 3, 7, 9];
    var move;
    for (var i = 0; i < corners.length; i++) {
      if (board[corners[i]] === '') {
        move = corners[i];
      }
    }
    return move || false;
  },
  
    emptySide: function() {
    var sides = [2, 4, 6, 8];
    for (var i = 0; i < sides.length; i++) {
      if (MYAPP.currentBoard[sides[i]] === '') {
        return sides[i];
      }
    }
    return false;
  }
  }
  
  /* End Computer Move Decisions */  
  
  $(document).ready(function() {  
    MYAPP.initializeGame();
  });
  
  /* end game initialization */
  
  