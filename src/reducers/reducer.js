export default function reducer(state, action) {
  console.log('попали')
  if (action.type === 'SAVE_FORM' || action.type === 'CLEAR_FORM') {
    return {
      name: action.payload.name,
      surname: action.payload.surname,
      lastname: action.payload.lastname,
      age: action.payload.age,
      address: action.payload.address,
      job: action.payload.job,
      post: action.payload.post
    };
  }
  return state;
}
