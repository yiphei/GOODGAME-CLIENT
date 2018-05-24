export default [
  {
    _id: Math.round(Math.random() * 1000000),
    text: '#awesome',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hi! Good Game! It is time for post game evaluation with #GoodGameBot! Ready?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
    },
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Time to rate your fellow players! Type Like or Dislike for Ally!',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
    },
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Time to rate your fellow players! Type Like or Dislike for Junfei!',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
    },
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Time to rate your fellow players! Type Like or Dislike for Savanah!',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
    },
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Time to rate your fellow players! Type Like or Dislike for Lebron!',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
    },
    image: 'https://cdn-s3.si.com/s3fs-public/2017/11/02/lebron-james-cavs-reaction.jpg',
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Please either say like or dislike to your fellow players!',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
    },
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'You are officially rocking GoodGame.',
    createdAt: new Date(),
    system: true,
  },
];
