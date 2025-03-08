// 通用ECharts组件
import type { ECBasicOption } from 'echarts/types/dist/shared'
import { useECharts } from '../hooks/useECharts'
import { useEffect, forwardRef, useImperativeHandle } from 'react'
import { useMemoizedFn } from 'ahooks'
import useResizeObserver from '../hooks/useResizeObserver'

interface CommonChartProps {
  chartConfig: Record<string, any> | null
}

export const delay = window.requestIdleCallback || setTimeout

const CommonChart = forwardRef(({ chartConfig = null }: CommonChartProps, ref) => {
  const { chartRef: commonRef, chartInstanceRef: commonChart, handleResize } = useECharts()

  // 开始绘图
  const handleDraw = useMemoizedFn(() => {
    if (!chartConfig) {
      return
    }
    commonChart.current?.setOption(chartConfig as ECBasicOption)
    handleResize()
  })

  useEffect(() => {
    handleDraw()
  }, [chartConfig])

  // 每次尺寸大小改变时都resize一下
  useResizeObserver(commonRef, () => {
    handleResize()
  })

  useImperativeHandle(ref, () => {
    return {
      chartInstanceRef: commonChart,
      chartRef: commonRef,
    }
  })

  return <div style={{ height: '100%', width: '100%', minWidth: 100 }} ref={commonRef}></div>
})

export default CommonChart
