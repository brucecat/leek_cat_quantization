/// <reference types="react" />
/**
 * 使用React Hook来初始化并管理ECharts实例。
 *
 * @returns {Object} 返回一个包含chartRef和chartInstanceRef的对象。
 *                   chartRef是HTMLDivElement的引用，用于挂载ECharts实例；
 *                   chartInstanceRef是ECharts实例的引用，用于调用如`setOption`等方法更新图表配置与数据。
 */
export declare const useECharts: () => {
    chartRef: import("react").RefObject<HTMLDivElement>;
    chartInstanceRef: import("react").MutableRefObject<import("echarts/types/dist/echarts").ECharts | undefined>;
    handleResize: import("lodash-es").DebouncedFunc<() => void>;
};
