import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// vh and vw may cause unwanted scrollbar space (fix later)
const PageHeader = styled.header`
    width: 100%;
    display: flex;
    margin-top: 0;
    position: relative;
`;

//flex grow might cause issues
const Logo = styled.div`
    font-family: myFirstFont;
    src: url(AristaRegular.ttf);
    position: relative;
    flex-grow: 5; 
    top: 10px;
    left: 20px;
    font-size: 4rem;
    
`;

// not perfect, eyeballed margins
const LinkWrap = styled.div`
    flex-grow: 1;
    top: 30px;
    left: 20px;
    font-size: 1.5rem;
    textDecoration: none;
    position: relative;
`;

const LinkStyle = {
    'text-decoration': 'none',
}

export const HeaderForTeachers = () => {

    return (
        <PageHeader>
            <Logo>StitchEd</Logo> 
                <LinkWrap>
                    <Link style={LinkStyle}>Assignments</Link>
                    |
                    <Link style={LinkStyle}>Analytics</Link>
                </LinkWrap>
        </PageHeader>
    )
};

export const HeaderForNonTeachers = () => {
    return (
        <PageHeader>
            <Logo>StitchEd</Logo> 
        </PageHeader>
    )
};



