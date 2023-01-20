function Applicate(devicePower, deviceColor, status){
    this.power = devicePower;
    this.color = deviceColor;
    this.a = function(a){
    this.status = a;
    };
    }
    const Pc = new Applicate(600, "white", 0);
    const XBOX = new Applicate(400, "black",0);
    let PcStatus = prompt("Включить компьютер - 1, Оставить выключенным - 0");
    let XBOXStatus = prompt("Включить XBOX - 1, Оставить выключенным - 0");
    Pc.a(+PcStatus);
    XBOX.a(+XBOXStatus);
    console.log(Pc);
    console.log(XBOX);
    function getSumDevicesPower(x,y){
      let a = x.power;
      let b = y.power;
      if (x.status == 0){
      a = 0;
      }
      if (y.status == 0){
      b = 0;
      }
      console.log("Общая потребяемая энергия - "+(a+b));
    }
    getSumDevicesPower(Pc, XBOX);