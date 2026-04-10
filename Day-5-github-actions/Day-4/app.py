import redis
from http.server import BaseHTTPRequestHandler, HTTPServer

r = redis.Redis(host='redis', port=6379)

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        count = r.incr('hits')

        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

        response = f"Hello Ash | Visits: {count}"
        self.wfile.write(response.encode())

server = HTTPServer(('0.0.0.0', 5000), Handler)
server.serve_forever()
