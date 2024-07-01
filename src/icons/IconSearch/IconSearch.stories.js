import IconSearch from './IconSearch.vue';

export default {
    title: 'Icons/IconSearch',
    component: IconSearch,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'number' },
        width: { control: 'number' },
        height: { control: 'number' },
        color: { control: 'color' },
    },
};

const Template = (args) => ({
    components: { IconSearch },
    setup() {
        return { args };
    },
    template: `<IconSearch v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    size: 40,
    color: '#DA4A4A',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
    color: '#551cbf',
};