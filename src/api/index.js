import ajax from './ajax'


// 获取懒加载数据
export const getImgList = () => ajax({
    url:'/getImgListItem'
})