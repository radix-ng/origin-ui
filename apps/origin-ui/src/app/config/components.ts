export interface ComponentCategory {
    slug: string;
    name: string;
    components: { name: string }[];
}

export const categories: ComponentCategory[] = [
    {
        slug: 'accordion',
        name: 'Accordion',
        components: [
            { name: 'accordion-01' },
            { name: 'accordion-02' }
        ]
    },
    {
        slug: 'alert',
        name: 'Alert',
        components: [
            { name: 'alert-01' },
            { name: 'alert-02' },
            { name: 'alert-03' },
            { name: 'alert-04' },
            { name: 'alert-05' },
            { name: 'alert-06' }]
    },
    {
        slug: 'avatar',
        name: 'Avatar',
        components: [
            { name: 'avatar-01' },
            { name: 'avatar-02' },
            { name: 'avatar-03' },
            { name: 'avatar-04' },
            { name: 'avatar-05' },
            { name: 'avatar-06' },
            { name: 'avatar-07' },
            { name: 'avatar-08' },
            { name: 'avatar-09' }]
    },
    {
        slug: 'badge',
        name: 'Badge',
        components: [
            { name: 'badge-01' },
            { name: 'badge-02' },
            { name: 'badge-03' },
            { name: 'badge-04' },
            { name: 'badge-05' },
            { name: 'badge-06' },
            { name: 'badge-07' },
            { name: 'badge-11' }]
    },
    {
        slug: 'breadcrumb',
        name: 'Breadcrumb',
        components: [
            { name: 'breadcrumb-01' },
            { name: 'breadcrumb-02' },
            { name: 'breadcrumb-03' },
            { name: 'breadcrumb-04' },
            { name: 'breadcrumb-05' },
            { name: 'breadcrumb-06' },
            { name: 'breadcrumb-07' }]
    },
    {
        slug: 'button',
        name: 'Button',
        components: [
            { name: 'button-01' },
            { name: 'button-02' },
            { name: 'button-03' },
            { name: 'button-04' },
            { name: 'button-05' },
            { name: 'button-24' },
            { name: 'button-83' },
            { name: 'button-91' },
            { name: 'button-90' },
            { name: 'button-107' },
            { name: 'button-109' },
            { name: 'button-110' },
            { name: 'button-114' },
            { name: 'button-121' }]
    },
    {
        slug: 'calendar',
        name: 'Calendar',
        components: [
            { name: 'calendar-01' }]
    },
    {
        slug: 'checkbox',
        name: 'Checkbox',
        components: [
            { name: 'checkbox-01' },
            { name: 'checkbox-02' },
            { name: 'checkbox-03' },
            { name: 'checkbox-04' },
            { name: 'checkbox-07' }]
    },
    {
        slug: 'cropper',
        name: 'Cropper',
        components: [
            { name: 'cropper-00' },
            { name: 'cropper-01' },
            { name: 'cropper-02' },
            { name: 'cropper-10' }]
    },
    {
        slug: 'dialog',
        name: 'Dialog',
        components: [
            { name: 'dialog-04' },
            { name: 'dialog-05' }]
    },
    {
        slug: 'dropdown',
        name: 'Dropdown',
        components: [
            { name: 'dropdown-01' },
            { name: 'dropdown-372' }]
    },
    {
        slug: 'input',
        name: 'Input',
        components: [
            { name: 'input-01' },
            { name: 'input-02' },
            { name: 'input-03' },
            // "input-04",
            // "input-05",
            { name: 'input-08' },
            { name: 'input-14' },
            { name: 'input-17' },
            { name: 'input-20' },
            { name: 'input-23' },
            { name: 'input-24' },
            { name: 'input-35' },
            { name: 'input-51' }
        ]
    },
    {
        slug: 'file-upload',
        name: 'File Upload',
        components: [
            { name: 'file-upload-01' },
            { name: 'file-upload-02' },
            { name: 'file-upload-03' },
            { name: 'file-upload-04' },
            { name: 'file-upload-05' },
            { name: 'file-upload-13' }]
    },
    {
        slug: 'notification',
        name: 'Notification',
        components: [
            { name: 'notification-11' },
            { name: 'notification-12' },
            { name: 'notification-21' },
            { name: 'notification-22' }]
    },
    {
        slug: 'pagination',
        name: 'Pagination',
        components: [
            { name: 'pagination-01' },
            { name: 'pagination-02' },
            { name: 'pagination-03' },
            { name: 'pagination-04' },
            { name: 'pagination-05' },
            { name: 'pagination-06' }]
    },
    {
        slug: 'popover',
        name: 'Popover',
        components: [
            { name: 'popover-01' },
            { name: 'popover-05' },
            { name: 'popover-07' },
            { name: 'popover-09' }]
    },
    {
        slug: 'radio',
        name: 'Radio',
        components: [
            { name: 'radio-01' },
            { name: 'radio-02' },
            { name: 'radio-03' },
            { name: 'radio-04' },
            { name: 'radio-05' },
            { name: 'radio-08' },
            { name: 'radio-13' },
            { name: 'radio-15' },
            { name: 'radio-16' }]
    },
    {
        slug: 'select',
        name: 'Select',
        components: [
            { name: 'select-01' },
            { name: 'select-02' },
            { name: 'select-04' },
            { name: 'select-05' },
            { name: 'select-06' },
            { name: 'select-11' },
            { name: 'select-13' },
            { name: 'select-14' }]
    },
    {
        slug: 'slider',
        name: 'Slider',
        components: [
            { name: 'slider-01' },
            { name: 'slider-03' },
            { name: 'slider-04' },
            { name: 'slider-05' },
            { name: 'slider-06' },
            { name: 'slider-07' },
            { name: 'slider-10' },
            { name: 'slider-11' },
            { name: 'slider-20' },
            { name: 'slider-22' },
            { name: 'slider-265' }]
    },
    {
        slug: 'stepper',
        name: 'Stepper',
        components: [
            { name: 'stepper-01' },
            { name: 'stepper-05' },
            { name: 'stepper-07' },
            { name: 'stepper-14' },
            { name: 'stepper-15' },
            { name: 'stepper-16' },
            { name: 'stepper-17' }]
    },
    {
        slug: 'switch',
        name: 'Switch',
        components: [
            { name: 'switch-01' },
            { name: 'switch-02' },
            { name: 'switch-03' },
            { name: 'switch-04' },
            { name: 'switch-05' },
            { name: 'switch-06' },
            { name: 'switch-07' },
            { name: 'switch-08' },
            { name: 'switch-09' },
            { name: 'switch-10' },
            { name: 'switch-11' },
            { name: 'switch-12' },
            { name: 'switch-13' },
            { name: 'switch-14' }]
    },
    {
        slug: 'table',
        name: 'Table',
        components: [
            { name: 'table-01' },
            { name: 'table-03' },
            { name: 'table-09' },
            { name: 'table-11' },
            { name: 'table-12' },
            { name: 'table-14' },
            { name: 'table-17' },
            { name: 'table-18' }]
    },
    {
        slug: 'tabs',
        name: 'Tabs',
        components: [
            { name: 'tab-01' },
            { name: 'tab-04' },
            { name: 'tab-06' },
            { name: 'tab-07' },
            { name: 'tab-08' },
            { name: 'tab-17' },
            { name: 'tab-18' },
            { name: 'tab-19' }]
    },
    {
        slug: 'textarea',
        name: 'Textarea',
        components: [
            { name: 'textarea-59' },
            { name: 'textarea-67' },
            { name: 'textarea-68' },
            { name: 'textarea-77' }]
    },
    {
        slug: 'tooltip',
        name: 'Tooltip',
        components: [
            { name: 'tooltip-01' },
            { name: 'tooltip-02' },
            { name: 'tooltip-03' },
            { name: 'tooltip-07' }]
    }
];

export function getCategory(slug: string): ComponentCategory | undefined {
    return categories.find((category) => category.slug === slug);
}
