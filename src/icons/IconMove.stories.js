import IconMove from './IconMove.vue';

export default {
    title: 'Icons/IconMove',
    component: IconMove,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'number' },
        width: { control: 'number' },
        height: { control: 'number' },
        color: { control: 'color' },
    },
};

const Template = (args) => ({
    components: { IconMove },
    setup() {
        return { args };
    },
    template: `<IconMove v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    size: 40,
    color: '#A4A4A4',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
    color: '#551cbf',
};