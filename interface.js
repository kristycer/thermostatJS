$(document).ready(function () {
  var thermostat = new Thermostat();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=c802e2ca7afd6c86c4403868b10d9005=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})

  updateTemperature();

  $('#temperature-up').click(function () {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function () {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function () {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function () {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function () {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
