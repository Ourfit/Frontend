import { css } from "styled-components";

interface TypographyProps {
  color?: string;
}

export const DefaultTypographyCss = css<TypographyProps>`
  display: inline-flex;
  align-items: center;
  font-family: inherit;
  font-style: normal;

  color: ${({ color }) => color};
`;

const H1Bd = css`
  ${DefaultTypographyCss};

  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.2px;
`;

const H1Sb = css`
  ${DefaultTypographyCss};

  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`;

const H2Bd = css`
  ${DefaultTypographyCss};

  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.18px;
`;

const H2Sb = css`
  ${DefaultTypographyCss}

  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.18px;
`;

const H3Bd = css`
  ${DefaultTypographyCss};

  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.16px;
`;

const H3Sb = css`
  ${DefaultTypographyCss};

  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.16px;
`;

const H3Md = css`
  ${DefaultTypographyCss};

  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.16px;
`;

const H4Sb = css`
  ${DefaultTypographyCss};

  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.14px;
`;

const H4Md = css`
  ${DefaultTypographyCss};

  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
`;

const H4MdSpacing = css`
  ${DefaultTypographyCss};

  font-size: 14px;
  font-weight: 500;
  line-height: 180%;
  letter-spacing: -0.14px;
`;

const H5Sb = css`
  ${DefaultTypographyCss};

  font-size: 13px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.13px;
`;

const H5Md = css`
  ${DefaultTypographyCss};

  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.13px;
`;

const H6Sb = css`
  ${DefaultTypographyCss};

  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.12px;
`;

const H6Md = css`
  ${DefaultTypographyCss};

  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.12px;
`;

const H7Sb = css`
  ${DefaultTypographyCss};

  font-size: 10px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.1px;
`;

const H7Md = css`
  ${DefaultTypographyCss};

  font-size: 10px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.1px;
`;

const TypographyCss = {
  H1Bd,
  H1Sb,
  H2Bd,
  H2Sb,
  H3Bd,
  H3Sb,
  H3Md,
  H4Sb,
  H4Md,
  H4MdSpacing,
  H5Sb,
  H5Md,
  H6Sb,
  H6Md,
  H7Sb,
  H7Md,
};

export default TypographyCss;
