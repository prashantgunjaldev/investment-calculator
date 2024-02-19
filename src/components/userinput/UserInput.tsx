
export function UserInput({userInput,handleChange } : any) {
    return <section id='user-input'>
        <div className="input-group">
            <p>
                <label>Initial Investemt</label>
                <input type="number" value={userInput.initialInvestment} onChange={(event)=>{handleChange('initialInvestment', event.target.value)}} required/>
            </p>
            <p>
                <label>Expected Returns (%)</label>
                <input type="number" value={userInput.expectedReturn} onChange={(event)=>{handleChange('expectedReturn', event.target.value)}} required/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value={userInput.annualInvestment} onChange={(event)=>{handleChange('annualInvestment', event.target.value)}} required/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" value={userInput.duration} onChange={(event)=>{handleChange('duration', event.target.value)}} required/>
            </p>
        </div>
    </section>
}