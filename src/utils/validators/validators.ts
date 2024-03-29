export const requiredField = (value: string) => {
    if (value) return undefined

    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) =>  {
    if (value && value.length > maxLength) return `value should be less ${maxLength} symbol`
    return undefined
}
