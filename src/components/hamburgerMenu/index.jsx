import { motion } from 'framer-motion';
import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuToggle } from './menuToggle';
import NavMenu from './navMenu';

const HamburgerMenuContainer = styled.div`
    display: flex;
`;

const HamburgerIcon = styled.div`
    color: ${({ reverseColor }) => reverseColor ? "#000" : "#fff"};
    cursor: pointer;
    z-index: 99;
    transition: all 250ms ease-in-out;
`;

const MenuContainer = styled(motion.div)`
    min-width: 120px;
    width: 100%;
    max-width: 20%;
    height: 100%;
    background-color: #fff;
    box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
    z-index: 90;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(4em);
    user-select: none;
    padding: 1em 2.5em;

`;

const MenuVariants = {
    open: {
        transform: "translateX(3%)"
    },
    closed: {
        transform: "translateX(103%)",
    }
}

const MenuTransition = {
    type: "spring",
    duration: 1,
    stiffness: 33,
    delay: 0.1
}

function HamburgerMenu(props){
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <HamburgerMenuContainer>
            <HamburgerIcon>
                <MenuToggle toggle={toggleMenu} isOpen={isOpen}/>
            </HamburgerIcon>
            <MenuContainer initial={false} animate={isOpen ? "open" : "closed"} variants={MenuVariants} transition={MenuTransition} >
                <NavMenu isOpen={isOpen}/>
            </MenuContainer>
        </HamburgerMenuContainer>
    )
}

export default HamburgerMenu;