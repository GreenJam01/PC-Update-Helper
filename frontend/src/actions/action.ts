import * as toolkitRaw from '@reduxjs/toolkit';
const { createAction } = toolkitRaw;

export const setHardware = createAction('SET_HARDWARE', (hardware:string) => ({
    payload: hardware,}));