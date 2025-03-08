export * from "./EChartBox";
// echart按需导入 目前只在物料里有使用graphic format
import { graphic, format } from "echarts/core";
export var echartsCore = {
    graphic: graphic,
    format: format
};
