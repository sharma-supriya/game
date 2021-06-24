var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["da11c74a-f529-4f22-8339-afbd30280305","e07c2704-7715-41ff-b737-d4018fa06ee4","e167f05f-4cbd-4697-98ab-41c8268b5101","a6b387e0-f564-427d-81f3-4e5b879f55c1","1b79ee32-1526-4f04-a426-d8ef730eab6a","96579f7f-74e2-479f-b252-567316fb5441","b9e2bd96-7dc3-4cbf-a2b5-685886929bc2","144af183-f080-40e9-9d81-9c1dba17fe7e","d32b4d92-4142-42b8-804a-57db08ce7131","34ce4f0b-7d61-41cc-8185-e8c7c4558323","6499f80c-7946-42fb-a57b-70c29ea9759d","65ae0885-da94-4f3b-93af-74f134c50a36","0fee6c48-ead4-4d32-ae46-d3c0ea4d2463"],"propsByKey":{"da11c74a-f529-4f22-8339-afbd30280305":{"name":"underwater_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MPMKY_enWnWDhgcIwKmp6gdyEcFB9L5q/category_backgrounds/background_underwater.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"MPMKY_enWnWDhgcIwKmp6gdyEcFB9L5q","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MPMKY_enWnWDhgcIwKmp6gdyEcFB9L5q/category_backgrounds/background_underwater.png"},"e07c2704-7715-41ff-b737-d4018fa06ee4":{"name":"2_DRAGON_TRADEMARK_ORANGE-removebg-preview.png_1","sourceUrl":"assets/v3/animations/_forlTLTk4xORE4GJmJbwdRNQtY_kisedtAtUdnKPN8/e07c2704-7715-41ff-b737-d4018fa06ee4.png","frameSize":{"x":594,"y":420},"frameCount":1,"looping":true,"frameDelay":4,"version":"hmw1K7WKM0j9IKFBKSTGD8EWwDfnze17","loadedFromSource":true,"saved":true,"sourceSize":{"x":594,"y":420},"rootRelativePath":"assets/v3/animations/_forlTLTk4xORE4GJmJbwdRNQtY_kisedtAtUdnKPN8/e07c2704-7715-41ff-b737-d4018fa06ee4.png"},"e167f05f-4cbd-4697-98ab-41c8268b5101":{"name":"4991368_waves-png-sea-wave-cartoon-png-transparent-png-removebg-preview(KZWIkuvHo2v).jpg_1","sourceUrl":"assets/v3/animations/_forlTLTk4xORE4GJmJbwdRNQtY_kisedtAtUdnKPN8/e167f05f-4cbd-4697-98ab-41c8268b5101.png","frameSize":{"x":650,"y":283},"frameCount":1,"looping":true,"frameDelay":4,"version":"l7SetF54RNhGjGyIxjDQV_SxnG75vFtN","loadedFromSource":true,"saved":true,"sourceSize":{"x":650,"y":283},"rootRelativePath":"assets/v3/animations/_forlTLTk4xORE4GJmJbwdRNQtY_kisedtAtUdnKPN8/e167f05f-4cbd-4697-98ab-41c8268b5101.png"},"a6b387e0-f564-427d-81f3-4e5b879f55c1":{"name":"download__3_-removebg-preview.png_1","sourceUrl":"assets/v3/animations/_forlTLTk4xORE4GJmJbwdRNQtY_kisedtAtUdnKPN8/a6b387e0-f564-427d-81f3-4e5b879f55c1.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"nhWGmGrCos3aW2yzM8UvujLDmW5UHCy0","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/_forlTLTk4xORE4GJmJbwdRNQtY_kisedtAtUdnKPN8/a6b387e0-f564-427d-81f3-4e5b879f55c1.png"},"1b79ee32-1526-4f04-a426-d8ef730eab6a":{"name":"71FxJIhq4rL(mAjX7c2G7Vf).jpg_1","sourceUrl":null,"frameSize":{"x":42,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"clUMNG9z70baxh6MqFzg7faYSS4XSz6R","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":38},"rootRelativePath":"assets/1b79ee32-1526-4f04-a426-d8ef730eab6a.png"},"96579f7f-74e2-479f-b252-567316fb5441":{"name":"frame_0_delay-0.15s.png_1","sourceUrl":null,"frameSize":{"x":70,"y":54},"frameCount":2,"looping":true,"frameDelay":12,"version":"cEyPt6RlSpaOFIHmNabY798V75jvp1qt","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":108},"rootRelativePath":"assets/96579f7f-74e2-479f-b252-567316fb5441.png"},"b9e2bd96-7dc3-4cbf-a2b5-685886929bc2":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":".N8wwFrwPhOWVIOMt2MwBYxNu5BSDn0I","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/b9e2bd96-7dc3-4cbf-a2b5-685886929bc2.png"},"144af183-f080-40e9-9d81-9c1dba17fe7e":{"name":"ship.png_1","sourceUrl":null,"frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"7cnNsXgV5I9jvoVNmoQNboKDIQxHp.0P","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/144af183-f080-40e9-9d81-9c1dba17fe7e.png"},"d32b4d92-4142-42b8-804a-57db08ce7131":{"name":"bg.jpg","sourceUrl":"assets/v3/animations/_forlTLTk4xORE4GJmJbwdRNQtY_kisedtAtUdnKPN8/d32b4d92-4142-42b8-804a-57db08ce7131.png","frameSize":{"x":852,"y":480},"frameCount":1,"looping":true,"frameDelay":4,"version":"FOkY0011OKLZT3TWAwUWCtIAJAHEMoLj","loadedFromSource":true,"saved":true,"sourceSize":{"x":852,"y":480},"rootRelativePath":"assets/v3/animations/_forlTLTk4xORE4GJmJbwdRNQtY_kisedtAtUdnKPN8/d32b4d92-4142-42b8-804a-57db08ce7131.png"},"34ce4f0b-7d61-41cc-8185-e8c7c4558323":{"name":"93-936936_transparent-beach-clipart-png-island-cartoon-png-png.png_1","sourceUrl":null,"frameSize":{"x":86,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"sKvP5ALiZnmliNG.eUrMGpvIySrVjdvF","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":70},"rootRelativePath":"assets/34ce4f0b-7d61-41cc-8185-e8c7c4558323.png"},"6499f80c-7946-42fb-a57b-70c29ea9759d":{"name":"93-936936_transparent-beach-clipart-png-island-cartoon-png-png.png_2","sourceUrl":null,"frameSize":{"x":86,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"mbTVjEf5qkPQYGW8798KAL5qiXg296nr","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":70},"rootRelativePath":"assets/6499f80c-7946-42fb-a57b-70c29ea9759d.png"},"65ae0885-da94-4f3b-93af-74f134c50a36":{"name":"93-936936_transparent-beach-clipart-png-island-cartoon-png-png-removebg-preview.png_1","sourceUrl":null,"frameSize":{"x":100,"y":81},"frameCount":1,"looping":true,"frameDelay":12,"version":"NnRgz0GkvNsoVpRp7Q_8h5xTtj99c63s","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":81},"rootRelativePath":"assets/65ae0885-da94-4f3b-93af-74f134c50a36.png"},"0fee6c48-ead4-4d32-ae46-d3c0ea4d2463":{"name":"93-936936_transparent-beach-clipart-png-island-cartoon-png-png-removebg-preview.png_2","sourceUrl":null,"frameSize":{"x":100,"y":81},"frameCount":1,"looping":true,"frameDelay":12,"version":"JRPOtQyUuGJIjTez_feBxKYhKhKdAZe0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":81},"rootRelativePath":"assets/0fee6c48-ead4-4d32-ae46-d3c0ea4d2463.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(80, 350, 800, 800);
bg.setAnimation("4991368_waves-png-sea-wave-cartoon-png-transparent-png-removebg-preview(KZWIkuvHo2v).jpg_1");
bg.scale = 1;
bg.velocityX = 5;
bg.x = bg.width / 2;
var b2 = createSprite(80, 350, 800, 800);
b2.setAnimation("bg.jpg");
b2.visible = false;
b2.scale = 2;
var ship = createSprite(50, 190, 10, 10);
ship.setAnimation("download__3_-removebg-preview.png_1");
ship.scale = 1.3;
var k = createSprite(43, 210, 10, 10);
k.setAnimation("2_DRAGON_TRADEMARK_ORANGE-removebg-preview.png_1");
k.scale = 0.3;
var p = createSprite(70, 70, 10, 10);
p.setAnimation("frame_0_delay-0.15s.png_1");
p.scale = 2;
p.visible = false;
var gamestate = "s";
var s = createSprite(190, 200, 10, 10);
s.setAnimation("ship.png_1");
s.visible = false;
var i1 = createSprite(50, 80, 10, 10);
i1.setAnimation("93-936936_transparent-beach-clipart-png-island-cartoon-png-png-removebg-preview.png_2");
i1.visible = false;
i1.scale = 1.5;
var i2 = createSprite(370, 74, 10, 10);
i2.setAnimation("93-936936_transparent-beach-clipart-png-island-cartoon-png-png-removebg-preview.png_1");
i2.visible = false;
i2.scale = 1.5;
function draw() {
  background("white");
  createEdgeSprites();
  if (bg.x > 400) {
    bg.x = 200;
  }
  if (keyDown("right")) {
    ship.x = ship.x + 2;
  }
  if (ship.isTouching(rightEdge)) {
    ship.x = 50;
    ship.y = 190;
  }
  k.x = ship.x;
  if (World.frameCount == 80) {
    p.visible = true;
    p.velocityX = 4;
    gamestate = "y";
  }
  if (gamestate == "y") {
    textSize(10);
    fill("blue");
    text("CODE MOON GUESS THE LETTER WITH WHICH IT STARTS", 0, 30);
  }
  if (World.frameCount == 200 && gamestate == "y") {
    visi();
    if (keyDown("left")) {
      s.x = s.x - 2;
    }
    if (keyDown("up")) {
      s.y = s.y - 2;
    }
    if (keyDown("down")) {
      s.y = s.y + 2;
    }
    if (keyDown("right")) {
      s.x = s.x + 2;
    }
  }
  drawSprites();
}
function visi() {
  b2.visible = true;
  s.visible = true;
  bg.destroy();
  ship.destroy();
  k.destroy();
  i1.visible = true;
  i2.visible = true;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
