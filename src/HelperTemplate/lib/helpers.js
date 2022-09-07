class Helpers {
  isEqualArray(a, b) {
    return (
      a.length === b.length && a.every((item, index) => {
        return item === b[index]
      })
    )
  }

  fillArray (array, val) {
    let newArray = []
    for (let i = 0, max = array.length; i < max; i++) {
      newArray[i] = val
    }
    return newArray
  }

  throttle(fn, threshold = 100) {
    let last, timer
    return () => {
      const now = +new Date()
      const timePassed = !!last && (now < last + threshold)
      if (timePassed) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          last = now
          fn()
        }, threshold)
      } else {
        last = now
        fn()
      }
    }
  }
}
export default new Helpers()
