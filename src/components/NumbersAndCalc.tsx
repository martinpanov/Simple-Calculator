type NumbersAndCalcProps = {
    clearState: Function;
    operation: string | null;
    number: number | null;
    setNumberOne: Function;
    numberTwo: number | null;
    setNumberTwo: Function;
    setFinalNumber: Function;
}

export default function Numbers({
    clearState,
    operation,
    number,
    setNumberOne,
    numberTwo,
    setNumberTwo,
    setFinalNumber
}: NumbersAndCalcProps) {
    const handleData = (value: string | number) => {
        if (value === 'AC') {
            return clearState();
        }

        if (!operation) {
            if (!number) {
                setNumberOne(value);
            } else {
                if (String(number).length >= 10) {
                    return;
                }
                setNumberOne(Number(`${number}${value}`));
            }
        } else {
            if (!numberTwo) {
                setNumberTwo(value);
            } else {
                if (String(numberTwo).length >= 10) {
                    return;
                }

                setNumberTwo(Number(`${numberTwo}${value}`));
            }
        }
    };

    const calc = () => {
        switch (operation) {
            case '+':
                setFinalNumber((number ?? 0) + (numberTwo ?? 0));
                break;
            case '-':
                setFinalNumber((number ?? 0) - (numberTwo ?? 0));
                break;
            case 'X':
                setFinalNumber((number ?? 0) * (numberTwo ?? 0));
                break;
            case '÷':
                setFinalNumber((number ?? 0) / (numberTwo ?? 0));
                break;
            default:
                break;
        }
    };

    return (
        <div className="numbers">
            <div className="col-one">
                <button onClick={() => handleData(7)}>7</button>
                <button onClick={() => handleData(4)}>4</button>
                <button onClick={() => handleData(1)}>1</button>
                <button className="ac" onClick={() => handleData('AC')} >AC</button>
            </div>

            <div className="col-two">
                <button onClick={() => handleData(8)}>8</button>
                <button onClick={() => handleData(5)}>5</button>
                <button onClick={() => handleData(2)}>2</button>
                <button onClick={() => handleData(0)}>0</button>
            </div>

            <div className="col-three">
                <button onClick={() => handleData(9)}>9</button>
                <button onClick={() => handleData(6)}>6</button>
                <button onClick={() => handleData(3)}>3</button>
                <button className="signs" onClick={() => calc()}>=</button>
            </div>
        </div>
    );
}