export const getFormatedTime = () => {
  const dt = new Date(),
        dd = addZeroPrefix(dt.getDate()),
        mm = addZeroPrefix(dt.getMonth()+1),
        yy = dt.getFullYear(),
        hh = addZeroPrefix(dt.getHours()),
        mn = addZeroPrefix(dt.getMinutes());
  
  return `${dd}.${mm}.${yy} ${hh}:${mn}`
}

const addZeroPrefix = (num) => {
  return num < 10 ? '0' + num : num;
}

export const toogleBtn = (condition, button) => {
  if(condition) {
    button.classList.remove('disabled');
  } else {
    button.classList.add('disabled');
  }
}

export const validateInput = (field, input) => {
  if(input) {
    field.classList.remove('empty');
  } else {
    field.classList.add('empty');
  }
}


export const isOnline = () => {
  return window.navigator.onLine;
}