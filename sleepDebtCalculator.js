const getSleepHours = day => {
  day = day.toLowerCase();
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  }  else if (day === 'wednesday') {
    return 6.5;
  } else if (day === 'thursday') {
    return 4;
  } else if (day === 'friday') {
    return 7
  } else if (day === 'saturday') {
    return 5.5;
  } else if (day === 'sunday') {
    return 6;
    
  } 
  
}

const getActualSleepHours = () => {
  let totalSleepHours = 
  getSleepHours('Monday')+
  getSleepHours('Tuesday')+
  getSleepHours('Wednesday')+
  getSleepHours('Thursday')+
  getSleepHours('Friday')+
  getSleepHours('Saturday')+
  getSleepHours('Sunday');
 
return totalSleepHours;
  }

const getIdealSleepHours = idealHours => 

idealHours *7;


const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(6);
  
  if (actualSleepHours === idealSleepHours ){
    console.log('User got Perfect Sleep');
  } else if (actualSleepHours > idealSleepHours){
   console.log(`User got ${actualSleepHours - idealSleepHours} hours(s) more sleep than needed.`);
  } else {
    console.log(`User got ${idealSleepHours-actualSleepHours} hour(s) less sleep than required! Get Some rest`);
  }
   
}
 

console.log(calculateSleepDebt());






