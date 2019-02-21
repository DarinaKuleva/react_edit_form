function saveForm (name, surname, lastname, age, address, job, post) {
  return {
    type: 'SAVE_FORM',
    payload: {
      name, surname, lastname, age, address, job, post
    }
  }
}

export default saveForm
