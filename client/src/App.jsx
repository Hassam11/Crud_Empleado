function App() {
  return (
    <>
      <h2>Empleados</h2>
      <div>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  NOMBRE
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  APELLIDO
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  ESTATUS
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  PUESTO
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  SUELDO
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  EDAD
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">Steven Jobs</div>
                    <div className="text-gray-400">jobs@sailboatui.com</div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                    Active
                  </span>
                </td>
                <td className="px-6 py-4">Product Designer</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                      Design
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                      Product
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                      Develop
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <a >
                      
                    </a>
                    <a >
                     
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
