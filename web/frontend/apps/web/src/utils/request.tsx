import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getAccessToken, setAccessToken } from ".";
import { message } from "antd";
type BaseApiResponse<T> = {
  code: number;
  message: string;
  result: T;
};
interface RequestOptions {
  globalErrorMessage?: boolean;
  globalSuccessMessage?: boolean;
}
interface ExpandAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> {
  interceptorHooks?: InterceptorHooks;
  requestOptions?: RequestOptions;
  noAuth?: boolean;
}
interface ExpandInternalAxiosRequestConfig<D = any>
  extends InternalAxiosRequestConfig<D> {
  interceptorHooks?: InterceptorHooks;
  requestOptions?: RequestOptions;
}
export interface ExpandAxiosResponse<T = any, D = any>
  extends AxiosResponse<T, D> {
  config: ExpandInternalAxiosRequestConfig<D>;
}
export interface InterceptorHooks {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (
    response: AxiosResponse
  ) => AxiosResponse | Promise<AxiosResponse>;
  responseInterceptorCatch?: (error: any) => any;
}

export class MyRequest {
  private _instance: AxiosInstance;
  private _defaultConfig: ExpandAxiosRequestConfig = {
    baseURL: "",
    timeout: 5000,
    requestOptions: {
      globalErrorMessage: true,
      globalSuccessMessage: false,
    },
  };
  private _interceptorHooks?: InterceptorHooks;
  constructor(config: ExpandAxiosRequestConfig) {
    this._instance = axios.create(Object.assign(this._defaultConfig, config));
    this._interceptorHooks = config.interceptorHooks;
    this.setupInterceptors();
  }
  private setupInterceptors() {
    this._instance.interceptors.request.use(
      this._interceptorHooks?.requestInterceptor,
      this._interceptorHooks?.requestInterceptorCatch
    );
    this._instance.interceptors.response.use(
      this._interceptorHooks?.responseInterceptor,
      this._interceptorHooks?.responseInterceptorCatch
    );
  }
  public request(config: ExpandAxiosRequestConfig): Promise<AxiosResponse> {
    return this._instance.request(config);
  }
  public get<T = any>(
    url: string,
    config?: ExpandAxiosRequestConfig
  ): Promise<AxiosResponse<BaseApiResponse<T> | any>> {
    return this._instance.get(url, config);
  }
  public post<T = any>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig
  ): Promise<T> {
    return this._instance.post(url, data, config);
  }
  public put<T = any>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig
  ): Promise<T> {
    return this._instance.put(url, data, config);
  }
  public delete<T = any>(
    url: string,
    config?: ExpandAxiosRequestConfig
  ): Promise<T> {
    return this._instance.delete(url, config);
  }

  public postXForm<T = any>(url: string, data?: any): Promise<T> {
    return this._instance.post(url, data, {
      transformRequest: [
        function (oldData) {
          let newStr = "";
          for (let item in oldData) {
            newStr +=
              encodeURIComponent(item) +
              "=" +
              encodeURIComponent(oldData[item]) +
              "&";
          }
          newStr = newStr.slice(0, -1);
          return newStr;
        },
      ],
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }
}



const transform: InterceptorHooks = {
  requestInterceptor(config: any) {
    const token = getAccessToken()
    if (token && !config.noAuth) {
      config.headers && (config.headers.Authorization = token)
    }
    return config;
  },
  requestInterceptorCatch(err) {
    console.log('err: ', err);
    return Promise.reject(err);
  },


  // -----------------response-----------------
  responseInterceptor(result) {
    const res = result as ExpandAxiosResponse;
    return res.data;
  },

  responseInterceptorCatch(error) {
    const { response } = error as any
    if (Number(response?.status) === 403) {
      setAccessToken(null)
      // navigateToLoginPage()
      return Promise.reject(error)
    } else if (Number(response?.status) === 400) {
      message.error(response?.data?.error ?? 'Network error')
      return Promise.reject(error)
    }
    return Promise.reject(error)
  },
};

const request = new MyRequest({
  baseURL: "/api",
  timeout: 20 * 1000,
  interceptorHooks: transform,
});

export default request;

// request
//   .post<ResModel>(
//     '/abc',
//     {
//       a: 'aa',
//       b: 'bb'
//     },
//     {
//       requestOptions: {
//         globalErrorMessage: true
//       }
//     }
//   )
//   .then((res) => {
//     console.log('res: ', res)
//     console.log(res.str)
//   })