class Player{

    constructor(name = ''){
        this.name = name.toLowerCase();
        this.score = 0;
        this.choice = '';
    }

    //getters
    getName(){
        let name = this.name[0].toUpperCase() + this.name.substr(1);
        return name;
    }

    getScore(){
        return this.score;
    }
    getChoice(){
        return this.choice;
    }

    //setters
    setName(n){
        let name = n[0].toUpperCase() + n.substr(1);
        this.name = name;
    }

    setChoice(c){
        this.choice = c.toLowerCase();
    }

    //methods
    addPoint(){
        this.score++;
    }
}

class RockPaperScissors{

    constructor(p1,p2){
        this.round = 1;
        this.choices = ['rock','paper','scissors'];
        this.players = [new Player(p1),new Player(p2)];
    }
    //getters
    getCurrentRound(){
        return this.round;
    }
    getChoicesList(){
        return this.choices;
    }
    getPlayers(){
        return this.players;
    }

    //methods
    incrementRound(){
        this.round++;
    }

    decideRoundWinner(){
        let p1 = this.players[0];
        let p2 = this.players[1];
        let roundWinner;
        
        if(p1.getChoice() === p2.getChoice()){
            roundWinner = 'It\'s a Tie!';
        }else if(p1.getChoice() === 'rock' && p2.getChoice() === 'scissors'){
            p1.addPoint();
            roundWinner = `${p1.getName()} wins! ${p1.getChoice()} beats ${p2.getChoice()}`;
        }else if(p1.getChoice()  === 'scissors' && p2.getChoice() === 'paper'){
            p1.addPoint();
            roundWinner = `${p1.getName()} wins! ${p1.getChoice()} beats ${p2.getChoice()}`;
        }else if(p1.getChoice()   === 'paper' && p2.getChoice() === 'rock'){
            p1.addPoint();
            roundWinner = `${p1.getName()} wins! ${p1.getChoice()} beats ${p2.getChoice()}`;
        }else{
            p2.addPoint();
            roundWinner = `${p2.getName()} wins! ${p2.getChoice()} beats ${p1.getChoice()}`;
        }
        return roundWinner;
        
    }

    finalResults(numOfRounds){
        //return winner name
        let p1 = this.players[0];
        let p2 = this.players[1];
        if(p1.getScore() > p2.getScore()){
            return `${p1.getName()}, ${p1.getScore()}/${numOfRounds}`;
        }
        return `${p2.getName()}, ${p2.getScore()}/${numOfRounds}`;
    }

}

class UserInterface{

    constructor(p1,p2,numOfRounds){
        this.game = new RockPaperScissors(p1,p2);
        this.numOfRounds = numOfRounds;
    }


    randomChoice(){
       let random = Math.floor(Math.random() * (3 - 0) + 0);
       return this.game.getChoicesList()[random];
    }

    main(){
        while( this.game.getCurrentRound() <= this.numOfRounds ){
            // get choices from players
            this.game.getPlayers()[0].setChoice(prompt('what is your choice?'));
            this.game.getPlayers()[1].setChoice(this.randomChoice()); 
            // decide winner
            console.log(this.game.decideRoundWinner()); //decide winner
            this.game.incrementRound();
        }

        console.log('Winner is: '+ this.game.finalResults(this.numOfRounds)+'! Congratulations!');

    } 
}

let ui = new UserInterface(prompt('What is your name?'),'computer',parseInt(prompt('how many rounds do you want to play?')));
ui.main();






