import React from 'react'
import  DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? new Date(props.expense.createdAt) : new Date(),
            error: props.expense ? props.expense.error : '',
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
        
    }
    onSubmit = (e) => {
        e.preventDefault()
        if ( !this.state.description || !this.state.amount ) {
            this.setState(() => ({
                error: 'Please provide description and amount'
            }))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note

            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type='text'
                        placeholder='Amount'  
                        value={this.state.amount}  
                        onChange={this.onAmountChange}
                    />
                    <DatePicker 
                        selected={this.state.createdAt}
                        onChange={this.onDateChange}
                    />
                    <textarea 
                        placeholder='Add a note for your expense (optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}    
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}