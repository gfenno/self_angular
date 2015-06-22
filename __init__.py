from flask import Flask, render_template
from flask.ext.triangle import Triangle


app = Flask(__name__, static_path='/static')
Triangle(app)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/name')
def name():
    return render_template('name.html')

@app.route('/info')
def info():
    return render_template('info.html')

@app.route('/talk')
def talk():
    return render_template('talk.html')

@app.route('/table')
def table():
    return render_template('table.html')

@app.route('/hide')
def hide():
    return render_template('hide.html')

@app.route('/event')
def event():
    return render_template('event.html')

@app.route('/val')
def val():
    return render_template('validate.html')

if __name__ == '__main__':
    app.run(debug=True)