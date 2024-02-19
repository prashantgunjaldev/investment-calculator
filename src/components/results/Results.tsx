import { calculateInvestmentResults, formatter } from "../../util/investment"

export function Results({userInput}: any){

    const result = calculateInvestmentResults(userInput);
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Invested Value</th>
                <th>Interest (Yearly)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {
                result.map(res=>{
                    const totalInterest = res.valueEndOfYear - res.annualInvestment * res.year - initialInvestment;
                    const totalAmtInvested = res.valueEndOfYear - totalInterest;
                    return <tr key={res.year}>
                        <td>{res.year}</td>
                        <td>{formatter.format(res.valueEndOfYear)}</td>
                        <td>{formatter.format(res.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmtInvested)}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}