import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  return Promise.all([promise1, promise2]).then((values) => {
    const [result1, result2] = values;
    console.log(`${result1.body} ${result2.firstName} ${result2.lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
