function printerError(s) {
    let sSplit = s.split('')
    let err = sSplit.filter(x => /[^a-m]/.test(x)).length
    return `${err}/${sSplit.length}`
}