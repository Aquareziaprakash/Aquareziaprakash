import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
    const name1 = "Prakash";
    const name2 = "Ramesh";
    const Numbers = [1, 2, 3, 4, 5, 6, 7,];

    return (
        <>
            <div className="App">
                <h1>This is an output.</h1>
                <h2>Hello, {name1}! Your name is {name2}.</h2>
                <Header />
                <h3 style={{ color: "red" }}> the numbers are {Numbers}</h3>
                {Numbers.map((number) => (
                    <h1 style={{ color: "red" }}> {number}</h1>
                ))}
            </div>
        </>

    );
}

export default App;
