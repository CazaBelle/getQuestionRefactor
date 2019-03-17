function getNextQuestion(handlerInput) {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()

  let { current_round: round, score } = sessionAttributes;
  const getRoundQuestions = (round) => sessionAttributes[`round${round}_Questions`];
  const getCurrentQuestion = () => getRoundQuestions(round).pop().question;

  const currentRoundQuestions = getRoundQuestions(round);
  const hasQuestions = currentRoundQuestions.length > 0;
  const lastRound = 2;

  // out of questions:
  if (!hasQuestions && round === lastRound) {
    return `You scored ${score}. Thanks for playing.` 
  } else if (!hasQuestions) {
    // this can be extracted out to nextRound function if it were more complex
    round += 1;
    // save the round...
    sessionAttributes.round = round;

    return `You scored ${score} in this round. On to round ${round}. The next question is: ${getCurrentQuestion()} <audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01'/>`
  }
  
  // otherwise we have questions to ask!
  return `The next question is: ${getCurrentQuestion()} <audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01'/>`
}