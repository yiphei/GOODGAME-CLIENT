# CS52 Team: Junfei Yu, Savannah Liu, Alexander Bailey, Lessley Hernandez, Yi Fei Yan, Ally Mahmoud
# Good Game - README
&nbsp;

# Introduction
This is an App made for pick-up basketball lovers at Dartmouth College and around the world to help them find available courts and people who they want to play with, the games which match the most to their expectations and gamify their games.
We implemented create/join/edit/delete a game, map view, and the post-game evaluation.


# Create/join/edit/delete a game
When the user wants to create a game, he/she/they will fill out a form that prompts them to fill out the date, time, duration, players needed, maximum number of players, and intensity. Then they will have to click Choose Location to move to another view. Which will list
the gyms in our area in our case the Alumni gym and outside of the Alumni gym. Then in the home page if the user clicks on the pin on the map to the gym they choose they should see a card with the information they placed into create game. Then if they click on the text of the card with the game they created they can edit all fields, leave the game they created, or delete the game all listed once you click on the card. We decided that creators do not have a right to kick people out of games, because in true pick up basketball spirit they should handle those disputes on the court. Only the creator of the game is able to delete the game they created. The user is able to join any game listed and able to leave any game listed in home as many times as they want.
![Alt Text](https://github.com/dartmouth-cs52-18S/project-other-goodgame/blob/newMaster/img/create_game.gif)
![Alt Text](https://github.com/dartmouth-cs52-18S/project-other-goodgame/blob/newMaster/img/join_delete_game.gif)

# Post-game evaluation
After the user has played a game, he/she/they should be able to evaluate the fellow players which they have just played with. For each of the fellow players, the user could either 'like' or 'dislike' them. All the feedbacks will be stored and processed to update each player's score. The overall evaluation would affect each player's score either positively or negatively. For overall positive feedback, the system would boost up a player's score. For overall negative feedback, the system would decrease a player's score.
![Alt Text](https://github.com/dartmouth-cs52-18S/project-other-goodgame/blob/newMaster/img/postgame_evaluation.gif)

# Map view
The map view is the screen that the user first sees when they sign into the app. The map has pins that display where each basketball court is. At the bottom of the screens are cards, each displaying a game at the selected court with basic information like the date and time of that game. When the user taps a pin, the cards will show the games at that court. When the user taps on a card, they go to a different screen showing more details about that game.

## Flow
We implemented the post-game evaluation in an creative way with a Chatbot. After each game, the player would see there is a game to evaluate in the "Post-game Evaluation" section. All the games that needed to be evaluated would be presented in a list. If the user click one of the games in the list, he/she/they will be brought into a chatbot. On the backend, we will fetch the information for all the fellow players. The chatbot would ask questions in sequence to the user to evaluate each of the fellow players. Once the user has answered all the questions, he/she/they will back to the list page. If no more game needs to be evaluated, he/she/they could go back.

flow map -> click on card to join game
or click on nav bar for create game
after you play game u go to post game evaluation to evaluate the other players in your game

## Mutual Evaluation Mechanism

All the evaluations will only take effect if each pair of the users has done the evaluation mutually. If a user does not do any post-game evaluation, even if others have evaluated him/her, it would not take effect. This mechanism is introduced to encourage the users to actively do the post-evaluations.

##  Connection with other parts
The post-game evaluations will either boost up or decrease the players' score. It creates not only the competitiveness in the community but also a sense of credibility. The evaluation would reflect each player's performance in a game which he/she/they just played. After the player's score has been updated, it would also affect future games' intensity level because for each new game, the system takes all the players' scores into account and calculate an average number to represent the average intensity level of the game. It will also affect the ranking system. If a user wants to have a higher rank, then he/she/they must improve his/her skills, attitudes, sportsmanship and so on for every single game.

##User Profile
User profile code is from https://github.com/nattatorn-dev/react-native-user-profile.

## Implementation Notes and Future Steps

### Notes on implementation
* Our app is a little slow, so create, delete, edit, and join game functions take a little while to render. Note about deleting games: you can only delete game you made.
* Chatbot: need to scroll down to see the chat.

### Bugs/future fixes:
* App is slow to load even after reducing the fetch calls and things in render.
    * We made some improvements by removing unnecessary calls to fetchGames
    * Gifs load slowly in gameEval
* User name in profile is hardcoded
* Check that date, time, etc. entered into form are in the correct format when creating game
* Chatbot is using hardcoded players
* Adding more gyms
* The join game button does not change to leave game after you have joined. You can still leave the game if you press it but it would be nice if it actually said leave.
* Place to view your games
* When you hover over a court, the tooltip with the name of the court shows up. This may make it confusing to identify which court’s games you are looking at. In the future we would add a header that shows which court's games are currently being shown. 


## APIs used

* React Native Gifted Chat (source: https://github.com/FaridSafi/react-native-gifted-chat)
* React Native Cards List (source: https://github.com/dmbfm/react-native-card-list)

## Setup/deployment steps

We deployed on expo:
https://expo.io/@lessleyh/goodGame  


##Structure of files
->components
- >.expo
  - settings.json
  - packager-info.json

- >chatbot
  - NavBar.js
  - gameSimulation.js
  - data.js
  - CustomView.js

- >Profile4
  - Profile.js
  - Posts.js
  - Post.js
  - index.js
  - contact.json
  - ProfileStyle.js

- profile.js
- chooseLocation.js
- gameView.js
- home.js
- createGame.js
- signup.js
- createCourt.js
- welcome.js
- login.js
- ItemCard.js
- introduction.js
- chatbot.js
- postEvaList.js
- map.js
- ranking.js
- your-game.js
- CardList.js

->navigation
- >.expo
  - settings.json
  - packager-info.json
- main-tab-bar.js
- main.js

