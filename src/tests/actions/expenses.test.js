import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('134', {note: 'I like bananas'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        updates: {
            note: 'I like bananas'
        },
        id: '134'
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData= {
        description: 'Rent',
        amount: 1334343,
        createdAt: 100000,
        note: 'this was the rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})