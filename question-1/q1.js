function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject(new Error('Input must be an array.'));
        return;
      }
  
      const output = [];
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
          output.push(arr[i].toLowerCase());
        }
      }
  
      if (output.length > 0) {
        resolve(output);
      } else {
        reject(new Error('No strings found in the input array.'));
      }
    });
  }
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then((result) => {
      console.log(result.join(' ')); 
    })
    .catch((error) => {
      console.error(error.message);
    });
  
    