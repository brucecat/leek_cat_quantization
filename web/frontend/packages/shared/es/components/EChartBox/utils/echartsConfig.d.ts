import type { ComposeOption } from 'echarts/core';
import type { BarSeriesOption, PieSeriesOption } from 'echarts/charts';
import type { GridComponentOption, TitleComponentOption, TooltipComponentOption, LegendComponentOption } from 'echarts/components';
export type BarECOption = ComposeOption<BarSeriesOption | TitleComponentOption | TooltipComponentOption | GridComponentOption>;
export type PieECOption = ComposeOption<PieSeriesOption | TitleComponentOption | TooltipComponentOption | GridComponentOption | LegendComponentOption>;
export declare const initECharts: () => void;
