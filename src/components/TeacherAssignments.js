import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {HeaderForNonTeachers, HeaderForTeachers} from './StyledComponents';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const ContentArea = styled.div`
    display: flex;
    height: 90%;
`;

const AssignmentsWrapper = styled.div`
    flex-grow:1;
    background-color: blue;
`;

const CalendarWrapper = styled.div`
    flex-grow: 5;
    background-color: pink;
`;






const TeacherAssignments = () => {
    return (
    <PageContainer>
        <HeaderForTeachers/>
        <ContentArea>
            <AssignmentsWrapper/>
            <AssignmentsWrapper/>
            <CalendarWrapper>
            </CalendarWrapper>
        </ContentArea>
      </PageContainer>

    
    )
};

export default TeacherAssignments;