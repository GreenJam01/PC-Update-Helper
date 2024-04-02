import { useState } from "react";
import { Assembly } from "../../types/assembly_dto";

// Получение информации о комплектующих из базы
// Тестовые данные
const componentsData = [
    {id: 1, name: "cpu", chracteristic: "good"},
    {id: 2, name: "gtu", chracteristic: "super good"},
    // ...
];

// Получение данных о сборках
// Тестовые данные
const buildsData = [
    {id: 3, name: "aboba", components: [1, 2]},
    // ...
];

export function DatasetViewPage() {
    const [assemblies, setAssemblies] = useState<Assembly[]>([]);
    

    return (
        <div>
            <h2>База данных сборок компьютеров</h2>
            <div>
                <h2>До</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Компоненты</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td></td>
                        <td></td>
                    </tbody>
                </table>
                <h2>После</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Компоненты</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td></td>
                        <td></td>
                    </tbody>
                </table>
            </div>
        </div>
    );
};