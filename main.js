console.log('main.js is connected!');

const key = "a217c0fc8861306b68308c6d658e6176";


const makeCall = function(event) {
    event.preventDefault();
    const zipcodeMain = document.getElementsByClassName('zipcode')[0].value;
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcodeMain}&units=imperial&appid=a217c0fc8861306b68308c6d658e6176`;
    const fetchZipcodeData = fetch(url);
    fetchZipcodeData.then((response)=> {
      return response.json();
    }).then((response) => {
      getData(response);
    }).catch((err) => {
      console.log("You have reached an error");
    });
};

document.querySelector('.submit',).addEventListener('click',makeCall);



const getData = function(data) {
  console.log(data);
  // debugger
  const temp = Math.round(data.main.temp);
  const minTemp = Math.round(data.main.temp_min);
  const maxTemp = Math.round(data.main.temp_max);
  const weatherDesc = data.weather[0].description;
  const city = data.name;
  manipulateDom(temp,maxTemp,minTemp,weatherDesc,city);
}

const manipulateDom  = function (temp,maxTemp,minTemp,weatherDesc,city){
  document.querySelector('.header').style.display = "none";
  document.getElementsByClassName('min')[0].innerHTML += minTemp;
  document.getElementsByClassName('max')[0].innerHTML += maxTemp;
  document.getElementsByClassName('current')[0].innerHTML += temp;
  document.getElementsByClassName('description')[0].innerHTML += weatherDesc;
  document.getElementsByClassName('cityName')[0].innerHTML += city;
}
