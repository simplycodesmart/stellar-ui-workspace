// accordion.stories.ts

import { NgClass } from '@angular/common';
import { AccordionComponent } from '@stellar-ui/st-sdk/accordion';
import { ButtonComponent } from '@stellar-ui/st-sdk/button';
import { CardComponent } from '@stellar-ui/st-sdk/card';
import { Meta, moduleMetadata } from '@storybook/angular';



const meta: Meta<AccordionComponent> = {
    title: 'Componets/Accordion',
    component: AccordionComponent,
    decorators: [
        moduleMetadata({
            imports: [CardComponent, NgClass, ButtonComponent,AccordionComponent],
        }),
    ],
    tags: ['autodocs'],
};

export default meta;

const sampleItems = [
    { title: 'Item 1', content: 'Content for Item 1' },
    { title: 'Item 2', content: 'Content for Item 2' },
];



export const DefaultAccordion = {
    render: (args: { items: any[] }) => ({
        props: args,
        template: `<st-accordion [items]='items'></st-accordion>`,
    }),
    args: {
        items: sampleItems,
    },
};



