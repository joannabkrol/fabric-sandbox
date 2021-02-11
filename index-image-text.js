//Fourth canvas
document.addEventListener("DOMContentLoaded", function () {
  /** @type { import("fabric/fabric-impl") } */
  const fabric = window.fabric;

  const canvas = new fabric.Canvas("canvas4");

  fabric.Image.fromURL("my-image.jpg", function (oImg) {
    oImg
      .scale(0.1)
      .set("flipY", true)
      .set("flipX", true)
      .set("left", 150)
      .set("top", 50);
    canvas.add(oImg);
  });

  //Add image, which already exist in html file
  var imgElement = document.getElementById("girl");
  var imgInstance = new fabric.Image(imgElement, {
    width: 200,
    height: 150,
    left: 500,
    top: 300,
  });

  canvas.add(imgInstance);

  //Apply filter
  var img_url =
    "https://cdn.shopify.com/s/files/1/1061/1924/files/Eye_Roll_Emoji_large.png?v=1541768914";
  fabric.Image.fromURL(
    img_url,
    function (img) {
      img.filters.push(new fabric.Image.filters.Grayscale());
      img.applyFilters();
      img.scale(0.1);
      canvas.add(img);
    },
    { crossOrigin: "anonymous" }
  );

  //Add text
  const text = new fabric.Text("hello world", { left: 500, top: 100 });
  canvas.add(text);

  const arialText = new fabric.Text("Arial text", {
    left: 500,
    top: 200,
    fontFamily: "Arial",
    fontSize: "24",
    fontWeight: "bold",
    stroke: "#fff",
    fill: "#ff1318",
    textAlign: "right",
  });

  canvas.add(arialText);

  //Wvents
  arialText.on("selected", function () {
    console.log("selected Arial text");
  });
});
