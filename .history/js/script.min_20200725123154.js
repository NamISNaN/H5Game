function lazyLoad() {
  $('img.lazy').each(function (a, b) {
    $(b).attr('src', $(this).attr('data-src'))
  })
}
function JSONData(a, b) {
  if (!b.frames)
    return (
      console.warn(
        "Phaser.AnimationParser.JSONData: Invalid Texture Atlas JSON given, missing 'frames' array"
      ),
      void console.log(b)
    )
  for (var d, e = new c.FrameData(), f = b.frames, g = 0; g < f.length; g++)
    (d = e.addFrame(
      new c.Frame(
        g,
        f[g].frame.x,
        f[g].frame.y,
        f[g].frame.w,
        f[g].frame.h,
        f[g].filename
      )
    )),
      f[g].trimmed &&
        d.setTrim(
          f[g].trimmed,
          f[g].sourceSize.w,
          f[g].sourceSize.h,
          f[g].spriteSourceSize.x,
          f[g].spriteSourceSize.y,
          f[g].spriteSourceSize.w,
          f[g].spriteSourceSize.h
        )
  return e
}
var winWidth = window.innerWidth,
  winHeight = window.innerHeight,
  baseUrl = './',
  funObj,
  Game = {
    init: function () {
      var a = this
      a.game = new Phaser.Game(
        winWidth,
        winHeight,
        Phaser.AUTO,
        'game',
        {
          preload: a.preload,
          create: a.create,
          update: a.update,
          render: a.render,
        },
        !0
      )
    },
    preload: function () {
      var a = this
      ;(a.left = 0.68 * ratio),
        (a.top = 0.6 * ratio),
        (a.player_v = 200),
        (a.index = 0),
        (a.diceCan = !1),
        (a.diceNum = !1),
        (a.flag = !0),
        (a.direction = !0),
        (a.speak_dir = ''),
        (a.num = 0),
        (a.walking = !1),
        a.game.load.spritesheet(
          'dice',
          baseUrl + 'images/dice_group.png',
          50,
          50,
          10
        ),
        a.game.load.spritesheet(
          'player',
          baseUrl + 'images/player.png',
          82,
          108,
          8
        ),
        a.game.load.image('background', baseUrl + 'images/background.png'),
        a.game.load.spritesheet(
          'speak_group',
          baseUrl + 'images/speak_group.png',
          338,
          232,
          4
        ),
        a.game.load.spritesheet(
          'diceBtn',
          baseUrl + 'images/btn_group.png',
          180,
          124,
          2
        ),
        a.game.load.image('numCon', baseUrl + 'images/numCon.png', 65, 65),
        a.game.load.audio(
          'bgAudio',
          'http://mat1.gtimg.com/zj/yuwanli/dzw1612/news_yearPlan/source/bg.mp3'
        ),
        a.game.load.audio(
          'playDice',
          'http://mat1.gtimg.com/zj/yuwanli/dzw1612/news_yearPlan/source/dice.mp3'
        )
    },
    create: function () {
      var a = this
      ;(funObj = this),
        (a.ifMusic = !0),
        a.game.physics.startSystem(Phaser.Physics.ARCADE),
        a.game.world.setBounds(0, 0, winWidth, 19.3 * ratio + 200),
        (a.playDice = function () {
          var a = this
          if (a.diceCan) {
            a.ifMusic && a.diceAudio.play(),
              result.r4.num++,
              a.dice.animations.play('diceRun'),
              a.dice_btn.animations.play('btnRun')
            var b = parseInt(100 * Math.random()) + 100
            ;(a.dice.body.velocity.y = -1 * b),
              (a.diceCan = !1),
              (a.diceNum = !0),
              (a.speak_con.visible = !1)
          }
        }),
        (a.collideHandle = function () {
          if (a.diceNum) {
            a.diceAudio.pause(),
              a.dice.animations.stop('diceRun'),
              a.dice_btn.animations.stop('btnRun')
            var b = parseInt(6 * Math.random())
            ;(a.dice.frame = b + 4),
              (a.diceNum = !1),
              (a.num = b + 1),
              (a.direction = !0),
              a.goDes()
          }
        }),
        (a.goDes = function () {
          if (((a.diceCan = !1), 0 == a.num)) {
            var b = jsonData[a.index]
            return (
              (a.diceCan = !0),
              a.initSpeak(b.speak, b),
              (a.walking = !1),
              (a.collisionPlayer.x = 0),
              void (a.collisionPlayer.y = 0)
            )
          }
          var b = jsonData[a.index]
          if (
            (a.direction ? a.player.play(b.dir) : a.player.play(b._dir),
            a.num > 0)
          ) {
            ;(a.direction = !0),
              (a.walking = !0),
              a.index++,
              (a.collisionPlayer.x =
                (jsonData[a.index].x / 100) * ratio + a.left),
              (a.collisionPlayer.y =
                (jsonData[a.index].y / 100) * ratio + a.top)
            var c = a.index - 1
            Math.abs(parseInt(jsonData[a.index].x) - parseInt(jsonData[c].x)) >
            0
              ? (parseInt(jsonData[a.index].x) - parseInt(jsonData[c].x) > 0
                  ? (a.player.body.velocity.x = a.player_v)
                  : (a.player.body.velocity.x = -a.player_v),
                a.player.body.setSize(
                  1,
                  a.player.height,
                  -0.1 * a.player.width,
                  0
                ))
              : (a.player.body.setSize(
                  a.player.width,
                  1,
                  0,
                  0.1 * a.player.height
                ),
                (a.player.body.velocity.y = a.player_v))
          }
          if (a.num < 0) {
            ;(a.direction = !1),
              (a.walking = !0),
              a.index--,
              (a.collisionPlayer.x =
                (jsonData[a.index].x / 100) * ratio + a.left),
              (a.collisionPlayer.y =
                (jsonData[a.index].y / 100) * ratio + a.top)
            var c = a.index + 1
            Math.abs(parseInt(jsonData[a.index].x) - parseInt(jsonData[c].x)) >
            0
              ? (parseInt(jsonData[a.index].x) - parseInt(jsonData[c].x) > 0
                  ? (a.player.body.velocity.x = a.player_v)
                  : (a.player.body.velocity.x = -a.player_v),
                a.player.body.setSize(
                  1,
                  a.player.height,
                  -0.1 * a.player.width,
                  0
                ))
              : (a.player.body.setSize(
                  a.player.width,
                  1,
                  0,
                  0.1 * a.player.height
                ),
                (a.player.body.velocity.y = -a.player_v))
          }
        }),
        (a.initSpeak = function (b, c) {
          console.log(c)
          if ((c.result && result[c.result].num++, b)) {
            switch (
              ((a.speak_dir = b),
              (a.text.text = c.text),
              $('.infoCon').fadeIn(200),
              (a.diceCan = !1),
              $('#text h1').html(c.alertInfo.h1),
              $('#text p').html(c.alertInfo.p),
              b)
            ) {
              case '0':
                a.speak.frame = 0
                break
              case '1':
                a.speak.frame = 1
                break
              case '2':
                a.speak.frame = 2
            }
            'stop' == c.alertInfo.status && (a.diceCan = !1),
              $(document).one('tap', '.page3 .infoCon', function () {
                if ('stop' == c.alertInfo.status)
                  (a.numText.text = '3'), a.stopThree()
                else {
                  var b = parseInt(c.alertInfo.status)
                  b > 0
                    ? (result.r6.num++, (a.direction = !0))
                    : (result.r5.num++, (a.direction = !1)),
                    (a.num = b),
                    a.goDes(),
                    (a.diceCan = !1)
                }
                ;(a.speak_con.visible = !0), $(this).fadeOut(200)
              })
          } else a.diceCan = !0
        }),
        (a.stopThree = function () {
          a.countDown.visible = !0
          var b = 3,
            c = setInterval(function () {
              return (
                b--,
                b <= 0
                  ? ((a.diceCan = !0),
                    clearInterval(c),
                    void (a.countDown.visible = !1))
                  : void (a.numText.text = b)
              )
            }, 1e3)
        }),
        (a.playerCollision = function () {
          ;(a.flag = !0),
            (a.player.body.velocity.x = 0),
            (a.player.body.velocity.y = 0),
            (a.collisionPlayer.body.velocity.x = 0),
            (a.collisionPlayer.body.velocity.y = 0),
            a.walking && (a.direction ? (a.num -= 1) : (a.num += 1), a.goDes())
        }),
        (a.initPlayer = function () {
          var a = this,
            b = a.game.add
              .tween(a.player)
              .to(
                { y: a.top + 0.77 * ratio },
                1e3,
                Phaser.Easing.Linear.None,
                !0,
                0,
                0
              ),
            c = a.game.add
              .tween(a.player)
              .to(
                { x: a.left + 0.57 * ratio },
                500,
                Phaser.Easing.Linear.None,
                !1,
                0,
                0
              )
          b.onComplete.add(function () {
            a.player.animations.play('player_right'), c.start()
          }, this),
            c.onComplete.add(function () {
              a.diceCan = !0
            })
        }),
        (a.getResult = function () {
          var b
          b =
            result.r9.num >= 1
              ? 'r9'
              : result.r2.num >= 2
              ? 'r2'
              : result.r3.num >= 2
              ? 'r3'
              : result.r4.num >= 20
              ? 'r4'
              : result.r5 >= 6
              ? 'r5'
              : result.r6 >= 6
              ? 'r6'
              : result.r7 >= 1
              ? 'r7'
              : result.r8 >= 1
              ? 'r8'
              : result.r1 >= 3
              ? 'r1'
              : result.r10 >= 1
              ? 'r10'
              : 'r1' + parseInt(2 * Math.random() + 1)
          var c = result[b].reason,
            d = result[b].desc,
            e = result[b].name,
            f = result[b].title
          $('#reason').html('(' + c + ')'),
            $('#desc').html(d),
            $('#name').html(e),
            (window.shareData.tTitle = f),
            setTimeout(function () {
              a.restart(),
                $('.page3').removeClass('active'),
                $('.page4').addClass('active'),
                $('.audio').fadeOut()
            }, 500)
        }),
        (a.restart = function () {
          ;(a.index = 0),
            (a.diceCan = !1),
            (a.diceNum = !1),
            (a.flag = !0),
            (a.direction = !0),
            (a.speak_dir = ''),
            (a.num = 0),
            (a.walking = !1),
            (a.player.x = a.left),
            (a.player.y = 0),
            (a.player.body.velocity.x = 0),
            (a.player.body.velocity.y = 0),
            a.player.animations.play('player_down'),
            a.initPlayer()
        }),
        (a.game_group = a.game.add.group()),
        (a.dice_group = a.game.add.group()),
        (a.speak_con = a.game.add.group()),
        (a.countDown = a.game.add.group()),
        (a.bg = a.game.add.image(a.left, a.top, 'background')),
        (a.bg.width = 5.2 * ratio),
        (a.bg.height = 19.3 * ratio),
        a.game_group.add(a.bg),
        (a.dice_btn = a.game.add.sprite(
          2.3 * ratio,
          winHeight - 0.2 * ratio,
          'diceBtn',
          0
        )),
        (a.dice_btn.width = 1.8 * ratio),
        (a.dice_btn.height = 1.24 * ratio),
        a.dice_btn.anchor.set(0, 1),
        a.game.physics.arcade.enable(a.dice_btn),
        a.dice_btn.body.setSize(2 * a.dice_btn.width, 5, 0, -0.3 * ratio),
        (a.dice_btn.body.immovable = !0),
        (a.dice_btn.inputEnabled = !0),
        a.dice_btn.events.onInputDown.add(a.playDice, this),
        a.dice_btn.animations.add('btnRun', [0, 1], 10, !0),
        a.dice_group.add(a.dice_btn),
        (a.dice = a.game.add.sprite(
          2.1 * ratio,
          winHeight - 1 * ratio,
          'dice',
          4
        )),
        (a.dice.width = 1 * ratio),
        (a.dice.height = 1 * ratio),
        a.dice.anchor.set(0, 1),
        a.dice_group.add(a.dice),
        a.game.physics.arcade.enable(a.dice),
        (a.dice.body.gravity.y = 200),
        a.dice.body.bounce.set(0.5),
        (a.dice.body.collideWorldBounds = !0),
        a.dice.animations.add('diceRun', [0, 1, 2, 3], 20, !0),
        (a.player = a.game.add.sprite(a.left, 0, 'player')),
        a.player.anchor.set(0.6, 0.8),
        (a.player.width = 0.82 * ratio),
        (a.player.height = 1.08 * ratio),
        a.game.physics.arcade.enable(a.player),
        a.player.body.setSize(1, a.player.height, -0.1 * a.player.width, 0),
        a.player.animations.add('player_back', [0, 1], 5, !0),
        a.player.animations.add('player_left', [2, 3], 5, !0),
        a.player.animations.add('player_down', [4, 5], 5, !0),
        a.player.animations.add('player_right', [6, 7], 5, !0),
        a.player.animations.play('player_down'),
        (a.collisionPlayer = a.game.add.sprite(a.left, 0, 'player')),
        a.collisionPlayer.anchor.set(0.5, 0.5),
        (a.collisionPlayer.width = 10),
        (a.collisionPlayer.height = 10),
        (a.collisionPlayer.immovable = !0),
        (a.collisionPlayer.alpha = 0),
        a.game.physics.arcade.enable(a.collisionPlayer),
        (a.speak = a.game.add.sprite(0, 0, 'speak_group', 1)),
        (a.speak.width = 3.38 * ratio),
        (a.speak.height = 2.32 * ratio),
        a.speak_con.add(a.speak),
        (a.numCon = a.game.add.image(0, 0, 'numCon')),
        (a.numCon.width = 0.65 * ratio),
        (a.numCon.height = 0.65 * ratio),
        a.countDown.add(a.numCon)
      var b = {
        font: 0.4 * ratio + 'px Arial',
        fill: '#000',
        wordWrapWidth: a.numCon.width,
        align: 'center',
      }
      ;(a.numText = a.game.add.text(0, 0, '3', b)),
        a.numText.anchor.set(0.5),
        a.countDown.add(a.numText),
        (a.countDown.visible = !1)
      var c = {
        font: 0.3 * ratio + 'px myFont',
        wordWrap: !0,
        wordWrapWidth: 0.9 * a.speak.width,
        align: 'center',
      }
      ;(a.text = a.game.add.text(0, 0, '我是腻腻', c)),
        a.text.anchor.set(0.5, 0.5),
        a.speak_con.add(a.text),
        (a.speak_con.visible = !1),
        (a.cursors = a.game.input.keyboard.createCursorKeys()),
        (a.dice_group.fixedToCamera = !0),
        a.game.camera.follow(a.player),
        (a.bgAudio = a.game.add.audio('bgAudio', 1, !0)),
        (a.diceAudio = a.game.add.audio('playDice', 1, !0)),
        a.game_group.add(a.speak_con),
        a.game_group.add(a.dice_group),
        $(document).on('tap', '#audio', function () {
          $(this).toggleClass('on'),
            (a.ifMusic = !a.ifMusic),
            a.ifMusic ? a.bgAudio.play() : a.bgAudio.pause()
        })
    },
    update: function () {
      var a = this
      switch (
        (a.game.physics.arcade.collide(
          a.player,
          a.collisionPlayer,
          a.playerCollision,
          null,
          this
        ),
        a.game.physics.arcade.collide(a.dice_btn, a.dice, a.collideHandle),
        (a.numText.x = Math.floor(a.numCon.x + a.numCon.width / 2)),
        (a.numText.y = Math.floor(a.numCon.y + a.numCon.height / 2)),
        (a.countDown.x = a.player.x - 0.45 * a.player.width),
        (a.countDown.y = a.player.y - 1.4 * a.player.height),
        (a.text.y = a.speak.y + 0.5 * a.speak.height),
        (a.text.x = a.speak.x + 0.55 * a.speak.width),
        a.speak_dir)
      ) {
        case '0':
          ;(a.speak_con.x = a.player.x - 0.9 * a.speak.width),
            (a.speak_con.y = a.player.y - 1.2 * a.speak.height)
          break
        case '1':
          ;(a.speak_con.x = a.player.x - 0.1 * a.speak.width),
            (a.speak_con.y = a.player.y - 1.2 * a.speak.height)
          break
        case '2':
          ;(a.speak_con.x = a.player.x - 0.8 * a.speak.width),
            (a.speak_con.y = a.player.y + 0.1 * a.speak.height)
      }
      if (
        (a.cursors.left.isDown &&
          a.flag &&
          ((a.direction = !1), (a.num = -1), a.goDes(), (a.flag = !1)),
        a.cursors.right.isDown &&
          a.flag &&
          ((a.direction = !0), (a.num = 1), a.goDes(), (a.flag = !1)),
        58 == a.index)
      )
        return a.getResult(), void (a.index = 0)
    },
    render: function () {},
  },
  JsLoader = {
    load: function (a, b) {
      var c = document.createElement('script')
      c.setAttribute('type', 'text/javascript'),
        c.setAttribute('src', a),
        document.getElementsByTagName('head')[0].appendChild(c),
        /msie/.test(window.navigator.userAgent.toLowerCase())
          ? (c.onreadystatechange = function () {
              ;('loaded' != this.readyState && 'complete' != this.readyState) ||
                b()
            })
          : /gecko/.test(window.navigator.userAgent.toLowerCase())
          ? (c.onload = function () {
              b()
            })
          : b()
    },
  }
Pace.on('hide', function (a) {
  $('.load').hide(), lazyLoad(), $('.page1').addClass('active')
}),
  $(function () {
    JsLoader.load('./js/phaser.min.js', function () {
      Game.init()
    }),
      $('.page1').bind('tap', function () {
        $(this).removeClass('active').addClass('out'),
          setTimeout(function () {
            $('.page1').fadeOut(200), $('.page2').addClass('active')
          }, 2e3)
      }),
      $(document).on('tap', '#more', function () {
        $('.page4').removeClass('active'),
          $('.page3').addClass('active'),
          $('.audio').fadeIn()
      }),
      $(document).on('tap', '#share', function () {
        $('.page4 .shareCon').fadeIn(200)
      }),
      $(document).on('tap', '#next', function () {
        $('.page3').removeClass('active'), $('.page4').addClass('active')
      }),
      $(document).on('tap', '.page4 .shareCon', function () {
        $(this).fadeOut(200)
      }),
      $(document).on('webkitAnimationEnd', '.page2.active .user', function () {
        $('.page2').removeClass('active').addClass('out'),
          $('.page3').addClass('active'),
          funObj.initPlayer(),
          $('.audio').fadeIn(),
          funObj.ifMusic && funObj.bgAudio.play()
      })
  }) /*  |xGv00|ef7b07e7b76dbb24f4c4b0460da80161 */
