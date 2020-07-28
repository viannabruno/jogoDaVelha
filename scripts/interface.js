document.addEventListener('DOMContentLoaded', ()=> {

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });


});

function handleClick(event) {

    // console.log(event.target);

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        setTimeout(()=>{
            alert(" O Jogo Acabou! O VENCEDOR FOI O JOGADOR - " + playerTime);
            
        }, 10);

    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

//função da update em todos os square
// function updateSquares(){
//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];

//         if(symbol != ''){
//             square.innerHTML = `<div class='${symbol}'></div>`

//         }
//     });
// }

function resetGame() {

    // window.location.reload(); //da reload na janela não é isso que eu quero


    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = ''; 
        }
        playerTime = 0;
        gameOver = false;
    });
    
}

