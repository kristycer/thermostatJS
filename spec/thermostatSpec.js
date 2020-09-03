'use strict';

describe('Thermostat', function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function () {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  it('increases the temperature', function () {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
  it('descreases the temperature', function () {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
  it('has a minimum temperature of 10 degrees', function () {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
  it('has a power saving mode by default', function () {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  it('can switch PSM off', function () {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });
  it('can switch PSM back on', function () {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  it('can be reset to default temp', function () {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  describe('when PSM is on', function () {
    it('has a max temp of 25 degrees', function () {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('displaying usage levels', function () {
    describe('when the temperature is below 18 degrees', function () {
      it('it is considered low-usage', function () {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
    describe('when the temperature is between 18 and 25 degrees', function () {
      it('it is considered medium-usage', function () {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
    describe('when the temperature is above 25 degrees', function () {
      it('it is considered high-usage', function () {
        thermostat.powerSavingMode = false
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
