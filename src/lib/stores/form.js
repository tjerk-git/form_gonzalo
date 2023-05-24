import { writable } from 'svelte/store';

export const name = writable('');

export const audioSelection = writable("");
export const musicSelection = writable("");
export const musicProductionSelection = writable("");

export const FieldSelection = writable("");
export const summary = writable("");
export const stakeholder = writable("");
export const targetAudience = writable("");
export let count = writable(1);

export const ec = writable("");

export const completed = writable(false);