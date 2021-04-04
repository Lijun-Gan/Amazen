import * as ProfileAPIUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const receiveProfile = (user) => ({
    type: RECEIVE_PROFILE,
    user
});

export const fetchProfile = (userId) => dispatch => (
    ProfileAPIUtil.fetchUserReviews(userId)
        .then((user) => dispatch(receiveProfile(user)))
);