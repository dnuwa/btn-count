import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { add, subtract, loadData } from "../actions";
import { getValue, getError, getGoals } from "./selectors";

const ContentContainer = styled.div.attrs(() => ({
  className: `d-flex flex-column`,
}))`
  margin: auto;
  width: 50%;
`;

const ButtonsWrapper = styled.div.attrs(() => ({
  className: `d-flex`,
}))``;

const DefaultButton = styled.div.attrs(() => ({
  className: `col-4`,
}))`
  background: grey;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 8px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const ValueLabel = styled.div.attrs(() => ({
  className: `col-4 m-auto`,
}))`
  text-align: center;
`;

const PageHeader = styled.div`
  margin: 20px;
`;

const ApiData = styled.div.attrs(() => ({
  className: `d-flex flex-column`,
}))`
  /* border: solid; */
  margin: 40px 0;
`;

const GoalsWrapper = styled.div.attrs(() => ({
  className: `d-flex flex-column`,
}))`
  /* border: solid; */
`;

const GoalData = styled.div.attrs(() => ({
  className: `d-flex flex-column`,
}))`
  border: solid;
`;

const ErrorWrapper = styled.div.attrs(() => ({
  className: `d-flex`,
}))`
  padding: 20px;
  color: white;
  background: red;
  border-radius: 2px;
`;

class Landing extends Component {
  render() {
    const { value, goals, error } = this.props;
    // console.log(goals)
    return (
      <ContentContainer>
        <PageHeader>redux-saga playground</PageHeader>
        <ButtonsWrapper>
          <DefaultButton onClick={this.props.addOne}>increment</DefaultButton>
          <ValueLabel>{value}</ValueLabel>
          <DefaultButton onClick={this.props.subtractOne}>
            decrement
          </DefaultButton>
        </ButtonsWrapper>
        <ApiData>
          <DefaultButton onClick={this.props.loadData}>GET DATA</DefaultButton>
          {error && <ErrorWrapper>{JSON.stringify(error)}</ErrorWrapper>}
          <GoalsWrapper>
            {/* {goals.map((goal) => (
              <GoalData key={goal.id}>{goal.goalTitle}</GoalData>
            ))} */}

            <GoalData>{goals}</GoalData>
          </GoalsWrapper>
        </ApiData>
      </ContentContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  value: getValue(state),
  goals: getGoals(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  addOne: () => dispatch(add()),
  subtractOne: () => dispatch(subtract()),
  loadData: () => dispatch(loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
