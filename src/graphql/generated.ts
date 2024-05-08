export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** 字母、数字串 */
  AlphaNumeric: any;
  /** 任意值 */
  Any: any;
  /** Base64文本 */
  Base64: any;
  /** 电子邮箱地址 */
  EmailAddr: any;
  /** HTML文本 */
  HTML: any;
  /** IP地址，可以是IPv4，也可以是IPv6 */
  IP: any;
  /** JSON文本 */
  JSON: any;
  /** Key-Value结构 */
  Map: any;
  /** 数字串 */
  Numeric: any;
  /**
   * 表示密码的64位十六进制串，小写表示。
   * 令密码明文为raw，计算方式为：SHA256((~raw)^0xffe5)。
   * ~表示按位取反，^表示异或，0xffe5是字符“￥“的Unicode编码。
   */
  PasswordHash: any;
  /**
   * 手机号，格式：`地区代码.号码`，地区代码和号码之间以一个点（.）隔开。
   * 例如`+86.18812345678`是一个有效格式。
   */
  PhoneNumber: any;
  /** RGBA颜色，格式为6或8位十六进制串 */
  RGBA: any;
  /** 正则表达式 */
  RegExp: any;
  /** 时间，ISO格式 */
  Time: any;
  /** 可直接访问的地址 */
  URL: any;
  /** 上传对象 */
  Upload: any;
  /** 大写字母、数字串 */
  UpperNumeric: any;
  /** 版本号，格式为 major.minor.revision */
  Version: any;
  /** XML文本 */
  XML: any;
};

export type AddMyJobInput = {
  /** 公司/单位 */
  company: Scalars['String'];
  /** 结束时间，null表示至今 */
  endAt?: InputMaybe<Scalars['Time']>;
  /** 行业 */
  industry: Scalars['String'];
  /** 职位 */
  post: Scalars['String'];
  /** 开始时间 */
  startAt: Scalars['Time'];
};

export type AllI18nEntriesInput = {
  /** 按索引值筛选 */
  key?: InputMaybe<Scalars['String']>;
  /** 按索引值前缀筛选 */
  keyPrefix?: InputMaybe<Scalars['String']>;
  /** 按语言筛选 */
  language?: InputMaybe<Scalars['String']>;
  /** 按更新时间筛选该时间之后更新过的词条 */
  updatedSince?: InputMaybe<Scalars['Time']>;
};

/** 校友信息，用于校友间查看 */
export type Alumnus = {
  __typename?: 'Alumnus';
  /** 信誉黑名单（若未被拉黑、或管理员配置为全局不显示，返回null；若被拉黑，返回拉黑理由文字描述） */
  blocked?: Maybe<Scalars['String']>;
  /** 是否已注册（是否已被某一小程序用户认领） */
  claimed: Scalars['Boolean'];
  /** 电子邮箱 */
  email?: Maybe<Scalars['String']>;
  /** 学籍信息 */
  enrollments: Array<Enrollment>;
  /** ID */
  id: Scalars['Int'];
  /** 工作经历 */
  jobs?: Maybe<Array<Job>>;
  /** 电话号码区号 */
  phoneCountryCode?: Maybe<Scalars['String']>;
  /** 电话号码 */
  phoneNumber?: Maybe<Scalars['String']>;
  /** 该校友的隐私设置 */
  privacySettings: PrivacySettings;
  /** 此人与我的关系 */
  relationship: RelationshipEnum;
  /** 居住地-拼接结果 */
  residence?: Maybe<Scalars['String']>;
  /** 居住地-大洲 */
  residenceA?: Maybe<Scalars['String']>;
  /** 居住地-国家或地区 */
  residenceB?: Maybe<Scalars['String']>;
  /** 居住地-省级行政区或州 */
  residenceC?: Maybe<Scalars['String']>;
  /** 居住地-地级行政区 */
  residenceD?: Maybe<Scalars['String']>;
  /** 居住地-县级行政区 */
  residenceE?: Maybe<Scalars['String']>;
  /** 自拍图片 imageId */
  selfieImage?: Maybe<Scalars['String']>;
  /** 访客数（PV） */
  visitorPageViewCount: Scalars['Int'];
  /** 微信号 */
  wechat?: Maybe<Scalars['String']>;
};

export type Coupon = {
  __typename?: 'Coupon';
  /** 校友id */
  alumnusId: Scalars['Int'];
  /** 优惠券券码 */
  couponCode: Scalars['String'];
  /** 优惠券ID */
  id: Scalars['Int'];
  /** 商品ID */
  productId: Scalars['Int'];
  /** 优惠券状态 */
  status: CouponStatusEnum;
};

export enum CouponStatusEnum {
  /** 其他 */
  Other = 'OTHER',
  /** 积分兑换 */
  Points = 'POINTS'
}

export type CreateOrderInput = {
  location?: InputMaybe<InputLocation>;
  payCount: Scalars['Int'];
  payNotes?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  productId: Scalars['Int'];
  receiver?: InputMaybe<Scalars['String']>;
};

/** 校内院系 */
export type Department = {
  __typename?: 'Department';
  /** 结束年份（包含）（负数表示现存） */
  end: Scalars['Int'];
  /** 院系ID */
  id: Scalars['Int'];
  /** 院系名称 */
  name: Scalars['String'];
  /** 开始年份（包含） */
  start: Scalars['Int'];
};

/** 证件类型 */
export enum DocumentTypeEnum {
  /** 港澳居民来往内地通行证 */
  Hkmo = 'HKMO',
  /** 居民身份证 */
  Mainland = 'Mainland',
  /** 护照 */
  Passport = 'Passport',
  /** 台湾居民来往大陆通行证 */
  Tw = 'TW'
}

/** 学籍信息 */
export type Enrollment = {
  __typename?: 'Enrollment';
  /** 当时所属院系 */
  department?: Maybe<Department>;
  /** 学籍类型 */
  enrollmentType: EnrollmentTypeEnum;
  /** 入学年 */
  enrollmentYear: Scalars['Int'];
  /** 性别 */
  gender: Gender;
  /** 姓名 */
  name: Scalars['String'];
};

/** 学籍类型 */
export enum EnrollmentTypeEnum {
  /** 专科 */
  College = 'College',
  /** 博士 */
  Doctor = 'Doctor',
  /** 本科校内二学位 */
  DoubleMajor = 'DoubleMajor',
  /** 硕士 */
  Master = 'Master',
  /** 本科辅修 */
  Minor = 'Minor',
  /** 博士后 */
  Postdoctor = 'Postdoctor',
  /** 社会招生二学位 */
  SecondDegree = 'SecondDegree',
  /** 本科 */
  Undergraduate = 'Undergraduate'
}

/** 未完成认证的学籍 */
export type EnrollmentUntrusted = {
  __typename?: 'EnrollmentUntrusted';
  /** 允许邀请认证 */
  allowEndorse: Scalars['Boolean'];
  /** 允许在线认证 */
  allowOnline: Scalars['Boolean'];
  /** 院系 */
  department: Department;
  /** 邀请认证的已认证人数量 */
  endorsedNumber: Scalars['Int'];
  /** 供邀请认证的认证码 */
  endorsementCode?: Maybe<Scalars['String']>;
  /** 学籍类型 */
  enrollmentType: EnrollmentTypeEnum;
  /** 入学年份 */
  enrollmentYear: Scalars['Int'];
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** 专业 */
  major?: Maybe<Scalars['String']>;
  /** 注册姓名 */
  name: Scalars['String'];
  /** 在线人工审核的拒绝理由，null 表示尚未审核（即，未批准，也没驳回） */
  reviewComments?: Maybe<Scalars['String']>;
  /** 学生证号 */
  studentID: Scalars['String'];
  /** 供在线人工审核用的文字备注 */
  supplementaryComments: Scalars['String'];
  /** 供在线人工审核用的上传的图片 */
  supplementaryImageIds: Array<Scalars['String']>;
  /** 是否已提交过在线认证 */
  supplementarySubmitted: Scalars['Boolean'];
};

/** 文件上传 */
export type FileUploadInput = {
  /** base64编码的文件内容 */
  base64: Scalars['String'];
  /** 文件类型说明，例如 image/png */
  contentType?: InputMaybe<Scalars['String']>;
  /** 文件名 */
  filename?: InputMaybe<Scalars['String']>;
};

/** 查找校友的输入（检索条件） */
export type FindAlumniInput = {
  /** 单位 */
  company?: InputMaybe<Scalars['String']>;
  /** 院系 */
  department?: InputMaybe<Scalars['Int']>;
  /** 学籍类型 */
  enrollmentType?: InputMaybe<EnrollmentTypeEnum>;
  /** 入学年 */
  enrollmentYear?: InputMaybe<Scalars['Int']>;
  /** 行业 */
  industry?: InputMaybe<Scalars['String']>;
  /** 姓名 */
  name?: InputMaybe<Scalars['String']>;
  /** 居住地-模糊匹配 */
  residence?: InputMaybe<Scalars['String']>;
};

/** 查找校友信息的结果 */
export type FindAlumniPayload = {
  __typename?: 'FindAlumniPayload';
  /** 结果 */
  data: Array<Alumnus>;
  /** 是否有更多 */
  more: Scalars['Boolean'];
};

/** 性别 */
export enum Gender {
  /** 女 */
  Female = 'Female',
  /** 男 */
  Male = 'Male',
  /** 未知 */
  Unknown = 'Unknown'
}

/** 国际化词条 */
export type I18nEntry = {
  __typename?: 'I18nEntry';
  /** 创建时间 */
  createdAt?: Maybe<Scalars['Time']>;
  /** 索引值 */
  key: Scalars['String'];
  /** 语言 */
  language: Scalars['String'];
  /** 更新时间 */
  updatedAt?: Maybe<Scalars['Time']>;
  /** 值 */
  value: Scalars['String'];
};

/** 收货地址信息 */
export type InputLocation = {
  /** 简略地址，用于列表 */
  brief?: InputMaybe<Scalars['String']>;
  /** 城市，例如：海淀区/福州市 */
  city?: InputMaybe<Scalars['String']>;
  /** 详细地址，例如：清华大学东配楼11区417 */
  detail?: InputMaybe<Scalars['String']>;
  /** 省份，例如：北京市/福建省 */
  province?: InputMaybe<Scalars['String']>;
};

/** 工作信息 */
export type Job = {
  __typename?: 'Job';
  /** 公司/单位 */
  company: Scalars['String'];
  /** 结束时间，null表示至今 */
  endAt?: Maybe<Scalars['Time']>;
  /** ID */
  id: Scalars['Int'];
  /** 行业 */
  industry: Scalars['String'];
  /** 职位 */
  post: Scalars['String'];
  /** 开始时间 */
  startAt?: Maybe<Scalars['Time']>;
};

/** 实名信息 */
export type LegalIdentity = {
  __typename?: 'LegalIdentity';
  /** 证件号 */
  documentNumberMasked: Scalars['String'];
  /** 证件类型 */
  documentType: DocumentTypeEnum;
  /** 姓名 */
  legalName: Scalars['String'];
};

export type MallContact = {
  __typename?: 'MallContact';
  /** 联系方式 */
  contact: Scalars['String'];
  /** 联系人 */
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 添加工作信息 */
  addMyJob?: Maybe<WechatUser>;
  /** 兑换商品 */
  createOrder?: Maybe<Order>;
  /** 移除工作信息 */
  removeMyJob?: Maybe<WechatUser>;
  /** 设置隐私权限 */
  setPrivacySettings: WechatUser;
  /** 校友提交建言献策留言 */
  submitSuggestion: Scalars['Boolean'];
  /** 更新个人联络信息 */
  updateMyContact: WechatUser;
  /** 更新工作信息 */
  updateMyJob?: Maybe<WechatUser>;
};


export type MutationAddMyJobArgs = {
  input: Array<AddMyJobInput>;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationRemoveMyJobArgs = {
  input: RemoveMyJobInput;
};


export type MutationSetPrivacySettingsArgs = {
  patch: PrivacySettingsPatch;
};


export type MutationSubmitSuggestionArgs = {
  input: SubmitSuggestionInput;
};


export type MutationUpdateMyContactArgs = {
  input: WechatUserContactInput;
};


export type MutationUpdateMyJobArgs = {
  input: UpdateMyJobInput;
};

export type Order = {
  __typename?: 'Order';
  /** 校友id */
  alumnusId: Scalars['Int'];
  /** 优惠券兑换码 */
  couponCode?: Maybe<Scalars['String']>;
  /** 订单创建时间 */
  created: Scalars['Time'];
  /** 物流公司 */
  expressName?: Maybe<Scalars['String']>;
  /** 物流单号 */
  expressNo?: Maybe<Scalars['String']>;
  /** 发货时间 */
  expressTime?: Maybe<Scalars['Time']>;
  /** 订单ID */
  id: Scalars['Int'];
  /** 收货地址 */
  location?: Maybe<OrderLocation>;
  /** 购买数量 */
  payCount: Scalars['Int'];
  /** 下单备注 */
  payNotes?: Maybe<Scalars['String']>;
  /** 支付积分 */
  payPoints: Scalars['Int'];
  /** 兑换类型：目前只有一种积分兑换 */
  payType: PayTypeEnum;
  /** 手机号 */
  phoneNumber?: Maybe<Scalars['String']>;
  /** 商品id */
  productId: Scalars['Int'];
  /** 商品名称 */
  productName: Scalars['String'];
  /** 商品封面图 */
  productThumb: Scalars['String'];
  /** 商品类型 */
  productType: ProductTypeEnum;
  /** 收货人 */
  receiver?: Maybe<Scalars['String']>;
  /** 审核失败理由 */
  refuseReason?: Maybe<Scalars['String']>;
  /** 订单状态 */
  status: OrderStatusEnum;
  /** 订单编号 */
  tradeNo: Scalars['String'];
};

/** 收货地址信息 */
export type OrderLocation = {
  __typename?: 'OrderLocation';
  /** 简略地址，用于列表 */
  brief?: Maybe<Scalars['String']>;
  /** 城市，例如：海淀区/福州市 */
  city?: Maybe<Scalars['String']>;
  /** 详细地址，例如：清华大学东配楼11区417 */
  detail?: Maybe<Scalars['String']>;
  /** 省份，例如：北京市/福建省 */
  province?: Maybe<Scalars['String']>;
};

export enum OrderStatusEnum {
  /** 兑换失败 */
  Fail = 'FAIL',
  /** 兑换成功 */
  Success = 'SUCCESS',
  /** 等待发货中 */
  Waiting = 'WAITING'
}

export enum PayTypeEnum {
  /** 其他 */
  Other = 'OTHER',
  /** 积分兑换 */
  Points = 'POINTS'
}

/** 积分明细 */
export type PointChange = {
  __typename?: 'PointChange';
  /** 校友 */
  alumnusId: Scalars['Int'];
  /** 创建时间 */
  created?: Maybe<Scalars['Time']>;
  /** 积分变化量 */
  deltaAmount: Scalars['Int'];
  /** 积分变化量前端展示 */
  deltaAmountFormatted: Scalars['String'];
  /** ID */
  id: Scalars['Int'];
  /** 原因文字描述 */
  reason: Scalars['String'];
  /** 原因分类 */
  type: Scalars['Int'];
};

/** 隐私权限 */
export enum PrivacyLevelEnum {
  /** 校友可见 */
  Alumni = 'ALUMNI',
  /** 同学和好友可见 */
  Classmates = 'CLASSMATES',
  /** 仅好友可见 */
  Friends = 'FRIENDS',
  /** 保密 */
  Secret = 'SECRET'
}

/** 隐私设置 */
export type PrivacySettings = {
  __typename?: 'PrivacySettings';
  /** 邮箱的隐私权限 */
  email: PrivacyLevelEnum;
  /** 工作经历的隐私权限 */
  jobs: PrivacyLevelEnum;
  /** 手机号的隐私权限 */
  phone: PrivacyLevelEnum;
  /** 居住地的隐私权限 */
  residence: PrivacyLevelEnum;
  /** 证件照的隐私权限 */
  selfie: PrivacyLevelEnum;
  /** 微信号的隐私权限 */
  wechat: PrivacyLevelEnum;
};

export type PrivacySettingsPatch = {
  /** 邮箱的隐私权限 */
  email?: InputMaybe<PrivacyLevelEnum>;
  /** 工作经历的隐私权限 */
  jobs?: InputMaybe<PrivacyLevelEnum>;
  /** 手机号的隐私权限 */
  phone?: InputMaybe<PrivacyLevelEnum>;
  /** 居住地的隐私权限 */
  residence?: InputMaybe<PrivacyLevelEnum>;
  /** 证件照的隐私权限 */
  selfie?: InputMaybe<PrivacyLevelEnum>;
  /** 微信号的隐私权限 */
  wechat?: InputMaybe<PrivacyLevelEnum>;
};

export type Product = {
  __typename?: 'Product';
  /** 商品详情 */
  detail?: Maybe<Scalars['String']>;
  /** 商品ID */
  id: Scalars['Int'];
  /** 是否购买限制 */
  isLimit: Scalars['Boolean'];
  /** 支付积分 */
  pointsPay: Scalars['Int'];
  /** 商品市场价 */
  price?: Maybe<Scalars['Float']>;
  /** 商品名称 */
  productName: Scalars['String'];
  /** 商品图 */
  productPic: Array<Scalars['String']>;
  /** 商品封面图 */
  productThumb: Scalars['String'];
  /** 商品总销售数量 */
  sellTotal: Scalars['Int'];
  /** 商品状态 */
  status: ProductStatusEnum;
  /** 商品剩余库存 */
  stockRemain: Scalars['Int'];
  /** 商品总库存数量 */
  stockTotal: Scalars['Int'];
  /** 商品类型 */
  type: ProductTypeEnum;
  /** 购买限制数量 */
  upperLimit?: Maybe<Scalars['Int']>;
};

export type ProductPayload = {
  __typename?: 'ProductPayload';
  points: Scalars['Int'];
  product?: Maybe<Product>;
};

export enum ProductStatusEnum {
  /** 售卖中 */
  Selling = 'SELLING',
  /** 已下架 */
  Stopped = 'STOPPED',
  /** 未发布 */
  Unpublished = 'UNPUBLISHED'
}

export enum ProductTypeEnum {
  /** 优惠券 */
  Coupon = 'COUPON',
  /** 实物 */
  Material = 'MATERIAL'
}

export type ProductsPayload = {
  __typename?: 'ProductsPayload';
  /** 分页列表 */
  list: Array<Product>;
  /** 用户当前积分 */
  points: Scalars['Int'];
  /** 符合条件的总数 */
  total: Scalars['Int'];
};

export type PushTemplate = {
  __typename?: 'PushTemplate';
  /** 商城审核通过订阅模板 */
  subscribeApprovedOrder: Scalars['String'];
  /** 商城审核失败订阅模板 */
  subscribeRefusedOrder: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** 按条件获取全部的国际化文案词条（不以$开头） */
  commonI18nEntries: Array<I18nEntry>;
  /** 按条件获取全部的国际化数据词条（以$开头） */
  dataI18nEntries: Array<I18nEntry>;
  /** 获取院系列表 */
  departments: Array<Department>;
  /** 查找校友 */
  findAlumni: FindAlumniPayload;
  /** 获取指定校友的信息 */
  getAlumnus?: Maybe<Alumnus>;
  /** 我的兑换 */
  getMyOrders?: Maybe<MyOrdersPayload>;
  /** 订单详情 */
  getOrder?: Maybe<Order>;
  /** 积分明细表 */
  getPointChange?: Maybe<GetPointPayload>;
  /** 商品详情 */
  getProduct?: Maybe<ProductPayload>;
  /** 商品列表 */
  getProducts?: Maybe<ProductsPayload>;
  /** 积分商城联系信息 */
  mallContact: MallContact;
  /** 当前微信用户 */
  me: WechatUser;
  /** 小程序推送模板 */
  pushTemplate: PushTemplate;
  /** 获取服务记录列表 */
  serveRecords: Array<ServeRecord>;
};


export type QueryCommonI18nEntriesArgs = {
  input?: InputMaybe<AllI18nEntriesInput>;
};


export type QueryDataI18nEntriesArgs = {
  input?: InputMaybe<AllI18nEntriesInput>;
};


export type QueryFindAlumniArgs = {
  input: FindAlumniInput;
};


export type QueryGetAlumnusArgs = {
  id: Scalars['Int'];
};


export type QueryGetMyOrdersArgs = {
  input: MyOrdersInput;
};


export type QueryGetOrderArgs = {
  id: Scalars['Int'];
};


export type QueryGetPointChangeArgs = {
  input: QueryPointInput;
};


export type QueryGetProductArgs = {
  id: Scalars['Int'];
};


export type QueryGetProductsArgs = {
  input: QueryProductInput;
};

export type QueryPointInput = {
  /** 取多少个 */
  limit?: Scalars['Int'];
  /** 从第几个开始取 */
  offset?: Scalars['Int'];
};

export type QueryProductInput = {
  /** 取多少个 */
  limit?: Scalars['Int'];
  /** 从第几个开始取 */
  offset?: Scalars['Int'];
};

/** 好友关系，“我”表示发起请求的一方 */
export enum RelationshipEnum {
  /** 互为好友 */
  Friends = 'Friends',
  /** 就是我自己 */
  MySelf = 'MySelf',
  /** 他发出过申请，待批准 */
  Received = 'Received',
  /** 他发出过申请，已驳回 */
  ReceivedAndRejected = 'ReceivedAndRejected',
  /** 我发出过申请，待批准 */
  Sent = 'Sent',
  /** 我发出过申请，已驳回 */
  SentAndRejected = 'SentAndRejected',
  /** 陌生人 */
  Stranger = 'Stranger'
}

export type RemoveMyJobInput = {
  /** 要删除的工作信息 */
  job: Array<Scalars['Int']>;
};

export type ServeRecord = {
  __typename?: 'ServeRecord';
  /** 创建时间 */
  createdAt: Scalars['Time'];
  /** 服务记录ID */
  id: Scalars['Int'];
  /** 服务内容 */
  item: Scalars['String'];
  /** 服务项目名称 */
  projectName: Scalars['String'];
  /** 服务项目类型名称 */
  projectType: Scalars['String'];
  /** 奖励积分 */
  rewardPoints: Scalars['Int'];
  /** 服务结束时间 */
  serveEnd?: Maybe<Scalars['Time']>;
  /** 服务开始时间 */
  serveStart: Scalars['Time'];
  /** 给前端加的type类型 */
  type: Scalars['String'];
};

export type SubmitSuggestionInput = {
  /** 留言的内容 */
  content?: InputMaybe<Scalars['String']>;
  /** 上传的文件 */
  file?: InputMaybe<Scalars['Upload']>;
};

export type UpdateMyJobInput = {
  /** 公司/单位 */
  company: Scalars['String'];
  /** 结束时间，null表示至今 */
  endAt?: InputMaybe<Scalars['Time']>;
  /** 行业 */
  industry: Scalars['String'];
  /** 要更新的工作信息 */
  job: Scalars['Int'];
  /** 职位 */
  post: Scalars['String'];
  /** 开始时间 */
  startAt: Scalars['Time'];
};

/** 微信用户，仅用于当前用户信息 */
export type WechatUser = {
  __typename?: 'WechatUser';
  /** 已绑定的校友ID */
  alumnusID?: Maybe<Scalars['Int']>;
  /** 收到的生日贺卡ID。后续视为证书可获取其信息 */
  birthdayCards: Array<Scalars['Int']>;
  /** 信誉黑名单（若未被拉黑、或管理员配置为全局不显示，返回null；若被拉黑，返回拉黑理由文字描述） */
  blocked?: Maybe<Scalars['String']>;
  /** 正在认证中的学籍 */
  certifyingEnrollments: Array<EnrollmentUntrusted>;
  /** 电子邮箱 */
  email?: Maybe<Scalars['String']>;
  /** 学籍信息 */
  enrollments: Array<Enrollment>;
  /** 工作经历 */
  jobs: Array<Job>;
  /** 电话号码区号 */
  phoneCountryCode?: Maybe<Scalars['String']>;
  /** 电话号码 */
  phoneNumber?: Maybe<Scalars['String']>;
  /** 隐私设置 */
  privacySettings: PrivacySettings;
  /** 居住地-拼接结果 */
  residence?: Maybe<Scalars['String']>;
  /** 居住地-大洲 */
  residenceA?: Maybe<Scalars['String']>;
  /** 居住地-国家或地区 */
  residenceB?: Maybe<Scalars['String']>;
  /** 居住地-省级行政区或州 */
  residenceC?: Maybe<Scalars['String']>;
  /** 居住地-地级行政区 */
  residenceD?: Maybe<Scalars['String']>;
  /** 居住地-县级行政区 */
  residenceE?: Maybe<Scalars['String']>;
  /** 自拍图片 imageId */
  selfieImage?: Maybe<Scalars['String']>;
  /** 微信号 */
  wechat?: Maybe<Scalars['String']>;
};

export type WechatUserContactInput = {
  /** 电子邮箱 */
  email: Scalars['String'];
  /** 居住地-大洲 */
  residenceA?: InputMaybe<Scalars['String']>;
  /** 居住地-国家或地区 */
  residenceB?: InputMaybe<Scalars['String']>;
  /** 居住地-省级行政区或州 */
  residenceC?: InputMaybe<Scalars['String']>;
  /** 居住地-地级行政区 */
  residenceD?: InputMaybe<Scalars['String']>;
  /** 居住地-县级行政区 */
  residenceE?: InputMaybe<Scalars['String']>;
  /** 微信号 */
  wechat?: InputMaybe<Scalars['String']>;
};

export type GetPointPayload = {
  __typename?: 'getPointPayload';
  /** 该分页的活动 */
  list: Array<PointChange>;
  /** 用户积分总数 */
  points: Scalars['Int'];
  /** 符合条件的活动总数 */
  total: Scalars['Int'];
};

export type MyOrdersInput = {
  /** 取多少个 */
  limit?: Scalars['Int'];
  /** 从第几个开始取 */
  offset?: Scalars['Int'];
};

export type MyOrdersPayload = {
  __typename?: 'myOrdersPayload';
  /** 分页列表 */
  list: Array<Order>;
  /** 符合条件的总数 */
  total: Scalars['Int'];
};

export type PrivacySettingsFragment = { __typename?: 'PrivacySettings', wechat: PrivacyLevelEnum, phone: PrivacyLevelEnum, email: PrivacyLevelEnum, residence: PrivacyLevelEnum, jobs: PrivacyLevelEnum, selfie: PrivacyLevelEnum };

export type JobFragment = { __typename?: 'Job', industry: string, company: string, post: string, startAt?: any | null, endAt?: any | null };

export type EnrollmentFragment = { __typename?: 'Enrollment', gender: Gender, name: string, enrollmentType: EnrollmentTypeEnum, enrollmentYear: number, department?: { __typename?: 'Department', name: string, start: number, end: number } | null };

export type AlumnusFragment = { __typename?: 'Alumnus', claimed: boolean, blocked?: string | null, email?: string | null, wechat?: string | null, phoneCountryCode?: string | null, phoneNumber?: string | null, relationship: RelationshipEnum, residence?: string | null, selfieImage?: string | null, jobs?: Array<{ __typename?: 'Job', id: number, industry: string, company: string, post: string, startAt?: any | null, endAt?: any | null }> | null, enrollments: Array<{ __typename?: 'Enrollment', gender: Gender, name: string, enrollmentType: EnrollmentTypeEnum, enrollmentYear: number, department?: { __typename?: 'Department', name: string, start: number, end: number } | null }> };

export type ProductBriefFragment = { __typename?: 'Product', id: number, type: ProductTypeEnum, productName: string, productThumb: string, productPic: Array<string>, detail?: string | null, stockTotal: number, sellTotal: number, stockRemain: number, status: ProductStatusEnum, pointsPay: number, price?: number | null, isLimit: boolean, upperLimit?: number | null };

export type OrderBriefFragment = { __typename?: 'Order', id: number, productType: ProductTypeEnum, productId: number, productName: string, productThumb: string, status: OrderStatusEnum, payType: PayTypeEnum, payCount: number, payPoints: number, payNotes?: string | null, couponCode?: string | null, tradeNo: string, receiver?: string | null, phoneNumber?: string | null, expressName?: string | null, expressNo?: string | null, created: any, refuseReason?: string | null, location?: { __typename?: 'OrderLocation', province?: string | null, city?: string | null, brief?: string | null, detail?: string | null } | null };

export type PointBriefFragment = { __typename?: 'PointChange', id: number, deltaAmount: number, reason: string, created?: any | null, deltaAmountFormatted: string };

export type I18nEntryFragment = { __typename?: 'I18nEntry', key: string, value: string, language: string };

export type CommonI18nEntriesQueryVariables = Exact<{
  input: AllI18nEntriesInput;
}>;


export type CommonI18nEntriesQuery = { __typename?: 'Query', commonI18nEntries: Array<{ __typename?: 'I18nEntry', key: string, value: string, language: string }> };

export type DataI18nEntriesQueryVariables = Exact<{
  input: AllI18nEntriesInput;
}>;


export type DataI18nEntriesQuery = { __typename?: 'Query', dataI18nEntries: Array<{ __typename?: 'I18nEntry', key: string, value: string, language: string }> };

export type GetProductsQueryVariables = Exact<{
  input: QueryProductInput;
}>;


export type GetProductsQuery = { __typename?: 'Query', getProducts?: { __typename?: 'ProductsPayload', total: number, points: number, list: Array<{ __typename?: 'Product', id: number, type: ProductTypeEnum, productName: string, productThumb: string, productPic: Array<string>, detail?: string | null, stockTotal: number, sellTotal: number, stockRemain: number, status: ProductStatusEnum, pointsPay: number, price?: number | null, isLimit: boolean, upperLimit?: number | null }> } | null };

export type GetMyOrdersQueryVariables = Exact<{
  input: MyOrdersInput;
}>;


export type GetMyOrdersQuery = { __typename?: 'Query', getMyOrders?: { __typename?: 'myOrdersPayload', total: number, list: Array<{ __typename?: 'Order', id: number, productType: ProductTypeEnum, productId: number, productName: string, productThumb: string, status: OrderStatusEnum, payType: PayTypeEnum, payCount: number, payPoints: number, payNotes?: string | null, couponCode?: string | null, tradeNo: string, receiver?: string | null, phoneNumber?: string | null, expressName?: string | null, expressNo?: string | null, created: any, refuseReason?: string | null, location?: { __typename?: 'OrderLocation', province?: string | null, city?: string | null, brief?: string | null, detail?: string | null } | null }> } | null };

export type GetProductQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProductQuery = { __typename?: 'Query', getProduct?: { __typename?: 'ProductPayload', points: number, product?: { __typename?: 'Product', id: number, type: ProductTypeEnum, productName: string, productThumb: string, productPic: Array<string>, detail?: string | null, stockTotal: number, sellTotal: number, stockRemain: number, status: ProductStatusEnum, pointsPay: number, price?: number | null, isLimit: boolean, upperLimit?: number | null } | null } | null };

export type GetConfirmDetailQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetConfirmDetailQuery = { __typename?: 'Query', getProduct?: { __typename?: 'ProductPayload', points: number, product?: { __typename?: 'Product', id: number, type: ProductTypeEnum, productName: string, productThumb: string, productPic: Array<string>, detail?: string | null, stockTotal: number, sellTotal: number, stockRemain: number, status: ProductStatusEnum, pointsPay: number, price?: number | null, isLimit: boolean, upperLimit?: number | null } | null } | null };

export type GetOrderQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetOrderQuery = { __typename?: 'Query', getOrder?: { __typename?: 'Order', id: number, productType: ProductTypeEnum, productId: number, productName: string, productThumb: string, status: OrderStatusEnum, payType: PayTypeEnum, payCount: number, payPoints: number, payNotes?: string | null, couponCode?: string | null, tradeNo: string, receiver?: string | null, phoneNumber?: string | null, expressName?: string | null, expressNo?: string | null, created: any, refuseReason?: string | null, location?: { __typename?: 'OrderLocation', province?: string | null, city?: string | null, brief?: string | null, detail?: string | null } | null } | null };

export type GetmallContactQueryVariables = Exact<{ [key: string]: never; }>;


export type GetmallContactQuery = { __typename?: 'Query', mallContact: { __typename?: 'MallContact', contact: string, name: string } };

export type GetPointChangeQueryVariables = Exact<{
  q: QueryPointInput;
}>;


export type GetPointChangeQuery = { __typename?: 'Query', getPointChange?: { __typename?: 'getPointPayload', total: number, points: number, list: Array<{ __typename?: 'PointChange', id: number, deltaAmount: number, reason: string, created?: any | null, deltaAmountFormatted: string }> } | null };

export type CreateOrderMutationVariables = Exact<{
  q: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder?: { __typename?: 'Order', id: number, productType: ProductTypeEnum, productId: number, productName: string, productThumb: string, status: OrderStatusEnum, payType: PayTypeEnum, payCount: number, payPoints: number, payNotes?: string | null, couponCode?: string | null, tradeNo: string, receiver?: string | null, phoneNumber?: string | null, expressName?: string | null, expressNo?: string | null, created: any, refuseReason?: string | null, location?: { __typename?: 'OrderLocation', province?: string | null, city?: string | null, brief?: string | null, detail?: string | null } | null } | null };

export type GetMyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyProfileQuery = { __typename?: 'Query', me: { __typename?: 'WechatUser', alumnusID?: number | null, wechat?: string | null, phoneNumber?: string | null, phoneCountryCode?: string | null, email?: string | null, selfieImage?: string | null, residence?: string | null, residenceA?: string | null, residenceB?: string | null, residenceC?: string | null, residenceD?: string | null, residenceE?: string | null, enrollments: Array<{ __typename?: 'Enrollment', name: string, enrollmentYear: number, enrollmentType: EnrollmentTypeEnum, department?: { __typename?: 'Department', name: string, start: number, end: number } | null }>, privacySettings: { __typename?: 'PrivacySettings', wechat: PrivacyLevelEnum, phone: PrivacyLevelEnum, email: PrivacyLevelEnum, residence: PrivacyLevelEnum, jobs: PrivacyLevelEnum, selfie: PrivacyLevelEnum }, jobs: Array<{ __typename?: 'Job', id: number, industry: string, company: string, post: string, startAt?: any | null, endAt?: any | null }> } };

export type GetMyPrivacySettingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyPrivacySettingQuery = { __typename?: 'Query', me: { __typename?: 'WechatUser', birthdayCards: Array<number>, privacySettings: { __typename?: 'PrivacySettings', wechat: PrivacyLevelEnum, phone: PrivacyLevelEnum, email: PrivacyLevelEnum, residence: PrivacyLevelEnum, jobs: PrivacyLevelEnum, selfie: PrivacyLevelEnum } } };

export type GetMyJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyJobsQuery = { __typename?: 'Query', me: { __typename?: 'WechatUser', jobs: Array<{ __typename?: 'Job', id: number, industry: string, company: string, post: string, startAt?: any | null, endAt?: any | null }> } };

export type AddMyJobMutationVariables = Exact<{
  input: Array<AddMyJobInput> | AddMyJobInput;
}>;


export type AddMyJobMutation = { __typename?: 'Mutation', addMyJob?: { __typename?: 'WechatUser', jobs: Array<{ __typename?: 'Job', industry: string, company: string }> } | null };

export type SetPrivacySettingMutationVariables = Exact<{
  patch: PrivacySettingsPatch;
}>;


export type SetPrivacySettingMutation = { __typename?: 'Mutation', setPrivacySettings: { __typename?: 'WechatUser', privacySettings: { __typename?: 'PrivacySettings', wechat: PrivacyLevelEnum, phone: PrivacyLevelEnum, email: PrivacyLevelEnum, residence: PrivacyLevelEnum, jobs: PrivacyLevelEnum, selfie: PrivacyLevelEnum } } };

export type GetAlumnusQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAlumnusQuery = { __typename?: 'Query', getAlumnus?: { __typename?: 'Alumnus', claimed: boolean, blocked?: string | null, email?: string | null, wechat?: string | null, phoneCountryCode?: string | null, phoneNumber?: string | null, relationship: RelationshipEnum, residence?: string | null, selfieImage?: string | null, jobs?: Array<{ __typename?: 'Job', id: number, industry: string, company: string, post: string, startAt?: any | null, endAt?: any | null }> | null, enrollments: Array<{ __typename?: 'Enrollment', gender: Gender, name: string, enrollmentType: EnrollmentTypeEnum, enrollmentYear: number, department?: { __typename?: 'Department', name: string, start: number, end: number } | null }> } | null };

export type UpdateMyContactMutationVariables = Exact<{
  input: WechatUserContactInput;
}>;


export type UpdateMyContactMutation = { __typename?: 'Mutation', updateMyContact: { __typename?: 'WechatUser', wechat?: string | null } };

export type FindAlumniQueryVariables = Exact<{
  q: FindAlumniInput;
}>;


export type FindAlumniQuery = { __typename?: 'Query', findAlumni: { __typename?: 'FindAlumniPayload', more: boolean, data: Array<{ __typename?: 'Alumnus', id: number, claimed: boolean, relationship: RelationshipEnum, enrollments: Array<{ __typename?: 'Enrollment', gender: Gender, name: string, enrollmentType: EnrollmentTypeEnum, enrollmentYear: number, department?: { __typename?: 'Department', name: string, start: number, end: number } | null }> }> } };

export type AddMyEnrollmentMutationVariables = Exact<{
  input: Array<AddMyJobInput> | AddMyJobInput;
}>;


export type AddMyEnrollmentMutation = { __typename?: 'Mutation', addMyJob?: { __typename?: 'WechatUser', jobs: Array<{ __typename?: 'Job', industry: string, company: string }> } | null };

export type RemoveMyJobMutationVariables = Exact<{
  input: RemoveMyJobInput;
}>;


export type RemoveMyJobMutation = { __typename?: 'Mutation', removeMyJob?: { __typename?: 'WechatUser', jobs: Array<{ __typename?: 'Job', industry: string, company: string }> } | null };

export type UpdateMyJobMutationVariables = Exact<{
  input: UpdateMyJobInput;
}>;


export type UpdateMyJobMutation = { __typename?: 'Mutation', updateMyJob?: { __typename?: 'WechatUser', jobs: Array<{ __typename?: 'Job', industry: string, company: string }> } | null };

export type GetOauthMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOauthMeQuery = { __typename?: 'Query', me: { __typename?: 'WechatUser', phoneNumber?: string | null, enrollments: Array<{ __typename?: 'Enrollment', name: string }> } };

export type GetMyPhoneNumberQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyPhoneNumberQuery = { __typename?: 'Query', me: { __typename?: 'WechatUser', phoneNumber?: string | null, phoneCountryCode?: string | null } };

export type GetMyBirthdayCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyBirthdayCardsQuery = { __typename?: 'Query', me: { __typename?: 'WechatUser', birthdayCards: Array<number> } };

export type SubmitSuggestionMutationVariables = Exact<{
  content?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
}>;


export type SubmitSuggestionMutation = { __typename?: 'Mutation', submitSuggestion: boolean };

export type GetContactAndJobQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactAndJobQuery = { __typename?: 'Query', me: { __typename?: 'WechatUser', phoneNumber?: string | null, email?: string | null, residence?: string | null, jobs: Array<{ __typename?: 'Job', id: number, company: string, industry: string }> } };

export type PushTemplateQueryVariables = Exact<{ [key: string]: never; }>;


export type PushTemplateQuery = { __typename?: 'Query', pushTemplate: { __typename?: 'PushTemplate', subscribeApprovedOrder: string, subscribeRefusedOrder: string } };

export type ServeRecordsQueryVariables = Exact<{ [key: string]: never; }>;


export type ServeRecordsQuery = { __typename?: 'Query', serveRecords: Array<{ __typename?: 'ServeRecord', id: number, projectType: string, projectName: string, item: string, serveStart: any, serveEnd?: any | null, rewardPoints: number, createdAt: any, type: string }> };

export const PrivacySettingsFragmentDoc = `
    fragment PrivacySettings on PrivacySettings {
  wechat
  phone
  email
  residence
  jobs
  selfie
}
    `;
export const JobFragmentDoc = `
    fragment Job on Job {
  industry
  company
  post
  startAt
  endAt
}
    `;
export const EnrollmentFragmentDoc = `
    fragment Enrollment on Enrollment {
  gender
  name
  enrollmentType
  enrollmentYear
  department {
    name
    start
    end
  }
}
    `;
export const AlumnusFragmentDoc = `
    fragment Alumnus on Alumnus {
  claimed
  blocked
  email
  wechat
  jobs {
    id
    ...Job
  }
  phoneCountryCode
  phoneNumber
  relationship
  residence
  selfieImage
  enrollments {
    ...Enrollment
  }
}
    ${JobFragmentDoc}
${EnrollmentFragmentDoc}`;
export const ProductBriefFragmentDoc = `
    fragment ProductBrief on Product {
  id
  type
  productName
  productThumb
  productPic
  detail
  stockTotal
  sellTotal
  stockRemain
  status
  pointsPay
  price
  isLimit
  upperLimit
}
    `;
export const OrderBriefFragmentDoc = `
    fragment OrderBrief on Order {
  id
  productType
  productId
  productName
  productThumb
  status
  payType
  payCount
  payPoints
  payNotes
  couponCode
  tradeNo
  receiver
  phoneNumber
  location {
    province
    city
    brief
    detail
  }
  expressName
  expressNo
  created
  refuseReason
}
    `;
export const PointBriefFragmentDoc = `
    fragment PointBrief on PointChange {
  id
  deltaAmount
  reason
  created
  deltaAmountFormatted
}
    `;
export const I18nEntryFragmentDoc = `
    fragment i18nEntry on I18nEntry {
  key
  value
  language
}
    `;
export const CommonI18nEntriesDocument = `
    query commonI18nEntries($input: AllI18nEntriesInput!) {
  commonI18nEntries(input: $input) {
    ...i18nEntry
  }
}
    ${I18nEntryFragmentDoc}`;
export const DataI18nEntriesDocument = `
    query dataI18nEntries($input: AllI18nEntriesInput!) {
  dataI18nEntries(input: $input) {
    ...i18nEntry
  }
}
    ${I18nEntryFragmentDoc}`;
export const GetProductsDocument = `
    query getProducts($input: QueryProductInput!) {
  getProducts(input: $input) {
    total
    list {
      ...ProductBrief
    }
    points
  }
}
    ${ProductBriefFragmentDoc}`;
export const GetMyOrdersDocument = `
    query getMyOrders($input: myOrdersInput!) {
  getMyOrders(input: $input) {
    total
    list {
      ...OrderBrief
    }
  }
}
    ${OrderBriefFragmentDoc}`;
export const GetProductDocument = `
    query getProduct($id: Int!) {
  getProduct(id: $id) {
    product {
      ...ProductBrief
    }
    points
  }
}
    ${ProductBriefFragmentDoc}`;
export const GetConfirmDetailDocument = `
    query getConfirmDetail($id: Int!) {
  getProduct(id: $id) {
    product {
      ...ProductBrief
    }
    points
  }
}
    ${ProductBriefFragmentDoc}`;
export const GetOrderDocument = `
    query getOrder($id: Int!) {
  getOrder(id: $id) {
    ...OrderBrief
  }
}
    ${OrderBriefFragmentDoc}`;
export const GetmallContactDocument = `
    query getmallContact {
  mallContact {
    contact
    name
  }
}
    `;
export const GetPointChangeDocument = `
    query getPointChange($q: QueryPointInput!) {
  getPointChange(input: $q) {
    total
    list {
      ...PointBrief
    }
    points
  }
}
    ${PointBriefFragmentDoc}`;
export const CreateOrderDocument = `
    mutation createOrder($q: CreateOrderInput!) {
  createOrder(input: $q) {
    ...OrderBrief
  }
}
    ${OrderBriefFragmentDoc}`;
export const GetMyProfileDocument = `
    query getMyProfile {
  me {
    alumnusID
    wechat
    phoneNumber
    phoneCountryCode
    email
    selfieImage
    residence
    residenceA
    residenceB
    residenceC
    residenceD
    residenceE
    enrollments {
      name
      enrollmentYear
      enrollmentType
      department {
        name
        start
        end
      }
    }
    privacySettings {
      ...PrivacySettings
    }
    jobs {
      id
      ...Job
    }
  }
}
    ${PrivacySettingsFragmentDoc}
${JobFragmentDoc}`;
export const GetMyPrivacySettingDocument = `
    query getMyPrivacySetting {
  me {
    birthdayCards
    privacySettings {
      ...PrivacySettings
    }
  }
}
    ${PrivacySettingsFragmentDoc}`;
export const GetMyJobsDocument = `
    query getMyJobs {
  me {
    jobs {
      id
      ...Job
    }
  }
}
    ${JobFragmentDoc}`;
export const AddMyJobDocument = `
    mutation addMyJob($input: [AddMyJobInput!]!) {
  addMyJob(input: $input) {
    jobs {
      industry
      company
    }
  }
}
    `;
export const SetPrivacySettingDocument = `
    mutation setPrivacySetting($patch: PrivacySettingsPatch!) {
  setPrivacySettings(patch: $patch) {
    privacySettings {
      ...PrivacySettings
    }
  }
}
    ${PrivacySettingsFragmentDoc}`;
export const GetAlumnusDocument = `
    query getAlumnus($id: Int!) {
  getAlumnus(id: $id) {
    ...Alumnus
  }
}
    ${AlumnusFragmentDoc}`;
export const UpdateMyContactDocument = `
    mutation updateMyContact($input: WechatUserContactInput!) {
  updateMyContact(input: $input) {
    wechat
  }
}
    `;
export const FindAlumniDocument = `
    query findAlumni($q: FindAlumniInput!) {
  findAlumni(input: $q) {
    more
    data {
      id
      claimed
      relationship
      enrollments {
        ...Enrollment
      }
    }
  }
}
    ${EnrollmentFragmentDoc}`;
export const AddMyEnrollmentDocument = `
    mutation addMyEnrollment($input: [AddMyJobInput!]!) {
  addMyJob(input: $input) {
    jobs {
      industry
      company
    }
  }
}
    `;
export const RemoveMyJobDocument = `
    mutation removeMyJob($input: RemoveMyJobInput!) {
  removeMyJob(input: $input) {
    jobs {
      industry
      company
    }
  }
}
    `;
export const UpdateMyJobDocument = `
    mutation updateMyJob($input: UpdateMyJobInput!) {
  updateMyJob(input: $input) {
    jobs {
      industry
      company
    }
  }
}
    `;
export const GetOauthMeDocument = `
    query getOauthMe {
  me {
    phoneNumber
    enrollments {
      name
    }
  }
}
    `;
export const GetMyPhoneNumberDocument = `
    query getMyPhoneNumber {
  me {
    phoneNumber
    phoneCountryCode
  }
}
    `;
export const GetMyBirthdayCardsDocument = `
    query getMyBirthdayCards {
  me {
    birthdayCards
  }
}
    `;
export const SubmitSuggestionDocument = `
    mutation submitSuggestion($content: String, $file: Upload) {
  submitSuggestion(input: {content: $content, file: $file})
}
    `;
export const GetContactAndJobDocument = `
    query getContactAndJob {
  me {
    phoneNumber
    email
    residence
    jobs {
      id
      company
      industry
    }
  }
}
    `;
export const PushTemplateDocument = `
    query pushTemplate {
  pushTemplate {
    subscribeApprovedOrder
    subscribeRefusedOrder
  }
}
    `;
export const ServeRecordsDocument = `
    query serveRecords {
  serveRecords {
    id
    projectType
    projectName
    item
    serveStart
    serveEnd
    rewardPoints
    createdAt
    type
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    commonI18nEntries(variables: CommonI18nEntriesQueryVariables, options?: C): Promise<CommonI18nEntriesQuery> {
      return requester<CommonI18nEntriesQuery, CommonI18nEntriesQueryVariables>(CommonI18nEntriesDocument, variables, options);
    },
    dataI18nEntries(variables: DataI18nEntriesQueryVariables, options?: C): Promise<DataI18nEntriesQuery> {
      return requester<DataI18nEntriesQuery, DataI18nEntriesQueryVariables>(DataI18nEntriesDocument, variables, options);
    },
    getProducts(variables: GetProductsQueryVariables, options?: C): Promise<GetProductsQuery> {
      return requester<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, variables, options);
    },
    getMyOrders(variables: GetMyOrdersQueryVariables, options?: C): Promise<GetMyOrdersQuery> {
      return requester<GetMyOrdersQuery, GetMyOrdersQueryVariables>(GetMyOrdersDocument, variables, options);
    },
    getProduct(variables: GetProductQueryVariables, options?: C): Promise<GetProductQuery> {
      return requester<GetProductQuery, GetProductQueryVariables>(GetProductDocument, variables, options);
    },
    getConfirmDetail(variables: GetConfirmDetailQueryVariables, options?: C): Promise<GetConfirmDetailQuery> {
      return requester<GetConfirmDetailQuery, GetConfirmDetailQueryVariables>(GetConfirmDetailDocument, variables, options);
    },
    getOrder(variables: GetOrderQueryVariables, options?: C): Promise<GetOrderQuery> {
      return requester<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, variables, options);
    },
    getmallContact(variables?: GetmallContactQueryVariables, options?: C): Promise<GetmallContactQuery> {
      return requester<GetmallContactQuery, GetmallContactQueryVariables>(GetmallContactDocument, variables, options);
    },
    getPointChange(variables: GetPointChangeQueryVariables, options?: C): Promise<GetPointChangeQuery> {
      return requester<GetPointChangeQuery, GetPointChangeQueryVariables>(GetPointChangeDocument, variables, options);
    },
    createOrder(variables: CreateOrderMutationVariables, options?: C): Promise<CreateOrderMutation> {
      return requester<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, variables, options);
    },
    getMyProfile(variables?: GetMyProfileQueryVariables, options?: C): Promise<GetMyProfileQuery> {
      return requester<GetMyProfileQuery, GetMyProfileQueryVariables>(GetMyProfileDocument, variables, options);
    },
    getMyPrivacySetting(variables?: GetMyPrivacySettingQueryVariables, options?: C): Promise<GetMyPrivacySettingQuery> {
      return requester<GetMyPrivacySettingQuery, GetMyPrivacySettingQueryVariables>(GetMyPrivacySettingDocument, variables, options);
    },
    getMyJobs(variables?: GetMyJobsQueryVariables, options?: C): Promise<GetMyJobsQuery> {
      return requester<GetMyJobsQuery, GetMyJobsQueryVariables>(GetMyJobsDocument, variables, options);
    },
    addMyJob(variables: AddMyJobMutationVariables, options?: C): Promise<AddMyJobMutation> {
      return requester<AddMyJobMutation, AddMyJobMutationVariables>(AddMyJobDocument, variables, options);
    },
    setPrivacySetting(variables: SetPrivacySettingMutationVariables, options?: C): Promise<SetPrivacySettingMutation> {
      return requester<SetPrivacySettingMutation, SetPrivacySettingMutationVariables>(SetPrivacySettingDocument, variables, options);
    },
    getAlumnus(variables: GetAlumnusQueryVariables, options?: C): Promise<GetAlumnusQuery> {
      return requester<GetAlumnusQuery, GetAlumnusQueryVariables>(GetAlumnusDocument, variables, options);
    },
    updateMyContact(variables: UpdateMyContactMutationVariables, options?: C): Promise<UpdateMyContactMutation> {
      return requester<UpdateMyContactMutation, UpdateMyContactMutationVariables>(UpdateMyContactDocument, variables, options);
    },
    findAlumni(variables: FindAlumniQueryVariables, options?: C): Promise<FindAlumniQuery> {
      return requester<FindAlumniQuery, FindAlumniQueryVariables>(FindAlumniDocument, variables, options);
    },
    addMyEnrollment(variables: AddMyEnrollmentMutationVariables, options?: C): Promise<AddMyEnrollmentMutation> {
      return requester<AddMyEnrollmentMutation, AddMyEnrollmentMutationVariables>(AddMyEnrollmentDocument, variables, options);
    },
    removeMyJob(variables: RemoveMyJobMutationVariables, options?: C): Promise<RemoveMyJobMutation> {
      return requester<RemoveMyJobMutation, RemoveMyJobMutationVariables>(RemoveMyJobDocument, variables, options);
    },
    updateMyJob(variables: UpdateMyJobMutationVariables, options?: C): Promise<UpdateMyJobMutation> {
      return requester<UpdateMyJobMutation, UpdateMyJobMutationVariables>(UpdateMyJobDocument, variables, options);
    },
    getOauthMe(variables?: GetOauthMeQueryVariables, options?: C): Promise<GetOauthMeQuery> {
      return requester<GetOauthMeQuery, GetOauthMeQueryVariables>(GetOauthMeDocument, variables, options);
    },
    getMyPhoneNumber(variables?: GetMyPhoneNumberQueryVariables, options?: C): Promise<GetMyPhoneNumberQuery> {
      return requester<GetMyPhoneNumberQuery, GetMyPhoneNumberQueryVariables>(GetMyPhoneNumberDocument, variables, options);
    },
    getMyBirthdayCards(variables?: GetMyBirthdayCardsQueryVariables, options?: C): Promise<GetMyBirthdayCardsQuery> {
      return requester<GetMyBirthdayCardsQuery, GetMyBirthdayCardsQueryVariables>(GetMyBirthdayCardsDocument, variables, options);
    },
    submitSuggestion(variables?: SubmitSuggestionMutationVariables, options?: C): Promise<SubmitSuggestionMutation> {
      return requester<SubmitSuggestionMutation, SubmitSuggestionMutationVariables>(SubmitSuggestionDocument, variables, options);
    },
    getContactAndJob(variables?: GetContactAndJobQueryVariables, options?: C): Promise<GetContactAndJobQuery> {
      return requester<GetContactAndJobQuery, GetContactAndJobQueryVariables>(GetContactAndJobDocument, variables, options);
    },
    pushTemplate(variables?: PushTemplateQueryVariables, options?: C): Promise<PushTemplateQuery> {
      return requester<PushTemplateQuery, PushTemplateQueryVariables>(PushTemplateDocument, variables, options);
    },
    serveRecords(variables?: ServeRecordsQueryVariables, options?: C): Promise<ServeRecordsQuery> {
      return requester<ServeRecordsQuery, ServeRecordsQueryVariables>(ServeRecordsDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;