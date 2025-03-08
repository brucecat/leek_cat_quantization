/// <reference types="react" />
interface CommonChartProps {
    chartConfig: Record<string, any> | null;
}
export declare const delay: ((callback: IdleRequestCallback, options?: IdleRequestOptions | undefined) => number) & typeof requestIdleCallback;
declare const CommonChart: import("react").ForwardRefExoticComponent<CommonChartProps & import("react").RefAttributes<unknown>>;
export default CommonChart;
