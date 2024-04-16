export function spotLightReducer(prevState, action) {
  switch (action.type) {
    case 'controlSpotLight': {
      return Object.assign({
        ...prevState,
        isSpotLightEnabled: action.isSpotLightEnabled,
      })
    }
    case 'setIsMouseOverIframe': {
      return Object.assign({
        ...prevState,
        isMouseOverIframe: action.isMouseOverIframe

      })
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}