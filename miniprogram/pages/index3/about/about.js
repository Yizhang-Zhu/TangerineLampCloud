//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    addressIconSrc:'/icons/address-icon.jpg',
    clockIconSrc: '/icons/clock-icon.jpg',
    phoneIconSrc: '/icons/phone-icon.jpg',
    arrowIconSrc: '/icons/arrow-icon.jpg',
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '02365120105', 
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
