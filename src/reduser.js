const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'RND':
      return state + action.payload;
    
    case 'CLR_RND':
      return state - action.payload_clr;

    case 'INC':
      return state + 1;
    
    case 'DEC':
      return state - 1;
    
    case 'CLR':
      return state = 0;
    
    default:
      return state;
  }
};

export default reducer;