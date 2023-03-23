import { ConfigProvider, theme, Space, Dropdown } from "antd";
import Icon from "@ant-design/icons";
import CustomerSvg from "./CustomerSvg";
import { jsxDEV } from "react/jsx-dev-runtime";
var index = /* @__PURE__ */ (() => ".customerSvg {\n  color: #4a90e2;\n}\n.tenantName {\n  max-width: 150px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.overlay :global .ant-dropdown-menu {\n  padding-left: 8px;\n  padding-right: 8px;\n  max-height: 320px;\n  overflow-y: auto;\n}\n.overlay :global .ant-dropdown-menu .ant-dropdown-menu-item:not(.ant-dropdown-menu-item-selected) {\n  height: 32px;\n  border-radius: 2px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.overlay :global .ant-dropdown-menu .ant-dropdown-menu-item:not(.ant-dropdown-menu-item-selected):hover {\n  color: #ffffff;\n  background-color: #4a90e2;\n}\n.overlay :global .ant-dropdown-menu .ant-dropdown-menu-item-selected {\n  height: 32px;\n  background: rgba(74, 144, 226, 0.16);\n  color: #4a90e2;\n}\n.overlay :global .ant-dropdown-menu .ant-dropdown-menu-item-selected:hover {\n  color: #ffffff;\n  background-color: #4a90e2;\n}\n.switchTenant {\n  padding: 0;\n  height: 40;\n  display: inline-block;\n  border: none;\n  color: #4a90e2;\n  cursor: pointer;\n}\n")();
var _jsxFileName = "/Users/hewenjie/Documents/project/positive-ui/packages/components/src/SwitchStaff/index.tsx";
const SwitchStaff = () => {
  return /* @__PURE__ */ jsxDEV(ConfigProvider, {
    theme: {
      algorithm: theme.darkAlgorithm
    },
    children: /* @__PURE__ */ jsxDEV(Space, {
      align: "center",
      children: [/* @__PURE__ */ jsxDEV(Icon, {
        component: CustomerSvg,
        className: "customerSvg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, void 0), /* @__PURE__ */ jsxDEV("div", {
        className: "tenantName",
        children: "\u5C0F\u4F55\u7684\u79DF\u6237"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, void 0), /* @__PURE__ */ jsxDEV(Dropdown, {
        overlayClassName: "overlay",
        autoFocus: true,
        autoAdjustOverflow: false,
        placement: "bottomRight",
        destroyPopupOnHide: true,
        arrow: true,
        menu: {
          items: [{
            key: "1",
            label: "\u5C0F\u4F55\u7684\u79DF\u6237"
          }, {
            key: "2",
            label: "\u5C0F\u5192\u7684\u79DF\u6237"
          }],
          selectable: true,
          selectedKeys: ["1"],
          onClick: ({
            key
          }) => {
            console.log("\u70B9\u51FB", key);
          }
        },
        trigger: ["click"],
        children: /* @__PURE__ */ jsxDEV("span", {
          className: "switchTenant",
          children: "\u5207\u6362"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, void 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, void 0)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, void 0);
};
export { SwitchStaff as default };
