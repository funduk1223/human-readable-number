module.exports = function toReadable (number) {
  let numbArray = (String(number)).split('').map(function(a) {
    return Number(a);
  });

  function seporator(numbArray){
    if (numbArray[0] === 1) {
      result += tens[numbArray[1]]
    }
    else if (numbArray[0] !== 0){
      numbArray[1] === 0 ? result+=hundreds[numbArray[0]-2] : result=hundreds[numbArray[0]-2] + ' ' + units[numbArray[1]]; 
    }

    else if (numbArray[0] === 0){
      if (numbArray[1] === 0) {
        result = '';
      }
      else result += units[numbArray[1]];
    }

    return result;
  }

  var units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var hundreds = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var result = '';

  if (numbArray.length === 1){
    result += units[numbArray];
  }

  else if (numbArray.length === 2){
    result = seporator(numbArray);
  }

  else if (numbArray.length === 3){
    
    result = units[numbArray[0]] + ' hundred ' + seporator(numbArray.slice(-2))
  }
  return result.replace(/\s$/,'');
}



