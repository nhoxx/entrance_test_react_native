
export const checkStatusCode2xx = (statusCode: any) => {
  const firstIndex = statusCode.toString().charAt();
  if (firstIndex === '2') {
    return true;
  } else {
    return false;
  }
};
