class deviceClass {
    constructor(name, power) {
      (this.name = name),
        (this.powerConsumption = power + " watt"),
        (this.isPlugged = false);
    }
    on() {
      console.log(this.name + " is plugged!");
      this.isPlugged = true;
    }
    off() {
      console.log(this.name + " is unplugged!");
      this.isPlugged = false;
    }
  }
  class xbox extends deviceClass {
    constructor(name, brand, type, power) {
      super(name, power),
      this.brand = brand,
      this.type = type,
      this.isPlugged = true
    }
  }
  class pc extends deviceClass {
    constructor(name, power, type, brand) {
      super(name, power),
      this.type = type,
      this.brand = brand
    }
  }
  const XBOX = new xbox("xbox", "microsoft", "console", 400);
  const DESKTOP = new pc("computer", 600, "desktop", "lenovo legion");
  
  
  XBOX.on();
  DESKTOP.on();
  
  console.log(XBOX);
  console.log(DESKTOP);
  