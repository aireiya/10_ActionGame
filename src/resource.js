var res = {
   player_sheet: "res/sir_awesome_frames.png",
   player_plist: "res/player02.plist",
   ground_png: "res/background_front.png",
   background_png: "res/background_back.png",
   block_png: "res/block96x96.png",
   bat_frames: "res/bat_frames.png",
   leftbutton_png: "res/leftbutton.png",
   rightbutton_png: "res/rightbutton.png",
   title_png: "res/title.png",
   start_png: "res/start.png",
   side_png : "res/curtain.png",
   up_png : "res/ui_panels.png",

   zon_sheet : "res/zombie_frames.png",
   zon_plist : "res/zonbi.plist",

   coin_sheet : "res/coins.png",
   coin_plist : "res/coin.plist",

   gslime_sheet : "res/slime_green_frames.png",
   gslime_plist : "res/slime.plist",

   hp_png : "res/item_health.png",

   main_mp3 : "res/bgm/battle37.mp3",
   result_mp3 : "res/bgm/result09.mp3",
   select_mp3 : "res/bgm/select11.mp3",
   title_mp3 : "res/bgm/title10.mp3",
   //kyouka_mp3 : "res/bgm/kyouka07.mp3",

   //at01_mp3 : "res/se/battle16.mp3",

   //se01_mp3 : "res/se/point17.mp3",



};

var g_resources = [];
for (var i in res) {
   g_resources.push(res[i]);
}
