const formatDate = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds/3600);
    const minutes = Math.floor((timeInSeconds - hours*3600)/60);
    const seconds = timeInSeconds - (hours*3600) - (minutes*60);
    return hours + 'h '+ minutes + 'm '+ seconds + 's'
  }
   
  module.exports = formatDate;