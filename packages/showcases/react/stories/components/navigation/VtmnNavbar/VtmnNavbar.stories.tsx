import React from 'react';
import { VtmnNavbar } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import { parameters } from '@vtmn/showcase-core/csf/components/navigation/navbar.csf';

export default {
  title: 'Components / Navigation / VtmnNavbar',
  component: VtmnNavbar,
  argTypes: {},
  parameters,
} as Meta;

const DecathlonLogo = () => (
  <a aria-label="decathlon logo" href="#">
    <svg viewBox="0 0 200 50" aria-label="Decathlon logo" width="160px">
      <title>{'Decathlon'}</title>
      <g fill="none" fillRule="evenodd">
        <path fill="#0082C3" d="M0 50h200V0H0z" />
        <path
          d="m74.527 16.678.06.077-3.36 5.386-.224-.266-.157-.174-.307-.322-.25-.248c-1.253-1.205-3.653-3.053-6.554-2.993-3.806.07-6.712 3.188-6.712 6.817 0 3.189 1.944 6.742 7.116 6.821 2.974.037 5.005-2.064 6.045-3.579l.2-.304c.12-.186.4-.647.791-1.298l8.5-14.308h6.878v25.39h-6.33v-3.81l-5.042-.02-.674.004-.183.008-.033.006.005.003-.136.15-.162.167-.229.222-.192.178-.221.194-.251.21c-1.77 1.444-5.472 3.707-10.86 3.185-5.41-.517-12.033-4.789-12.033-13.34 0-4.06 3.061-12.822 13.584-13.057 6.48-.143 10.221 4.26 10.731 4.9Zm77.28-4.922c3.463 0 6.74 1.328 9.264 3.77 1.618 1.57 2.763 3.412 3.405 5.408l-.001-8.648h5.941l9.878 14.11v-14.11h6.587v25.408h-5.787L171.06 23.538v14.156h-6.584v-8.71a12.811 12.811 0 0 1-3.147 5.267c-2.518 2.586-5.947 3.988-9.558 3.988-3.785 0-7.03-1.332-9.571-3.933v3.388h-14.21V12.29h6.539V32.08l5.908.001c-1.334-2.117-2.008-4.566-2.008-7.349 0-3.522 1.379-6.76 3.934-9.238 2.553-2.482 5.759-3.738 9.445-3.738Zm-130.581.53c4.268 0 7.252.534 10.051 3.036 2.01 1.791 3.282 4.222 3.738 7.2l-.002-10.235H49.64v5.589l-8.046.009v4.15l6.968-.005v5.464l-6.968.007v4.604h8.046v5.572H35.013l.002-10.13c-.45 2.78-1.697 5.129-3.708 7.002-2.868 2.64-5.4 3.145-9.18 3.145H12.038V12.287h9.188Zm83.486-.01v6.074H99.61v19.344h-6.575V18.35h-5.108v-6.074h16.786Zm7.929.008v9.648h6.767v-9.648h6.575v25.41h-6.575v-9.722h-6.767v9.722h-6.572v-25.41h6.572ZM21.226 17.75h-2.61v14.364h2.64c5.032 0 7.41-2.21 7.41-7.21 0-4.575-2.61-7.154-7.44-7.154Zm130.618.328c-3.86 0-6.892 2.987-6.892 6.723 0 4.028 3.243 7.109 6.818 7.109 3.723 0 6.752-2.945 6.752-7.109 0-3.736-3.03-6.723-6.678-6.723Zm-71.49 4.728-3.393 5.75h3.392v-5.75Z"
          fill="#FEFEFE"
        />
      </g>
    </svg>
  </a>
);

const Template: Story = (args) => (
  <div
    style={{
      width: 800,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <VtmnNavbar logo={<DecathlonLogo />} {...args}></VtmnNavbar>
  </div>
);

export const Overview = Template.bind({});
