const resolvedPromise = () => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        const success = { 'message': 'Delayed success!' };
        resolve(success);
      }, 500);
    });
  };
  
  const rejectedPromise = () => {
    return new Promise(function (_, reject) {
      setTimeout(() => {
        reject(new Error('message: Delayed exception!'));
      }, 500);
    });
  };
  
  resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
  
  rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
  