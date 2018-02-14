[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic-Tac-Dro

Hey team! I'm going to create some form of blog as I code my first project. The goal is to create a functional tic-tac-toe game. I don't expect it to be easy, so be prepared for a couple of angry posts!

I plan to build a game that allows users to:
  -- Be able to sign up and have a unique screen name.
  -- Be able to sign in and/or change their password.
  -- Be able to signout.
  -- Be redirected to game board upon successful login.
  -- Be able to create a new game.
  -- Playable on any device.

Below are links to my wire frames:

  - https://i.imgur.com/5g8m1eN.jpg
  - https://i.imgur.com/sS75hPr.jpg

I hope to comeup with something similar.

## Setting Up (Feb 6)

Before:

Setting up doesn't seem to hard... Just following simple intructions to be honest. I just finished downloading this template (thanks GA!). Next I have to set up a github repo, and then I have to deploy. Easier typed than done though.

After:

As I thought, setting was not bad at all. I feel like the steps could have been slightly more clear, but overall pretty straight forward. I'll be working on the game's engine tomorrow... I'm nervous but excited to start!

## Game Engine (Feb 7 - 8)

Before:

For what ever reason, this part seems to be the most intimidating to me. Creating the game's logic seems hard, but I hope it's not too bad. The goal is to create an empty board in JS, add to the board with X and O rotating beteen turns without choosing occupied spots, and then checking for a winner.

After:

Just finished up the game's logic. I feel like I did a bad job making my code DRY, but I believe I have a functioning board, so that's all I should be worried about right now. The hardest part for me was figuring out a way of checking the board for a winner. I ended up hardcoding every possibility for both players to win, and it works. I even have a way for X and O to switch off anytime the addToBoard function is invoked. Once I meet all requirements, I'll work on a better way of determining the winner.

## Authentication (Feb 8-9)

Before:

Now that I'm done with the game's logic (I think), it's time to make some curl requests and start being buddies wiht the API. Making curl requests is a little fuzzy to me, but I hope I could make this work. After I successfully made curl requests to the API to sign up, sign in, change password, and sign out, I have to make sure I get success or failure messages.

After:

Completed the authentication process! Everything went pretty smooth until I got to the change password section. I was able to create a successful curl request, but when I started working on the web app, I kept receiving an error message "Uncaught TypeError: Cannot read property 'id' of undefined." Turns out I wasn't storing tokens and IDs in the store.js file. The legend, William, pointed that out to me and led me in the right direction to fixing the problem. After that, creating a sign out web page was fairly simple.


## Game UI (Feb 9-11)

Before:

Finally! This is the part I've been looking forward to... Actually making the damn thing. I'm excited to start this part of the project, but I know it's going to be the hardest part thus far.

The goal is to:
- Design a game board
- Add a click handler for when a space on the game board is clicked
- If the user clicks on a valid space then add their X or O
- Do not allow users to add an X or O to an invalid space
- Do not allow users to add an X or O to any spaces after the game is over
- Update the game engine when the game board is updated
- Add messaging for the user when the turn changes
- Add messaging for the user when the user clicks on an invalid space
- Add messaging for the user when the game is over (win or draw)

Easier typed than done though ^.^

After:

That was A LOT harder than I expected. I had to rework my game engine a little bit to make it work with my user interface... But I got it done. Figuring out what code to use to solve certain problems was pretty challenging. I still got some work to do with the user interface, but for now I need to move to the game's API. Thing's I still need to work on is not repeating code, a better way of resetting the board, and some styling.

## Game API (Feb 11-13)

Before:

Time to start probabibly the hardest part of the project... The game's API. I actually do not even know where to start. I know we've done something similar when we did the query-ajax-post training... But I feel like this is on a whole other level. I hope I'm just over thinking it, but here goes nothing :D... -.-

After:

THAT SHIT WAS A FORCE! Seriously though, this was by far the hardest part of the project. At first I thought it was going to be a breeze after successfully being able to create a game, but once I got to updating a game... RIP.

I legit spent over 5 hours looking at my screen not knowing what to do. After a good night's rest, I ended tackling updating the game fairly fast lol. Chris is 100% right when he says to walk away from the screen and take a break if you find yourself hitting a wall.

After that, retrieving game statistics wasn't too bad. By far a more productive day. Now off to add some final touches!


## Final Touches (Feb 13)

Before:

Time to make this bitch look nice. I somewhat started styling already, but now that I know everything works, I could really add some flavor to my page. Making it a SPA page may be a little difficult, but I feel like this is the easier part of the project (for me anyways).

After:

Project is done (unless I have to resubmit)! Styling was simple.. I didn't have much time so I had to rush it, but it still came out decent I guess. I had a little trouble making the page responsive, but it still works. The hardest part of styling was making the site into a SPA. Got it done, but I feel like it's still a little buggy. Fow now, I'm over this stupid game lol... But I plan on coming back to this project and changing up the code to make it more presentable.
