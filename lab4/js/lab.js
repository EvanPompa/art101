// Summary:Practice pseudocoding by outlining the steps to make hangman.
// @author Evan Pompa, Alia Toth-Smith
// @since  4.14.2022

// 1.Pick a word
//   a.Choose a random word from a comprehensive English dictionary
//   b.Verify word does not contain special characters
// 2.Draw Gallows
// 3.Inform player of how many letters are in the word
//   a.Draw underscores in a line equivalent to the number of characters in the word
// 4.Accept player guess
//   a.Verify if player guess is a valid single character
//   b.Verify player has not previously guessed the same character
// 5.Show results to player
//   a.If player guess is in the word
//     i.Remove underscore(s) in place of player guess
//     ii.Replace removed underscores with guessed letter
//   b.If player guess isn’t in the word
//     i.tell player their guess was incorrect
//     ii.draw next body part
// 6.Check for win or lose condition
//   a.If hangman is filled, player loses
//   b.If word slots are all filled in, player wins
//   c.else repeat steps 4-6
