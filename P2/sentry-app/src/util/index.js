const util = {
  months: ['January','February','March','April','May','June','July','August','September','October','November','December'],

  parseDateString(str) {
    const arr = str.split('-')
    const year = arr[0]
    const month = this.months[arr[1] -1]
    const day = arr[2].split('.')[0]
    return `${month} ${day}, ${year}`
  },

  convertExpToDec(str) {
    const arr = str.toLowerCase().split('e')
    const base = Number(arr[0])
    const neg = arr[1][0] === '-'
    const expStr = neg ? arr[1].slice(1) : arr[1]
    const exp = neg ? -Number(expStr) : Number(expStr)
    return base * Math.pow(10, exp)
  },
}

export default util