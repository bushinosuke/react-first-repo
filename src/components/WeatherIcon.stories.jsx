// WeatherIconコンポーネントのストーリーを記述するファイル

import { WeatherIcon } from './WeatherIcon';

export default {
    title: 'Components/WeatherIcon',
    component: WeatherIcon,
};

const Template = (args) => <WeatherIcon {...args} />;
// Template関数を定義し、引数を受け取るようにする

export const Default = Template.bind({});
Default.args = {
    weather: '晴れ',
    size: '2em'
};
