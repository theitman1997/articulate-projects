﻿window.globalProvideData('slide', '{"title":"A timeframe is set for \\nthe implementation.","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide4","width":1280,"height":720,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6B1jk9XKj8Z","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6Kil3Z1L7aN.6115Wr1oOBI.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6Kil3Z1L7aN.63bsoq3H8hy.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.5sjVwWkxJPp"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6MtVLjP5PZP.InvalidPromptSlide"}}]}]},"ReviewInt_6Kil3Z1L7aN":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6Kil3Z1L7aN.6115Wr1oOBI"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6Kil3Z1L7aN.63bsoq3H8hy"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5sjVwWkxJPp.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Kil3Z1L7aN_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Kil3Z1L7aN_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_6Kil3Z1L7aN":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6Kil3Z1L7aN.6115Wr1oOBI.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Kil3Z1L7aN.6115Wr1oOBI"}}]},{"kind":"adjustvar","variable":"6Kil3Z1L7aN.6115Wr1oOBI._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6Kil3Z1L7aN.6115Wr1oOBI._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6Kil3Z1L7aN.6115Wr1oOBI._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"6Kil3Z1L7aN.6115Wr1oOBI.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"6Kil3Z1L7aN.6115Wr1oOBI"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6Kil3Z1L7aN.63bsoq3H8hy"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6Kil3Z1L7aN":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6Kil3Z1L7aN"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_6Kil3Z1L7aN":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"6Kil3Z1L7aN.6115Wr1oOBI.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"6Kil3Z1L7aN.63bsoq3H8hy.ActGrpSetDisabledState"}]},"6Kil3Z1L7aN_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5wqHFtXNxk1","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5sjVwWkxJPp.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6iyuzFGumW0.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6Kil3Z1L7aN"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5sjVwWkxJPp.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5sjVwWkxJPp.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6Kil3Z1L7aN"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6B1jk9XKj8Z":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_6B1jk9XKj8Z":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6MtVLjP5PZP","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6MtVLjP5PZP","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5wqHFtXNxk1","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5wqHFtXNxk1","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6Kil3Z1L7aN"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5wqHFtXNxk1","typea":"var","valueb":"6iyuzFGumW0","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6iyuzFGumW0.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6Kil3Z1L7aN"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6iyuzFGumW0.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6Kil3Z1L7aN"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6Kil3Z1L7aN_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5wqHFtXNxk1","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6Kil3Z1L7aN","typea":"var","valueb":"6iyuzFGumW0","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6iyuzFGumW0"},"completed_slide_ref":{"type":"string","value":"_player.5ykFXuyzuoY.5eC8tNqL2J9"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5wqHFtXNxk1","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6Kil3Z1L7aN","typea":"var","valueb":"6iyuzFGumW0","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6iyuzFGumW0"},"completed_slide_ref":{"type":"string","value":"_player.5ykFXuyzuoY.5eC8tNqL2J9"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6B1jk9XKj8Z"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6B1jk9XKj8Z"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Kil3Z1L7aN"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Kil3Z1L7aN.63bsoq3H8hy"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Kil3Z1L7aN.6115Wr1oOBI"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5xt5lDCuCmo"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5dPDjH8Vcai"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":584,"contentheight":127,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5iTzgRCAl5Z_-1306471653","id":"01","linkId":"txt__default_63bsoq3H8hy","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":497,"height":39,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"No","style":{"fontFamily":"\\"Product Sans Charset0_v74C901F6\\",\\"Product Sans\\"","fontSize":24,"ascent":30.72,"descent":8.096,"leading":0,"underlinePosition":-5.12,"underlineThickness":2.688,"xHeight":15.68}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":2,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":84,"bottom":51,"pngfb":false,"pr":{"l":"Lib","i":378}}}],"shapemaskId":"","xPos":24,"yPos":64,"tabIndex":4,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":280,"rotateYPos":31.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":406}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":406}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":406}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":407}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":407}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":407}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":408}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":408}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":408}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":409}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":409}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":409}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}}],"width":560,"height":63,"resume":true,"useHandCursor":true,"id":"63bsoq3H8hy","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6115Wr1oOBI.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6115Wr1oOBI._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6115Wr1oOBI"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6ksVnBMNQYy_-33011252","id":"01","linkId":"txt__default_6115Wr1oOBI","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":497,"height":39,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Yes","style":{"fontFamily":"\\"Product Sans Charset0_v74C901F6\\",\\"Product Sans\\"","fontSize":24,"ascent":30.72,"descent":8.096,"leading":0,"underlinePosition":-5.12,"underlineThickness":2.688,"xHeight":15.68}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":3,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":91,"bottom":51,"pngfb":false,"pr":{"l":"Lib","i":381}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":3,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":280,"rotateYPos":31.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":406}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":406}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":410}},"html5data":{"xPos":-9,"yPos":-1,"width":569,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-9,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":410}},"html5data":{"xPos":-9,"yPos":-1,"width":569,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":406}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":407}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":407}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":411}},"html5data":{"xPos":-9,"yPos":-1,"width":569,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-9,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":411}},"html5data":{"xPos":-9,"yPos":-1,"width":569,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":407}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":408}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":408}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":408}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":409}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":409}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":560,"bottom":63,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":409}},"html5data":{"xPos":-1,"yPos":-1,"width":561,"height":64,"strokewidth":6}}}],"width":560,"height":63,"resume":true,"useHandCursor":true,"id":"6115Wr1oOBI","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.63bsoq3H8hy.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.63bsoq3H8hy._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.63bsoq3H8hy"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":176,"yPos":344,"tabIndex":2,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":280,"rotateYPos":68,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":560,"height":136,"strokewidth":0}},"width":584,"height":136,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":584,"bottom":136,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":405}}},"id":"6Kil3Z1L7aN"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5xt5lDCuCmo_-119117591","id":"01","linkId":"txt__default_5xt5lDCuCmo","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":1132,"height":107,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"A timeframe is set for \\n","style":{"fontFamily":"\\"Product Sans Charset0_v74C901F6\\",\\"Product Sans\\"","ascent":42.098,"descent":11.095,"leading":0,"underlinePosition":-7.016,"underlineThickness":3.684,"xHeight":21.487}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":24,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"the implementation.","style":{"fontFamily":"\\"Product Sans Charset0_v74C901F6\\",\\"Product Sans\\"","ascent":42.098,"descent":11.095,"leading":0,"underlinePosition":-7.016,"underlineThickness":3.684,"xHeight":21.487}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":19,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":32.889,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":430,"bottom":112,"pngfb":false,"pr":{"l":"Lib","i":412}}}],"shapemaskId":"","xPos":208,"yPos":208,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":576,"rotateYPos":58.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1152,"bottom":117,"altText":"A timeframe is set for \\nthe implementation.","pngfb":false,"pr":{"l":"Lib","i":371}},"html5data":{"xPos":0,"yPos":0,"width":1152,"height":117,"strokewidth":0}},"width":1152,"height":117,"resume":true,"useHandCursor":true,"id":"5xt5lDCuCmo"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-24,"yPos":-32,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":80,"rotateYPos":408,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":160,"bottom":816,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":265}},"html5data":{"xPos":0,"yPos":0,"width":160,"height":816,"strokewidth":0}},"width":160,"height":816,"resume":true,"useHandCursor":true,"id":"5dPDjH8Vcai"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6Kil3Z1L7aN_CorrectReview","id":"01","linkId":"6Kil3Z1L7aN_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":682,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":267}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":266}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6Kil3Z1L7aN_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6Kil3Z1L7aN_IncorrectReview","id":"01","linkId":"6Kil3Z1L7aN_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":691,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":269}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":268}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6Kil3Z1L7aN_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');