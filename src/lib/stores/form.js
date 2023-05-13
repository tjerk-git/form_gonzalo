import { writable } from 'svelte/store';

export const name = writable('');

export const audioSelection = writable("");
export const musicSelection = writable("");
export const musicProductionSelection = writable("");

export const FieldSelection = writable("");
export const completed = writable(false);