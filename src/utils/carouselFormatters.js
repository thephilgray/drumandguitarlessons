const carouselFormatters = {
  getAltText: ({ data, index }) => data.caption || `photo ${index + 1}`,

  getNextLabel: ({ currentIndex, views }) =>
    `Show ${currentIndex + 2} of ${views.length}`,
  getPrevLabel: ({ currentIndex, views }) =>
    `Show ${currentIndex} of ${views.length}`,

  getNextTitle: () => "Next (right arrow)",
  getPrevTitle: () => "Previous (left arrow)",

  getCloseLabel: () => "Close (esc)",
  getFullscreenLabel: ({ isFullscreen }) =>
    isFullscreen ? "Exit fullscreen (f)" : "Switch to fullscreen (f)",
}

export default carouselFormatters
