/** @jsx jsx */
import { Avatar, Heading, Text } from '@theme-ui/components';
import { jsx } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';
import SocialLinks from './social-links';

/**
 * @typedef {object} AuthorBannerDescriptionProps
 * @property {React.ReactNode=} children
 */

/**
 * @param {AuthorBannerDescriptionProps=} props
 */
export const AuthorBannerDescription = ({ children, ...props }) => {
  const siteMeta = useSiteMetadata();
  const style = { fontSize: [2], px: '2px', mb: '8px' };
  if (children)
    return (
      <Text sx={style} {...props}>
        {children}
      </Text>
    );
  if (siteMeta.authorDescription)
    return (
      <Text sx={style} {...props}>
        {siteMeta.authorDescription}
      </Text>
    );
  return <div />;
};

export const AuthorBannerAvatar = ({ src = '', ...props }) => {
  const siteMeta = useSiteMetadata();
  const style = { marginX: '30px', my: '10px' };
  if (src) return <Avatar sx={style} src={src} {...props} />;
  if (siteMeta.avatar)
    return <Avatar sx={style} src={siteMeta.avatar} {...props} />;
  return <div />;
};

/**
 * @typedef {object} AuthorBannerHeadingProps
 * @property {React.ReactNode=} children
 * @property {string=} as
 */

/**
 * @param {AuthorBannerHeadingProps=} props
 */
export const AuthorBannerHeading = ({ as = 'h3', children, ...props }) => {
  const siteMeta = useSiteMetadata();
  const style = { fontSize: [5] };
  if (children)
    return (
      <Heading sx={style} as={as} {...props}>
        {children}
      </Heading>
    );
  if (siteMeta.author)
    return (
      <Heading sx={style} as={as} {...props}>
        {siteMeta.author}
      </Heading>
    );
  return <div />;
};

const AuthorBannerMain = ({ children, ...props }) => {
  return (
    <div
      sx={{
        bg: 'muted',
        borderRadius: 'authorBanner',
        px: '4px',
        py: '16px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: ['center', 'flex-start'],
        textAlign: ['center', 'left']
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const AuthorBanner = ({ children, ...props }) => {
  if (children) {
    return <AuthorBannerMain {...props}>{children}</AuthorBannerMain>;
  }
  //
  return (
    <AuthorBannerMain {...props}>
      <AuthorBannerAvatar />
      <div>
        <AuthorBannerHeading />
        <AuthorBannerDescription />
        <SocialLinks fontSize="30px" />
      </div>
    </AuthorBannerMain>
  );
};

export default AuthorBanner;
