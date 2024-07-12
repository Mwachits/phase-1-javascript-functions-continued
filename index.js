// Define saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define mondayWork function expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Define wrapAdjective function
  function wrapAdjective(symbol = '*') {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }
  
  // Export functions if needed (depending on your setup)
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
  };
  
