# https://zhuanlan.zhihu.com/p/44301461
import tushare as ts

TOKEN = '1809fee7997324f1e828f3a961d6322361669cecafe2b10b2aa63f33'
STOCK_API = ts.pro_api(token=TOKEN)

class Config:
    SQLALCHEMY_DATABASE_NAME = 'gallery.db'
    SQLALCHEMY_DATABASE_URI = f'sqlite:///{SQLALCHEMY_DATABASE_NAME}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SUPERBED_TOKEN = 'false'
    DEBUG = True
    HOST = '0.0.0.0'
    PORT = 9001
    STOCK_API=STOCK_API
