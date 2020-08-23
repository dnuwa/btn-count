import axios from 'axios'

const fetchGoals = async () => {
    
    const response = await axios.get(`https://5f42564ed4b4790016fd78da.mockapi.io/api/V1/goals`);
    const responseData = response.data
    // console.log(data)
    if (response.status >= 400) {
        console.log(response.status)
        throw new Error(response.errors);
    }
    return responseData;
};

export { fetchGoals };