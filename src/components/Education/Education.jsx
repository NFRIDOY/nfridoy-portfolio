

export default function Education() {
    return (
        <div className="my-6">
            <div className="overflow-x-auto">
                <table className="table table-sm">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-xl">
                            <th></th>
                            <th>Degree</th>
                            <th>Institution</th>
                            <th>Session Year</th>
                            <th>Passing Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr >
                            <th>1</th>
                            <td>B.Sc. Engineering In Computer Science And Engineering (C.S.E.)</td>
                            <td>Bangladesh University of Business and Technology (BUBT)</td>
                            <td>2019-2023</td>
                            <td>2023</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Higher Secondary Certificate (HSC)</td>
                            <td>Vashantek Govt. College</td>
                            <td>2017-2018</td>
                            <td>2019</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Secondary Secondary Certificate (SSC)</td>
                            <td>Mirpur Bangla School and College</td>
                            <td>2015-2016</td>
                            <td>2017</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
