// Task5 ------------------------------------------------------------------------------

// Переписать консольное приложение из предыдущего юнита на классы.
// Общие требования:
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.

// Task5 -----------------------------------------------------------
class Device {
  constructor (source, name){
    this.deviceType = 'electric';
    this.source = source;
    this.name = name;
  }
  
  calcPower (curent, voltage){
    console.log('Power is ' + (curent*voltage) + ' W')
    this.curent = curent;
    this.voltage = voltage;
  }
  
  connectToPower (curState){
    this.curState = curState
  }
}

class MobilDevice extends Device {
  constructor (name, weight, source){
    super();
    this.name = name;
    this.weight = weight;
    this.source = source
  }
  propMobile(weight){
    console.log("Device weight is " + this.weight + " g")
  }
}

class TableDevice extends Device {
  constructor (name, height, source){
    super();
    this.name = name;
    this.height = height;
    this.source = source
  } 
}

  const jackLight = new MobilDevice ("jackLight", 200, "Battary");
  const deskLamp = new TableDevice ("deskLamp", 50, 'Electriac socket'); 

  deskLamp.connectToPower("on");
  jackLight.connectToPower("off");

  jackLight.propMobile();
  deskLamp.calcPower(0.5, 220);
  jackLight.calcPower(0.3, 4);
