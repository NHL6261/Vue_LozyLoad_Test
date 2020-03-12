// 请求异步数据
import {
    getImgList
} from '../api'

import { 
    SAVA_IMGlIST
} from './mutations-type'
export default {
    // 获取懒加载数据
    async getImgListActions({commit}){
        let result = await getImgList()
        commit(SAVA_IMGlIST,result.imagesList)
    }
}

