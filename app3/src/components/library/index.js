import FySkeleton from "@/components/library/FySkeleton.vue";
import Carousel from "@/components/library/carousel.vue";
import More from "@/components/library/more.vue";
import defaultImg from "@/assets/image/logo.png";
// 全局公用组件挂载
export default {
  install(app) {
    app.component(FySkeleton.name, FySkeleton);
    app.component(Carousel.name, Carousel);
    app.component(More.name, More);
    defineDirective(app);
  },
};

const defineDirective = (app) => {
  app.directive("lazy", {
    mounted(el, binding) {
      //创建一个观察对象，来观察当前使用指令的元素
      const observe = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            //停止观察
            observe.unobserve(el);
            //图片加载失败，显示默认图
            el.onerror = () => {
              el.src = defaultImg;
            };
            //把指令的值设置给el的src属性 binding.value就是指令的值
            el.src = binding.value;
          }
        },
        {
          threshold: 0,
        }
      );
      //开启观察
      observe.observe(el);
    },
  });
};
