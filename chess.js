function ChessBoard(boardContainer){
  this.construct = function(){
    boardContainer.className = "table";

    var column_indexes = ["A", "B", "C", "D", "E", "F", "G", "H"];
    var row_indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for(var row_index = 0; row_index < 10; row_index++){
      var row = document.createElement("div");
      row.className = "table-row";

      boardContainer.appendChild(row);

      for(var column_index = 0; column_index < 10; column_index++){
        var cell = document.createElement("div");

        cell.className = "table-cell";
        if(column_index != 0 && column_index != 9 && row_index == 0){
          cell.className += " board-indexes";
          cell.innerText = column_indexes[column_index-1];
        }
        if(column_index == 0 && row_index != 0 && row_index != 9){
          cell.className += " board-indexes";
          cell.innerText = row_index;
        }
        if(column_index != 0 && column_index != 9 && row_index == 9){
          cell.className += " board-indexes";
          cell.innerText = column_indexes[column_index-1];
        }
        if(column_index == 9 && row_index != 0 && row_index != 9){
          cell.className += " board-indexes";
          cell.innerText = row_index;
        }
        // if odd row and even column
        if(row_index !=0 && row_index !=9 && row_index % 2 !=0 && column_index !=0 && column_index % 2 == 0){
          cell.className += " cell-black";
        }
        // if even row and odd column
        if (row_index !=0 && row_index % 2 ==0 && column_index !=0 && column_index !=9 && column_index % 2 != 0){
          cell.className += " cell-black";
        }
        // if odd row and odd column
        if (row_index !=0 && row_index !=9 && row_index % 2 !=0 && column_index !=0 && column_index !=9 && column_index % 2 != 0){
          cell.className += " cell-white";
        }
        // if even row and even column
        if (row_index !=0 && row_index !=9 && row_index % 2 ==0 && column_index !=0 && column_index % 2 == 0){
          cell.className += " cell-white";
        }
        row.appendChild(cell);
      }
    }
  }
}


var boardContainer = document.getElementsByClassName("chess-board")[0];

var chessBoard = new ChessBoard(boardContainer);
chessBoard.construct();
