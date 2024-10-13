import os
import multiprocessing
# from flask_bootstrap import Bootstrap4
from flask import Flask, render_template, request, redirect
from treecount import process_image
from optimalpath import ImageSeg, OptimalPathing
# from tile import get_data, predict_tile
import requests
import geocoder

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif','tif'}



@app.route('/treecount', methods=['POST'])
def Treecount():
    if 'file' not in request.files:
        return {"error": "No file part"}, 400
    file = request.files['file']
    if file.filename == '':
        return {"error": "No selected file"}, 400
    if file and allowed_file(file.filename):
        filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filename)
        try:
            image_path, count = process_image(filename, app.config['ALLOWED_EXTENSIONS'])
            return {"image_path": image_path, "count": count}
        except ValueError as e:
            return {"error": str(e)}, 500
    return {"error": "File type not allowed"}, 400


@app.route('/optimalpath', methods=['GET', 'POST'])
def OptimalPath():
    if request.method == 'POST':
        if 'file' not in request.files:
            return {"error": "No file part"}, 400
        file = request.files['file']
        if file.filename == '':
            return {"error": "No selected file"}, 400
        if file and allowed_file(file.filename):
            filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(filename)
            try:
                # Get start and end points from form data
                start_x = int(request.form['start_x'])
                start_y = int(request.form['start_y'])
                end_x = int(request.form['end_x'])
                end_y = int(request.form['end_y'])

                # Image segmentation and path finding logic
                img_seg = ImageSeg(filename)
                img = img_seg.IsoGrayThresh()
                optimal_path = OptimalPathing(img, filename)

                # Compute the path using Dijkstra's algorithm
                coords = optimal_path.ComputeDjikstra(start_pixel=(start_x, start_y), target_pixel=(end_x, end_y))

                # Return the processed image path and computed coordinates
                return {
                    "image_path": "static/optimal_path.png",  # Ensure the processed image is saved in static folder
                    "coords": coords
                }
            except ValueError as e:
                return {"error": str(e)}, 500
    return {"error": "Invalid request method"}, 400


# Weather API configuration
API_KEY = '3489cc20d924408ab6ef1ce68eea7588'
url = 'https://api.weatherbit.io/v2.0/current'

@app.route('/location', methods=['GET', 'POST'])
def index():
    weather_data = None
    error = None
    
    if request.method == 'POST':
        city = request.form.get('city')
        
        # Define the parameters
        params = {
            'city': city,
            'key': API_KEY,
            'include': 'minutely'
        }
        
        # Make the API request
        response = requests.get(url, params=params)
        
        if response.status_code == 200:
            data = response.json()
            if data['count'] > 0:
                weather_data = {
                    "City": data["data"][0]["city_name"],
                    "Temperature": data["data"][0]["temp"],
                    "Humidity": data["data"][0]["rh"],
                    "Wind Speed": data["data"][0]["wind_spd"],
                    "Wind Direction": data["data"][0]["wind_cdir_full"],
                    "Weather Description": data["data"][0]["weather"]["description"],
                    "Visibility": data["data"][0]["vis"],
                    "Sunrise": data["data"][0]["sunrise"],
                    "Sunset": data["data"][0]["sunset"]
                }
            else:
                error = "City not found."
        else:
            error = f"Error: {response.status_code}"
    
    g = geocoder.ip('me')
    print(g.latlng)
    return render_template('Location.html', weather_data=weather_data, error=error)




def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

if __name__ == '__main__':
    # bootstrap = Bootstrap4(app)
    multiprocessing.freeze_support()
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])
    app.run(debug=True)
