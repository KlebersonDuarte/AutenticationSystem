"use client";

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboard } from "../../service/api";

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
                console.error("Usuario não autenticado", error);
            }
        };

        fetchDashboardData();
    }, [navigate]);

    if (check) {
        console.log("Usuario autenticado");
    }

    return (<><p>Carregando...</p></>);
}

export default Home;