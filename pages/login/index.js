
Page({
  // handleGetUserInfo(e){
  //   // console.log(e);

  //   const {userInfo}=e.detail;
  //   wx.setStorageSync("userinfo", userInfo);
  //   wx.navigateBack({
  //     delta: 1
  //   });
      
  // }

  getUserProfile(e){
    wx.getUserProfile({
      desc: '获取个人信息',
      success:(res)=>{
        const {userInfo}=e.detail
        wx.setStorageSync('userinfo', res.userInfo);
        wx.navigateBack({
          delta:1
        })
      }
    })
  }
})