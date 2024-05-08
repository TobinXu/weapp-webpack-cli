import { apiClient } from "@/tsingapi/apiClient"
import { toast } from "@/utils/wechatUtils"
import { getI18nEntryValue } from "@/utils/i18n"

Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    showSpin: false,
    clickBarChart() {
        console.log('clickBarChart')
    },
    clickNumberChart() {
        console.log('clickNumberChart')
    },
    clickLineChart() {
        console.log('clickLineChart')
    },
    clickPieChart() {
        console.log('clickPieChart')
    },
    chartData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.setNavigationBarTitle({title: getI18nEntryValue('et-校友数据统计')})
    this.getMyStatisticsData()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  async getMyStatisticsData() {
    try {
        this.setData({
            showSpin: true
        })
        const res = await apiClient.myDashboardData({})
        res.data?.map(item => {
            item?.items?.forEach(c => {
                c.values?.forEach(v => {
                    v.y = Number(v.y)
                })
            })
            return item
        })
        res.data?.map(data => {
            data?.items?.forEach(item => {
                if (item.display === 'PIE') {
                    item.values = item.values?.map(value => {
                        value.color = value.x
                        value.x = '1'
                        return value
                    })
                }
            })
            return {
                ...data
            }
        })
        this.setData({
            chartData: res.data
        })
    } catch (error) {
        toast.info(error)
    } finally {
        this.setData({
            showSpin: false
        })
    }
  },

})