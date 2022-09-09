import { Box, Icon, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function MenuTab({
  children, active, menu, onMouseEnter,
}) {
  const [isActive, setActive] = useState(false);
  return (
    <DropMenuWrapper active={isActive} menu={menu} onMouseLeave={() => setActive(false)}>
      <Box>
        <Box paddingX="5" paddingY="8">
          <Text
            color={active ? 'primary' : ''}
            fontWeight="600"
            onMouseEnter={() => {
              setActive(true);
              onMouseEnter();
            }}
            _hover={{ cursor: 'pointer' }}
          >
            {children}
            <Icon as={MdKeyboardArrowDown} />
          </Text>
        </Box>
        <TabIndicator active={active} />
      </Box>
    </DropMenuWrapper>
  );
}

function TabIndicator({ active }) {
  return (
    <Box
      backgroundColor="primary"
      height="0.5"
      transition={active ? 'transform 250ms' : ''}
      transform={active ? 'scaleX(1)' : 'scaleX(0)'}
      width="100%"
    />
  );
}

function DropMenuWrapper({
  active, children, menu, onMouseLeave, zIndex, leftOffset, topOffset, variant
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <Box position="relative" onMouseLeave={onMouseLeave}>
      {children}
      {
        active
          ? (
            <Box
              bgColor="background"
              left={leftOffset ?? '0px'}
              position="absolute"
              top={topOffset ?? '100%'}
              zIndex={zIndex ?? '1'}
            >
              <Box bgColor={variant !== 'secondary' ? 'primary' : 'secondary'} h="1" />
              {menu.map((menuItem, index) => (
                menuItem.menu
                  ? (
                    <DropMenuWrapper
                      active={index === activeIndex}
                      leftOffset="130px"
                      menu={menuItem.menu}
                      onMouseLeave={() => setActiveIndex(-1)}
                      topOffset="0"
                      variant="secondary"
                      zIndex="2"
                    >
                      <DropMenuItem
                        href={menuItem.link}
                        onHover={(hovered) => hovered ? setActiveIndex(index) : null}
                      >
                        {menuItem.name}
                        <Icon as={MdKeyboardArrowDown} />
                      </DropMenuItem>
                    </DropMenuWrapper>
                  )
                  : (<DropMenuItem href={menuItem.link}>{menuItem.name}</DropMenuItem>)
              ))}
            </Box>
          )
          : null
      }
    </Box>
  );
}

function DropMenuItem({ children, href, onHover }) {
  return (
    <Box minWidth="300px" px="5" py="4">
      <NextLink href={href} passHref>
        <Link
          onMouseEnter={onHover ? () => onHover(true) : null}
          onMouseLeave={onHover ? () => onHover(false) : null}
        >
          {children}
        </Link>
      </NextLink>
    </Box>
  );
}
