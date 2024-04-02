
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

interface TableProps {
    // TODO: переделать под типы комплектующих
    data: string[][];
}

const Table : React.FC<TableProps> = ({data}) => {
    return (
        <table>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cellContent, cellIndex) => (
                            <td key={cellIndex}>{cellContent}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


const DatasetViewPage : React.FC = () => {
    // TODO: Переписать под типы комплектующих
    const tableData1 : string[][] = [
        [],
        [],
    ];

    // TODO: Переписать под типы комплектующих
    const tableData2 : string[][] = [
        [],
        [],
    ];

    return (
        <div style={{display: 'flex'}}>
            <div style={{marginRight: '20px'}}>
                <h2>До</h2>
                <Table data={ tableData1 } />
            </div>
            <div>
                <h2>После</h2>
                <Table data={ tableData2 } />
            </div>
        </div>
    );
};

export default DatasetViewPage;