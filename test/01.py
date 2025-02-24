# https://zhuanlan.zhihu.com/p/44301461
import pandas as pd
import tushare as ts
import matplotlib.pyplot as plt
import pandas as pd


TOKEN = '1809fee7997324f1e828f3a961d6322361669cecafe2b10b2aa63f33'
pro = ts.pro_api(token=TOKEN)

df = pro.query('daily', ts_code='000001.SZ', start_date='20170701', end_date='20240224')
df.index = df.trade_date

# df2 = pro.daily(ts_code = '002352.SZ',start_date = '20230101')
# df['open'].plot()
# plt.ylim(5,18)
# plt.show()
df.index = pd.to_datetime(df.index)

plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False
plt.figure(figsize=(12,6))
df['close'].plot()
plt.ylim(5,18)
plt.xlabel("日期")
plt.title("20170701-20180911收盘价趋势")
plt.ylabel("收盘价")
plt.legend()
plt.grid()
plt.show()

