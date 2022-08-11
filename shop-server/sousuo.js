module.exports.lookup = (str) => {
  let result = [];
  //过滤获取首页热门商品区符合条件的商品
  let hotData = require("./json/hot.json").filter((item) => {
    return item.name.indexOf(str) !== -1;
  });
  if (hotData.length >= 1) {
    result.push(...hotData);
  }
  //过滤获取首页新鲜好物中符合条件的商品
  let newData = require("./json/new.json").filter((item) => {
    return item.name.indexOf(str) !== -1;
  });
  if (newData.length >= 1) {
    result.push(...newData);
  }
  //过滤获取首页目录下符合条件的商品
  let navlist = [];
  require("./json/nav.json").find((item) => {
    return (
      item.good.filter((sub) => {
        if (sub.fname.indexOf(str) !== -1) {
          navlist.push(sub);
          return sub;
        }
      }).length >= 1
    );
  });
  if (navlist.length >= 1) {
    result.push(...navlist);
  }
  //过滤获取首页推荐商品区符合条件的商品
  let goodList = [];
  require("./json/good.json").find((item) => {
    return (
      item.good.filter((sub) => {
        if (sub.name.indexOf("热水") !== -1) {
          goodList.push(sub);
          return sub;
        }
      }).length >= 1
    );
  });
  if (goodList.length >= 1) {
    result.push(...goodList);
  }
  //过滤获取一级类下的热门商品区符合条件的商品
  let hotOnelist = [];
  require("./jsonOne/hotOne.json").find((item) => {
    return (
      item.filter((sub) => {
        if (sub.dev.indexOf(str) !== -1) {
          hotOnelist.push(sub);
          return sub;
        }
      }).length >= 1
    );
  });
  if (hotOnelist.length >= 1) {
    result.push(...hotOnelist);
  }
  // //过滤获取一级类下的商品推荐区符合条件的商品
  let boutique = [];
  require("./jsonOne/boutique.json").filter((item) => {
    return item.filter((sub) => {
      return (
        sub.src.filter((sve) => {
          if (sve.dev.indexOf(str) !== -1) {
            boutique.push(sve);
            return sve;
          }
        }).length >= 1
      );
    });
  });
  if (boutique.length >= 1) {
    result.push(...boutique);
  }
  //过滤获取二级类下符合条件的商品
  let secondlist = [];
  require("./jsonTwo/secondGood.json").filter((item) => {
    return item.filter((sub) => {
      return (
        sub.good.filter((sve) => {
          if (sve.name.indexOf(str) !== -1) {
            secondlist.push(sve);
            return sve;
          }
        }).length >= 1
      );
    });
  });
  if (secondlist.length >= 1) {
    result.push(...secondlist);
  }
  return result;
};
