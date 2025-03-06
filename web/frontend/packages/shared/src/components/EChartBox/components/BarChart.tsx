import { useECharts } from '../hooks/useECharts'
import { useEffect } from 'react'
import { BarECOption } from '../utils/echartsConfig'
import type { CallbackDataParams } from 'echarts/types/dist/shared'
import { format, graphic } from 'echarts/core'
import { useMemoizedFn } from 'ahooks'

interface BarChartProps {
  // 柱状图系列的数据
  seriesData: number[]
  // 柱状图X轴的数据
  xAxisData: string[]
  // 图表高度
  height?: number
  // tooltip显示的单位，默认：元
  unit?: string
}

const BarChart = ({ seriesData, xAxisData, height = 400, unit = '元' }: BarChartProps) => {
  const { chartRef: barRef, chartInstanceRef: barChart } = useECharts()

  const getOptions = useMemoizedFn(() => {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: (params: CallbackDataParams[]) => {
          // if (Array.isArray(params) && params.length > 0) {
          const firstItem = params[0]
          return `${firstItem.name}<br/> ${firstItem.marker} <strong>${format.addCommas(firstItem.value as number)} ${unit}</strong>`
          // }
          // return ''
        }
      },
      grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
      },
      xAxis: [
        {
          type: 'category',
          data: xAxisData,
          axisLine: {
            lineStyle: {
              color: '#dedede'
            }
          },
          axisLabel: {
            margin: 10,
            color: '#999',
            fontSize: 14
          }
        }
      ],
      yAxis: [
        {
          axisLabel: {
            formatter: '{value}',
            color: '#999'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#dedede'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#eee'
            }
          }
        }
      ],
      series: [
        {
          type: 'bar',
          data: seriesData,
          barWidth: '20px',
          itemStyle: {
            color: new graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#8bc8ff' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#1990ff' // 100% 处的颜色
                }
              ],
              false
            ),
            borderRadius: [30, 30, 0, 0],
            shadowColor: 'rgba(0,160,221,0)',
            shadowBlur: 2
          },
          emphasis: {
            // 鼠标悬浮时，条形的样式指定
            focus: 'series',
            itemStyle: {
              shadowBlur: 2,
              shadowColor: '#1990ff' // 添加阴影效果
            }
          },
          label: {
            show: true,
            lineHeight: 30,
            width: 80,
            height: 30,
            backgroundColor: 'rgba(25, 145, 255,.1)',
            borderRadius: 200,
            position: ['-8', '-60'],
            distance: 1,
            formatter: function (params: any) {
              // 使用 ECharts 的 formatNumber 方法格式化数值
              const formattedNumber = format.addCommas(params.value as number)
              // 构造富文本标签字符串
              return [
                '    {d|●}',
                `    {a|${formattedNumber}}     \n`, // 使用格式化后的数值
                '     {b|}'
              ].join('')
            },
            rich: {
              d: {
                color: '#1890ff'
              },
              a: {
                color: '#1890ff',
                align: 'center'
              },
              b: {
                width: 1,
                height: 30,
                borderWidth: 1,
                borderColor: '#e8f4ff',
                align: 'left'
              }
            }
          }
        }
      ]
    }
  })

  useEffect(() => {
    const op = getOptions()
    barChart.current?.setOption(op as BarECOption)
  }, [barChart, seriesData, unit, xAxisData])

  return <div style={{ height: `${height}px`, width: '100%', minWidth: 600 }} ref={barRef}></div>
}

export default BarChart
