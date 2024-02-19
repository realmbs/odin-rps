# odin-rps
1. In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
2. For now, remove the logic that plays exactly five rounds.
3. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
4. Add a div for displaying results and change all of your console.logs into DOM methods.
5. Display the running score, and announce a winner of the game once one player reaches 5 points.
6. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
7. Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the rps-ui branch with git status before continuing.
8. Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.
Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.

SOURCE: https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors