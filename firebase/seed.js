const { db } = require('./config');

const dogs = [
  {
    name: 'Red',
    location: 'New York',
    imgurl:
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/71296589_490138195172838_3699848273754849280_n.jpg?_nc_cat=110&_nc_oc=AQlC6eA-AAF4mhQ318MFoMcCot4WIWJmzONlJV7nJWohJKFV_7F80CjR8PUIxzHG10M&_nc_ht=scontent-lga3-1.xx&oh=15b4d744d4767baa5b314b212b93236a&oe=5E3A34E3',
    breed: 'Pitbull',
    age: 6,
    personality: 'cheerful',
  },
  {
    name: 'Tank',
    location: 'New Jersey',
    imgurl:
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/70891326_919447888415004_756194348978143232_n.jpg?_nc_cat=108&_nc_oc=AQkMfPyMu2FB_2gYFVr5_FFz_RNvsZdY7Z6bCoyQUnUZHblrPWziFZf0-x6JvoKuffQ&_nc_ht=scontent-lga3-1.xx&oh=67692704b99571a3d0b80c398bd27857&oe=5DF9B89C',
    breed: 'Boston Terrier',
    age: 4,
    personality: 'energetic',
  },
];

dogs.forEach(dog => {
  db.ref(`/dogs/${dog.name}`).set({ ...dog });
});
