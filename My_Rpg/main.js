RPGJS.defines({
    canvas: "canvas_id"
}).ready(function() {

    RPGJS.Scene.map();

});
RPGJS.Database = {
    "actors": {
        "1": {
            "graphic": "1"
        }
    }
};

RPGJS.Materials = {
    "characters": {
        "1": "event1.png"
    }
};

RPGJS.defines({
    canvas: "canvas_id",
    autoload: false
}).ready(function() {

	 
    RPGJS.Player.init({
        actor: 1,
        start: {x: 10, y: 10, id: 1} // Here, map id doesn't exist
    });

    RPGJS.Scene.map();
	var spriteset = scene.getSpriteset();    // returns Spriteset_Map
    var chara = spriteset.getEvent(1);       // returns Sprite_Character

    // new element (CanvasEngine) 
    // http://canvasengine.net/doc/?p=tuto-element.html
    var el = scene.createElement();
    el.fillStyle = "red";
    el.fillRect(0, 0, 100, 100);

    spriteset.map.append(el); // add element in map element
});