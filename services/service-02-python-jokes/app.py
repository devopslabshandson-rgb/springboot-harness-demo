from flask import Flask
import os
app = Flask(__name__)
PORT=int(os.getenv("PORT",5002))

@app.route('/health')
def h(): return 'OK'

@app.route('/')
def i(): return {'service':'jokes'}

app.run(host='0.0.0.0',port=PORT)
