// import { createParamDecorator } from '@nestjs/common';
// import { TCacheUserData } from 'constant';

// export const CurrentUser = createParamDecorator(<T extends keyof TCacheUserData>(data: T | T[], context) => {
//     const request = context.switchToHttp().getRequest();
//     if (!data) return request.user ?? null;

//     const user = request.user;
//     if (Array.isArray(data)) return data.reduce((acc, cur) => ({ ...acc, [cur]: user[cur] }), {});
//     else return user[data] ?? null;
// });
