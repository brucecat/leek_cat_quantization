// echartsConfig.ts
import { use } from "echarts/core";
import { BarChart, PieChart } from "echarts/charts";
import { GridComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
export var initECharts = function() {
    use([
        GridComponent,
        LegendComponent,
        BarChart,
        PieChart,
        CanvasRenderer
    ]);
} // export { type EChartsOption } from 'echarts/types/dist/shared.d.ts'
;
