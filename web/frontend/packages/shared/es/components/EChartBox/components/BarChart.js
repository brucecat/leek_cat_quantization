import { useECharts } from "../hooks/useECharts";
import { useEffect } from "react";
import { format, graphic } from "echarts/core";
import { useMemoizedFn } from "ahooks";
var BarChart = function(param) {
    var seriesData = param.seriesData, xAxisData = param.xAxisData, _param_height = param.height, height = _param_height === void 0 ? 400 : _param_height, _param_unit = param.unit, unit = _param_unit === void 0 ? "元" : _param_unit;
    var _useECharts = useECharts(), barRef = _useECharts.chartRef, barChart = _useECharts.chartInstanceRef;
    var getOptions = useMemoizedFn(function() {
        return {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                },
                formatter: function(params) {
                    // if (Array.isArray(params) && params.length > 0) {
                    var firstItem = params[0];
                    return "".concat(firstItem.name, "<br/> ").concat(firstItem.marker, " <strong>").concat(format.addCommas(firstItem.value), " ").concat(unit, "</strong>");
                // }
                // return ''
                }
            },
            grid: {
                top: "15%",
                right: "3%",
                left: "5%",
                bottom: "12%"
            },
            xAxis: [
                {
                    type: "category",
                    data: xAxisData,
                    axisLine: {
                        lineStyle: {
                            color: "#dedede"
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        color: "#999",
                        fontSize: 14
                    }
                }
            ],
            yAxis: [
                {
                    axisLabel: {
                        formatter: "{value}",
                        color: "#999"
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#dedede"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#eee"
                        }
                    }
                }
            ],
            series: [
                {
                    type: "bar",
                    data: seriesData,
                    barWidth: "20px",
                    itemStyle: {
                        color: new graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "#8bc8ff" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#1990ff" // 100% 处的颜色
                            }
                        ], false),
                        borderRadius: [
                            30,
                            30,
                            0,
                            0
                        ],
                        shadowColor: "rgba(0,160,221,0)",
                        shadowBlur: 2
                    },
                    emphasis: {
                        // 鼠标悬浮时，条形的样式指定
                        focus: "series",
                        itemStyle: {
                            shadowBlur: 2,
                            shadowColor: "#1990ff" // 添加阴影效果
                        }
                    },
                    label: {
                        show: true,
                        lineHeight: 30,
                        width: 80,
                        height: 30,
                        backgroundColor: "rgba(25, 145, 255,.1)",
                        borderRadius: 200,
                        position: [
                            "-8",
                            "-60"
                        ],
                        distance: 1,
                        formatter: function formatter(params) {
                            // 使用 ECharts 的 formatNumber 方法格式化数值
                            var formattedNumber = format.addCommas(params.value);
                            // 构造富文本标签字符串
                            return [
                                "    {d|●}",
                                "    {a|".concat(formattedNumber, "}     \n"),
                                "     {b|}"
                            ].join("");
                        },
                        rich: {
                            d: {
                                color: "#1890ff"
                            },
                            a: {
                                color: "#1890ff",
                                align: "center"
                            },
                            b: {
                                width: 1,
                                height: 30,
                                borderWidth: 1,
                                borderColor: "#e8f4ff",
                                align: "left"
                            }
                        }
                    }
                }
            ]
        };
    });
    useEffect(function() {
        var _barChart_current;
        var op = getOptions();
        (_barChart_current = barChart.current) === null || _barChart_current === void 0 ? void 0 : _barChart_current.setOption(op);
    }, [
        barChart,
        seriesData,
        unit,
        xAxisData
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            height: "".concat(height, "px"),
            width: "100%",
            minWidth: 600
        },
        ref: barRef
    });
};
export default BarChart;
