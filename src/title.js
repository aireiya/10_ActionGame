var size;
var winSize;
var color

var title = cc.Layer.extend({
    ctor: function() {
        this._super();
        winSize = cc.director.getWinSize();

        //var label = cc.LabelTTF.create("GameOver", "Arial", 40);
        //label.setPosition(size.width / 2, size.height / 2);
        //this.addChild(label, 1);

        audioEngine = cc.audioEngine;
        //bgm再生
        if (!audioEngine.isMusicPlaying()) {
          //audioEngine.playMusic("res/bgm_main.mp3", true);
          audioEngine.playMusic(res.title_mp3, true);
        }

        //森の背景
        var backgroundSprite = cc.Sprite.create(res.background_png);
        var size = backgroundSprite.getContentSize();
        //console.log(size);
        this.addChild(backgroundSprite);
        //console.log(winSize.width,winSize.height);
        backgroundSprite.setPosition(winSize.width / 2, winSize.height / 2);
        //背景画像を画面の大きさに合わせるためのScaling処理
        backgroundSprite.setScale(winSize.width / size.width, winSize.height / size.height);

        //タイトル
        drop02 = cc.Sprite.create(res.title_png);　
        drop02.setPosition(winSize.width / 2, winSize.height / 2);　
        this.addChild(drop02);

        //タイトル
        drop03 = cc.Sprite.create(res.start_png);　
        drop03.setPosition(winSize.width / 2, winSize.height * 0.3);　
        this.addChild(drop03);

        /*var drop02 = cc.Sprite.create(res.replay_png);　
        drop02.setPosition(size.width / 2, size.height * 0.2);　
        this.addChild(drop02);*/

        // タップイベントリスナーを登録する
                cc.eventManager.addListener({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: true,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                }, this);

        return true;
    },
      onTouchBegan: function(touch, event) {
        return true;
      },
      onTouchMoved: function(touch, event) {},
      onTouchEnded: function(touch, event) {
        // 次のシーンに切り替える
        var a = cc.TransitionFade.create(2.0, new gameScene());
        cc.director.runScene(a);
      },
});

//パーティクル用のレイヤー
var particleLayer = cc.Layer.extend({
  skillSelect: 0,
  skillLevel: 1,
  skillCnt: 1,

  ctor: function() {
    this._super();
    size = cc.winSize;
    this.scheduleUpdate();
    return true;

  },
  update: function(_dt) {
    this.skillParticle(350, 100);
  },
  //属性とスキルレベルと座標を与えてパーティクルを生成する関数
    skillParticle: function(x, y) {
      var tempParticle = new cc.ParticleSystem(eval(res.sparkle_frames_png));
      tempParticle.setPosition(x, y);
      this.addChild(tempParticle, 20);
      tempParticle.setAutoRemoveOnFinish(true);
    },
});

var TitleScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(140, 200, 140, 128));
        this.addChild(backgroundLayer);

        var layer1 = new title();
        this.addChild(layer1);
    }
});
