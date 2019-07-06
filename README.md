# Run
npm run start

## Technologies
Back-end: NodeJS<br>
Front-end: VueJS<br>
Database: MongoDB - NoSQL<br>

External:<br>
-VueRouter<br>
-Vuex<br>
-Component Structure<br>
-Moment<br>

### Settings
Google Map API: <br>
Go application/views/app.ejs's footer.<br> 
..key=API_KEY<br>
Write your key instead of API_KEY.

Google Map Distance Matrix API: <br>
NOTE: (If you do not restrict your key, you can same API key in two place.)<br>
Go assets/src/components/pages/home/home.vue<br>
Write your key instead of calculateDistanceDuration method's this.url function's API_KEY.

Mongo DB Connection:<br>
Go .env file.<br>
Paste your MongoDB Connection URL instead of MONGO_CONNECTİON_URL.

#### Usage
You must create an account to create an appointment and view your appointments.<br>
After creating account, you can create an appointment.<br>
Name, Surname, Email, Phone number, Date, Destination position(from google map). <br>
Starter position is static(Bakırköy/Istanbul).<br>
After creating appointment, you can view your appointment.<br>
You can view your all appointments in '/appointment' page and you can click ID number of appointment to obtain wide information about appointment.(Departure time, Return time, distance(km), duration(h))<br>