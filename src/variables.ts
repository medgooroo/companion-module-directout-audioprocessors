import { VariablesTable } from './types.js'
import type { DirectoutInstance } from './main.js'

// Use the variableId also for the key of the Map. The dynamic variables will do the same and so they don't clash.
export function getStaticVariableDefinitions(_self: DirectoutInstance): VariablesTable {
	return new Map([
		[
			'device_samplerate',
			{
				variableId: 'device_samplerate',
				name: 'Current Sample Rate of the device',
				publishers: new Set(['static']),
			},
		],
		[
			'snapshots',
			{
				variableId: 'snapshots',
				name: 'Array with snapshot metadata. Index is the Snapshot ID',
				publishers: new Set(['static']),
			},
		],
	])
}
