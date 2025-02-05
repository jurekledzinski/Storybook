import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/users', async () => {
    return HttpResponse.json({
      payload: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Maverick',
        },
      ],
      success: true,
    });
  }),
];
