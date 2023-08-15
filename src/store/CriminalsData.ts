import React from 'react';
import { hookstate, useHookstate } from '@hookstate/core';

export interface CriminalsDataType {
    name: {
        first: string;
        last: string;
    };
    age: number,
    gender: "female" | "male",
    country: string,
    weapon: string,
    offense: string,
    dangerLevel: "High" | "Medium" | "Low"
};

export const criminalsState = hookstate<Array<CriminalsDataType>>([]);









