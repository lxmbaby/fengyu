// 数据懒加载逻辑
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
export const DataLazy = (apiFn) => {
  const result = ref([]);
  const target = ref(null);
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        stop();
        apiFn().then((data) => {
          result.value = data;
        });
      }
    },
    //配置选项，只要相交比例大于0就触发
    {
      threshold: 0,
    }
  );
  return { target, result };
};
