# Introduction

In this part, we implemented pre-game evaluation, create/join/delete a game and the post-game evaluation.

# Pre-game evaluation

# Create/join/delete a game

# Post-game evaluation

After the user has played a game, he/she should be able to evaluate the fellow players which they have just played with. For each of the fellow players, the user could either 'like' or 'dislike' them. All the feedbacks will be stored and processed to update each player's score. The overall evaluation would affect each player's score either positively or negatively. For overall positive feedback, the system would boost up a player's score. For overall negative feedback, the system would decrease a player's score.

## Flow

We implemented the post-game evaluation in an creative way with a Chatbot. After each game, the player would see there is a game to evaluate in the "Post-game Evaluation" section. All the games that needed to be evaluated would be presented in a list. If the user click one of the games in the list, he/she will be brought into a chatbot. On the backend, we will fetch the information for all the fellow players. The chatbot would ask questions in sequence to the user to evaluate each of the fellow players. Once the user has answered all the questions, he/she will back to the list page. If no more game needs to be evaluated, he/she could go back.

## Mutual Evaluation Mechanism

All the evaluations will only take effect if each pair of the users has done the evaluation mutually. If a user does not do any post-game evaluation, even if others have evaluated him/her, it would not take effect. This mechanism is introduced to encourage the users to actively do the post-evaluations.

## Connection with other parts

The post-game evaluations will either boost up or decrease the players' score. It creates not only the competitiveness in the community but also a sense of credibility. The evaluation would reflect each player's performance in a game which he/she just played. After the player's score has been updated, it would also affect future games' intensity level because for each new game, the system takes all the players' scores into account and calculate an average number to represent the average intensity level of the game. It will also affect the ranking system. If a user wants to have a higher rank, then he/she must improve his/her skills, attitudes, sportsmanship and so on for every single game.

## Implementation

## APIs used

-React Native Gifted Chat (source: https://github.com/FaridSafi/react-native-gifted-chat)
-React Native Cards List (source: https://github.com/dmbfm/react-native-card-list)
