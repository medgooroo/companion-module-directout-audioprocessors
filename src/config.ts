import { Regex, type SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {
	host: string
	defaultcolor_bg: string
	defaultcolor_inactive: string
	defaultcolor_active: string
	defaultcolor_ok: string
	defaultcolor_warn: string
	defaultcolor_bad: string
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'textinput',
			id: 'host',
			label: 'Device IP',
			width: 4,
			regex: Regex.IP,
			default: '',
		},
		{
			id: 'coltext',
			type: 'static-text',
			label: 'Colors',
			value: 'The colors are used as default colors for presets, actions and feedbacks',
			width: 12,
		},
		{
			type: 'colorpicker',
			id: 'defaultcolor_bg',
			label: 'background',
			default: '#000000',
			width: 4,
		},
		{
			type: 'colorpicker',
			id: 'defaultcolor_inactive',
			label: 'inactive',
			default: '#828282',
			width: 4,
		},
		{
			type: 'colorpicker',
			id: 'defaultcolor_active',
			label: 'active',
			default: '#3a00db',
			width: 4,
		},
		{
			type: 'colorpicker',
			id: 'defaultcolor_ok',
			label: 'ok',
			default: '#00ea27',
			width: 4,
		},
		{
			type: 'colorpicker',
			id: 'defaultcolor_warn',
			label: 'warn',
			default: '#ff8000',
			width: 4,
		},
		{
			type: 'colorpicker',
			id: 'defaultcolor_bad',
			label: 'bad',
			default: '#cc0000',
			width: 4,
		},
	]
}
