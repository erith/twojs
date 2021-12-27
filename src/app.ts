import Two from "two.js";

export class WaferMap
{
  el:HTMLDivElement;
  constructor(el:HTMLDivElement)
  {
    this.el = el;
  }

  public draw()
  {
    var two = new Two({
      fullscreen: false,
      autostart: true
    }).appendTo(this.el);

    var rect = two.makeRectangle(two.width / 2, two.height / 2, 50 ,50);
    
    two.bind('update', ()=> rect.rotation += 0.001);
    two.update();
  }
}