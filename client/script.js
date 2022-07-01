function formToObject(htmlFormElement) {
  const formItem = new FormData(htmlFormElement).entries();
  const formArray = Array.from(formItem);
  const formObject = formArray.reduce((collection, item, index) => {
    if (!collection[item[0]]) {
      collection[item[0]] = item[1];
    }
    return collection;
  }, {});
  return formObject;
}

async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.main_form'); // change this selector to match the id or classname of your actual form

  const selectPark = document.querySelector('.select_park');

  const parks = document.querySelector('#park');
  const refresh = document.querySelector('.refresh_list');

  const map = initMap('map');
  const retrievalVar = 'parks';
  selectPark.style.display = 'none';

  // refreshList(refresh, retrievalVar);

  const parksapi = await fetch('/api/race/');
  const parksjson = await parksapi.json();
  const parksArray = parksjson.parks;
  // const storedDataArray = JSON.parse(parksArray);
  // console.log(parksArray);
  // console.log(storedDataArray);

  updateParks(parksArray);
  if (parksArray?.length > 0) {
    currentPark = parksArray[0];
    // this statement is to prevent a race condition on data load
    selectPark.style.display = 'block';

    let currentArray = parksArray;
    // inputListener(parks);
    addMapMarkers(map, currentArray);
    parks.addEventListener('change', async (event) => {
      // console.log(event.target.value);
      // console.log(parksArray);
      matchingPark = findPark(event.target.value, parksArray);
      // console.log(matchingPark.park_lat, matchingPark.park_long );
      currentPark = matchingPark;
      updateMap(map, matchingPark.park_lat, matchingPark.park_long);
    });

    form.addEventListener('submit', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      // console.log('form submission'); // this is substituting for a "breakpoint"
    });
    selectPark.addEventListener('click', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      // console.log('form submission'); // this is substituting for a "breakpoint"
      console.log('park selected');
      console.log(currentPark.park_id);
      displayReviews(currentPark.park_id);
    });
    refresh.addEventListener('click', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      // console.log('form submission'); // this is substituting for a "breakpoint"
      currentArray = parksArray;
      console.log(currentArray);
      updateParks(currentArray);
      addMapMarkers(map, currentArray);
    });
  }
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests