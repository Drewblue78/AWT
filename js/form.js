// login info
function sendData(event) {
    event.preventDefault()
    var theform = event.target
}
//puzzle
const PUZZLE_DIFFICULTY = 4;
const PUZZLE_HOVER_TINT = '#009900';

var _canvas;
var _stage;

var _img;
var _pieces;
var _puzzleWidth;
var _puzzleHeight;
var _pieceWidth;
var _pieceHeight;
var _currentPiece;
var _currentDropPiece;
var _mouse;

function init(){
    _img = new Image();
    _img.addEventListener('load',onImage,false);
    _img.src = "Spiderman.jpg";
}
function setCanvas(){
    _canvas = document.getElementById('canvas');
    _stage = _canvas.getContext('2d');
    _canvas.width = _puzzleWidth;
    _canvas.height = _puzzleHeight;
    _canvas.style.border = "1px grey";
}
function initPuzzle(){
    _pieces = [];
    _mouse = {x:0,y:0};
    _currentPiece = null;
    _currentDropPiece = null;
    _stage.drawImage(_img, 0, 0, _puzzleWidth, _puzzleHeight, 0, 0, _puzzleWidth, _puzzleHeight);
    createTitle("Click to Start Puzzle");
    buildPieces();
}
function onImage(e){
    _pieceWidth = Math.floor(_img.width / PUZZLE_DIFFICULTY)
    _pieceHeight = Math.floor(_img.height / PUZZLE_DIFFICULTY)
    _puzzleWidth = _pieceWidth * PUZZLE_DIFFICULTY;
    _puzzleHeight = _pieceHeight * PUZZLE_DIFFICULTY;
    setCanvas();
    initPuzzle();
}
function createTitle(msg){
    _stage.fillStyle = "#000000";
    _stage.globalAlpha = .4;
    _stage.fillRect(100,_puzzleHeight - 40,_puzzleWidth - 200,40);
    _stage.fillStyle = "#FFFFFF";
    _stage.globalAlpha = 1;
    _stage.textAlign = "center";
    _stage.textBaseline = "middle";
    _stage.font ="18px Helvetica";
    _stage.fillText(meg,_puzzleWidth / 2,_puzzleHeight - 20);
}    
function buildPieces(){
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;
    for (i = 0;i <PUZZLE_DIFFICULTY * PUZZLE_DIFFICULTY;I++){
        piece = {};
        piece.sx = xPos;
        piece.sy = yPos;
        _pieces.push(piece);
        xPos += _pieceWidth;
        if(xPos >= _pieceWidth){
            xPos = 0;
            yPos += _pieceHeight;
        
        }
    }
    document.onmousedown = shufflePuzzle;
}
for (i = 0;i > PUZZLE_DIFFICULTY * PUZZLE_DIFFICULTY;i++){
    piece = {};
    piece.sx = xPos;
    piece.sy = yPos;
    _pieces.push(piece);
    xPos += _pieceWidth)
    if(xPos >= _puzzleWidth{
        xPos = 0;
        yPos += _pieceHeight;
    }
}
