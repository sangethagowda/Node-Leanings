Handling URL

https://nodejs.org/api/url.html
https://www.w3schools.com/nodejs/nodejs_url.asp

![alt text](urlHandlingDoc.png)


comparision between WHATWG V/S legacy API convertion on URL

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘

legacy Url parsing {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'nodejs.org',
  port: null,
  hostname: 'nodejs.org',
  hash: null,
  search: null,
  query: [Object: null prototype] {},
  pathname: '/api/url.html',
  path: '/api/url.html',
  href: 'https://nodejs.org/api/url.html'
}
whatWgStURL URL {
  href: 'https://nodejs.org/api/url.html',
  origin: 'https://nodejs.org',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'nodejs.org',
  hostname: 'nodejs.org',
  port: '',
  pathname: '/api/url.html',
  search: '',
  searchParams: URLSearchParams {},
  hash: ''
}