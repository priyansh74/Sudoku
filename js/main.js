var check = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0]]

var easyCopy = [[0, 0, 0, '2', '6', 0, '7', 0, '1'],
                      ['6', '8', 0, 0, '7', 0, 0, '9', 0],
                      ['1', '9', 0, 0, 0, '4', '5', 0, 0],
                      ['8', '2', 0, '1', 0, 0, 0, '4', 0],
                      [0, 0, '4', '6', 0, '2', '9', 0, 0],
                      [0, '5', 0, 0, 0, '3', 0, '2', '8'],
                      [0, 0, '9', '3', 0, 0, 0, '7', '4'],
                      [0, '4', 0, 0, '5', 0, 0, '3', '6'],
                      ['7', 0, '3', 0, '1', '8', 0, 0, 0]]

var intermediateCopy = [[0, '2', 0, '6', 0, '8', 0, 0, 0],
                              ['5', '8', 0, 0, 0, '9', '7', 0, 0],
                              [0, 0, 0, 0, '4', 0, 0, 0, 0],
                              ['3', '7', 0, 0, 0, 0, '5', 0, 0],
                              ['6', 0, 0, 0, 0, 0, 0, 0, '4'],
                              [0, 0, '8', 0, 0, 0, 0, '1', '3'],
                              [0, 0, 0, 0, '2', 0, 0, 0, 0],
                              [0, 0, '9', '8', 0, 0, 0, '3', '6'],
                              [0, 0, 0, '3', 0, '6', 0, '9', 0]]

var difficultCopy = [['2', 0, 0, '3', 0, 0, 0, 0, 0],
                          ['8', 0, '4', 0, '6', '2', 0, 0, '3'],
                          [0, '1', '3', '8', 0, 0, '2', 0, 0],
                          [0, 0, 0, 0, '2', 0, '3', '9', 0],
                          ['5', 0, '7', 0, 0, 0, '6', '2', 0],//1
                          [0, '3', '2', 0, 0, '6', 0, 0, 0],
                          [0, '2', 0, 0, 0, '9', '1', '4', 0],
                          ['6', 0, '1', '2', '5', 0, '8', 0, '9'],
                          [0, 0, 0, 0, 0, '1', 0, 0, '2']]

var easy = [[0, 0, 0, '2', '6', 0, '7', 0, '1'],
            ['6', '8', 0, 0, '7', 0, 0, '9', 0],
            ['1', '9', 0, 0, 0, '4', '5', 0, 0],
            ['8', '2', 0, '1', 0, 0, 0, '4', 0],
            [0, 0, '4', '6', 0, '2', '9', 0, 0],
            [0, '5', 0, 0, 0, '3', 0, '2', '8'],
            [0, 0, '9', '3', 0, 0, 0, '7', '4'],
            [0, '4', 0, 0, '5', 0, 0, '3', '6'],
            ['7', 0, '3', 0, '1', '8', 0, 0, 0]]

var intermediate = [[0, '2', 0, '6', 0, '8', 0, 0, 0],
                    ['5', '8', 0, 0, 0, '9', '7', 0, 0],
                    [0, 0, 0, 0, '4', 0, 0, 0, 0],
                    ['3', '7', 0, 0, 0, 0, '5', 0, 0],
                    ['6', 0, 0, 0, 0, 0, 0, 0, '4'],
                    [0, 0, '8', 0, 0, 0, 0, '1', '3'],
                    [0, 0, 0, 0, '2', 0, 0, 0, 0],
                    [0, 0, '9', '8', 0, 0, 0, '3', '6'],
                    [0, 0, 0, '3', 0, '6', 0, '9', 0]]

var difficult = [['2', 0, 0, '3', 0, 0, 0, 0, 0],
                ['8', 0, '4', 0, '6', '2', 0, 0, '3'],
                [0, '1', '3', '8', 0, 0, '2', 0, 0],
                [0, 0, 0, 0, '2', 0, '3', '9', 0],
                ['5', 0, '7', 0, 0, 0, '6', '2', 0],//1
                [0, '3', '2', 0, 0, '6', 0, 0, 0],
                [0, '2', 0, 0, 0, '9', '1', '4', 0],
                ['6', 0, '1', '2', '5', 0, '8', 0, '9'],
                [0, 0, 0, 0, 0, '1', 0, 0, '2']]

var currentChosenLevel = -1; //1 = easy , 2 = intermediate, 3 = hard;

function setDefault()
{
  location.reload();
  for(let i=0;i<9;i++)
  {
    for(let j=0;j<9;j++)
    {
       let element = ".a"+ i + j; //a00,a01,a02,,
     document.querySelector(element).innerText = 0;
    }
  }
  currentChosenLevel = -1;
}

/* setting difficulty level functions for the sudoku starts here*/
function setLevelEasy()
{
   currentChosenLevel = 1;
     for(let i=0;i<9;i++)
     {
       for(let j=0;j<9;j++)
       {
          let element = ".a"+ i + j; //a00,a01,a02,,

        if(easy[i][j] != '0')
        document.querySelector(element).innerText =easy[i][j];
        else{
          document.querySelector(element).innerText ="";
          let ch =  document.querySelector(element);
          var input = document.createElement('input'); //learnt implementation about this from stack overflow
          input.type = "number";

          input.setAttribute("class", "addedInput");
          ch.appendChild(input);
       }
     }
     }

}
function setLevelIntermediate()
{
  currentChosenLevel = 2;

  for(let i=0;i<9;i++)
  {
    for(let j=0;j<9;j++)
    {
       let element = ".a"+ i + j; //a00,a01,a02,,

     if(intermediate[i][j] != '0')
     document.querySelector(element).innerText =intermediate[i][j];
     else{
       document.querySelector(element).innerText ="";
       let ch =  document.querySelector(element);
       var input = document.createElement('input');
       input.type = "number";
       input.setAttribute("class", "addedInput");
       ch.appendChild(input);
    }
  }
  }


}
function setLevelDifficult()
{
  currentChosenLevel = 3;
  for(let i=0;i<9;i++)
  {
    for(let j=0;j<9;j++)
    {
       let element = ".a"+ i + j; //a00,a01,a02,,

     if(difficult[i][j] != '0')
     document.querySelector(element).innerText = difficult[i][j];
     else{
       document.querySelector(element).innerText ="";
       let ch =  document.querySelector(element);
       var input = document.createElement('input');
       input.type = "number";
       input.setAttribute("class", "addedInput");
       ch.appendChild(input);
    }
  }
  }
}

/* setting difficulty level functions for the sudoku ends here*/

/*checking solution helping functions start here */
function isValid(board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    // Checking for the current row
    if (board[row][i] == c && i != col) {
      return false;
    }

    // Checking for the current column
    if (board[i][col] == c && i != row) {
      return false;
    }

    // Checking for the current 3 x 3 grid
    let nRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let nCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[nRow][nCol] == c && nRow != row && nCol != col) {
      return false;
    }
  }
  return true;
}

function checkSolution()
{
  //step 1 take out all the elements from the sudoku
  let ans = [];
  let checker = [];
  if(currentChosenLevel == 1)
   {
     ans = easy;
     checker = easy;
   }
   else if(currentChosenLevel == 2){
     ans =intermediate;
     checker = intermediate;
   }
   else if(currentChosenLevel == 3)
   {
     ans = difficult;
     checker = difficult;
   }
   else
   {
     document.getElementById("answer").innerText = "You should only use check function once you complete solving the sudoku"

     return;
   }

  for(let i =0;i<9;i++)
   {
     for(let j=0;j<9;j++)
     {
       let element = ".a"+ i + j + " .addedInput"; //a00,a01,a02,,

       if(currentChosenLevel == 1){
          if(easyCopy[i][j] == '0')
          //ans[i][j] = document.querySelector(".a" + i + j);
           ans[i][j] = document.querySelector(element).value;
         }
         else if(currentChosenLevel == 2)
         {
           if(intermediateCopy[i][j] == '0')
            ans[i][j] = document.querySelector(element).value;
         }
         else{
           if(difficultCopy[i][j] == '0')
            ans[i][j] = document.querySelector(element).value;
         }

     }
   }
   //console.log(ans); //ans is the new input data here;
  //step2 : also make sure all elements are filled(accurately from 1-9);
  let flag = 1;
  for(let i=0;i<9;i++)
  {
    for(let j = 0;j<9;j++)
    {
      let valid = ans[i][j]; //input is always an integer
      let v = parseInt(valid);
      if(valid.length == 0)
      flag = -1;
      if(valid.length > 1)
      flag = -1;
      if(v <= 0)
      flag = -1;
      if(v > 9)
      flag = -1;
    }
  }

  if(flag == -1)
  {
  // alert("The solution you entered in not correct, please check if all inputs are filled with correct values");
   document.getElementById("answer").innerText ="The solution you entered in not correct, please check if all inputs are filled with correct values";
  }
  else{
    //If the code is getting upto here that means the user has inputed all the right numbers in the correct way; and now we can validate it further
    //to check it with the sudoku rule and regulations;
    let checkingPass = false;

    for(let i =0;i<9;i++)
    {
      for(let j=0;j<9;j++)
      {
        if (!isValid(ans, i, j, ans[i][j])) {

                // alert("Answer is wrong;")
                 document.getElementById("answer").innerText = "Answer is wrong !!";
                 return;
             }

       }
     }

    // alert("answer is correct");
     document.getElementById("answer").innerText = "Congratulations !!! , Answer is correct !!";
  }


}
/* checking solution helping functinos end here*/

/*solving the solution helping functios starts here */

function helper(board,i,j)  //recurion + backtracking function to solve the sudoku
{

  //3 base cases
  if(i == 9) return true;

  if(j == 9) return helper(board,i+1,0);

  if(board[i][j] != '0') return helper(board,i,j+1);

  for(let x ='1';x<='9';x++)
  {
    if(isValid(board,i,j,x))
            {
                board[i][j] = x;

                if(helper(board,i,j+1))return true;

                board[i][j] = '0'; //true return ni krenge upar toh phirse . biath jayegaa, since humlog ak 1D array mein row ni store krrhe hai;
                //so a veryyy imp lession.
            }
  }
  return false;

}

function solveSudoku(board)
{
     helper(board,0,0);
     let tempBoard = [];
     if(currentChosenLevel == 1)
      tempBoard = easyCopy;
    else if(currentChosenLevel == 2)
      tempBoard = intermediateCopy;
    else if(currentChosenLevel == 3)
      tempBoard = difficultCopy;
    else
      return;
    // console.log(board);
    // console.log(easyCopy);


     for(let i=0;i<9;i++)
     {
       for(let j=0;j<9;j++)
       {
            let element1 = ".a"+ i + j;
            let element = ".a"+ i + j + " .addedInput";
           if(tempBoard[i][j] == '0')
           {
             document.querySelector(element).value = board[i][j];
           }else{
             document.querySelector(element1).value = board[i][j];
           }

       }
     }
}

function solveSolution()
{

   if(currentChosenLevel == 1)
   {
    // console.log(easy);
    let temp2 = easy;
      solveSudoku(easy);
    easy = temp2;
   }
   else if(currentChosenLevel == 2)
   {
     //console.log(intermediate);
     let temp2 = intermediate;
      solveSudoku(intermediate);
      intermediate = temp2;
   }
   else if(currentChosenLevel == 3)
   {
     //console.log(difficult);
     let temp2 = difficult;
      solveSudoku(difficult);

      difficult = temp2;
   }
   else{
     return;
   }

}

/*solving the solution helping functios ends here */
