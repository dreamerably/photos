var data = [];

var dataStr = "\
sm&辣鸡&超级可爱温暖的铲屎官一枚$\
ds&矮油&初见矮油$\
yzj&矮油&非常不情愿的矮油$\
hyq&矮油&被迫营业的矮油$\
dlf&小七&虽然是矮油和辣鸡的照片墙但是小七也不能少$\
zsq&睡美人&不知道梦见什么才能睡成这样$\
gg&矮油&睡美人矮油$\
cyx&矮油&睡美人再得一分$\
le&矮油&超凶的矮油\
"

var d = dataStr.split("$");
for(var i = 0; i<d.length; i++){
  var c = d[i].split("&");
  data.push({
    img: c[0]+ ".jpg",
    caption: c[1],
    desc: c[2]
  });
}

