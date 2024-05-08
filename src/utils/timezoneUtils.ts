import dayjs from "dayjs"
import { weekDayMapping } from "./mappings"
import { timeAt } from 'tz-offset'

/**
 * This method is deprecated
 * @param date 
 */
const format = (date: Date) => {
    const transferedTime = new Date(date).getTime() + 8 * 3600 * 1000
    const day = new Date(transferedTime).getUTCDate().toString().padStart(2, '0')
    const month = (new Date(transferedTime).getUTCMonth() + 1).toString().padStart(2, '0')
    // 返回提取的日期字符串
    return `${month}.${day}`;
}
/**
 * This method is deprecated
 * @param date 
 */
function getWeekDay(date:Date) {
    const weekdays = ['fv-周日', 'fv-周一', 'fv-周二', 'fv-周三', 'fv-周四', 'fv-周五', 'fv-周六'];
    const transferredTime = new Date(date).getTime() + 8 * 3600 * 1000
    const dayOfWeek = new Date(transferredTime).getUTCDay();
    return weekdays[dayOfWeek];
}

export function compareAndReplaceDates(backendDates: any) {
    const diff = wx.getStorageSync('serverTimeDiff') || 0
    // 以当地时间获取到16天并转换为指定时区
    const localDatesInTimezone = [] as any[];
    // todo 考虑server time 差值  和本地时间
    for (let i = 0; i < 16; i++) {
        const today = new Date()
        const alignDay = today.setDate(today.getDate() + i) + diff
        const nextDay = dayjs(timeAt(new Date(alignDay), 'Asia/Shanghai'))
        localDatesInTimezone.push({
            date: nextDay,
            formattedDate: nextDay.format('MM.DD'), // 格式化日期为 MM.DD
            weekLabel: weekDayMapping[nextDay.format('dddd')],
            availableAt: null,
            availableQuota: null,
            id: null,
            status: 'NOTOPEN', // 补充的缺失日期状态为CLOSED
        });
    }

    // 遍历后台返回的日期并转换为指定时区
    const backendDatesInTimezone = backendDates.map((backendDate: { date: string | number | Date; }) => {
        return ({
            ...backendDate,
            formattedDate: dayjs(timeAt(new Date(backendDate.date), 'Asia/Shanghai')).format('MM.DD'), // 格式化日期为 MM.DD
        })
    });


    // 比较日期并替换
    for (let i = 0; i < localDatesInTimezone.length; i++) {
        const localDate = localDatesInTimezone[i];
        const backendDate = backendDatesInTimezone.find((date: { formattedDate: string; }) => date.formattedDate === localDate.formattedDate);
        if (backendDate) {
            // 替换为后台返回的日期
            localDatesInTimezone.splice(i, 1, backendDate)
        }
    }
    localDatesInTimezone[0].weekLabel = 'tip-今天'
    // 抛出结果
    return localDatesInTimezone;
}

export const formatDateByDayjs = (date: Date) => {
    return dayjs(timeAt(date, 'Asia/Shanghai')).format('YYYY-MM-DD')
}


export const formattedReservationList = (arr: any) => {
    return arr?.map((item: any ) => {
        return {
            ...item,
            formattedDate: formatDateByDayjs(new Date(item?.date?.date))
        }
    })
}