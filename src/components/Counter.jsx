import { useState } from "react";

const Counter = () => {
    // 

    const [Cont, setCont] = useState(0);

    const contador = () => {
        setCont(Cont + 2);
    };

    const reset = () => {
        setCont(0);
    };


    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center max-w-sm mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Contador</h1>
            <p className="text-lg font-medium mb-6">Número: {Cont}</p>
            <div className="space-x-4">
                <button
                    onClick={contador}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Aumentar
                </button>
                <button
                    onClick={reset}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                >
                    Reiniciar
                </button>
            </div>
        </div>
    );
}
    ;
export default Counter;