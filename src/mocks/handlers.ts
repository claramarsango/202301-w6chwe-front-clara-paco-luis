import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://w6chwe-back-clara-paco-luis.onrender.com/api/v1/robots',
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 'robotId',
            _id: 'robotId',
            name: 'Mazinger Z',
            img: 'urlRobot',
            characteristics: {
              velocity: 5,
              resistence: 6,
              creation: 1972,
            },
          },
        ]),
      );
    },
  ),
];
