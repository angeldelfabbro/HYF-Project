import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
  vus: 1, // 1 virtual user
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500', 'p(99)<1000'],
    http_req_failed: ['rate<0.1'],
  },
};

export default function () {
  group('1 User Load Test', () => {
    const res = http.get('https://daristr.github.io/luxehome-qa/#/');
    
    check(res, {
      'status is 200': (r) => r.status === 200,
      'response time < 500ms': (r) => r.timings.duration < 500,
      'response time < 1000ms': (r) => r.timings.duration < 1000,
      'body is not empty': (r) => r.body.length > 0,
    });

    const postRes = http.get('https://daristr.github.io/luxehome-qa/#/');
    
    check(postRes, {
      'single post status is 200': (r) => r.status === 200,
      'single post response time < 500ms': (r) => r.timings.duration < 500,
    });
  });

  sleep(1);
}
