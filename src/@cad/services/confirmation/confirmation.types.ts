export interface CadConfirmationConfig {
	title?: string;
	message?: string;
	icon?: {
		show?: boolean;
		name?: string;
		color?: 'primary' | 'accent' | 'warn' | 'basic' | 'info' | 'success' | 'warning' | 'error';
	};
	actions?: {
		confirm?: {
			show?: boolean;
			label?: string;
			color?: 'primary' | 'accent' | 'warn';
		};
		cancel?: {
			show?: boolean;
			label?: string;
		};
		back?: {
			show?: boolean;
			label?: string;
			color?: 'primary' | 'accent' | 'warn' | 'basic' | 'info' | 'success' | 'warning' | 'error';
		};
	};
	body?: {
		component?: string | any;
		text?: string;
		data?: any | any[];
		defaultValue?: any;
	}
	dismissible?: boolean;
}
