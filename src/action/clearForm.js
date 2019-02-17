function clearForm() {
  return {
    type: 'CLEAR_FORM',
    payload: {
      name: '', surname: '', lastname: '', age: '', address: '', job: '', post: ''
    }
  }
}

export default clearForm
