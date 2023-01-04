const getters = {
  language: state => state.user.language,
  language_name: state => state.user.language_name,
  token: state => state.user.token,
  location_token: state => state.user.location_token,
  user: state => state.user.user,
  location: state => state.user.location,
  role: state => state.user.role,
  refresh_count: state => state.user.refresh_count,
  refresh_count_messages: state => state.user.refresh_count_messages,
}

export default getters
