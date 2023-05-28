import {Title} from './Title';

export default {
    title: 'Components/Title',
    component: Title,
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Default Title',
};

export const Weather = Template.bind({});
Weather.args = {
    title: '天気予報',
};