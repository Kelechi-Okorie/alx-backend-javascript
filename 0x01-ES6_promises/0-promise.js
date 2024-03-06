export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const num = Math.random();

    if (num > 0.6) {
      setTimeout(() => {
        resolve('foo');
      }, 300);
    } else {
      reject(new Error('An error occures'));
    }
  });
}
