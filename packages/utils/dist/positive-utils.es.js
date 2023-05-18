import { useEffect as e } from "react";
function r() {
  return e(() => {
    console.log("测试一下demo");
  }, []), "小何的测试用户";
}
export {
  r as useCurrent
};
