import { createSelector } from 'reselect'

const valueCountSelector = state => state.value
const goalsSelector = state => state.goals
const errorSelector = state => state.error

export const getValue = createSelector([valueCountSelector], (value)=>{
    return value;
})

export const getGoals = createSelector([goalsSelector], (goalsSelector)=>{
    // console.log(goalsSelector.map((i) => i.goalTitle))
    return goalsSelector.map((i) => i.goalTitle);
})

export const getError = createSelector([errorSelector], (error)=>{
    return error;
})