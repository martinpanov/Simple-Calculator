import { useState } from 'react';
import NumbersAndCalc from './components/NumbersAndCalc';
import Operations from './components/Operations';
import Result from './components/Result';

function App() {
    const [number, setNumberOne] = useState<number | null>(null);
    const [numberTwo, setNumberTwo] = useState<number | null>(null);
    const [operation, setOperation] = useState<string>('');
    const [finalNumber, setFinalNumber] = useState<number | null>(null);

    function clearState() {
        setNumberOne(null);
        setNumberTwo(null);
        setOperation('');
        setFinalNumber(null);
    }

    return (
        <div className='calculator'>
            <Result
                finalNumber={finalNumber}
                number={number}
                operation={operation}
                numberTwo={numberTwo}
            />
            <div className='numbAndOps'>
                <NumbersAndCalc
                    clearState={clearState}
                    operation={operation}
                    number={number}
                    setNumberOne={setNumberOne}
                    numberTwo={numberTwo}
                    setNumberTwo={setNumberTwo}
                    setFinalNumber={setFinalNumber}
                />
                <Operations setOperation={setOperation} />
            </div>
        </div>
    );
}

export default App;