

export const onLaptop = (styles) => `
  @media (max-width: 1280px) {
    ${styles}
  }
`;

export const onTablet = (styles) => `
  @media (max-width: 1024px) {
    ${styles}
  }
`;

export const onMobile = (styles) => `
  @media (max-width: 744px) {
    ${styles}
  }
`;

export const onSmallMobile = (styles) => `
  @media (max-width: 420px) {
    ${styles}
  }
`;