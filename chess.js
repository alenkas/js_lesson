function Board(columns_count, rows_count){
  this.columns_count = columns_count;
  this.rows_count = rows_count;

  this.paint_field_cell = function(cell, column_index, row_index){
    // if odd row and even column
    if(row_index % 2 !=0 && column_index % 2 == 0){
      cell.className += " cell-black";
    }
    // if even row and odd column
    if (row_index % 2 ==0 && column_index % 2 != 0){
      cell.className += " cell-black";
    }
    // if odd row and odd column
    if (row_index % 2 !=0 && column_index % 2 != 0){
      cell.className += " cell-white";
    }
    // if even row and even column
    if (row_index % 2 ==0 && column_index % 2 == 0){
      cell.className += " cell-white";
    }
    return cell;
  }

  this.construct = function(){
    boardContainer.className = "table";

    for(var row_index = 0; row_index < this.rows_count; row_index++){
      var row = document.createElement("div");
      row.className = "table-row";

      boardContainer.appendChild(row);

      for(var column_index = 0; column_index < this.columns_count; column_index++){
        var cell = document.createElement("div");
        cell.className = "table-cell";

        this.paint_field_cell(cell, column_index, row_index);
        row.appendChild(cell);
      }
    }
  }
}


function ChessBoard(boardContainer){

  Board.call(this, boardContainer, 8, 8);

  function draw_side_index(cell, column_index, row_index){
    var column_indexes = ["A", "B", "C", "D", "E", "F", "G", "H"];
    cell.className += " board-indexes";
    if(column_index != 0 && column_index != 9 && row_index == 0){
      cell.innerText = column_indexes[column_index-1];
    }
    if(column_index == 0 && row_index != 0 && row_index != 9){
      cell.innerText = row_index;
    }
    if(column_index != 0 && column_index != 9 && row_index == 9){
      cell.innerText = column_indexes[column_index-1];
    }
    if(column_index == 9 && row_index != 0 && row_index != 9){
      cell.innerText = row_index;
    }
  }

  this.construct = function(){
    boardContainer.className = "table";

    for(var row_index = 0; row_index < 10; row_index++){
      var row = document.createElement("div");
      row.className = "table-row";

      boardContainer.appendChild(row);

      for(var column_index = 0; column_index < 10; column_index++){
        var cell = document.createElement("div");
        cell.className = "table-cell";

        if(column_index > 0 && column_index < 9 && row_index > 0 && row_index < 9){
          this.paint_field_cell(cell, column_index - 1, row_index - 1);
        } else {
          draw_side_index(cell, column_index, row_index);
        }
        row.appendChild(cell);
      }
    }
  }

  this.addEventListener = function(event_name, callback){
    boardContainer.addEventListener(event_name, callback);
  }
}

var boardContainer = document.getElementsByClassName("chess-board")[0];

var chessBoard = new ChessBoard(boardContainer);
chessBoard.construct();
chessBoard.addEventListener("click", function(){
  console.log("hello");
});
