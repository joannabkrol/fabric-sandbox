//Third canvas
document.addEventListener("DOMContentLoaded", function () {
  /** @type { import("fabric/fabric-impl") } */
  const fabric = window.fabric;

  const canvas = new fabric.Canvas("canvas3");

  //'Jumping" animation
  const rect = new fabric.Rect({
    top: 10,
    left: 150,
    width: 50,
    height: 50,
    fill: "#7E57C2",
    rx: 5,
    ry: 5,
  });

  canvas.add(rect);

  let counter = 1;
  const intvl = setInterval(() => {
    //get the top and left values
    const top = rect.get("top");
    const left = rect.get("left");

    //update top  and left values
    rect.set("top", top + 10);
    rect.set("left", left + 10);

    //render all shapes
    canvas.renderAll();

    //increment counter
    if (++counter > 6) {
      clearInterval(intvl);
    }
  }, 500);

  //Smooth animation
  const rect2 = new fabric.Rect({
    top: 50,
    left: 50,
    width: 50,
    height: 50,
    fill: "#7E57C2",
    rx: 5,
    ry: 5,
  });

  canvas.add(rect2);
  let startTime = null;

  function update(timestamp) {
    startTime = startTime || timestamp;
    const progress = (timestamp - startTime) / 3000;

    rect2.set({
      top: 50 + progress * 60,
      left: 50 + progress * 60,
    });

    canvas.renderAll();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);

  //Smooth animation with fabric.js animate()
  const rect3 = new fabric.Rect({
    top: 150,
    left: 50,
    width: 50,
    height: 50,
    fill: "#7E57C2",
    rx: 5,
    ry: 5,
  });

  canvas.add(rect3);

  rect3.animate(
    {
      top: "+=300",
      left: 300,
    },
    {
      onChange: canvas.renderAll.bind(canvas),
      duration: 3000,
      easing: fabric.util.ease.easeInOutSine,
    }
  );
});
