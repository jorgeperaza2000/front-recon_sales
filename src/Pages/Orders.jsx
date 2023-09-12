import { useState, useEffect } from "react";

export const Orders = () => {
    const [teams, setTeams] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(false)
        fetch('https://api-tdd.vercel.app/api/api/teams')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTeams(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
            .finally(() => {
                setIsLoaded(true)
            });
    }, []);

    return (
        <>
            <div className="col-lg-12 d-flex align-items-stretch">
                <div className="card w-100">
                    <div className="card-header d-flex align-middle justify-content-between">
                        <h5 className="card-title fw-semibold my-auto">
                            Orders
                        </h5>
                        <div>
                            <button className="btn btn-primary"><i className="ti ti-plus fs-4"></i> New</button>
                        </div>
                    </div>
                    <div className="card-body p-4">
                        <div className="table-responsive">
                            <table className="table table-striped text-nowrap mb-0 align-middle">
                                <thead className="text-dark fs-4">
                                    <tr>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0">Id</h6>
                                        </th>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0">
                                                Name
                                            </h6>
                                        </th>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0">
                                                Abbreviation
                                            </h6>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!isLoaded &&
                                        <tr>
                                            <td colSpan="3" className="border-bottom-0 text-center">
                                                <h6 className="fw-semibold mb-0">Loading...</h6>
                                            </td>
                                        </tr>
                                    }
                                    {isLoaded && teams.map(team => (
                                        <tr key={team.id}>
                                            <td className="border-bottom-0">
                                                <h6 className="fw-semibold mb-0">{team.id}</h6>
                                            </td>
                                            <td className="border-bottom-0">
                                                <h6 className="fw-semibold mb-1">
                                                {team.name}
                                                </h6>
                                            </td>
                                            <td className="border-bottom-0">
                                                <p className="mb-0 fw-normal">
                                                    {team.slug_name}
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
