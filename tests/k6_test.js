import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  let url = 'http://localhost:5000/items';

  // POST
  let postRes = http.post(url, JSON.stringify({ nome: "teste" }), {
    headers: { 'Content-Type': 'application/json' },
  });
  check(postRes, { 'post status 201': (r) => r.status === 201 });

  // GET
  let getRes = http.get(url);
  check(getRes, { 'get status 200': (r) => r.status === 200 });

  // PUT
  let putRes = http.put(url + '/0', JSON.stringify({ nome: "editado" }), {
    headers: { 'Content-Type': 'application/json' },
  });
  check(putRes, { 'put status 200': (r) => r.status === 200 });

  // DELETE
  let deleteRes = http.del(url + '/0');
  check(deleteRes, { 'delete status 200': (r) => r.status === 200 });
}
