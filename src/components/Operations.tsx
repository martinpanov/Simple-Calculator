export default function Operations({
    setOperation
}: { setOperation: Function }) {
    const handleData = (value: string) => {
        setOperation(value);
    };

    return (
        <div className="operations">
            <button className="signs" onClick={() => handleData('÷')}>÷</button>
            <button className="signs" onClick={() => handleData('X')}>x</button>
            <button className="signs" onClick={() => handleData('-')}>-</button>
            <button className="signs" onClick={() => handleData('+')}>+</button>
        </div>
    );
}