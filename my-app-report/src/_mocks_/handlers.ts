import { SERVICES } from '';
import { HttpResponse, http } from 'msw';
import { profile } from './dataMock';

export const handlers = [
  http.get(`${SERVICES.ABC}/user/profile`, ({ request }) => {
    return HttpResponse.json(profile);
  })
]