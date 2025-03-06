// echartsConfig.ts
import { use } from 'echarts/core'
import { BarChart, PieChart } from 'echarts/charts'
import { GridComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { ComposeOption } from 'echarts/core'
import type { BarSeriesOption, PieSeriesOption } from 'echarts/charts'
import type {
  GridComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
  LegendComponentOption,
} from 'echarts/components'

// 柱状图
export type BarECOption = ComposeOption<
| BarSeriesOption
| TitleComponentOption
| TooltipComponentOption
| GridComponentOption
>

// 饼状图
export type PieECOption = ComposeOption<
| PieSeriesOption
| TitleComponentOption
| TooltipComponentOption
| GridComponentOption
| LegendComponentOption
>

export const initECharts = () => {
  use([GridComponent, LegendComponent, BarChart, PieChart, CanvasRenderer])
}

// export { type EChartsOption } from 'echarts/types/dist/shared.d.ts'
