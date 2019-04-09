export const handleRegisterError = (err) => {
  const errorCode = err.response.status;

  switch (errorCode) {
    case 400:
      console.error('400');
      break;
    case 401:
      console.error('401.');
      break;
    case 403:
      console.error('403');
      break;
    case 404:
      console.error('404');
      break;
    case 500:
      console.error('500');
      break;
    default:
      console.error('error~');
      break;
  }
};

export const handleLoginError = (err) => {
  const errorCode = err.response.status;

  switch (errorCode) {
    case 400:
      console.error('400');
      break;
    case 401:
      console.error('401.');
      break;
    case 403:
      console.error('403');
      break;
    case 404:
      console.error('404');
      break;
    case 500:
      console.error('500');
      break;
    default:
      console.error('error~');
      break;
  }
};

export const handleError = (err) => {
  const errorCode = err.response.status;
  // 401 login page redirect
  switch (errorCode) {
    case 400:
      console.error('400');
      break;
    case 401:
      console.error('401. redirect');
      break;
    case 403:
      console.error('403');
      break;
    case 404:
      console.error('404');
      break;
    case 500:
      console.error('500');
      break;
    default:
      console.error('error~');
      break;
  }
};
