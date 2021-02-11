document.addEventListener("DOMContentLoaded", function () {
  /** @type { import("fabric/fabric-impl") } */
  const fabric = window.fabric;

  // create `Canvas` object using `<canvas>` DOM node
  const canvas = new fabric.Canvas("canvas");

  console.log(typeof fabric);
  console.log(typeof fabric.Canvas);
  console.log(typeof fabric.Rect);
  console.log(typeof canvas.add);

  /*--------------*/

  // create a `Rect` object
  const rect = new fabric.Rect({
    width: 200,
    height: 200,
    top: 110,
    left: 100,
    fill: "#03A87C",
  });

  // add `rect` to the canvas
  canvas.add(rect);

  // move shape to the right after 3 seconds
  setTimeout(() => {
    rect.set("left", 300);
    canvas.renderAll();
  }, 3000);

  const line = new fabric.Line([50, 50, 200, 50], {
    strokeWidth: 5,
    stroke: "#03A87C",
  });
  canvas.add(line);

  const circle = new fabric.Circle({
    top: 5,
    left: 250,
    radius: 50,
    fill: "#03A87C",
  });
  canvas.add(circle);

  const triangle = new fabric.Triangle({
    top: 5,
    left: 400,
    width: 100,
    height: 90,
    fill: "#03A87C",
  });
  canvas.add(triangle);

  const ellipse = new fabric.Ellipse({
    rx: 100,
    ry: 50,
    top: 350,
    left: 50,
    fill: "FFC107",
  });
  canvas.add(ellipse);

  const polyline = new fabric.Polyline(
    [
      { x: 0, y: 0 },
      { x: 50, y: 0 },
      { x: 50, y: 50 },
    ],
    {
      top: 300,
      left: 400,
      fill: "transparent",
      stroke: "#795548",
    }
  );
  canvas.add(polyline);

  const polygon = new fabric.Polygon(
    [
      { x: 0, y: 0 },
      { x: 50, y: 0 },
      { x: 50, y: 50 },
    ],
    {
      top: 400,
      left: 400,
      fill: "transparent",
      stroke: "#795548",
    }
  );
  canvas.add(polygon);

  //uneven rectangle
  const path1 = new fabric.Path("M 10 0 H 100 V 90 H 0 Z", {
    top: 5,
    left: 550,
    fill: "#03A87C",
  });

  // sine curve
  const path2 = new fabric.Path(
    "M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80",
    {
      top: 150,
      left: 550,
      fill: null,
      strokeWidth: 5,
      stroke: "black",
      backgroundColor: "rgba(69, 90, 100, 0.1)",
    }
  );

  //heart
  const heart = new fabric.Path(
    "M10,6 Q10,0 15,0 T20,6 Q20,10 15,14 T10,20 Q10,18 5,14 T0,6 Q0,0 5,0 T10,6 Z",
    {
      top: 300,
      left: 550,
      fill: "#D81B60",
      scaleX: 5,
      scaleY: 5,
    }
  );
  const heartGradient = new fabric.Path(
    "M10,6 Q10,0 15,0 T20,6 Q20,10 15,14 T10,20 Q10,18 5,14 T0,6 Q0,0 5,0 T10,6 Z",
    {
      top: 300,
      left: 650,
      fill: new fabric.Gradient({
        type: "linear",
        coords: { x1: 0, y1: 50, x2: 0, y2: 0 },
        colorStops: [
          { offset: 0, color: "#D81B60", opacity: 1 },
          {
            offset: 1,
            color: "#FBC02D",
            opacity: 1,
          },
        ],
      }),
      //   scaleX: 5,
      //   scaleY: 5,
    }
  );
  canvas.add(path1, path2, heart, heartGradient);
});

//Second canvas
document.addEventListener("DOMContentLoaded", function () {
  /** @type { import("fabric/fabric-impl") } */
  const fabric = window.fabric;

  const canvas = new fabric.StaticCanvas("canvas2");

  //rotate square
  const rectRotated = new fabric.Rect({
    top: 50,
    left: 50,
    width: 100,
    height: 100,
    angle: 10,
  });

  const rectRotated2 = new fabric.Rect({
    top: 50,
    left: 150,
    width: 100,
    height: 100,
    angle: -10,
  });

  //skew square
  const rectSkew = new fabric.Rect({
    top: 50,
    left: 300,
    width: 100,
    height: 100,
    skewX: 10,
  });

  const rectSkew2 = new fabric.Rect({
    top: 50,
    left: 450,
    width: 100,
    height: 100,
    skewY: 10,
  });

  //scale square
  const rectScaleX = new fabric.Rect({
    top: 200,
    left: 50,
    width: 100,
    height: 100,
    scaleX: 1.2,
  });

  const rectScaleY = new fabric.Rect({
    top: 200,
    left: 200,
    width: 100,
    height: 100,
    scaleY: 1.2,
  });

  //flip square
  const triangleFlipY = new fabric.Triangle({
    top: 200,
    left: 350,
    width: 100,
    height: 100,
    flipY: true,
  });

  canvas.add(
    rectRotated,
    rectRotated2,
    rectSkew,
    rectSkew2,
    rectScaleX,
    rectScaleY,
    triangleFlipY
  );
});
