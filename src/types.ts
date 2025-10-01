import { CompanionVariableDefinition, InputValue } from '@companion-module/base'

//type DOrange = [number, number]
//type DOarrayValues = string | number | DOrange
//type DOarray = DOarrayValues[]

//type DOobj = string | DOarray
export type DOvalues = string | number | boolean
export type DOstate = { [prop: string]: DOvalues | DOvalues[] | DOstate | DOstate[] }
export type DOpayload = DOvalues | DOstate
export type IndexValuePair = [number, any]

export type Patch = { op: 'add' | 'replace' | 'remove' | 'test'; path: string; value: DOvalues }

export type Capability = { [key: string]: any }
export type Capabilities = { [key: string]: Partial<Record<DeviceType, Array<Capability>>> }
export type DeviceTable = { [key: string]: Partial<Record<DeviceType, any>> }

export type OptionValueMeta = {
	key: string
	value: string | number | boolean | undefined
	translation: string | undefined
	origvalue: InputValue
}
export type ParamValueMeta = {
	key: string
	value: string | number | boolean | undefined
	translation: string | undefined
	origvalue: InputValue
	path: string
}
export type OptionsValues = { options: OptionValueMeta[]; parameters: ParamValueMeta[] }

export type RecordDescription = {
	actionId: string
	options: { name: string; index: number; translation?: string }[]
	parameters: { name: string; translation?: string }[]
}

export type Subscription = {
	check: RegExp
	init?: string[]
	feedback?: string[]
	fun?: (path: string) => void | boolean
	listeners?: Set<string>
}

export type DeviceType = 'PRODIGY.MC' | 'PRODIGY.MP' | 'PRODIGY.MX' | 'MAVEN.A' | 'GENERIC'

export type VariablesTable = Map<string, { publishers: Set<string> } & CompanionVariableDefinition>

export type Translation = { incoming: Map<unknown, any>; outgoing: Map<unknown, any> }
export type Translations = { [key: string]: Translation }
