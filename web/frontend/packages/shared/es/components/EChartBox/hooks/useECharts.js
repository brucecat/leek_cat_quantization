import { useDebounceFn } from "ahooks";
import { init as echartsInit } from "echarts";
import { useEffect, useRef } from "react";
/**
 * 使用React Hook来初始化并管理ECharts实例。
 *
 * @returns {Object} 返回一个包含chartRef和chartInstanceRef的对象。
 *                   chartRef是HTMLDivElement的引用，用于挂载ECharts实例；
 *                   chartInstanceRef是ECharts实例的引用，用于调用如`setOption`等方法更新图表配置与数据。
 */ export var useECharts = function() {
    // 用于存储ECharts图表容器的引用
    var chartRef = useRef(null);
    // 用于存储ECharts实例的引用
    var chartInstanceRef = useRef();
    // 防抖
    var _useDebounceFn = useDebounceFn(function() {
        var // 窗口大小改变时调整图表大小
        _chartInstanceRef_current;
        (_chartInstanceRef_current = chartInstanceRef.current) === null || _chartInstanceRef_current === void 0 ? void 0 : _chartInstanceRef_current.resize();
    }, {
        wait: 400,
        leading: true
    }), handleResize = _useDebounceFn.run;
    // 当组件挂载到DOM上时，初始化ECharts实例，并在窗口大小改变时调整图表大小
    useEffect(function() {
        if (chartRef.current) {
            // 初始化ECharts实例
            chartInstanceRef.current = echartsInit(chartRef.current);
            // 监听窗口大小改变事件
            window.addEventListener("resize", handleResize);
            // 组件卸载时，移除窗口大小改变的事件监听并销毁ECharts实例
            return function() {
                var // 销毁实例
                _chartInstanceRef_current;
                window.removeEventListener("resize", handleResize);
                (_chartInstanceRef_current = chartInstanceRef.current) === null || _chartInstanceRef_current === void 0 ? void 0 : _chartInstanceRef_current.dispose();
            };
        }
    }, []);
    // 返回包含chartRef和chartInstanceRef的对象
    return {
        chartRef: chartRef,
        chartInstanceRef: chartInstanceRef,
        handleResize: handleResize
    };
};
