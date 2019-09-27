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

  {
    name: 'Lulu',
    location: 'Upper East Side Manhattan',
    imgurl:
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/71068744_593443267856564_3567098041590611968_n.jpg?_nc_cat=109&_nc_oc=AQkr45egc0fpCWjf2ObtGCEW1yiwAhNzXpsxkGlT9tgTmSEtMTjPD30J4wYrHiuud9o&_nc_ht=scontent-lga3-1.xx&oh=d91519e8923c1646e2e170b9678ba79a&oe=5DFC489F',
    breed: 'Boston Terrier',
    age: 4,
    personality: 'cheerful',
  },
  {
    name: 'Genma',
    location: 'Downtown Manhattan',
    imgurl:
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/71267127_878539025851830_1061833339977072640_n.jpg?_nc_cat=102&_nc_oc=AQlQfi3pdNvG1Q4vyA-HXT4nbBDgQRh8TGzV31oN8tpNAtq2JvEJ5abx2kIjayHuf9Y&_nc_ht=scontent-lga3-1.xx&oh=8229a42084b614f4f7af3c42cebacb04&oe=5DFBB9FE',
    breed: 'Border Collie',
    age: 6,
    personality: 'relaxed',
  },
  {
    name: 'Milo',
    location: 'North Bergen',
    imgurl:
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/71187395_2526643500734050_1076879392099008512_n.jpg?_nc_cat=100&_nc_oc=AQmxrVbWS-7OxQUBxQOfcaFg78Ur27WOy38gQxPWXBRnU3yiaiW9QmjyTunc6k9u-rE&_nc_ht=scontent-lga3-1.xx&oh=b46afcaac924d18c9e48e1b350214494&oe=5E2C7560',
    breed: 'Jack Russell',
    age: 3,
    personality: 'cheeky',
  },
  {
    name: 'Roxy',
    location: 'Jersey City',
    imgurl:
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/69214237_363524044548797_1533623106462023680_n.jpg?_nc_cat=103&_nc_oc=AQmYHtwwkM7IRz2ltS_IJEMZ4RZPuGFNISgaKjG1ES5PcDILq9R6gcyid7-oe2yhJPY&_nc_ht=scontent-lga3-1.xx&oh=394c4140fc02192993b8b311670529c0&oe=5E2CD1FE',
    breed: 'Pitbull',
    age: 6,
    personality: 'loving',
  },
  {
    name: 'Junior',
    location: 'Jersey City',
    imgurl:
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/49081709_581083242351966_5440274506490839040_n.jpg?_nc_cat=101&_nc_oc=AQkI53YzousKQtJYXAkaKicsHjEoDwLvsoCZt72KuatWCFfPGmCGJM8YerkY3AOLgvI&_nc_ht=scontent-lga3-1.xx&oh=18217334d51f590cd78f0a6e36b0f8bd&oe=5E36BB1D',
    breed: 'Chipit',
    age: '3',
    personality: 'prankster',
  },
  {
    name: 'Pika',
    location: 'Brooklyn',
    imgurl:
      'https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/67345821_395956414367041_384506290044403712_n.jpg?_nc_cat=100&_nc_oc=AQl73oTefh10YI7KjFYc_oZ77IhGn_zTyCWRVd97KfVpK4pAOowHk54924hyc82Ygeg&_nc_ht=scontent-lga3-1.xx&oh=55c74e42b890f64a9fd2d162bcb1fe53&oe=5E35E5DE',
    breed: 'Yorkie Mix',
    age: '3 Months',
    personality: 'energetic',
  },
];

dogs.forEach(dog => {
  db.ref('/dogs')
    .child(dog.name)
    .once('value', snapshot => {
      if (!snapshot.exists()) {
        db.ref(`/dogs/${dog.name}`).set({ ...dog });
      }
    });
});
