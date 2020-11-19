
const APIUtil = {
    followUser: id => { 
      return $.ajax({
        method: 'Post',
        url: `/users/${id}/follow`,
        dataType: 'JSON'
        // ,
        // success: (response) => {
        // this.followState = 'followed'
        // // this.render();
      })

    },

    unfollowUser: id => {
        return $.ajax({
        method: 'DELETE',
        url: `/users/${id}/follow`,
        dataType: 'JSON'
        // ,
        // success: (response) => {
        // this.followState = 'unfollowed'
        // // this.render();
      }
    )},

    searchUsers: val =>{
      return $.ajax({
        method: 'GET',
        url: '/users/search',
        dataType: 'JSON',
        data: {val:val}
      })
    }
}

module.exports = APIUtil;