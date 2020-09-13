import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {HeaderForNonTeachers, HeaderForTeachers} from './StyledComponents';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
`;

const ContentArea = styled.div`
    display: flex;
    justify-content:center;
    height: 90%;
    width: 100%;
    margin-top: 20px;
`;

const AssignmentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 80%;
    background-color: white;
    box-shadow: 0 4px 8px grey;
    margin-right: 20px;
    align-items: center;
    border-radius: 20px 20px 20px 20px;
    padding: 5px;
`;

// We need to make the item height dynamic eventually
const AssignmentItem = styled.div`
    background-color: white;
    background-color: #ff6565;
    opacity: .45;
    border-radius: 10px;
    height: 40px;
    border: 1px black solid;
    width: 90%;
    margin: 2px;
    flex-shrink: 2;
`;

const CalendarWrapper = styled.div`
    width: 70%;
    padding: 5px;
    background-color: white;
    height: 80%;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0 4px 8px grey;
    display: flex;
    flex-direction: column;
`;

// needs accessibility additions for smaller screen
const AssignmentsHeader = styled.h1`
    font-size: 2rem;
    color: #ff6565;
`;

const CalendarHeader = styled.h1`
    font-size: 1.8rem;
    color: #ff6565;
    margin-left: 25px;
`;

const NewAssignmentForm = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
    height: 5%;
    width: 50%;
    background-color: white;
    margin-bottom: 15px;
`;





const TeacherAssignments = () => {
    return (
    <PageContainer>
        <HeaderForTeachers/>
        <ContentArea>
            <AssignmentsWrapper>
                <AssignmentsHeader>Assignments</AssignmentsHeader>
               <AssignmentItem/>
               <AssignmentItem/>
            </AssignmentsWrapper>
            <CalendarWrapper>
                <CalendarHeader>Fall 2020</CalendarHeader>
            </CalendarWrapper>
        </ContentArea>
        <NewAssignmentForm/>
      </PageContainer>

    
    )
};

export default TeacherAssignments;