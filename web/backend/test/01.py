# https://zhuanlan.zhihu.com/p/44301461
import tushare as ts
import pandas as pd


TOKEN = '1809fee7997324f1e828f3a961d6322361669cecafe2b10b2aa63f33'
pro = ts.pro_api(token=TOKEN)

df = pro.query('daily', ts_code='000949.SZ', start_date='20170701', end_date='20250225')

print(df)


# ts_code	str	股票代码
# trade_date	str	交易日期
# open	float	开盘价
# high	float	最高价
# low	float	最低价
# close	float	收盘价
# pre_close	float	昨收价【除权价，前复权】
# change	float	涨跌额
# pct_chg	float	涨跌幅 【基于除权后的昨收计算的涨跌幅：（今收-除权昨收）/除权昨收 】
# vol	float	成交量 （手）
# amount	float	成交额 （千元）