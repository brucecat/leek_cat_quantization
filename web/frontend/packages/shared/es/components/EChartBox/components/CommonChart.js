// 通用ECharts组件
import { useECharts } from "../hooks/useECharts";
import { useEffect, forwardRef, useImperativeHandle } from "react";
import { useMemoizedFn } from "ahooks";
import useResizeObserver from "../hooks/useResizeObserver";
export var delay = window.requestIdleCallback || setTimeout;
var CommonChart = /*#__PURE__*/ forwardRef(function(param, ref) {
    var _param_chartConfig = param.chartConfig, chartConfig = _param_chartConfig === void 0 ? null : _param_chartConfig;
    var _useECharts = useECharts(), commonRef = _useECharts.chartRef, commonChart = _useECharts.chartInstanceRef, handleResize = _useECharts.handleResize;
    // 开始绘图
    var handleDraw = useMemoizedFn(function() {
        var _commonChart_current;
        if (!chartConfig) {
            return;
        }
        (_commonChart_current = commonChart.current) === null || _commonChart_current === void 0 ? void 0 : _commonChart_current.setOption(chartConfig);
        handleResize();
    });
    useEffect(function() {
        handleDraw();
    }, [
        chartConfig
    ]);
    // 每次尺寸大小改变时都resize一下
    useResizeObserver(commonRef, function() {
        handleResize();
    });
    useImperativeHandle(ref, function() {
        return {
            chartInstanceRef: commonChart,
            chartRef: commonRef
        };
    });
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            height: "100%",
            width: "100%",
            minWidth: 100
        },
        ref: commonRef
    });
});
export default CommonChart;
