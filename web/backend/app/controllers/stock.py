from flask import jsonify, request
from app import db
from app.config import Config
from sqlalchemy import create_engine, text


def get_stock_detail(stock_code = '000949.SZ'):
    # 用sql查询数据库的方法
    # query_sql = text('select * from user')
    # data = db.session.execute(query_sql)
    # print(list(data))

    # 查询stock数据
    stock_data_list = Config.STOCK_API.query('daily', ts_code=stock_code, start_date='20170701', end_date='20250225')
    # print(stock_data.index)

    table_header_list = list(stock_data_list.columns)
    # ['000949.SZ' '20180530' 3.57 3.59 3.4 3.57 3.56 0.01 0.28 54444.5119163.486]
    # ['ts_code', 'trade_date', 'open', 'high', 'low', 'close', 'pre_close', 'change', 'pct_chg', 'vol', 'amount']
    
    # 以日期为key，转为list
    res_list = []

    for stock_data in stock_data_list.values:
      res_list.append(dict(zip(table_header_list, stock_data)))

    return jsonify({
        "code": 200,
        "message": "success",
        "data": res_list
    })