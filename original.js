function getNextQuestion(handlerInput) {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
  if (sessionAttributes.current_round === 1) {
    sessionAttributes.round1_Questions.length === 0 ? sessionAttributes.current_round ++ : ''
  }
  if(sessionAttributes.current_round === 1){
      var currentQuestionObject = sessionAttributes.round1_Questions.pop()

      var currentQuestion = currentQuestionObject.question 
      sessionAttributes.question = currentQuestion
      var currentAnswer = currentQuestionObject.answer
      sessionAttributes.answer = currentAnswer
      
      
      if(sessionAttributes.round1_Questions.length>0){
        return `The next question is: ${currentQuestion} <audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01'/>`
      }else{
      return `You scored ${sessionAttributes.score} in this round. On to round 2. The next question is: ${currentQuestion} <audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01'/>`
     }
   }else if(sessionAttributes.current_round === 2){
    var currentQuestionObject = sessionAttributes.round2_Questions.pop()

    var currentQuestion = currentQuestionObject.question 
    sessionAttributes.question = currentQuestion
    var currentAnswer = currentQuestionObject.answer
    sessionAttributes.answer = currentAnswer
   

    if(sessionAttributes.round2_Questions.length>1){
      return `The next question is: ${currentQuestion} <audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01'/>`
    }else{
      return `You scored ${sessionAttributes.score}. Thanks for playing.`
    }
  } 
}