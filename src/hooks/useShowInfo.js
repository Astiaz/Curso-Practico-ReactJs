import { useState } from "react";

const useShowInfo = ()=>{
    const [toggleInfo, setToggleInfo] = useState(false);

	const handleInfo = () => {
		setToggleInfo(!toggleInfo);
	}

    return handleInfo;
}

export default useShowInfo;