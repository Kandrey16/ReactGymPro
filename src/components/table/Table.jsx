import React, { useState } from "react";
import axios from 'axios';
import '../table/table.module.css';

function Table() {
    const [data, setData] = useState([]);
    

    return(
        <>
        <table className="m-4 table-auto border divide-y divide-gray-200">
            <thead>
                <tr classNameName="text-left font-semibold">
                    <th className="px-4 py-2 bg-gray-100 ">ID</th>
                    <th className="px-4 py-2 bg-gray-100 ">Название</th>
                </tr>
            </thead>
            <tbody>
                <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-2">Данные 1</td>
                    <td className="px-4 py-2">Данные 2</td>
                </tr>
                <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-2">Данные 4</td>
                    <td className="px-4 py-2">Данные 5</td>
                </tr>
            </tbody>
        </table>

        </>
    );
}

export default Table;