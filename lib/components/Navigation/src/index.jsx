import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { paramCase } from 'param-case';
import breakpoint from 'styled-components-breakpoint';

import { Grid } from '../../Grid';
import { Menu, ChevronDown } from '../../Icon';

import Toggle from './toggle';
import Label from './label';

const listAttrs = ({ direction, items = [], depth = 0 }) => {
  const navigationItems = items.map(item => {
    const id = paramCase(item.title.toLowerCase());
    return (
      <ListItem
        id={id}
        siblings={items.length}
        className={direction}
        key={`${depth}-${id}`}
        depth={depth}
        {...item}
      />
    );
  });

  return {
    as: 'ul',
    halign: 'left',
    valign: 'top',
    children: navigationItems,
  };
};

const List = styled.ul.attrs(listAttrs)`
  --border-color: transparent;

  list-style: none;
  margin: 0;
  padding: 0;

  flex-direction: ${({ direction }) => direction};
  border-top-style: none;
  border-top-width: ${({ theme }) => theme.spacing(0.5, 'border')};
  border-top-color: var(--border-color);

  & {
    --border-color: ${({ theme }) => theme.palette.color(['gray', 1])};

    ${breakpoint('xs', 'md')`
      border-top-style: dotted;
      flex-direction: column;
    `}
  }

  & & {
    ${breakpoint('md')`
      --background-color: ${({ theme }) => theme.palette.color('white')};
    `}

    ${breakpoint('xs', 'md')`
      background-color: rgba(0, 0, 0, 0.02);
    `}
  }
`;

const itemAttrs = ({ id, title, link, depth, items }) => {
  let direction = 'column';

  let navigationItems = null;

  if (items && items.length > 0) {
    if (depth === 0) {
      const children = Math.max(...items.map(item => item?.items?.length));
      if (children > 0) {
        direction = 'row';
      }
    }
    navigationItems = <List direction={direction} depth={depth + 1} items={items} />;
  }

  let icon = null;

  if (depth === 0) {
    icon = <ChevronDown color={['gray', 2]} />;
  }

  let weight = 'regular';

  if (depth === 1 && items && items.length > 0) {
    weight = 'semiBold';
  }

  const toggleId = `${id}-toggle`;

  let control = (
    <>
      <Label weight={weight} aria-label={title} htmlFor={toggleId}>
        {title} {icon}
      </Label>
      <Toggle id={toggleId} />
    </>
  );

  if (link && link.length > 0) {
    control = (
      <Label as="a" color="black" href={link}>
        {title}
      </Label>
    );
  }

  return {
    as: 'li',
    children: (
      <>
        {control}
        {navigationItems}
      </>
    ),
  };
};

const ListItem = styled(Grid.Shrink).attrs(itemAttrs)`
  overflow: visible;
  position: relative;
  background-color: var(--background-color, transparent);
  border-left-style: none;
  border-left-width: ${({ theme }) => theme.spacing(0.5, 'border')};
  border-left-color: var(--border-color, ${({ theme }) => theme.palette.color(['gray', 1])});

  &:hover ${List} {
    ${breakpoint('md')`
      display: flex !important;  
    `}
  }

  & > ${Toggle}:checked + ${List} {
    ${breakpoint('xs', 'md')`
      display: flex !important;
    `}
  }
`;

const navigationAttrs = ({ data }) => {
  return {
    children: (
      <>
        <Label
          id="navigation-toggle"
          aria-label="Toggle Navigation"
          as="label"
          htmlFor="navigation"
        >
          <Menu />
        </Label>
        <Toggle id="navigation" name="navigation" />
        <nav>
          <Grid as={List} depth={0} {...data} />
        </nav>
      </>
    ),
  };
};

export const Navigation = styled.div.attrs(navigationAttrs)`
  ${breakpoint('xs', 'md')`
    width: 100%;
  `}

  nav {
    position: relative;

    ${breakpoint('xs', 'md')`
      display: none;
    `}
  }
  
  & > ${Toggle}:checked + nav {
    ${breakpoint('xs', 'md')`
      display: block;
    `}
  }

  #navigation-toggle {
    ${breakpoint('md')`
      display: none;
    `}
  }

  nav > ${List} > ${ListItem} > ${List} {
    display: none;

    ${breakpoint('md')`
      box-shadow: 0 0px 16px 0 rgba(0, 0, 0, 0.14);
      position: absolute;
      top: 100%;
      left: ${({ theme }) => theme.spacing(2)};
      width: auto;
      z-index: 10;
    `}
  }

  nav > ${List} > ${ListItem} > ${List} > ${ListItem} {
    ${breakpoint('md')`
      border-left-style: dotted;

      &:first-child {
        border-left: none;
      }
    `}
  }

  nav > ${List} > ${ListItem} > ${List} > ${ListItem} > ${List} {
    ${breakpoint('md')`
      --border-color: ${({ theme }) => theme.palette.color(['gray', 1])};
      border-top-style: solid;
    `}
  }

  nav > ${List} > ${ListItem} > ${List} > ${ListItem}.row:nth-child(odd) {
    ${breakpoint('md')`
      --background-color: ${({ theme }) => theme.palette.color('white')};
    `}
  }

  nav > ${List} > ${ListItem} > ${List} > ${ListItem}.row:nth-child(even) {
    ${breakpoint('md')`
      --background-color: ${({ theme }) => theme.palette.color(['gray', 0])};
    `}
  }

  @media (hover: none) {
    ${Toggle}:checked + ${List} {
      display: flex;
    }
  }
`;

Navigation.List = List;

Navigation.ListItem = ListItem;

Navigation.propTypes = {
  data: PropTypes.object.isRequired,
};
