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
    text: 'Yes, Time for post game evaluation with #GoodGameBot!',
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
    text: 'Time to rate your fellow players! In a scale of 0 to 10 rate Ally !',
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
    text: 'Time to rate your fellow players! In a scale of 0 to 10 rate Junfei Yu !',
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
    text: 'Time to rate your fellow players! In a scale of 0 to 10 rate Savanah!',
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
    text: 'Time to rate your fellow players! In a scale of 0 to 10 rate Lebron!',
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
    text: 'You are officially rocking GoodGame.',
    createdAt: new Date(),
    system: true,
  },
];
