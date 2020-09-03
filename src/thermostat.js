'use strict';

class Thermostat {
  constructor() {
    
    this.DEFAULT_TEMPERATURE = 20
    this.MINIMUM_TEMPERATURE = 10;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
  
  }
  getCurrentTemperature(){
    return this.temperature;
  }
  up(){
    if(this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1

  }
  down() {
    if(this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
    
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  isMaximumTemperature(){
    if (this.isPowerSavingModeOn()){
     
      return this.temperature === this.MAX_LIMIT_PSM_ON;
    }
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  isPowerSavingModeOn(){
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    if (this.temperature > this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'high-usage';
    }
  }
}
