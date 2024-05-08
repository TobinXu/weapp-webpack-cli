import {
    baseURL
} from './config'

export const rootURL = baseURL

export const URLMap = {
    license: `${baseURL}/license.html`,
    pointRule: `${baseURL}/point-rule.html`,
    userhelp: `${baseURL}/userhelp.html`,
    cardGuide: `${baseURL}/alumni-card-use-guide.html`,
}

export const AppidMap = {
    tongfangbu: 'TFB-RELEASE',
    stamp: '110DZHYP',
    gift: 'QHYXJNP',
}

export const AlumniEmailSource = {
    Manual: 'Manual',
    SelfService: 'SelfService',
    MiniProgram: 'MiniProgram',
}

export const DonationType = {
    Donation: 'Donation',
    Subscription: 'Subscription',
}

export const InvoiceCustType = {
    Geren: 'Geren',
    Danwei: 'Danwei',
}

export const FormFieldType = {
    Info: 'Info',
    Custom: 'Custom',
    Switch: 'Switch',
    Choice: 'Choice',
    MultipleChoice: 'MultipleChoice',
    Text: 'Text',
    Select: 'Select',
    Image: 'Image',
    File: 'File',
    Picker: 'Picker',
    TextTips: 'TextTips',
    YesNo: 'YesNo',
}

export const INVOICE_STATE = {
    PENDING: "PENDING",
    GENERATING: "GENERATING",
    SUCCESS: "SUCCESS",
    FAILED: "FAILED"
}
export const INVOICE_STATE_TEXT = {
    [INVOICE_STATE.PENDING]: "fn-未开票",
    [INVOICE_STATE.GENERATING]: "fn-开票中",
    [INVOICE_STATE.SUCCESS]: "fn-开票成功",
    [INVOICE_STATE.FAILED]: "fn-开票失败"
}

export const RelationshipEnum = {
    Friends: 'FRIEND' ,   /** 互为好友 */
    Stranger: 'NOT_FRIEND', /** 陌生人 */
    Sent:'REQUEST_SENT' ,     /** 我发出过申请，待批准 */
    SentAndRejected:'REQUEST_SENT_REJECTED',     /** 他发出过申请，已驳回 */
    Received: 'REQUEST_RECEIVED',      /** 他发出过申请，待批准 */
    ReceivedAndRejected: 'REQUEST_REJECTED'  ,  /** 他发出过申请，已驳回 */
    MySelf: 'SELF'    /** 就是我自己 */
}
