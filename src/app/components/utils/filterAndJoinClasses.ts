const filterAndJoinClasses = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
}

export default filterAndJoinClasses;