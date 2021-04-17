export const checkMobile = () => /Mobi/.test(navigator.userAgent)&&(window.innerWidth<768 || window.screen.availWidth < 768)
