function ChessBoard(boardContainer){
  this.construct = function(){
    boardContainer.className = "table";
    for(var row_index = 0; row_index < 8; row_index++){
      var row = document.createElement("div");
      row.className = "table-row";

      boardContainer.appendChild(row);

      for(var column_index = 0; column_index < 8; column_index++){
        var cell = document.createElement("div");
        // if odd row and even column
        cell.className = "table-cell";
        if(row_index % 2 !=0 && column_index % 2 == 0){
          cell.className += " cell-black";
          row.appendChild(cell);
        }
        // if even row and odd column
        else if (row_index % 2 ==0 && column_index % 2 != 0){
          cell.className += " cell-black";
          row.appendChild(cell);
        }
        // if odd row and odd column
        else if (row_index % 2 !=0 && column_index % 2 != 0){
          cell.className += " cell-white";
          row.appendChild(cell);
        }
        // if even row and even column
        else if (row_index % 2 ==0 && column_index % 2 == 0){
          cell.className += " cell-white";
          row.appendChild(cell);
        }
      }
    }
  }
}


var boardContainer = document.getElementsByClassName("chess-board")[0];

var chessBoard = new ChessBoard(boardContainer);
chessBoard.construct();
