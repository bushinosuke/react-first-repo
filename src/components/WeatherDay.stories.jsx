// WeatherDayコンポーネントのStorybook

import React from 'react';
import { WeatherDay } from './WeatherDay';

export default {
    title: 'Components/WeatherDay',
    component: WeatherDay,
};

const Template = (args) => <WeatherDay {...args} />;
// Template関数を定義し、引数を受け取るようにする

export const Default = Template.bind({});
Default.args = {
    date: new Date(2023, 2, 29, 10, 5, 48),
    weather: '晴れ',
    tempMax: 33,
    tempMin: 5,
};