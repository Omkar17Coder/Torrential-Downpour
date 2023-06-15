    // 'X-RapidAPI-Key': 'c9e7a02571msh1a39a803e8448e4p1c4eb7jsneba4c2a4be6c',
    // 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

   

    // const settings = {
    // 	async: true,
    // 	crossDomain: true,
    // 	url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle',
    // 	method: 'GET',
    // 	headers: {
    // 		'X-RapidAPI-Key': 'c9e7a02571msh1a39a803e8448e4p1c4eb7jsneba4c2a4be6c',
    // 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    // 	}
    // };

    // $.ajax(settings).done(function (response) {
    // 	console.log(response);
    //     $('#temp').text(response.temp);
    //         $('#min_temp').text(response.min_temp);
    //         $('#max_temp').text(response.max_temp);
    //         $('#wind_degree').text(response.wind_degrees);
    //         $('#wind_speed').text(response.wind_speed);
    //         $('#humidity').text(response.humidity);
    //         $('#feels_like').text(response.feels_like);
    //         $('#hello1').text(new Date(response.sunrise * 1000).toLocaleTimeString());
    //         $('#hello2').text(new Date(response.sunset * 1000).toLocaleTimeString());
    // });



    // const settings = {
    //     async: true,
    //     crossDomain: true,
    //     url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai',
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'c9e7a02571msh1a39a803e8448e4p1c4eb7jsneba4c2a4be6c',
    //          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

        
    //     }
    //   };
    
    //   // Show the loader when the page starts loading
    //   $('.loader').show();
    
    //   $.ajax(settings).done(function (response) {
    //     // Update the content of the page with the API response
    //     $('#temp').text(response.temp);
    //     $('#min_temp').text(response.min_temp);
    //     $('#max_temp').text(response.max_temp);
    //     $('#wind_degree').text(response.wind_degrees);
    //     $('#wind_speed').text(response.wind_speed);
    //     $('#humidity').text(response.humidity);
    //     $('#feels_like').text(response.feels_like);
    //     $('#hello1').text(new Date(response.sunrise * 1000).toLocaleTimeString());
    //     $('#hello2').text(new Date(response.sunset * 1000).toLocaleTimeString());
    
    //     // Hide the loader when the API call is complete
    //     $('.loader').hide();
    //   }).fail(function() {
    //     // Handle error case here
    // //   });
    
    // function getWeatherData(city) {
    //     const settings = {
    //     async: true,
    //     crossDomain: true,
    //     url: `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'c9e7a02571msh1a39a803e8448e4p1c4eb7jsneba4c2a4be6c',
    //             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    //     }
    //     };
    
    //     $('.loader').show(); // Show the loader
    
    // $.ajax( settings)
    //     .done(function(response) {
    //         // Handle success case here
    //         $('#CityName').text(city);
    
    //         $(`#${city}_temp`).text(response.temperature);
    //         $(`#${city}_min_temp`).text(response.min_temp);
    //         $(`#${city}_max_temp`).text(response.max_temp);
    //         $(`#${city}_wind_degree`).text(response.wind_degrees);
    //         $(`#${city}_wind_speed`).text(response.wind_speed);
    //         $(`#${city}_humidity`).text(response.humidity);
    //         $(`#${city}_feels_like`).text(response.feels_like);
    //         $(`#${city}_hello1`).text(new Date(response.sunrise * 1000).toLocaleTimeString());
    //         $(`#${city}_hello2`).text(new Date(response.sunset * 1000).toLocaleTimeString());
    
    //         console.log(response);
    //     })
    //     .fail(function(jqXHR, textStatus, errorThrown) {
    
    //         console.error(errorThrown);
    //         $('#error-message').text(`Error: ${errorThrown}`); // Display error message
    //     })
    //     .always(function() {
    //         $('.loader').hide(); // Hide the loader when the API call is complete
    //     });
    // }
    
    // // Call the function for multiple cities
    
    // $('#submit-button').click(function(event) {
    //     event.preventDefault(); 
    
    //     const city = $('#city-input').val();
    //     getWeatherData(city); 
    // });
    

    function getWeatherData(city) {
        const xhr = new XMLHttpRequest();
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
        xhr.open('GET', url, true);
      
        $('.loader').show(); // Show the loader
      
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            // Handle success case here
          
      
            $('#temp').text(response.temp);

           //   $('CityName').text(city);


                $('#min_temp').text(response.min_temp);
                $('#max_temp').text(response.max_temp);
                $('#wind_degree').text(response.wind_degrees);
                $('#wind_speed').text(response.wind_speed);
                $('#humidity').text(response.humidity);
                $('#feels_like').text(response.feels_like);
                $('#hello1').text(new Date(response.sunrise * 1000).toLocaleTimeString());
                $('#hello2').text(new Date(response.sunset * 1000).toLocaleTimeString());
            
      
            console.log(response);
          } else if (xhr.readyState === 4) {
            // Handle error case here
            console.error(xhr.statusText);
            $('#error-message').text(`Error: ${xhr.statusText}`); // Display error message
          }
          $('.loader').hide(); // Hide the loader when the API call is complete
        };

            // 'X-RapidAPI-Key': 'c9e7a02571msh1a39a803e8448e4p1c4eb7jsneba4c2a4be6c',
    // 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

      
        xhr.setRequestHeader('x-rapidapi-key', 'c9e7a02571msh1a39a803e8448e4p1c4eb7jsneba4c2a4be6c');
        xhr.setRequestHeader('x-rapidapi-host', 'weather-by-api-ninjas.p.rapidapi.com');
        xhr.send();
      }
      
      // Call the function for multiple cities
      
      $('#submit-button').click(function(event) {
        event.preventDefault(); // Prevent the form from submitting
      
        const city = document.getElementById('city-input').value;
       

        var example = document.getElementById('header1');
        var h1 = document.createElement('h1');
        h1.innerText = "Weather of " + city;
        example.innerHTML = '';
        example.appendChild(h1);
        getWeatherData(city);
        ele;
   
      });
      
      const ele=document.getElementById('test123').style.color='blue';
 
      console.log("sfhf");