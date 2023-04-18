export interface IUser {
	name: string;
	username: string;
	email: string;
	photo?: string;
	role: 'USER' | 'ADMIN';
	password?: string;
	resetPasswordToken?: string;
	resetPasswordTokenExpire?: Date;
	phone: string;
	website: string;
}
