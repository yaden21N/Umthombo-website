import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '1.2rem',
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

interface Link {
  label: string;
  href: string;
}

interface CustomizedBreadcrumbsProps {
  links: Link[];
}

const CustomizedBreadcrumbs: React.FC<CustomizedBreadcrumbsProps> = ({ links }) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {links.map((link, index) => (
          <StyledBreadcrumb
            key={index}
            component="a"
            href={link.href}
            label={link.label}
            icon={index === 0 ? <HomeIcon fontSize="small" /> : undefined}
          />
        ))}
      </Breadcrumbs>
    </div>
  );
};

const Hero: React.FC = () => {
  const links = [
    { label: 'Home Page', href: '/contact' },
    { label: 'About', href: '/about' },
    { label: 'Get Involved', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Donate', href: '/contact' },
  ];

  return (
    <div className="hero-section">
      <div className="Logo">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="Title">Umthombo Foundation</h1>
      </div>
      <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px' }}>
        <CustomizedBreadcrumbs links={links} />
      </nav>
    </div>
  );
};

export default Hero;

