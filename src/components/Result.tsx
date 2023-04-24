type ResultProps = {
    finalNumber: number | null;
    number: number | null;
    operation: string;
    numberTwo: number | null;
}

export default function Result({
    finalNumber,
    number,
    operation,
    numberTwo
}: ResultProps) {
    return (
        <div className="result">
            {finalNumber ? <p>{finalNumber}</p> : <p>{number} {operation} {numberTwo}</p>}
        </div>
    );
}