"use client";

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboard } from "../../services/api";

function Home() {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);
    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                await getDashboard();
                navigate("/dashboard", { replace: true });
            } catch (error) {
                navigate("/login", { replace: false });
                setCheck(false);
                console.error("User not authenticated", error);
            }
        };

        fetchDashboardData();
    }, [navigate]);

    if (check) {
        console.log("User is authenticated");
    }

    return (<><p>Loading...</p></>);
}

export default Home;