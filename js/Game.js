class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  //att o valor de gameState do banco
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }




  start() {
    //os objetos form e player foram criados para chamar os métodos das classes: Form e Player
    //criando objetos para form e player e chamando a função(método) display de Form
    form = new Form();
    form.display();

    //objeto player.
    player = new Player();
    playerCount = player.getCount();

    

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    //criar a sprite do car2 baseado na sprite do car1
    


    //adicionando na matriz
    cars = [car1, car2];


  }


  play(){
    this.handleElements();

   //colocar o código que desenha os sprites
   
  }
}
