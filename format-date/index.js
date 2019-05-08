const formatDate = (timeInSeconds) => {
  if (!timeInSeconds) timeInSeconds = 0;
	
	if (timeInSeconds < 60 ) {
		return `${timeInSeconds}s`;
	}
    const hours = Math.floor(timeInSeconds/3600);
    const minutes = Math.floor((timeInSeconds - hours*3600)/60);
    const seconds = timeInSeconds - (hours*3600) - (minutes*60);
    return [
      hours ? hours + 'h ' : '',
      minutes ? minutes + 'm ' : '',
      seconds ? seconds + 's ' : ''
    ].join('').trim()

  }
   
  module.exports = formatDate;