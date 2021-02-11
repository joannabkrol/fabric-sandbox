//Fifth canvas
document.addEventListener("DOMContentLoaded", function () {
  /** @type { import("fabric/fabric-impl") } */
  const fabric = window.fabric;

  const canvas = new fabric.Canvas("canvas5");

  const circle = new fabric.Circle({
    radius: 100,
    fill: "#eef",
    scaleY: 0.5,
    originX: "center",
    originY: "center",
  });

  const text = new fabric.Text("hello world", {
    fontSize: 30,
    originX: "center",
    originY: "center",
  });

  const group = new fabric.Group([circle, text], {
    left: 150,
    top: 100,
    angle: -10,
  });

  canvas.add(group);

  JSON.stringify(canvas);
  // console.log(JSON.stringify(canvas));
  // console.log(canvas.toSVG());

  //   loading content form JSON
  //   canvas.loadFromJSON(
  //     '{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0},{"type":"circle","left":100,"top":100,"width":100,"height":100,"fill":"red","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"radius":50}],"background":"rgba(0, 0, 0, 0)"}'
  //   );
});
