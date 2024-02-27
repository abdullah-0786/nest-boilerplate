// import { Permission, User, UserType } from '@prisma/client';
// import { Actions as dbActionNames, Modules as dbModuleNames } from '@prisma/client';

// export const UserTypes = {
//     ...UserType,
//     GUEST: 'GUEST',
// } as const;
// export type TUserTypes = (typeof UserTypes)[keyof typeof UserTypes];
// export type TAccessesMap = Partial<{ [key in dbModuleNames]: Array<dbActionNames> }>;

// export type TUserWithRole = User & { permissions: Array<Permission> };
// export type TCacheUserData = TUserWithRole & { accesses: TAccessesMap };

// // export const Modules = {
// //     ...dbModuleNames,
// //     ACCESS_ALL: 'ACCESS_ALL',
// // } as const;
// // export type TModules = (typeof Modules)[keyof typeof Modules];

// // export const Actions = {
// //     ...dbActionNames,
// //     ACCESS_ALL: 'ACCESS_ALL',
// // } as const;
// // export type TActions = (typeof Actions)[keyof typeof Actions];

// export const PermissionLabels = {
//     [dbModuleNames.CATEGORY]: {
//         [dbActionNames.READ]: 'view category',
//         [dbActionNames.CREATE]: 'add category',
//         [dbActionNames.UPDATE]: 'update category',
//         [dbActionNames.DELETE]: 'delete category',
//     },
//     [dbModuleNames.COUPONS]: {
//         [dbActionNames.READ]: 'view coupon',
//         [dbActionNames.CREATE]: 'add coupon',
//         [dbActionNames.UPDATE]: 'update coupon',
//         [dbActionNames.DELETE]: 'delete coupon',
//     },
//     [dbModuleNames.CUSTOMER]: {
//         [dbActionNames.READ]: 'view customer',
//         [dbActionNames.UPDATE]: 'update customer',
//         [dbActionNames.DELETE]: 'delete customer',
//     },
//     [dbModuleNames.DELIVERY]: {
//         [dbActionNames.READ]: 'view delivery mode',
//         [dbActionNames.UPDATE]: 'update delivery mode',
//         [dbActionNames.DELETE]: 'delete delivery mode',
//     },
//     [dbModuleNames.HELP]: {
//         [dbActionNames.READ]: 'view help center',
//         [dbActionNames.UPDATE]: 'respond to dispute',
//         [dbActionNames.RECEIVE_NOTIFICATIONS]: 'receive notifications',
//     },
//     [dbModuleNames.ORDER]: {
//         [dbActionNames.READ]: 'view order',
//         [dbActionNames.UPDATE]: 'edit order',
//         [dbActionNames.CANCEL_ORDER]: 'cancel order',
//         [dbActionNames.RECEIVE_NOTIFICATIONS]: 'receive notifications',
//     },
//     [dbModuleNames.PRODUCT]: {
//         [dbActionNames.READ]: 'view product',
//         [dbActionNames.CREATE]: 'add product',
//         [dbActionNames.UPDATE]: 'update product',
//         [dbActionNames.DELETE]: 'delete product',
//     },
//     [dbModuleNames.REVIEWS]: {
//         [dbActionNames.READ]: 'view reviews',
//         [dbActionNames.UPDATE]: 'respond to review',
//     },
//     [dbModuleNames.SUBADMIN]: {
//         [dbActionNames.READ]: 'view subadmin',
//         [dbActionNames.CREATE]: 'add subadmin',
//         [dbActionNames.UPDATE]: 'update subadmin',
//         [dbActionNames.DELETE]: 'delete subadmin',
//     },
//     [dbModuleNames.WALLET]: {
//         [dbActionNames.READ]: 'view wallet',
//         [dbActionNames.UPDATE]: 'reward wallet',
//     },
// } as const;
