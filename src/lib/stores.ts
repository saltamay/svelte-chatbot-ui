import { writable } from 'svelte/store';

export const openSettings = writable(false);

export const theme = writable<'dark' | 'light'>('light')
