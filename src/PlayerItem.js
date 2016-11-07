var bcoinsuu = 0;
var scoinsuu = 0;
var gcoinsuu = 0;

var itemLayer = cc.Layer.extend({
   ctor: function() {
      this._super();
      plitem = new PlItem();
      this.addChild(plitem);
      //cc.eventManager.addListener(listener, this);

   }
});

var PlItem = cc.Layer.extend({
   ctor: function() {
      this._super();
      bcoinitem = new BcoinItem();
      this.addChild(bcoinitem);
      scoinitem = new ScoinItem();
      this.addChild(scoinitem);
      gcoinitem = new GcoinItem();
      this.addChild(gcoinitem);
      bcoinitem02 = new BcoinItem();
      this.addChild(bcoinitem02);
      scoinitem02 = new ScoinItem();
      this.addChild(scoinitem02);
      gcoinitem02 = new GcoinItem();
      this.addChild(gcoinitem02);
      },
    });
//◆◆◆◆◆◆◆◆◆◆銅コイン◆◆◆◆◆◆◆◆◆◆
var BcoinItem = cc.Sprite.extend({
   ctor: function() {
      this._super();
      this.workingFlag = false;
      this.xSpeed = 0;
      this.ySpeed = 0;
      //this.jumpFlag = false;

      if(bcoinsuu == 1){
        for (i = 0; i < 7; i++) {　　　　　　
           for (j = 0; j < 10; j++) {
              if (level[i][j] == 6) {
                 this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
                 console.log("こいん");
                 bcoinsuu++;

              }
           }
        }
      }


      for (i = 0; i < 7; i++) {　　　　　　
         for (j = 0; j < 10; j++) {
            if (level[i][j] == 6 && bcoinsuu == 0) {
               this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
               console.log("こいん");
               bcoinsuu++;

            }
         }
      }

      // スプライトシートをキャッシュに登録
      cc.spriteFrameCache.addSpriteFrames(res.coin_plist, res.coin_sheet);

      // スプライトフレームを取得 player01,player02はplistの中で定義されいいる
      var frame1 = cc.spriteFrameCache.getSpriteFrame("b_coin01");
      var frame2 = cc.spriteFrameCache.getSpriteFrame("b_coin02");
      var frame3 = cc.spriteFrameCache.getSpriteFrame("b_coin03");
      var frame4 = cc.spriteFrameCache.getSpriteFrame("b_coin04");
      var frame5 = cc.spriteFrameCache.getSpriteFrame("b_coin05");
      var frame6 = cc.spriteFrameCache.getSpriteFrame("b_coin06");
      var frame7 = cc.spriteFrameCache.getSpriteFrame("b_coin07");
      var frame8 = cc.spriteFrameCache.getSpriteFrame("b_coin08");

      //スプライトフレームを配列に登録
      var animationframe = [];
      animationframe.push(frame1);
      animationframe.push(frame2);
      animationframe.push(frame3);
      animationframe.push(frame4);
      animationframe.push(frame5);
      animationframe.push(frame6);
      animationframe.push(frame7);
      animationframe.push(frame8);
      //スプライトフレームの配列を連続再生するアニメーションの定義
      var animation = new cc.Animation(animationframe, 0.1);
      //永久ループのアクションを定義
      var action = new cc.RepeatForever(new cc.animate(animation));
      //実行
      this.initWithFile(res.coin_sheet);
      //if(pif == 1){
        this.runAction(action);
      //}

      this.scheduleUpdate();
   },
 });
//◆◆◆◆◆◆◆◆◆◆銀コイン◆◆◆◆◆◆◆◆◆◆
 var ScoinItem = cc.Sprite.extend({
    ctor: function() {
       this._super();
       this.workingFlag = false;
       this.xSpeed = 0;
       this.ySpeed = 0;
       //this.jumpFlag = false;

       if(scoinsuu == 1){
         for (i = 0; i < 7; i++) {　　　　　　
            for (j = 0; j < 10; j++) {
               if (level[i][j] == 7) {
                  this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
                  console.log("こいん");
                  scoinsuu++;

               }
            }
         }
       }


       for (i = 0; i < 7; i++) {　　　　　　
          for (j = 0; j < 10; j++) {
             if (level[i][j] == 7 && scoinsuu == 0) {
                this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
                console.log("銀こいん");
                scoinsuu++;
             }
          }
       }

       // スプライトシートをキャッシュに登録
       cc.spriteFrameCache.addSpriteFrames(res.coin_plist, res.coin_sheet);

       // スプライトフレームを取得 player01,player02はplistの中で定義されいいる
       var frame1 = cc.spriteFrameCache.getSpriteFrame("s_coin01");
       var frame2 = cc.spriteFrameCache.getSpriteFrame("s_coin02");
       var frame3 = cc.spriteFrameCache.getSpriteFrame("s_coin03");
       var frame4 = cc.spriteFrameCache.getSpriteFrame("s_coin04");
       var frame5 = cc.spriteFrameCache.getSpriteFrame("s_coin05");
       var frame6 = cc.spriteFrameCache.getSpriteFrame("s_coin06");
       var frame7 = cc.spriteFrameCache.getSpriteFrame("s_coin07");
       var frame8 = cc.spriteFrameCache.getSpriteFrame("s_coin08");

       //スプライトフレームを配列に登録
       var animationframe = [];
       animationframe.push(frame1);
       animationframe.push(frame2);
       animationframe.push(frame3);
       animationframe.push(frame4);
       animationframe.push(frame5);
       animationframe.push(frame6);
       animationframe.push(frame7);
       animationframe.push(frame8);
       //スプライトフレームの配列を連続再生するアニメーションの定義
       var animation = new cc.Animation(animationframe, 0.1);
       //永久ループのアクションを定義
       var action = new cc.RepeatForever(new cc.animate(animation));
       //実行
       this.initWithFile(res.coin_sheet);
       //if(pif == 1){
         this.runAction(action);
       //}

       this.scheduleUpdate();
    },
  });
//◆◆◆◆◆◆◆◆◆◆金コイン◆◆◆◆◆◆◆◆◆◆
  var GcoinItem = cc.Sprite.extend({
     ctor: function() {
        this._super();
        this.workingFlag = false;
        this.xSpeed = 0;
        this.ySpeed = 0;
        //this.jumpFlag = false;

        if(gcoinsuu == 1){
          for (i = 0; i < 7; i++) {　　　　　　
             for (j = 0; j < 10; j++) {
                if (level[i][j] == 8) {
                   this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
                   console.log("こいん");
                   gcoinsuu++;

                }
             }
          }
        }

        for (i = 0; i < 7; i++) {　　　　　　
           for (j = 0; j < 10; j++) {
              if (level[i][j] == 8 && gcoinsuu == 0) {
                 this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
                 console.log("金こいん");
                 gcoinsuu++;
              }
           }
        }

        // スプライトシートをキャッシュに登録
        cc.spriteFrameCache.addSpriteFrames(res.coin_plist, res.coin_sheet);

        // スプライトフレームを取得 player01,player02はplistの中で定義されいいる
        var frame1 = cc.spriteFrameCache.getSpriteFrame("g_coin01");
        var frame2 = cc.spriteFrameCache.getSpriteFrame("g_coin02");
        var frame3 = cc.spriteFrameCache.getSpriteFrame("g_coin03");
        var frame4 = cc.spriteFrameCache.getSpriteFrame("g_coin04");
        var frame5 = cc.spriteFrameCache.getSpriteFrame("g_coin05");
        var frame6 = cc.spriteFrameCache.getSpriteFrame("g_coin06");
        var frame7 = cc.spriteFrameCache.getSpriteFrame("g_coin07");
        var frame8 = cc.spriteFrameCache.getSpriteFrame("g_coin08");

        //スプライトフレームを配列に登録
        var animationframe = [];
        animationframe.push(frame1);
        animationframe.push(frame2);
        animationframe.push(frame3);
        animationframe.push(frame4);
        animationframe.push(frame5);
        animationframe.push(frame6);
        animationframe.push(frame7);
        animationframe.push(frame8);
        //スプライトフレームの配列を連続再生するアニメーションの定義
        var animation = new cc.Animation(animationframe, 0.1);
        //永久ループのアクションを定義
        var action = new cc.RepeatForever(new cc.animate(animation));
        //実行
        this.initWithFile(res.coin_sheet);
        //if(pif == 1){
          this.runAction(action);
        //}

        this.scheduleUpdate();
     },
   });
