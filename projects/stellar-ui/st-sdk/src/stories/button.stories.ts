import { Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '@stellar-ui/st-sdk/button';

const meta: Meta<ButtonComponent> = {
    title: 'Atoms/Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [ButtonComponent],
        }),
    ],
    tags: ['autodocs'],
};

export default meta;

export const PrimaryButton = {
    render: (args: { content: string, buttonClass: string }) => ({
        props: args,
        template: `<st-button [buttonClass]="buttonClass">${args.content}</st-button>`,
    }),
    args: {
        content: 'Primary Button',
        buttonClass: 'primary',
    },
};

export const SecondaryButton = {
    render: (args: { content: string, buttonClass: string }) => ({
        props: args,
        template: `<st-button [buttonClass]="buttonClass">${args.content}</st-button>`,
    }),
    args: {
        content: 'Secondary Button',
        buttonClass: 'secondary',
    },
};


export const CustomButton = {
    render: (args: { content: string, buttonClass: string }) => ({
        props: args,
        template: `<st-button >${args.content}</st-button>`,
    }),
    args: {
        content: 'Custom Button',
        color: '#008080',
    },
};


export const EmojiButton = {
    render: (args: { content: string, buttonClass: string }) => ({
        props: args,
        template: `<st-button [buttonClass]="buttonClass">${args.content}</st-button>`,
    }),
    args: {
        content: '😀 😎 👍 💯',
        buttonClass: 'emoji',
    },
};
