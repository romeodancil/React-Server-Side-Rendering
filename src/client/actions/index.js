export const FETCH_REPOS = 'fetch_repos';
export const fetchRepos = () => async (dispatch, getState, api) => {
  const resp = await api.get('/repos');
  dispatch({
    type: FETCH_REPOS,
    payload: resp
  })
}
