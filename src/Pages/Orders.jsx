import { useState, useEffect } from "react";

export const Orders = () => {
	const [teams, setTeams] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		setIsLoaded(false);
		fetch("https://api-tdd.vercel.app/api/api/teams")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setTeams(data);
			})
			.catch((err) => {
				console.log(err.message);
			})
			.finally(() => {
				setIsLoaded(true);
			});
	}, []);

	return (
		<>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <div className="d-flex justify-content-between">
                                <h6>Teams</h6>
                                <button className="btn btn-outline-primary btn-sm px-4 mb-0">Add</button>
                            </div>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive px-4">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                Name
                                            </th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                Abbreviation
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {!isLoaded && (
                                            <tr>
                                                <td colSpan="3">
                                                    <h6 className="mb-0 text-sm text-center">
                                                        Loading...
                                                    </h6>
                                                </td>
                                            </tr>
                                        )}
                                        {isLoaded && teams.map((team) => (
                                            <tr key={team.id}>
                                                <td>
                                                    <h6 className="mb-0 text-sm">
                                                        {team.name}
                                                    </h6>
                                                </td>
                                                <td>
                                                    <h6 className="mb-0 text-sm">
                                                        {team.slug_name}
                                                    </h6>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
	);
};
