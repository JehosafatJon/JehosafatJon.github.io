import { Component } from "react";
import { CodeBlock, dracula } from 'react-code-blocks';


export class Interests extends Component {
    

    render() {
        const mycode = `#examples

        import random
        import time
        import new
        
        
        def guess_game():
        #game loop
        while True:
        
            num = random.randint(1, 10)
            att = 0
        
            #guess loop
            while True:
            guess = int(input("guess a number between 1-10: "))
            att += 1
            if num > guess:
                print("higher")
            elif num < guess:
                print("lower")
            elif num == guess:
                print("got it! you took " + str(att) + " attempts.")
                break
        
            #check continue
            if input("continue? (y/n): ") == 'n':
            print("goodbye!")
            break
        
        
        def blackjack(string1):
        print("Welcome to Blackjack!\n")
        time.sleep(2)
        
        #declarations
        deck = []
        s = ["S", "C", "H", "D"]
        n = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
        ptot = 0
        dtot = 0
        
        #create deck loop
        def shuffle():
            for i in s:
            for o in n:
                deck.append(str(o) + i)
            print("deck shuffled\n")
        
        #drawcard
        def drawcard():
            cardn = random.randint(0, len(deck) - 1)
            card = deck[cardn]
            deck.pop(cardn)
            return card
        
        #give total, provided party tot/party hand reference
        def calctotal(tot, hand):
            #def decs
            tot = 0
            Acount = 0
        
            #add player score
            for i in hand:
            if i[0] == '1':
                tot += 10
            elif i[0].isdigit() is True:
                tot += int(i[0])
            elif i[0] == 'A':
                tot += 11
                Acount += 1
            else:
                tot += 10
        
            #aces high or low?
            if tot > 21 and Acount > 0:
                tot -= 10
                Acount -= 1
        
            return tot
        
        #print current hands
        
        def show_hands():
            #[print("[" + str(element) + "]", end=" ") for element in phand]         #test print
            print("Dealers hand: " + str(dhand) + " count: " + str(dtot))
            print("Your hand   : " + str(phand) + " count: " + str(ptot) + "\n")
        
        #just call hit
        def hit():
            while True:
        
            #at or over 21 check
            if calctotal(ptot, phand) >= 21:
                break
        
            #hit and print
            if input("hit? (y/n): ") == 'y':
                phand.append(drawcard())
                print("\nYour hand   : " + str(phand) + " count: " +
                    str(calctotal(ptot, phand)) + "\n")
            else:
                print("")
                break
        
        #game loop
        while True:
        
            #new game shuffle
            shuffle()
        
            #another hand loop
            while True:
        
            #declare and set new hand
            phand = []
            dhand = []
        
            #deal 2 to both hands
            phand.append(drawcard())
            dhand.append(drawcard())
            phand.append(drawcard())
            dhand.append(drawcard())
        
            #display hands
            print("Dealers hand: [XX] [" + str(dhand[1]) + "]")
            print("Your hand   : [" + str(phand[0]) + "] [" + str(phand[1]) + "]\n")
        
            #player hit
            hit()
        
            #assign and caltotals
            ptot = calctotal(ptot, phand)
            dtot = calctotal(dtot, dhand)
        
            #dlr hit loop
            while dtot < 17:
                dhand.append(drawcard())
                dtot = calctotal(dtot, dhand)
        
            #state hands
            show_hands()
        
            #check who wins
            if ptot > 21:
                print("bust!\n")
            elif ptot <= dtot and dtot <= 21:
                print("dealer wins!\n")
            elif ptot > dtot or dtot > 21:
                print("you win!\n")
        
            #ask another hand or if deck<6
            if input("another hand? (y/n): ") == 'n' or len(deck) < 6:
                break
            else:
                print()
        
            #--------
        
            #another game, reshuffle at top
            if input("another game? (y/n): ") == 'n':
            print("goodbye!")
            break
        
        
        #------
        
        
        #tictactoe
        def tictactoe():
        print("Welcome to TicTacToe!\n")
        print(
            "coloumns top-down are '1', '2' or 3. rows left-right are 'a', 'b' or 'c'."
        )
        #declarations
        boardspaces = ["1a", "2a", "3a", "1b", "2b", "3b", "1c", "2c", "3c"]
        board = [" "] * 9
        player = "O"
        
        #draw the board
        def drawboard():
            print("\n " + board[0] + " | " + board[1] + " | " + board[2] + " ")
            print("------------")
            print(" " + board[3] + " | " + board[4] + " | " + board[5] + " ")
            print("------------")
            print(" " + board[6] + " | " + board[7] + " | " + board[8] + " \n")
        
        #boolean see if anyone has won
        def checkwin():
            win = False
        
            if board[0] == board[1] and board[1] == board[2] and board[0] != " ":
            win = True
            elif board[3] == board[4] and board[4] == board[5] and board[3] != " ":
            win = True
            elif board[6] == board[7] and board[7] == board[8] and board[6] != " ":
            win = True
            elif board[0] == board[3] and board[3] == board[6] and board[0] != " ":
            win = True
            elif board[1] == board[4] and board[4] == board[7] and board[1] != " ":
            win = True
            elif board[2] == board[5] and board[5] == board[8] and board[2] != " ":
            win = True
            elif board[0] == board[4] and board[4] == board[8] and board[0] != " ":
            win = True
            elif board[2] == board[4] and board[4] == board[6] and board[2] != " ":
            win = True
            elif board.count(" ") == 0:
            win = True
        
            return win
        
        #game start
        
        #new game loop
        while True:
        
            #game progress loop
            while checkwin() is False:
        
            #switch player each round
            if player == "X":
                player = "O"
            elif player == "O":
                player = "X"
        
            #show board and set the player's input to their piece
            drawboard()
            board[boardspaces.index(input(player +
                                            "s, choose a square <cr>: "))] = player
        
            #exit loop because somebody won, display board and winner
            drawboard()
            if board.count(" ") != 0:
            print(player + "s Win!")
            else:
            print("catscratch!")
        
            if input("play again? (y/n): ") == 'n':
            break
            else:
            board = [" "] * 9
            player = "O"
        
        
        #password generator
        def pwgen():
        #sample and password
        s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=~!@#$%^&(*)_+"
        print("".join(random.sample(s, int(input("how long should the pw be?")))))
        
        
        #cows and bulls
        def cowsandbulls():
        
        ###Randomly generate a 4-digit number. Ask the user to guess a 4-digit number. For every digit that the user guessed correctly in the correct place, they have a “cow”. For every digit the user guessed correctly in the wrong place is a “bull.” Every time the user makes a guess, tell them how many “cows” and “bulls” they have. Once the user guesses the correct number, the game is over. Keep track of the number of guesses the user makes throughout teh game and tell the user at the end.###
        
        #fill in zeroes to check
        def zerofill(num):
            if num[0] == '0':
            return num
            elif int(num) < 10:
            num = "000" + num
            elif int(num) < 100:
            num = "00" + num
            elif int(num) < 1000:
            num = "0" + num
            return num
        
        #game loop
        while True:
        
            #reset num
            num = zerofill(str(random.randint(1, 9999)))
            att = 0
        
            #round loop
            while True:
        
            #capture guess
            guess = zerofill(str(input("guess a 4 digit number: ")).lstrip('0'))
        
            print(guess)
        
            #set round variables and count attempt
            bulls = 0
            cows = 0
            att += 1
        
            #check cows
            for a in range(0, 4):
                if num[a] is guess[a]:
                cows += 1
                elif num[a] in guess and num.count(num[a]) == 1:
                bulls += 1
        
            print(str(cows) + " :c b: " + str(bulls))
        
            #check Win
            if cows == 4:
                print("you got it in " + str(att) + " attempts!")
                break
        
            if int(guess) > 9999:
                print(num)
        
            #program rerun check
            if input("continue? (y/n): ") == "n":
            break
        
        
        #track game of something
        def gametrack():
        wins = 0
        losses = 0
        game = True
        
        #gameloop
        while game is True:
            if input("Did you win? (y/n): ") == "y":
            wins += 1
            else:
            losses += 1
        
            #print wins and losses
            print("Wins: " + str(wins) + "  Losses: " + str(losses))
        
            #check continue
            if input("Still going? (y/n): ") == "n":
            game = False
        
        
        #aestheticize
        def aestheticize():
        #welcome
        print("W E L C O M E  T O  V A P O R W A V E  S I M U L A T O R")
        time.sleep(1.5)
        
        #decs
        phrase = input(str("A E S T H E T I C I Z E : "))
        aphrase = ""
        
        time.sleep(1)
        print("A E S T H E T I C I Z I N G . . .")
        time.sleep(1.5)
        
        for i in phrase:
            aphrase += i.upper() + " "
        
        print(aphrase)
        
        
        #play
        def rockpaperscissors():
        #gameloop
        while True:
            print("Rock, Paper, Scissors!")
        
            #gets player's input
            throw = str(input("What do you throw? (r/p/s): "))
        
            print("3")
            time.sleep(1)
            print("2")
            time.sleep(1)
            print("1")
            time.sleep(1)
            print("Shoot!")
        
            #opponent's throw
            throwget = random.randint(1, 3)
            if throwget == 1:
            othrow = "r"
            elif throwget == 2:
            othrow = "p"
            elif throwget == 3:
            othrow = "p"
        
            #conclusion
            print("You threw: " + throw + " ||| Computer threw: " + othrow)
            if othrow == throw:
            print("Tie!")
            elif throw == "r" and othrow == "p":
            print("You Lose!")
            elif throw == "r" and othrow == "s":
            print("You Win!")
            elif throw == "p" and othrow == "s":
            print("You Lose!")
            elif throw == "p" and othrow == "r":
            print("You Win!")
            elif throw == "s" and othrow == "r":
            print("You Lose!")
            elif throw == "s" and othrow == "p":
            print("You Win!")
        
            #check continue
            if input("continue? (y/n): ") == 'n':
            print("goodbye!")
            break
        
        
        #Execute
        blackjack("Hello World")
        `
        const myswiftcode = `//
        //  CGAppApp.swift
        //  CGApp
        //
        //  Created by CAMIIT on 2023-06-28.
        //
        //  Developed by Jonathan Hughes - CAMIIT Student Researcher
        //  For Cellar Genius Project
        
        import SwiftUI
        
        @main
        struct CGAppApp: App {
            @StateObject private var database = CGDatabase()
            @StateObject var rackManager: RackManager = RackManager.shared()
            
            var body: some Scene {
                WindowGroup {
                    TabNavView(rackManager: rackManager) {
                        Task { // on-close task
                            do {
                                try await database.postWallInfo(walls: rackManager.walls)
                            } catch {
                                print(error)
                                //fatalError(error.localizedDescription)
                            }
                        }
                    }
                        .task { // startup task
                            do {
                                // get wall information from DB
                                try await database.getWallInfo()
                                if database.walls.count != 0 {
                                    rackManager.walls = database.walls
                                    for wallEle in rackManager.walls {
                                        for rackEle in wallEle.racks {
                                            for nodeEle in rackEle.nodes {
                                                rackManager.knownNodes.append(nodeEle.nodeId)
                                            }
                                        }
                                    }
                                }
                                // update node status if changed since last open
                                try await database.getNodeStatus()
                            } catch {
                                print(error)
                                //fatalError(error.localizedDescription)
                            }
                        }
                }
            }
        }`
        return (
            <div className="App-header">
                <h3>Skills and Projects</h3>

                
                <p style={{ fontSize: '18px'}}>I've been programming for many years. Here is code that I wrote during my early days of learning to program! I created small games and apps to learn and practice programming. This code represents the very beginning of my coding journey.</p>

                <div className="code-block-container">
                    <CodeBlock
                        text={mycode}
                        language='Python'
                        showLineNumbers={true}
                        wrapLines
                        theme={dracula}
                        className='code-block-container'
                    />
                </div>

                <p style={{ fontSize: '18px'}}>I've gone on to fully develop an iOS app and backend from the ground up. I have written thousands of lines of code for this project and have grown my skills and expertise in software development immensely. I have experience in IoT communication protocols like MQTT, back-end server request and API development, and I learned the Swift programming language in 2 months to create the front-end for the app.</p>

                <p style={{ fontSize: '18px'}}>Here is a small snippet from the project's iOS app written in Swift. Due to the intellectual property ownership nature of the project, I can only display this small portion. </p>

                <div className="code-block-container">
                    <CodeBlock
                    text={myswiftcode}
                    language='Swift'
                    showLineNumbers={true}
                    wrapLines
                    theme={dracula}
                    />
                </div>
            </div>
        )
    }
}