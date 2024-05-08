import {PrivacyLevelEnum, RelationshipEnum} from '../graphql/generated'
import { getI18nEntryValue, getI18nLanguage } from './i18n'

export const privacySettingMapping: any = {
  [PrivacyLevelEnum.Alumni]: '校友可见',
  [PrivacyLevelEnum.Friends]: '好友可见',
  [PrivacyLevelEnum.Secret]: '保密',
  // [PrivacyLevelEnum.Classmates]: '同学可见'
}

export const weekDayMapping: any = {
    Monday: 'fv-周一',
    Tuesday: 'fv-周二',
    Wednesday: 'fv-周三',
    Thursday: 'fv-周四',
    Friday: 'fv-周五',
    Saturday: 'fv-周六',
    Sunday: 'fv-周日',
}

export const reversePrivacySettingMapping = {
  '校友可见': PrivacyLevelEnum.Alumni,
  '好友可见': PrivacyLevelEnum.Friends,
  '保密': PrivacyLevelEnum.Secret,
  // '同学可见': PrivacyLevelEnum.Classmates,
}

export const getI18nReversePrivacySettingMapping = () => {
  return {
    [getI18nEntryValue('fv-校友可见')]: PrivacyLevelEnum.Alumni,
    [getI18nEntryValue('fv-好友可见')]: PrivacyLevelEnum.Friends,
    [getI18nEntryValue('fv-保密')]: PrivacyLevelEnum.Secret,
  }
}

export const privacySettings = [PrivacyLevelEnum.Alumni, PrivacyLevelEnum.Friends, PrivacyLevelEnum.Secret]
export const privacySettingLabels = privacySettings.map((s) => privacySettingMapping[s])

export const relationshipMapping = {
  [RelationshipEnum.MySelf]: '就是我自己',
  [RelationshipEnum.Friends]: '互为好友',
  [RelationshipEnum.Received]: '他发出过申请，待批准',
  [RelationshipEnum.ReceivedAndRejected]: '他发出过申请，已驳回',
  [RelationshipEnum.Sent]: '我发出国申请，待批准',
  [RelationshipEnum.SentAndRejected]: '我发出过申请，已驳回',
  [RelationshipEnum.Stranger]: '陌生人'
}