// Pyramid Slide Down

function longestSlideDown (pyramid) {
    return pyramid.reduceRight((prev, cur) => {
      return cur.map((x, i) => {
        return Math.max(x + prev[i], x + prev[i+1])
      })
    })[0]
  }