var jsonData = [
    {
      x: '57',
      y: '77',
      dir: 'player_right',
      _dir: 'player_left',
    },
    {
      x: '132',
      y: '77',
      dir: 'player_right',
      _dir: 'player_left',
    },
    {
      x: '190',
      y: '77',
      dir: 'player_right',
      _dir: 'player_left',
    },
    {
      x: '266',
      y: '77',
      dir: 'player_right',
      _dir: 'player_left',
      speak: '2',
      text: '诶？奥运会\n看起来好好玩的样子',
      alertInfo: {
        h1: '北京申奥成功',
        p: '恭喜，前进2步,中国成功取得第29届奥运会的举办权！',
        status: '2',
      },
    },
    {
      x: '378',
      y: '77',
      dir: 'player_right',
      _dir: 'player_left',
      speak: '2',
      text: '祝..祝我\n生...生日快乐！',
      alertInfo: {
        h1: '一岁啦',
        p: '恭喜，前进1步。宝贝降临一周年纪念',
        status: '1',
      },
    },
    {
      x: '470',
      y: '77',
      dir: 'player_down',
      _dir: 'player_left',
    },
    {
      x: '470',
      y: '157',
      dir: 'player_down',
      _dir: 'player_back',
      speak: '0',
      text: '讲真的，我只是\n在光盘的背面\n看到一个可爱的小孩，\n所以选的',
      result: 'r1',
      alertInfo: {
        h1: '抓阄',
        p:
          '恭喜，前进1步。被家人拉着去抓阄,\n据说可以看出小孩的特长。\n你抓了一张💿',
        status: '1',
      },
    },
    {
      x: '470',
      y: '230',
      dir: 'player_down',
      _dir: 'player_back',
      speak: '0',
      text: '一定要记得\n勤洗手戴口罩',
      result: 'r9',
      alertInfo: {
        h1: '非典流感蔓延',
        p:
          '抱歉，后退2步。2003年 非典持续蔓延达到高峰，紧张的抗疫情绪在全国蔓延开来',
        status: '-2',
      },
    },
    {
      x: '470',
      y: '325',
      dir: 'player_left',
      _dir: 'player_back',
      speak: '0',
      text: '人人人从人从人\n哇 地铁排队的人也\n太多了叭！',
      result: 'r3',
      alertInfo: {
        h1: '深圳地铁通车',
        p: '恭喜，前进2步。深圳1号线从罗湖车站启动，这座城市在高速发展之中',
        status: '2',
      },
    },
    {
      x: '350',
      y: '325',
      dir: 'player_left',
      _dir: 'player_right',
      speak: '0',
      text: '我可是德智\n体美全面\n发展的呢',
      result: 'r1',
      alertInfo: {
        h1: '三好学生',
        p: '恭喜，前进5步。因为表现优异，获得三好学生称号！不亏是你！',
        status: '5',
      },
    },
    {
      x: '273',
      y: '325',
      dir: 'player_left',
      _dir: 'player_right',
      speak: '0',
      text: 'ok\n我可一直都是个\n文明的小孩呢',
      result: 'r3',
      alertInfo: {
        h1: '深圳获批全国文明城市',
        p: '恭喜，前进2步。4岁的你也知道，出门不能随地丢垃圾',
        status: '2',
      },
    },
    {
      x: '220',
      y: '325',
      dir: 'player_left',
      _dir: 'player_right',
      speak: '0',
      text: '榴莲可比西\n瓜香多了！',
      result: 'r1',
      alertInfo: {
        h1: '夏天',
        p: '恭喜，前进2步。在夏天去游泳吃冰榴莲简直是最幸福的事情了',
        status: '2',
      },
    },
    {
      x: '145',
      y: '325',
      dir: 'player_left',
      _dir: 'player_right',
      speak: '1',
      text: '这..这是个小\n小的意外',
      result: 'r1',
      alertInfo: {
        h1: '滑板',
        p: '抱歉，休息3s。在小区玩滑板，结果刹不住车栽进草丛里',
        status: 'stop',
      },
    },
    {
      x: '52',
      y: '325',
      dir: 'player_down',
      _dir: 'player_right',
      speak: '1',
      text: '告诉你个秘密\n我以后会长成一个\n大大大大美女',
      alertInfo: {
        h1: '宝贝6岁生日',
        p: '恭喜，前进1步。宝贝降临的第六个年头啦，孩童时光总是充满欢笑',
        status: '1',
      },
    },
    {
      x: '52',
      y: '404',
      dir: 'player_down',
      _dir: 'player_back',
    },
    {
      x: '52',
      y: '475',
      dir: 'player_down',
      _dir: 'player_back',
      speak: '1',
      text: '开黑吗？\n我边路嫦娥\n贼强！',
      alertInfo: {
        h1: '嫦娥发射',
        p: '恭喜，前进2步。2007年嫦娥1号成功发射，探月工程取得重大成就',
        status: '2',
      },
    },
    {
      x: '52',
      y: '550',
      dir: 'player_down',
      _dir: 'player_back',
    },
    {
      x: '52',
      y: '598',
      dir: 'player_down',
      _dir: 'player_back',
    },
    {
      x: '52',
      y: '678',
      dir: 'player_right',
      _dir: 'player_back',
      speak: '1',
      text: '下雨天最适合\n睡觉觉了',
      result: 'r9',
      alertInfo: {
        h1: '暴雨',
        p: '抱歉，后退2步。2008年 6.12深圳遇到超大暴雨！出行都要注意安全哦',
        status: '-2',
      },
    },
    {
      x: '137',
      y: '678',
      dir: 'player_right',
      _dir: 'player_left',
    },
    {
      x: '218',
      y: '678',
      dir: 'player_right',
      _dir: 'player_left',
      speak: '1',
      text: '简单来说！\n冰上公主\n就是我了！',
      result: 'r1',
      alertInfo: {
        h1: '冰上公主',
        p: '恭喜，前进1步。夏天的时候能去滑冰刀简直是最幸福的事情了',
        status: '1',
      },
    },
    {
      x: '300',
      y: '678',
      dir: 'player_right',
      _dir: 'player_left',
    },
    {
      x: '385',
      y: '678',
      dir: 'player_right',
      _dir: 'player_left',
      speak: '0',
      text: '芝士！\n就是力量！',
      alertInfo: {
        h1: '芝士蛋糕',
        p: '恭喜，前进3步。今天吃到了爆好吃的芝士小蛋糕',
        status: '3',
      },
    },
    {
      x: '470',
      y: '678',
      dir: 'player_down',
      _dir: 'player_left',
    },
    {
      x: '470',
      y: '775',
      dir: 'player_down',
      _dir: 'player_back',
      speak: '0',
      text: '妈妈妈妈 \n我也要当火炬手',
      alertInfo: {
        h1: '北京奥运会',
        p:
          '恭喜，前进2步。北京奥运会成功举办，中国向全世界展现了自己别样的风采与魅力',
        status: '2',
      },
    },
    {
      x: '470',
      y: '830',
      dir: 'player_down',
      _dir: 'player_back',
    },
    {
      x: '470',
      y: '867',
      dir: 'player_left',
      _dir: 'player_back',
    },
    {
      x: '338',
      y: '867',
      dir: 'player_left',
      _dir: 'player_right',
      speak: '0',
      text: '股市有风险\n入市需谨慎哦',
      result: 'r3',
      alertInfo: {
        h1: '创业板开市',
        p:
          '抱歉，暂停3秒。2009年创业板开市啦！深圳经济转型的春天到来，但是炒股一定要冷静哦',
        status: 'stop',
      },
    },
    {
      x: '227',
      y: '867',
      dir: 'player_left',
      _dir: 'player_right',
      speak: '0',
      text: '短发也是\n超超超可爱的！',
      result: 'r10',
      alertInfo: {
        h1: '剪发',
        p:
          '抱歉，后退3步。10岁啦，可还是没法决定自己头发的长度，被迫又剪了的短发',
        status: '-3',
      },
    },
    {
      x: '152',
      y: '867',
      dir: 'player_left',
      _dir: 'player_right',
    },
    {
      x: '67',
      y: '867',
      dir: 'player_down',
      _dir: 'player_right',
      speak: '1',
      text: '我也慢慢在长大了\n准备上初中啦',
      result: 'r3',
      alertInfo: {
        h1: 'GDP',
        p: '恭喜,前进1步。深圳人均GDP冲至全国第一名！',
        status: '1',
      },
    },
    {
      x: '67',
      y: '950',
      dir: 'player_down',
      _dir: 'player_back',
    },
    {
      x: '67',
      y: '1020',
      dir: 'player_down',
      _dir: 'player_back',
      speak: '1',
      text: '也算是养成了\n一个好习惯',
      result: 'r2',
      alertInfo: {
        h1: '听书',
        p:
          '恭喜，前进1步。到了初中，你喜欢边听有声读物边走路去学校，也学到了很多知识',
        status: '1',
      },
    },
    {
      x: '67',
      y: '1078',
      dir: 'player_down',
      _dir: 'player_back',
    },
    {
      x: '67',
      y: '1160',
      dir: 'player_right',
      _dir: 'player_back',
      speak: '1',
      text: '我..我学数学学累\n喝点奶茶补补',
      result: 'r10',
      alertInfo: {
        h1: '奶茶',
        p:
          '抱歉，后退3步。你封闭式住宿期间，偷偷点了杯奶茶，结果被在校门口溜达的数学老师逮住',
        status: '-3',
      },
    },
    {
      x: '138',
      y: '1160',
      dir: 'player_right',
      _dir: 'player_left',
    },
    {
      x: '215',
      y: '1160',
      dir: 'player_right',
      _dir: 'player_left',
      speak: '1',
      text: '结果当然\n是被暴打一顿咯？',
      result: 'r10',
      alertInfo: {
        h1: '离家出走',
        p:
          '抱歉，后退1步。你因为和父母吵架，一气之下写了断交离家出走书！爷要独自去闯天下了',
        status: '1',
      },
    },
    {
      x: '300',
      y: '1160',
      dir: 'player_right',
      _dir: 'player_left',
    },
    {
      x: '360',
      y: '1160',
      dir: 'player_right',
      _dir: 'player_left',
      speak: '0',
      text: '唔...好吃..唔\n...这些小零食\n可太好吃了',
      alertInfo: {
        h1: '香港',
        p:
          '抱歉，暂停3秒。趁着周六日和妈妈一起去香港采购！结果书包里装满了零食',
        status: 'stop',
      },
    },
    {
      x: '452',
      y: '1160',
      dir: 'player_down',
      _dir: 'player_left',
      speak: '0',
      text: '后来才明白\n外表不重要\n重要的是你对自己的认知',
      alertInfo: {
        h1: '买新鞋子',
        p:
          '恭喜，前进1步。爸爸妈妈去香港给你买了喜欢已久的鞋子，可是却没有想象中的那么开心',
        status: '1',
      },
    },
    {
      x: '452',
      y: '1234',
      dir: 'player_down',
      _dir: 'player_back',
      speak: '0',
      text: '高中生活！Start！',
      result: 'r2',
      alertInfo: {
        h1: '上高中啦',
        p: '恭喜，前进1步。如愿上了一所很好的高中！',
        status: '1',
      },
    },
    {
      x: '452',
      y: '1286',
      dir: 'player_down',
      _dir: 'player_back',
      speak: '0',
      text: '？？？\n？？？？',
      result: 'r2',
      alertInfo: {
        h1: '？？？',
        p: '恭喜，前进1步。你发现了惊天秘密,你们年纪的校草一天要去十几次厕所',
        status: '1',
      },
    },
    {
      x: '452',
      y: '1384',
      dir: 'player_left',
      _dir: 'player_back',
      speak: '0',
      text: '稳定心态\n考试加油冲冲冲！',
      result: 'r2',
      alertInfo: {
        h1: '高考',
        p: '稳定心态，冷静3s。2018年6月7日，你走进了高考考场！',
        status: 'stop',
      },
    },
    {
      x: '330',
      y: '1384',
      dir: 'player_left',
      _dir: 'player_right',
      speak: '0',
      text: '在？\n我3号 跳预言家',
      result: 'r2',
      alertInfo: {
        h1: '毕业',
        p:
          '恭喜，前进2步。毕业啦！和同学一起租了一栋别墅轰趴，结果玩了一晚上狼人杀',
        status: '2',
      },
    },
    // 分割线 下方还有14个
    {
      x: '254',
      y: '1384',
      dir: 'player_left',
      _dir: 'player_right',
      speak: '0',
      text: '人生的全新旅程\n即刻起航',
      result: 'r7',
      alertInfo: {
        h1: '大学',
        p: '恭喜，前进2步。收到天津师范大学的录取通知书啦！',
        status: '2',
      },
    },
    {
      x: '182',
      y: '1384',
      dir: 'player_left',
      _dir: 'player_right',
      speak: '0',
      text: '不，是因为\n我在学数学',
      result: 'r7',
      alertInfo: {
        h1: '图书馆',
        p:
          '恭喜，触发隐藏地图。前进1步。今天的图书馆格外的冷，是冷气太低了嘛？',
        status: '1',
      },
    },
    {
      x: '130',
      y: '1384',
      dir: 'player_left',
      _dir: 'player_right',
    },
    {
      x: '54',
      y: '1384',
      dir: 'player_down',
      _dir: 'player_right',
      speak: '1',
      text: '我不是\n我没有\n你别瞎说 ToT',
      result: 'r8',
      alertInfo: {
        h1: '自习室',
        p:
          '抱歉，后退1步。你因为在自习室遇到了一个很有趣的男生，和他聊的忘记吃晚饭。',
        status: '-1',
      },
    },
    {
      x: '54',
      y: '1482',
      dir: 'player_down',
      _dir: 'player_back',
      speak: '1',
      text: '嘿嘿..今天算是值\n得纪念的日子呢！',
      result: 'r8',
      alertInfo: {
        h1: '恋爱',
        p: '恭喜，前进2步。在宿舍门口接受了老陈的表白，变成了甜蜜的小情侣！',
        status: '2',
      },
    },
    {
      x: '54',
      y: '1558',
      dir: 'player_down',
      _dir: 'player_back',
      speak: '1',
      text: '大家一定要戴好口罩\n少聚集。',
      result: 'r9',
      alertInfo: {
        h1: '疫情爆发',
        p:
          '抱歉，后退5步。武汉爆发新型冠状病毒肺炎，今年注定是值得铭记的一年。',
        status: '-5',
      },
    },
    {
      x: '54',
      y: '1607',
      dir: 'player_down',
      _dir: 'player_back',
    },
    {
      x: '54',
      y: '1680',
      dir: 'player_down',
      _dir: 'player_back',
      speak: '1',
      text: '羊羊那么可爱\n羊肉串除外。',
      result: 'r8',
      alertInfo: {
        h1: '🐑咩咩',
        p: '恭喜，前进2步。收到了老陈送的小羊，这也太可爱了吧！（无配图',
        status: '2',
      },
    },
    {
      x: '54',
      y: '1790',
      dir: 'player_right',
      _dir: 'player_back',
      speak: '1',
      text: '感谢所有医护\n工作者的努力',
      alertInfo: {
        h1: '武汉清零！ ',
        p: '恭喜，前进2步。山河无恙,全国人民万众一心才得以赢得这场战疫！',
        status: '2',
      },
    },
    {
      x: '147',
      y: '1790',
      dir: 'player_right',
      _dir: 'player_left',
      speak: '1',
      text: '这才叫缘分！\n嘿嘿',
      result: 'r8',
      alertInfo: {
        h1: '盲盒',
        p: '恭喜，前进1步。你和老陈一起开盲盒，结果两个竟然是同款！',
        status: '1',
      },
    },
    {
      x: '220',
      y: '1790',
      dir: 'player_right',
      _dir: 'player_left',
    },
    {
      x: '320',
      y: '1790',
      dir: 'player_right',
      _dir: 'player_left',
      speak: '0',
      text: '结果第二天爸爸\n和弟弟根本\n都没看出来',
      result: 'r10',
      alertInfo: {
        h1: '染发',
        p: '在这儿停顿！半夜偷偷起床染发，还好没有被妈妈逮捕',
        status: 'stop',
      },
    },
    {
      x: '395',
      y: '1790',
      dir: 'player_right',
      _dir: 'player_left',
      speak: '0',
      text: '新的一年加油哦',
      alertInfo: {
        h1: '生日快乐！',
        p: '恭喜，前进999步。宝贝，20岁生日快乐！',
        status: '6',
      },
    },
    {
      x: '470',
      y: '1790',
      dir: 'player_down',
      _dir: 'player_left',
    },
    {
      x: '470',
      y: '1887',
      dir: 'player_down',
      _dir: 'player_back',
    },
  ],
  result = {
    r1: {
      num: 0,
      name: '孩子王',
      desc: '童年的无忧无虑是无论多少年后都无法忘记的。',
      reason: '触发事件：溜冰，抓阄，滑板，游泳',
      title: '',
    },
    r2: {
      num: 0,
      name: '最强考试王',
      desc: '高中三年的生活，经历了上百场的考试，已所向披靡。',
      reason: '触发事件：高中生涯',
      title: '',
    },
    r3: {
      num: 0,
      name: '时代先锋',
      desc: '随着深圳一起发展起来的你，也是无限潜力和朝气。',
      reason: '触发事件：深圳地铁，创业板开盘',
      title: '',
    },
    r4: {
      num: 0,
      name: '黑手大酋长',
      desc: '不是吧 阿sir？这都可以',
      reason: '达成条件：摇骰子次数大于20次',
      title: '',
    },
    r5: {
      num: 0,
      name: '完美太空步',
      desc: '旋转 跳跃，我反向放大一波带走',
      reason: '达成条件：后退次数大于6次',
      title: '',
    },
    r6: {
      num: 0,
      name: '无敌幸运星',
      desc: '旋转 跳跃，我一波带走',
      reason: '达成条件：前进次数大于6次',
      title: '',
    },
    r7: {
      num: 0,
      name: '大学生',
      desc: '作为国家的栋梁之才，要在校园内好好学习哦',
      reason: '触发事件：校园',
      title: '',
    },
    r8: {
      num: 0,
      name: '秀翻全场',
      desc: '遇到了超棒的老陈,要一直甜甜蜜蜜哦',
      reason: '触发事件：恋爱人生',
      title: '',
    },
    r9: {
      num: 0,
      name: '经历风雨',
      desc: '原来普普通通的平凡一天，才是千万种特殊中最幸福的存在。',
      reason: '触发事件：非典，暴雨，疫情',
      title: '',
    },
    r10: {
      num: 0,
      name: '叛逆少女',
      desc: 'result10',
      reason: '触发事件：奶茶事件，染发，离家出走',
      title: '',
    },
    r11: {
      num: 0,
      name: '特殊的1%',
      desc: 'result11',
      reason: '达成条件：成功抵达终点',
      title: '',
    },
    r12: {
      num: 0,
      name: '完美之神',
      desc: 'result12',
      reason: '达成条件：成功抵达终点',
      title: '',
    },
  }

// var jsonData = [
//     {
//       x: '57',
//       y: '77',
//       dir: 'player_right',
//       _dir: 'player_left',
//     },
//     {
//       x: '132',
//       y: '77',
//       dir: 'player_right',
//       _dir: 'player_left',
//     },
//     {
//       x: '190',
//       y: '77',
//       dir: 'player_right',
//       _dir: 'player_left',
//     },
//     {
//       x: '266',
//       y: '77',
//       dir: 'player_right',
//       _dir: 'player_left',
//       speak: '2',
//       text: '鎴戞槸涓€鍖瑰宝鏂圭殑镫 ,\n鍗村湪鍗楁楠鍐绘垚浜嗙嫍',
//       // result: 'r1 ',
//       alertInfo: {
//         h1: '瀵掓疆',
//         p:
//           '鎶辨瓑锛屽悗阃€1姝ャ€效彶涓婄綍瑙佸ぇ瀵掓疆鏉ヨ锛佷綘琚喕鎴愰吨镒熷啋銆 ',
//         status: '-1',
//       },
//     },
//     {
//       x: '378',
//       y: '77',
//       dir: 'player_right',
//       _dir: 'player_left',
//       speak: '2',
//       text: '路过灵隐寺 ',
//       alertInfo: {
//         h1: '灵隐寺 ',
//         p: '欢迎来到灵隐寺',
//         status: '2',
//       },
//     },
//     {
//       x: '470',
//       y: '77',
//       dir: 'player_down',
//       _dir: 'player_left',
//     },
//     {
//       x: '470',
//       y: '157',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//     {
//       x: '470',
//       y: '230',
//       dir: 'player_down',
//       _dir: 'player_back',
//       speak: '0',
//       text: '鏁笟绂忓憿锛焅n浣犳湁娌℃湁鏁笟绂忊€︹€ ',
//       result: 'r8',
//       alertInfo: {
//         h1: '鏄ヨ妭绾㈠置',
//         p:
//           '鎭枩锛屽墠杩 2姝ャ€傛槬鑺效埌浜嗭纴浣犲煁澶存姠绾㈠置锛屾姠鍒颁简0.01鍏冦€ ',
//         status: '2',
//       },
//     },
//     {
//       x: '470',
//       y: '325',
//       dir: 'player_left',
//       _dir: 'player_back',
//       speak: '0',
//       text: '鐜嬫€濊仾锛孪n鎴戣缁欎綘鐢熺尨瀛愶紒',
//       result: 'r7',
//       alertInfo: {
//         h1: '鐚村勾濠村效娼 ',
//         p:
//           '鎭枩锛屽墠杩 2姝ャ€效弹浜屽鏀跨瓥褰卞搷锛屾禉姹熺尨骞磋系鏉ュ┐鍎挎疆銆  ',
//         status: '2',
//       },
//     },
//     {
//       x: '350',
//       y: '325',
//       dir: 'player_left',
//       _dir: 'player_right',
//       speak: '0',
//       text: '鎼绷镄勭尔澶碶n鍙互缁曞湴鐞冧竴鍦堬纴\n浣嗘垜杩樻槸涔颁笉璧锋埧',
//       result: 'r3 ',
//       alertInfo: {
//         h1: '鍦扮帇',
//         p: '鎶辨瓑锛屽悗阃€3姝ャ€傛ゼ宁傜柉镫傦纴浣犲张锏借共寰埚骞翠简',
//         status: '-3',
//       },
//     },
//     {
//       x: '273',
//       y: '325',
//       dir: 'player_left',
//       _dir: 'player_right',
//     },
//     {
//       x: '220',
//       y: '325',
//       dir: 'player_left ',
//       _dir: 'player_right',
//     },
//     {
//       x: '145',
//       y: '325',
//       dir: 'player_left',
//       _dir: 'player_right',
//       speak: '1',
//       text: '璋㈣阿浣狅纴 n鐜板湪鎴戣鎶ヨ浜 ',
//       alertInfo: {
//         h1: '璇堥獥鐢佃瘽',
//         p:
//           '鎭枩锛屽墠杩 2姝ャ€备綘涓庣数淇¤痪楠楀垎瀛愯亰浜 1灏忔椂锛屼粬缁欎綘鍏呬简50鍏冭瘽璐广€ ',
//         status: '2',
//       },
//     },
//     {
//       x: '52',
//       y: ' 325',
//       dir: 'player_down',
//       _dir: 'player_right',
//       speak: '1',
//       text: '钖冨缑鑻︿腑鑻︼纴\n鏂硅兘寮€璺柠',
//       alertInfo: {
//         h1: '楂樿€ ',
//         p:
//           '鎭枩锛屽墠杩 5姝ャ€傛禉姹熼珮钥冩彮姒滐纴链変釜澶栨潵宸ュ瓙寮熻€冧简钟跺崖锛屼綘娣卞弹榧撹垶銆  ',
//         status: '5',
//       },
//     },
//     {
//       x: '52',
//       y: '404',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//     {
//       x: '52',
//       y: '475',
//       dir: 'player_down',
//       _dir: 'player_back',
//       speak: '1',
//       text: '娆㈠ぉ锽滃湴锛孪n鏁查敚镓挞紦',
//       alertInfo: {
//         h1: '鏉窞鐏溅瑗跨珯瑙勫垝鍑虹倝',
//         p:
//           '鎭枩锛屽墠杩 4姝ャ€傛涩宸炵伀杞﹁タ绔栾鍒掑嚭镣夛纴浣犲嚭闂ㄥ皢旋翠究鎹枫€ ',
//         status: '4',
//       },
//     },
//     {
//       x: '52',
//       y: '550',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//     {
//       x: '52',
//       y: '598',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//     {
//       x: '52',
//       y: '678',
//       dir: 'player_right',
//       _dir: 'player_back',
//       speak: '1',
//       text: '涔板灏戞浔鍐呰￥\n镓嶅绌匡纻',
//       alertInfo: {
//         h1: '板ㄦ按',
//         p:
//           '鎶辨瓑锛屽悗阃€4姝ャ€ 2016骞存禉姹熷悇鍦伴檷姘撮噺镓撶牬铡嗗彶绾綍锛屼綘蹇彂暗変简',
//         status: '2',
//       },
//     },
//     {
//       x: '137',
//       y: '678',
//       dir: 'player_right',
//       _dir: 'player_left',
//     },
//     {
//       x: '218',
//       y: '678',
//       dir: 'player_right',
//       _dir: 'player_left',
//       speak: '1',
//       text: '鍙槸锛孪n鎴戞兂锅氩啘姘 ',
//       alertInfo: {
//         h1: '鎴峰彛',
//         p:
//           '鎭枩锛屽墠杩 1姝ャ€傛禉姹熷鍦伴檰缁彇娑埚啘涓氭埛鍙ｏ纴浣犳垚涓轰简灞呮皯銆 ',
//         status: '1',
//       },
//     },
//     {
//       x: '300',
//       y: '678',
//       dir: 'player_right',
//       _dir: 'player_left',
//     },
//     {
//       x: '385',
//       y: '678',
//       dir: 'player_right',
//       _dir: 'player_left',
//       speak: '0',
//       text: '娌℃湁淇濈暀锛乘n鎴戝凡缁忊€︹€n鐢ㄤ简娲崚涔嫔姏浜嗭紒',
//       alertInfo: {
//         h1: '娲崚涔嫔姏',
//         p:
//           '鎭枩锛屽墠杩 4姝ャ€效ゥ杩愯禌鍦猴纴鍌呭洯鎱х粰浣犱紶鏉ユ椽钻掍箣锷莅€ ',
//         status: '4',
//       },
//     },
//     {
//       x: '470',
//       y: '678',
//       dir: 'player_down',
//       _dir: 'player_left',
//     },
//     {
//       x: '470',
//       y: '775',
//       dir: 'player_down',
//       _dir: 'player_back',
//       speak: '0',
//       text: '鍏ㄥ浗钖勫ぇ鏅尯\n琚涩宸炰汉姘戝崰棰 ',
//       alertInfo: {
//         h1: 'G20锅囨湡',
//         p: '鎭枩锛屽墠杩 2姝ャ€备綘鎺ュ埌鍗曚綅阃氱煡锛孏20鏀惧亣7澶╋纴鐖斤紒',
//         status: '2',
//       },
//     },
//     {
//       x: '470',
//       y: '830',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//     {
//       x: '470',
//       y: '867',
//       dir: 'player_left',
//       _dir: 'player_back',
//     },
//     {
//       x: '338',
//       y: '867',
//       dir: 'player_left',
//       _dir: 'player_right',
//       speak: '0',
//       text: '鏉窞澶沧櫙\n鍒风垎链嫔弸鍦 ',
//       result: 'r9',
//       alertInfo: {
//         h1: 'G20姝ｅ纺鍙紑',
//         p:
//           '鎭枩锛屽墠杩 1姝ャ€备綘琚€変负G20蹇楁效钥咃纴闄反瑗挎€荤粺阃涘悆阃涘悆銆 ',
//         status: '1',
//       },
//     },
//     {
//       x: '227',
//       y: '867',
//       dir: 'player_left',
//       _dir: 'player_right',
//       speak: '0',
//       text: '链変汉瑕佸悆钻峰置铔嫔悧锛焅n璺溃涓婂垰镦庡嚭鏉ョ殑鈥︹€ ',
//       result: 'r1 ',
//       alertInfo: {
//         h1: '楂樻俯',
//         p:
//           '鎶辨瓑锛屽悗阃€3姝ャ€备粖骞村澶╁疄鍦ㄥお鐑纴浣犺蛋涓崭简璺纴鍙兘韬茶繘澶у晢鍦 ',
//         status: '-3',
//       },
//     },
//     {
//       x: '152',
//       y: '867',
//       dir: 'player_left',
//       _dir: 'player_right',
//     },
//     {
//       x: '67',
//       y: '867',
//       dir: 'player_down',
//       _dir: 'player_right',
//       speak: '1',
//       text: '涓€绾垮煄宁俓n镙囧嗳涔嬩竴锛歕n鎴夸环涓€娴 ',
//       alertInfo: {
//         h1: '涓€绾垮煄宁 ',
//         p:
//           '鎭枩锛屽墠杩 3姝ャ€备笓瀹剁О锛屾涩宸炲皢阃愭璺冨崌涓轰竴绾垮煄宁傦纴浣犲惉瀹屾湁镣瑰皬婵€锷ㄣ€ ',
//         status: '3',
//       },
//     },
//     {
//       x: '67',
//       y: ' 950',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//     {
//       x: '67',
//       y: '1020',
//       dir: 'player_down',
//       _dir: 'player_back',
//       speak: '1',
//       text: '鍒嬁鐢熷懡\n瀵诲垭婵€',
//       result: 'r2',
//       alertInfo: {
//         h1: '阍卞姹熷ぇ娼 ',
//         p:
//           '鎶辨瓑锛屽悗阃€1姝ャ€备綘鍦ㄩ挶濉樻睙杈硅娼纴绔椤缑澶繎宸偣琚嵎璧般€ ',
//         status: '-1',
//       },
//     },
//     {
//       x: '67',
//       y: '1078',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//     {
//       x: '67',
//       y: '1160',
//       dir: 'player_right',
//       _dir: 'player_back',
//       speak: '1',
//       text: '鎴夸簨锛孪n鏄€佺栌濮揬n链€鍏冲绩镄勪簨',
//       result: 'r3',
//       alertInfo: {
//         h1: '鎴夸骇闄愯喘',
//         p:
//           '鎶辨瓑锛屾殏锅 3绉掋€ 9链 18镞ワ纴钖勫湴阅嶅惎鎴夸骇闄愯喘锛屾ゼ宁傜殑鐤妫鏆效仠銆 ',
//         status: 'stop',
//       },
//     },
//     {
//       x: '138',
//       y: '1160',
//       dir: 'player_right',
//       _dir: 'player_left',
//     },
//     {
//       x: '215',
//       y: '1160',
//       dir: 'player_right',
//       _dir: 'player_left',
//       speak: '1',
//       text: '鍟婏纴\n浣犳槸鐤效锛孪n鎴戞槸鍌烩€︹€ ',
//       result: 'r1',
//       alertInfo: {
//         h1: '鍙伴',
//         p:
//           '鎶辨瓑锛屽悗阃€3姝ャ€效彴椋庘€滈矅楸尖€濈橱闄嗭纴鍒楄溅锅滆繍锛屼綘镄勫嚭娓歌鍒掓场姹ゃ€ ',
//         status: '-3',
//       },
//     },
//     {
//       x: '300',
//       y: '1160',
//       dir: 'player_right',
//       _dir: 'player_left',
//     },
//     {
//       x: '360',
//       y: '1160',
//       dir: 'player_right',
//       _dir: 'player_left',
//       speak: '0',
//       text: '鎴戜滑鍏徃鏄€佸鍗栫殑锛孪n浼板€ 10涓嚎',
//       result: ' r10',
//       alertInfo: {
//         h1: '鍒涗笟',
//         p:
//           '鎶辨瓑锛屽悗阃€1姝ャ€效垱涓氭氮娼珮娼凯璧凤纴浣犵殑椤圭洰鍗磋瀺涓嶅埌璧勶纴婵掍复镰翠骇',
//         status: '-1',
//       },
//     },
//     {
//       x: '452',
//       y: '1160',
//       dir: 'player_down',
//       _dir: 'player_left',
//       speak: '0',
//       text: '蹇湅锛乘n闾ｈ竟杩囨潵镄刓n濡瑰瓙濂芥纾浜 ',
//       result: 'r7',
//       alertInfo: {
//         h1: '娴欐睙澶у',
//         p:
//           '鎭枩锛屽墠杩 3姝ャ€傛禉澶у嵆灏呜系鏉 120锻ㄥ瞾镙″简锛屼綘鍦ㄦ牎锲腑鏁ｆ锛屽彂鐜颁简濂崇銆 ',
//         status: '2',
//       },
//     },
//     {
//       x: '452',
//       y: '1234',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//     {
//       x: '452',
//       y: '1286',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//     {
//       x: '452',
//       y: '1384',
//       dir: 'player_left',
//       _dir: 'player_back',
//       speak: '0',
//       text: '浜轰汉浜轰汉浜篭n浜轰汉鎴戜汉浜篭n浜轰汉浜轰汉鈥︹€ ',
//       result: 'r2',
//       alertInfo: {
//         h1: '瑗挎箹',
//         p:
//           '鎶辨瓑锛屾殏锅 3绉掋€效浗搴嗛粍阅戝懆锛岃タ婀栬竟鍏ㄦ槸浜猴纴钻ｇ橱鍏ㄥ浗鏅尯浜烘皵姒灭涓€銆 ',
//         status: 'stop',
//       },
//     },
//     {
//       x: '330',
//       y: '1384',
//       dir: 'player_left',
//       _dir: 'player_right',
//     },
//     {
//       x: '254',
//       y: '1384',
//       dir: 'player_left',
//       _dir: 'player_right',
//       speak: '0',
//       text: '鐒跺苟鍗碉纴\n鎴戞槸链埚厜镞  ',
//       alertInfo: {
//         h1: '浜哄潎鏀跺叆',
//         p:
//           '鎭枩锛屽墠杩 1姝ャ€傛禉姹熷墠涓夊浜哄潎鏀跺叆36093鍏冿纴鍏ㄥ浗绗笁銆备綘娌℃袅钖庤吙銆 ',
//         status: '1',
//       },
//     },
//     {
//       x: '182',
//       y: '1384',
//       dir: 'player_left',
//       _dir: 'player_right',
//     },
//     {
//       x: '130',
//       y: '1384',
//       dir: 'player_left',
//       _dir: 'player_right',
//     },
//     {
//       x: '54',
//       y: '1384',
//       dir: 'player_down',
//       _dir: 'player_right',
//       speak: '1',
//       text: '杩囧嚑骞村氨\n涓嶅啀鍫佃溅浜嗏€斺€擞n杩欐槸鎴 5骞村墠\n璇寸殑璇 ',
//       result: 'r1',
//       alertInfo: {
//         h1: '鍩庡竞鏂借伐',
//         p:
//           '鎶辨瓑锛屽悗阃€2姝ャ€效煄宁效揩阃熷彂灞曪纴鍒板閮借湪鏂借伐锛屼綘缁忚绷宸ュ湴琚簠浜嗕竴韬偿銆 ',
//         status: '-2',
//       },
//     },
//     {
//       x: '54',
//       y: '1482',
//       dir: 'player_down',
//       _dir: 'player_back',
//       speak: '1',
//       text: '闱掓槬椋庢毚锛孪n浠庡ご鍐嶆潵锛 ',
//       alertInfo: {
//         h1: '缁垮煄闄岖骇',
//         p:
//           '鎶辨瓑锛屽悗阃€3姝ャ€傛涩宸炵豢鍩庤冻鐞冮槦鎯ㄩ伃闄岖骇锛屼綘鍝€掑湪瑙备紬宁笂銆 ',
//         status: '-3',
//       },
//     },
//     {
//       x: '54',
//       y: '1558',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//     {
//       x: '54',
//       y: ' 1607',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//     {
//       x: '54',
//       y: '1680',
//       dir: 'player_down',
//       _dir: 'player_back',
//       speak: '1',
//       text: '涓€鍦烘父鎴忎竴鍦烘ⅵ',
//       alertInfo: {
//         h1: '缃戠害杞︽柊鏀 ',
//         p:
//           '鎶辨瓑锛屽悗阃€5姝ャ€效悇鍦板嚭鍙扮绣绾﹁溅鏂版敛锛屼綘镄勮溅涓岖钖堣瀹泛纴鍙兘阃€鍑恒€ ',
//         status: '-5',
//       },
//     },
//     {
//       x: '54',
//       y: '1790',
//       dir: 'player_right',
//       _dir: 'player_back',
//       speak: '1',
//       text: '缇℃厱瀚夊锛屼絾涓嶆仺',
//       alertInfo: {
//         h1: '瀵岃豹姒 ',
//         p:
//           '鎭枩锛屽墠杩 2姝ャ€效叏锲 80钖庡瘜璞鎻檽锛屽墠涓夊悕琚禉姹熶汉鍖呮径銆 ',
//         status: '2 ',
//       },
//     },
//     {
//       x: '147',
//       y: '1790',
//       dir: 'player_right',
//       _dir: 'player_left',
//       speak: '1',
//       text: '鐒惰€屼竵纾奖n骞舵病链夊憡璇夋垜\nSSR镐庝箞鎶 ',
//       alertInfo: {
//         h1: '浜掕仈缃戝ぇ浼 ',
//         p:
//           '鎭枩锛屽墠杩 2姝ャ€傜涓夊众浜掕仈缃戝ぇ浼氩湪涔岄晣鍙紑锛屼綘涓婂帟镓€镞跺阀阆囦竵纾娿€ ',
//         status: '2',
//       },
//     },
//     {
//       x: '220',
//       y: '1790',
//       dir: 'player_right',
//       _dir: 'player_left',
//     },
//     {
//       x: '320',
//       y: '1790',
//       dir: 'player_right',
//       _dir: 'player_left',
//       speak: '0',
//       text: '镇ㄧ殑淇＄敤鍒哱n链弧750鍒嗭纴\n镞犳硶璇勮',
//       result: 'r7',
//       alertInfo: {
//         h1: '镙″洯镞ヨ',
//         p:
//           '鎶辨瓑锛屾殏锅 3绉掋€傛敮浠桦疂鎺ㄥ嚭绁炵鏂板姛鑳斤纴浣犺揩涓嶅强寰呮墦寮€锛岀湅鍒版弧灞忕殑鈥︹€ ',
//         status: 'stop',
//       },
//     },
//     {
//       x: '395',
//       y: '1790',
//       dir: 'player_right',
//       _dir: 'player_left',
//       speak: ' 0',
//       text: '绛夊湴阈佷慨濂斤纴\n鏉窞浜氲繍浼氢篃瑕佹潵鍟︼紒',
//       alertInfo: {
//         h1: '鏉窞鍦伴扇涓夋湡',
//         p:
//           '鎭枩锛屽墠杩 1姝ャ€傛涩宸炲湴阈佷笁链熻鍒掗€氲绷瀹℃壒锛屼綘鍑洪棬旋存楠渚夸简銆 ',
//         status: '1',
//       },
//     },
//     {
//       x: '470',
//       y: '1790',
//       dir: 'player_down',
//       _dir: 'player_left',
//     },
//     {
//       x: '470',
//       y: '1887',
//       dir: 'player_down',
//       _dir: 'player_back',
//     },
//   ],
//   result = {
//     r1: {
//       num: 0,
//       name: '鍦ｆ枟澹 ',
//       desc: '瀵掓疆閰锋殇銆佸彴椋庢毚板ㄢ€︹€︽病链変粈涔堣兘镓揿€掍綘',
//       reason: '瑙﹀彂浜嬩欢锛氩瘨娼€侀洦姘淬€佸彴椋庛€侀珮娓┿€佸煄宁傛柦宸 ',
//       title:
//         ' 2016骞达纴鎴戝巻灏借壈闄╋纴鍙栧缑鈥滃湥鏂楀＋鈥濈О鍙凤纴浣犳潵璇曡瘯锛 ',
//     },
//     r2: {
//       num: 0,
//       name: '瑙傛捣钖稕',
//       desc:
//         '杩欎竴骞达纴浣犺タ婀栬浜烘捣锛岄挶濉桦惉姹熸稕銆效摢阅屾湁鐑椆锛屽氨寰€鍝噷璺 ',
//       reason: '瑙﹀彂浜嬩欢锛氲タ婀栦汉姘旀銆侀挶濉樻睙澶ф疆',
//       title:
//         '2016骞达纴鎴戣タ婀栬浜烘捣锛岄挶濉桦惉姹熸稕锛岀湅浜嗘棤鏁扮儹闂癸纴浣犲憿锛 ',
//     },
//     r3: {
//       num: 0,
//       name: '鍦颁骇澶т酣',
//       desc: '鍏埚畾涓€涓兘杈惧埌镄勫皬鐩爣锛屾瘮鏂硅鎸ｅ畠涓€涓嚎',
//       reason: '瑙﹀彂浜嬩欢锛氩湴鐜嬨€佹埧浜ч檺璐 ',
//       title:
//         '2016骞达纴鎴戣窡鎴夸簨镐绘湁璇翠笉娓呴亡涓嶆槑镄勫叧绯伙纴浣犲憿锛 ',
//     },
//     r4: {
//       num: 0,
//       name: '榛戞坠澶ч厕闀 ',
//       desc: '鎴戝氨涓崭俊鎴戞案杩沧憞涓嶅埌6鈥︹€ ',
//       reason: '杈炬垚鏉′欢锛氭憞楠板瓙娆℃暟澶т簬20娆 ',
//       title:
//         '2016骞达纴鎴戠殑镓嬫皵浠や汉鎯婅锛岃崳灏佲€滈粦镓嫔ぇ閰嬮昵鈥濄€备綘鏉ヨ瘯璇曪纻',
//     },
//     r5: {
//       num: 0,
//       name: '瀹岀编澶┖姝 ',
//       desc: '阃€涓€姝ワ纴娴烽様澶╃┖锛涢€€鍏锛屾极姝ュお绌 ',
//       reason: '杈炬垚鏉′欢锛氩悗阃€娆℃暟澶т簬6娆 ',
//       title:
//         '2016骞达纴鎴戠敤涓€骞磋〃婕斾简涓€缁勯珮闅惧害锷ㄤ綔锛屼綘鏉ヨ瘯璇 ?',
//     },
//     r6: {
//       num: 0,
//       name: '镞犳晫骞歌繍鏄 ',
//       desc: '浣犵殑杩愭皵濂借缑涓嶈锛屽彧链夊厜镓嶈兘璺熶笂浣犵殑阃熷害',
//       reason: '杈炬垚鏉′欢锛氩墠杩涙鏁板ぇ浜 6娆 ',
//       title: '2016骞达纴鎴戜互鍏夐€熷啿鍒鸿€岃绷锛屼綘鏉ヨ瘯璇曪纻',
//     },
//     r7: {
//       num: 0,
//       name: '钥佸徃链 ',
//       desc: '浣犵儹琛蜂簬娆ｈ祻缇庝附镄勫纾镐 ',
//       reason: '瑙﹀彂浜嬩欢锛氱尨骞村┐鍎挎疆銆佹禉姹熷ぇ瀛︺€佹牎锲棩璁 ',
//       title: '2016骞达纴鎴戞槸鎯呭満寰楁剰镄勮€佸徃链猴纴浣犳潵鐪嬬湅锛 ',
//     },
//     r8: {
//       num: 0,
//       name: '鎶㈢孩鍖呰揪浜 ',
//       desc: '蹇树简鏁笟绂忓惂锛屼竴鍒嗕篃鏄埍锛 ',
//       reason: '瑙﹀彂浜嬩欢锛氭槬鑺傜孩鍖呫€ ',
//       title:
//         '2016骞达纴鎴戠粡铡嗗悇绉嶅ぇ浜嬶纴鎶㈤亶澶╀笅绾㈠置锛屼綘鏉ヨ瘯璇曪纻',
//     },
//     r9: {
//       num: 0,
//       name: '楂樼浜哄＋',
//       desc: '浣犺窡镐荤粺澶汉璋堢瑧椋庣敓',
//       reason: '瑙﹀彂浜嬩欢锛欸20鍙紑',
//       title: '2016骞达纴鎴戣窡镐荤粺澶汉璋堢瑧椋庣敓锛屼綘鏉ヨ瘯璇曪纻',
//     },
//     r10: {
//       num: 0,
//       name: '浜虹敓濡傛ⅵ',
//       desc: '浜鸿缮鏄链夋ⅵ鎯崇殑锛屼竾涓€瀹炵幇浜嗗憿锛 ',
//       reason: '瑙﹀彂浜嬩欢锛氩垱涓 ',
//       title: '2016骞达纴鎴戞涓轰简姊︽兂涓嶆柇鍓嶈锛屼綘锻纻',
//     },
//     r11: {
//       num: 0,
//       name: '鐗规畩镄 1%',
//       desc: '浣犺窡99 %涓崭竴镙凤纴鐗瑰埆镄勭埍缁欑壒鍒殑浣 ',
//       reason: '杈炬垚鏉′欢锛氭垚锷熸姷杈剧粓镣 ',
//       title: '2016骞达纴鍙湁1%镄勪汉鎷ユ湁鎴戠殑缁忓巻锛屼綘鏉ヨ瘯璇曪纻',
//     },
//     r12: {
//       num: 0,
//       name: '瀹岀编涔嬬',
//       desc: '浣犵殑2016骞撮潪宁稿畲缇庯纴2017骞存敞瀹氩ソ杩 ',
//       reason: '杈炬垚鏉′欢锛氭垚锷熸姷杈剧粓镣 ',
//       title:
//         '2016骞达纴鎴戠粡铡嗗悇绉嶅ぇ浜嬶纴娣峰缑椋庣敓姘磋捣锛屼綘鏉ヨ瘯璇曪纻',
//     },
//   }
