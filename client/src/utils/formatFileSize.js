// function converts a Number of bytes into a string of the
// number of kilobytes

// Future task: make it work well for larger file sizes such as mb or gb

function formatFileSize(size) {
  let kb = Math.round((size / 1024) * 100) / 100
  return `${kb} kb`
}

export default formatFileSize
