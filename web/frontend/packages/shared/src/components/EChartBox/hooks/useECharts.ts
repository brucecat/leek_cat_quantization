import { useDebounceFn } from 'ahooks'
import { init as echartsInit } from 'echarts'
import { useEffect, useRef } from 'react'

/**
 * 使用React Hook来初始化并管理ECharts实例。
 *
 * @returns {Object} 返回一个包含chartRef和chartInstanceRef的对象。
 *                   chartRef是HTMLDivElement的引用，用于挂载ECharts实例；
 *                   chartInstanceRef是ECharts实例的引用，用于调用如`setOption`等方法更新图表配置与数据。
 */
export const useECharts = () => {
  // 用于存储ECharts图表容器的引用
  const chartRef = useRef<HTMLDivElement>(null)

  // 用于存储ECharts实例的引用
  const chartInstanceRef = useRef<echarts.ECharts>()

  // 防抖
  const { run: handleResize } = useDebounceFn(() => {
    // 窗口大小改变时调整图表大小
    chartInstanceRef.current?.resize()
  }, {
    wait: 400,
    leading: true
  })

  // 当组件挂载到DOM上时，初始化ECharts实例，并在窗口大小改变时调整图表大小
  useEffect(() => {
    if (chartRef.current) {
      // 初始化ECharts实例
      chartInstanceRef.current = echartsInit(chartRef.current)

      // 监听窗口大小改变事件
      window.addEventListener('resize', handleResize)

      // 组件卸载时，移除窗口大小改变的事件监听并销毁ECharts实例
      return () => {
        window.removeEventListener('resize', handleResize)

        // 销毁实例
        chartInstanceRef.current?.dispose()
      }
    }
  }, [])

  // 返回包含chartRef和chartInstanceRef的对象
  return { chartRef, chartInstanceRef, handleResize }
}
