export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtDate = new Date(expense.createdAt)
        const startDateMatch = startDate ? startDate.getTime() <= createdAtDate.getTime() : true
        const endDateMatch =  endDate ? endDate.getTime() >= createdAtDate.getTime() : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}