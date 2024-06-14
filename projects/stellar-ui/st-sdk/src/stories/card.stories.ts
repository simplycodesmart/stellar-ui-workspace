import { Meta, moduleMetadata } from '@storybook/angular';
import { CardComponent } from '@stellar-ui/st-sdk/card';

const meta: Meta<CardComponent> = {
    title: 'Atoms/Card',
    component: CardComponent,
    decorators: [
        moduleMetadata({
            imports: [CardComponent],
        }),
    ],
    tags: ['autodocs'],
};

export default meta;

export const DefaultCard = {
    render: (args: { content: string }) => ({
        props: args,
        template: `<st-card>${args.content}</st-card>`,
    }),
    args: {
        content: 'This is a default card',
    },
};

export const CardWithHeader = {
    render: (args: { content: string }) => ({
        props: args,
        template: `
          <st-card>
            <h1>Header</h1>
            ${args.content}
          </st-card>
        `,
    }),
    args: {
        content: 'This card has a header',
    },
};

export const CardWithFooter = {
    render: (args: { content: string }) => ({
        props: args,
        template: `
          <st-card>
            ${args.content}
            <footer>Footer</footer>
          </st-card>
        `,
    }),
    args: {
        content: 'This card has a footer',
    },
};
