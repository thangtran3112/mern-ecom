/* eslint-disable @typescript-eslint/no-explicit-any */
/** This is generated by AI, given either a sample User response from Backend. Or Using the UserSchema */
export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  city: string;
  state: string;
  country: string;
  occupation: string;
  phoneNumber: string;
  transactions: string[];
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IMonthlyData {
  _id: string;
  month: string;
  totalSales: number;
  totalUnits: number;
}

interface IDailyData {
  _id: string;
  date: string;
  totalSales: number;
  totalUnits: number;
}

interface IProductStat {
  _id: string;
  productId: string;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  year: number;
  monthlyData: IMonthlyData[];
  dailyData: IDailyData[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  supply: number;
  createdAt?: Date;
  updatedAt?: Date;
  stat: IProductStat;
}

export interface ITransaction {
  _id: string;
  userId: string;
  cost: string;
  products: any[];
  createdAt: Date;
  updatedAt: Date;
}

export interface GetTransactionsResponse {
  transactions: ITransaction[];
  total: number; //number of transactions, return from Express Backend
}

export interface IGeography {
  id: string;
  value: number;
}

export interface IOverallStat {
  _id: string;
  totalCustomers: number;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  year: number;
  monthlyData: Array<IMonthlyData>;
  dailyData: Array<IDailyData>;
  salesByCategory: Map<string, number>;
  createdAt: Date;
  updatedAt: Date;
}

export interface LineProps {
  x: string;
  y: number;
}

export interface TotalLinesProps {
  id: string;
  color: string;
  data: LineProps[];
}

interface IAffiliateStats {
  _id: string;
  userId: string;
  affiliateSales: string[];
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}

interface IAffiliateUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  city: string;
  state: string | null;
  country: string;
  occupation: string;
  phoneNumber: string;
  transactions: string[];
  role: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
  affiliateStats: IAffiliateStats;
}

interface ISale {
  _id: string;
  userId: string;
  cost: string;
  products: string[];
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPerformanceResponse {
  user: IAffiliateUser;
  sales: ISale[];
}

// interface ISalesByCategory {
//   shoes: number;
//   clothing: number;
//   accessories: number;
//   misc: number;
// }

interface ISalesByCategory {
  [key: string]: number;
}

export interface ISalesDashboard {
  totalCustomers: number;
  yearlyTotalSoldUnits: number;
  yearlySalesTotal: number;
  monthlyData: IMonthlyData[];
  salesByCategory: ISalesByCategory;
  thisMonthStats: IMonthlyData;
  todayStats: IDailyData;
  transactions: ITransaction[];
}